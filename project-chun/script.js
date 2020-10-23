const APP = document.getElementById('app');
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
            this.addText("第$days天，当前血量：$hp，钱：$money，荣誉：$honor，地点：$site，地点可通向：$ports");
        }
        if (portOptions) {
            const site = this.currentSite;
            if (site) {
                this.setOptions(site.ports.map(p => ({ text: "走向" + this.getSiteByDefault(p.target).name, target: p.target})));
            }
        }
    },

    /**
     * 向界面添加文本
     * @param {String | Message} textOrMessage 要添加的文本
     * @param {String} type 类型
     */
    addText(textOrMessage, type = 'normal') {
        let text;
        if (typeof textOrMessage === 'string') {
            text = textOrMessage;
        } else {
            text = text.text;
            type = text.type || type;
        }
        const elem = document.importNode(TEXT_TMPL.content, true);
        const p = elem.querySelector(".text");
        
        p.innerHTML = this.fillText(text);
        p.classList.add(type);

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
     * @param {String} siteID 地点的ID
     */
    goToSite(siteID) {
        this.state.site = siteID;
        this.state.days++;
        this.addText("你来到了$site，这里可以通向：$ports", 'move');
        this.mutateMoney(-5);
        const site = this.currentSite;
        if (site) {
            this.setOptions(site.ports.map(p => ({ 
                text: "走向" + this.getSiteByDefault(p.target).name, 
                target: p.target
            })));
            const event = choose(site.events);
            if (event) {
                this.triggerEvent(event.id);
            }
        }
        this.save();
    },

    /**
     * 触发游戏事件
     * @param {String} eventId 事件ID
     */
    triggerEvent(eventId) {
        const event = this.mapping.events[eventId];
        if (event && event.action) {
            event.action(this);
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
     * 改变HP
     * @param {Number} delta 变化量
     */
    mutateHp(delta) {
        this.state.hp = constraint(this.state.hp + delta, 0, 100);
        if (delta) {
            this.addText("血量" + (delta > 0 ? '+' + delta : delta), delta > 0 ? 'good' : 'bad');
        }
        this.save();
        if (this.state.hp <= 0) {
            this.gameOver("失血过多");
        }
    },

    /**
     * 改变钱
     * @param {Number} delta 变化量
     */
    mutateMoney(delta) {
        this.state.money = constraint(this.state.money + delta, 0);
        if (delta) {
            this.addText("钱" + (delta > 0 ? '+' + delta : delta), delta > 0 ? 'good' : 'bad');
        }
        this.save();
        if (this.state.money <= 0) {
            this.gameOver("饥饿");
        }
    },

    /**
     * 改变荣誉
     * @param {Number} delta 变化量
     */
    mutateHonor(delta) {
        this.state.money = constraint(this.state.money + delta, -100, 100);
        if (delta) {
            this.addText("荣誉" + (delta > 0 ? '+' + delta : delta), delta > 0 ? 'good' : 'bad');
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
        this.addText(entry.story);
        this.showState(true, false);
        this.goToSite(entry.site);
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