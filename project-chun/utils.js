/**
 * 生成一个大等与最小值，小于最大值的数
 * @param {Number} min 最小值（包括）
 * @param {Number} max 最大值（不包括）
 * @returns {Number} 随机数
 */
function randInt(min = 0, max = 100) {
    return Math.floor(min + Math.random() * (max - min));
}

/**
 * 根据给定几率给出结果
 * @param {Number} p 几率，最小为0，最大为100%
 * @returns {Boolean} 结果
 */
function chance(p) {
    return Math.random() < p;
}

/**
 * 根据列表元素的权重，选择列表中的一个元素
 * @param {Array<T extends Object>} list 列表
 * @param {String} weightKey 权重键
 * @returns {T} 带权重的随机结果
 */
function choose(list, weightKey = "weight") {
    if (list.length === 1) {
        return list[0];
    }
    const totalWeight = list.reduce((s, v) => s + v[weightKey], 0);
    const r = randInt(0, totalWeight);
    for (let index = 0, sum = 0; index < list.length; index++) {
        const elem = list[index];
        sum += elem[weightKey];
        if (sum > r) {
            return elem;
        }
    }
    return null;
}

/**
 * 将数值限制在一个范围内
 * @param {Number} value 数值
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number} 限制的数值
 */
function constraint(value, min, max = Infinity) {
    return Math.max(min, Math.min(value, max));
}