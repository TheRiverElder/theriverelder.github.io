
/**
 * 模板管理器，存放所有模板
 * PatternManager.namespace
 * |-PatternSet.patterns
 * |-|-Pattern.tokens
 * |-|-|-Token
 */
class PatternManager {

    static TOKEN_TYPES = {
        RAW: 'row',
        KEY: 'key',
        NAME: 'name',
    };

    constructor() {
        this.namespace = {};
    }

    /**
     * 在读取到数据后对其进行编译，而后得到模板管理器
     * @param data 读取到的数据
     */
    compile(data) {
        let curKey = null;
        let lines = data.split(REG_LINE_SPLITTER);
        for (let line of lines) {
            let result = REG_DECLARE.exec(line);
            if (result) {
                curKey = result[1];
                this.namespace[curKey] = {weight: 0, patterns: []};
            } else if (!REG_EMPTY_LINE.test(line)) {
                let last = 0;
                let tokens = [];
                let result = null;
                while ((result = REG_MUT_TOKEN.exec(line)) !== null) {
                    if (last < result.index) {
                        let raw = line.substring(last, result.index);
                        tokens.push({weight: 1, type: PatternManager.TOKEN_TYPES.RAW, content: raw});
                    }
                    last = result.index + result[0].length;
                    let key = result[2];
                    let name = result[4];
                    if (key) {
                        tokens.push({weight: 1, type: PatternManager.TOKEN_TYPES.KEY, content: key});
                    } else if (name) {
                        tokens.push({weight: 1, type: PatternManager.TOKEN_TYPES.NAME, content: name});
                    }
                }
                if (last < line.length) {
                    let raw = line.substring(last);
                    tokens.push({weight: 1, type: PatternManager.TOKEN_TYPES.RAW, content: raw});
                }
                let pattern = {weight: 1, tokens: tokens};
                let patternSet = this.namespace[curKey];
                if (patternSet) {
                    patternSet.patterns.push(pattern);
                }
            }
        }
    }

    /**
     * 清空所有模板
     */
    clear() {
        this.namespace = {};
    }

    /**
     * 为生成进行准备，主要是计算权重，以及生成骰子
     * 注：若有循环引用可能导致无限循环！
     */
    prepare() {
        let visited = new Set();
        let calc = (key) => {
            let patternSet = this.namespace[key];
            if (visited.has(key)) {
                return patternSet.weight;
            }
            let patterns = patternSet.patterns;
            patternSet.weight = 0;
            for (let pattern of patterns) {
                pattern.weight = 1;
                for (let token of pattern.tokens) {
                    switch (token.type) {
                        case PatternManager.TOKEN_TYPES.RAW: token.weight = 1; break;
                        case PatternManager.TOKEN_TYPES.KEY: token.weight = calc(token.content); break;
                        case PatternManager.TOKEN_TYPES.NAME: token.weight = 1; break;
                        default: token.weight = 1;
                    }
                    pattern.weight *= token.weight;
                }
                patternSet.weight += pattern.weight;
            }
            patternSet.dice = Dice.of(patterns, 'weight');
            visited.add(key);
            return patternSet.weight;
        };
        for (let key of Object.keys(this.namespace)) {
            calc(key);
        }
    }

    /**
     * 根据token生成phrase
     * 从namespace中选取token对应的pattern集
     * 再从pattern集中随机选取一个pattern
     * 由此pattern与args生成phrase
     * @param key 指定token
     * @param args 给定的参数，包含各种的参数
     * @returns {string}
     */
    generate(key, args) {
        let patternSet = this.namespace[key];
        let pattern = patternSet.patterns[patternSet.dice.roll()];
        return pattern.tokens.map(({type, content}) => {
            switch (type) {
                case PatternManager.TOKEN_TYPES.RAW: return content;
                case PatternManager.TOKEN_TYPES.KEY: return this.generate(content, args);
                case PatternManager.TOKEN_TYPES.NAME: return args[content];
            }
        }).join('');
    }

}

// region 正则表达式
// 分割行的正则
const REG_LINE_SPLITTER = /\\n|\r?\n/g;
// 名字与参数的正则
const REG_MUT_TOKEN = /(\[\s*([0-9a-zA-Z_]+)\s*])|(\$(\s*[0-9a-zA-Z_]+\s*)\$)/g;
// 定义token的正则
const REG_DECLARE = /^#\s*([0-9a-zA-Z_]+)\s*/g;
// 空字符串或注释的正则
const REG_EMPTY_LINE = /^\s*(;.*)?$/;
// endregion
