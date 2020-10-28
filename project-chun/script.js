const APP = document.getElementById('app');
const STATE_BAR = document.getElementById('state-bar');
const TEXT_PANEL = document.getElementById('text-panel');
const OPTION_PANEL = document.getElementById('option-panel');

const TEXT_TMPL = document.getElementById('text-template');
const OPTION_TMPL = document.getElementById('option-template');

const GAME = {

    /**
     * 显示当前状态
     * @param {Boolean} state 是否显示状态
     * @param {Boolean} portOptions 是否显示路径选项
     */
    showState(state = true, portOptions = true) {
        if (state) {
            STATE_BAR.innerText = this.fillText("第$days天，当前血量：$hp，钱：$money，荣誉：$honor，\n地点：$site，地点可通向：$ports");
        }
        if (portOptions) {
            const site = this.currentSite;
            if (site) {
                this.setOptions(site.ports.map(p => ({ 
                    text: p.name || "走向" + this.getSiteByDefault(p.target).name, 
                    action: p.action || (game => game.goToSite(p.target)),
                })));
            }
        }
    },

    /**
     * 向界面添加文本
     * @param {String | Message} textOrMessage 要添加的文本
     * @param {String} type 类型
     */
    addText(textOrMessage, ...types) {
        let text;
        if (typeof textOrMessage === 'string') {
            text = textOrMessage;
        } else {
            text = text.text;
            types.push(text.type || 'normal');
        }
        const elem = document.importNode(TEXT_TMPL.content, true);
        const p = elem.querySelector(".text");
        
        p.innerHTML = this.fillText(text);
        types.forEach(t => p.classList.add(t));

        TEXT_PANEL.appendChild(elem);
        TEXT_PANEL.scrollTo({ top: TEXT_PANEL.scrollHeight, behavior: 'smooth' });
    },

    /**
     * 设置选项，列表可为空
     * @param {Array<Option> | undefined} options 选项列表
     */
    setOptions(options) {
        [...OPTION_PANEL.childNodes].forEach(e => e.remove());
        if (!options || !options.length) {
            return;
        }
        
        const content = OPTION_TMPL.content;

        for (const { text, target, action } of options) {
            const elem = document.importNode(content, true);
            const btn = elem.querySelector(".option");

            btn.innerHTML = this.fillText(text);
            const listener = target ? (() => this.goToSite(target)) : action;
            if (listener) {
                btn.onclick = listener.bind(this, this);
            }

            OPTION_PANEL.appendChild(elem);
        }
    },

    /**
     * 走向某个地点
     * @param {String} siteId 地点的ID
     * @param {Boolean} instantly 是否立即传送
     */
    goToSite(siteId, instantly) {
        this.state.site = siteId;
        this.addText("你来到了$site", 'move');
        if (!instantly) {
            this.state.days++;
            this.mutate('money', -randInt(10, 20), '食宿消耗');
        }
        this.showState();
        const site = this.currentSite;
        if (site) {
            const event = choose(site.events);
            if (event) {
                this.triggerEvent(event.id);
            }
        }
        this.save();
    },

    /**
     * 触发游戏事件
     * @param {String} event 事件ID或者事件本身
     */
    triggerEvent(event) {
        if (typeof event === 'string') {
            event = this.mapping.events[event];
        }
        if (event && event.action) {
            event.action(this);
        } else {
            this.addText(event.text, 'event');
            this.setOptions(event.options || []);
        }
    },

    //#region state mutation

    data: {},

    state: {
        site: null,
        days: 0,
        hp: 100,
        money: 100,
        honor: 0,
    },

    mapping: {
        sites: Object.fromEntries(DATA.sites.map(s => [s.id, s])),
        events: Object.fromEntries(DATA.sites.map(s => [s.id, s])),
    },

    /**
     * 改变数值
     * @param {String} key 变化的状态键
     * @param {Number} delta 变化量
     * @param {String} reason 变化原因
     */
    mutate(key, delta, reason) {
        let finalValue = (this.state[key] || 0) + delta;
        switch (key) {
            case 'hp': finalValue = constraint(this.state[key] + delta, 0, 100); break;
            case 'money': finalValue = constraint(this.state[key] + delta, 0, Infinity); break;
            case 'honor': finalValue = constraint(this.state[key] + delta, -100, 100); break;
        }
        const keyStr = {
            hp: '血量',
            money: '金钱',
            honor: '荣誉',
        }[key] || '???';
        this.state[key] = finalValue;
        if (delta) {
            this.addText((reason ? reason + ", " : "") + keyStr + (delta > 0 ? '+' + delta : delta), 'value-mutation', delta > 0 ? 'good' : 'bad');
        }
        this.showState(true, false);
        switch (key) {
            case 'hp': if (finalValue <= 0) this.gameOver('失血过多'); break;
            case 'money': if (finalValue <= 0) this.gameOver('贫穷'); break;
            case 'honor': if (finalValue <= -100) this.gameOver('臭名昭著'); break;
        }
        this.save();
    },

    //#endregion

    //#region utils
    get currentSite() {
        return this.mapping.sites[this.state.site] || null;
    },

    getSiteByDefault(id) {
        return this.mapping.sites[id] || {
            name: "#ERROR#",
            ports: [],
        };
    },
    
    /**
     * 获取所有的替换键值对
     */
    getReplacements() {
        const site = this.mapping.sites[this.state.site];
        const ports = site ? site.ports.map(p => this.mapping.sites[p.target]).filter(p => !!p) : [];
        return {
            days: this.state.days,
            site: site ? site.name : "无主之地",
            ports: ports.length ? ports.map(p => p.name).join('、') : "无处可去",
            hp: this.state.hp,
            money: this.state.money,
            honor: this.state.honor,
        };
    },

    /**
     * 将字符串中所有以$打头的变量全部替换为实际上的内容
     * @param {String} raw 原始字符串
     */
    fillText(raw) {
        const replacements = this.getReplacements();
        const reg = /\$(\w+)/g;
        let result = null;
        let baked = '';
        let index = 0;
        while (result = reg.exec(raw)) {
            baked += raw.slice(index, result.index) + replacements[result[1]];
            index = reg.lastIndex;
        }
        baked += raw.slice(index, raw.length);
        return baked;
    },
    //#endregion

    /**
     * 初始化操作
     */
    initialize(data) {
        this.data = data;
        this.mapping.sites = Object.fromEntries(data.sites.map(s => [s.id, s]));
        this.mapping.events = Object.fromEntries(data.events.map(e => [e.id, e]));
        if (this.load()) {
            this.showState();
        } else {
            this.reset(data.entry);
        }
    },

    /**
     * 游戏结束
     * @param {String} reason 原因
     */
    gameOver(reason) {
        this.showState();
        this.addText(`最终李狗蛋还是没能逃过仇家的追杀，死因是${reason}，活了${this.state.days}天`);
        this.reset(this.data.entry);
    },

    /**
     * 重置状态
     * @param {Entry} entry 入口
     */
    reset(entry) {
        Object.assign(this.state, {
            site: null,
            days: 0,
            hp: 100,
            money: 100,
            honor: 0,
        });
        this.addText('--------');
        this.addText(entry.story);
        this.showState(true, false);
        this.goToSite(entry.site, true);
    },

    /**
     * 载入存档
     */
    load() {
        try {
            const state = JSON.parse(localStorage.getItem('project-chun-gane-save'));
            if (state) {
                Object.assign(this.state, state);
            }
            return !!state;
        } catch (e) {
            console.error(e);
            return false;
        }
    },

    /**
     * 保存存档
     */
    save() {
        localStorage.setItem('project-chun-gane-save', JSON.stringify(this.state));
    }
};

GAME.initialize(DATA);

window.onclose = () => GAME.save();