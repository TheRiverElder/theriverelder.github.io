/**
 * 由指定权重驱动的骰子
 */
class Dice {

    /**
     * 根据一个对象生成骰子，与键为object的key
     * @param object 对象
     * @param weightName 权重名
     * @returns {Dice} 生成的骰子
     */
    static with(object, weightName = 'weight') {
        let dice = new Dice();
        Object.keys(object).forEach(key => dice.put(key, object[key][weightName]));
        return dice;
    }

    /**
     * 根据一个数组生成骰子，与from不同的是，其键为索引
     * @param array 数组
     * @param weightName 权重名
     * @returns {Dice} 生成的骰子
     */
    static of(array, weightName = 'weight') {
        let dice = new Dice();
        array.forEach((elem, index) => dice.put(index, elem[weightName]));
        return dice;
    }

    /**
     * 根据一个数组生成骰子
     * @param array 数组
     * @param keyName 键名
     * @param weightName 权重名
     * @returns {Dice} 生成的骰子
     */
    static from(array, keyName, weightName) {
        let dice = new Dice();
        array.forEach(elem => dice.put(elem[keyName], elem[weightName]));
        return dice;
    }

    constructor() {
        this.map = new Map();
        this.totalWeight = 0;
    }

    /**
     * 设置权重
     * 注意：指定的键必须是字符串，权重必须是正数，尽量使用整型数
     * @param key 指定键
     * @param weight 权重
     */
    put(key, weight) {
        if (this.map.has(key)) {
            this.totalWeight -= this.map.get(key);
        }
        this.map.set(key, weight);
        this.totalWeight += weight;
    }

    /**
     * 移除键及其对应权重
     * @param key 要移除的键
     */
    remove(key) {
        if (this.map.has(key)){
            this.totalWeight -= this.map.get(key);
        }
    }


    /**
     * 进行一次投掷，投掷结果为注册时使用的键
     * 若使用的是是浮点数，那么有可能由于浮点运算误差，造成结果为空
     * @returns {string|null} 投掷结果
     */
    roll() {
        let result = Math.random() * this.totalWeight;
        let acc = 0;
        for (let key of this.map.keys()) {
            let weight = this.map.get(key);
            acc += weight;
            if (acc > result) {
                return key;
            }
        }
        return null;
    }

    /**
     * 清空内部所有注册的键与权重
     */
    clear() {
        this.map.clear();
        this.totalWeight = 0;
    }
}

/**
 * 根据给定区间产生随机整型数
 * @param max 最大值（不包含）
 * @param min 最小值（包含）
 * @returns {number} 随机数结果
 */
function randInt(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 从给定数组中选定一个元素并返回
 * @param array 给定数组
 * @returns {*} 随机的元素
 */
function pickOne(array) {
    return array[randInt(array.length)];
}

/**
 * 从给定数组中选择给定数量的随机元素
 * @param array 给定数组
 * @param amount 给定数量，必须不大于给定数组长度
 * @returns {any[]} 随机的元素集合
 */
function pickSome(array, amount) {
    amount = amount ? amount : randInt(array.length);
    let copy = Array.from(array);
    let result = Array(amount);
    if (amount === array.length) {
        return result;
    }
    for (let i = 0; i < amount; i++) {
        let index = randInt(copy.length);
        let elem = copy[index];
        let tmp = copy.pop();
        if (index !== copy.length -1) {
            copy.splice(index, 1, tmp);
        }
        result[i] = elem;
    }
    return result;
}