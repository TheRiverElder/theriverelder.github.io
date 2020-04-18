

function colorOf(number) {
    let str = number.toString(16);
    return '#' + Array(6 - str.length).fill('0').join('') + str;
}

function randInt(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function hash(arr) {
    return arr.reduce((p, e) => p ^ e, 0) % 0xFFFFFF;
}

function randOff(negLimit = -1, posLimit = 1) {
    return randInt(posLimit + 1, negLimit);
}

function matchArr(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((e, i) => e === arr2[i]);
}

function saveGet(arr, index, defaultValue) {
    return (index >= 0 && index < arr.length) ? arr[index] : defaultValue;
}

function check(possibility) {
    return Math.random() < possibility;
}

function fillStr(ori, len, filler = '0') {
    return Array(len - ori.length).fill(filler).join('') + ori;
}