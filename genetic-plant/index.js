
/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("#canvas");
/** @type {HTMLInputElement} */
const input = document.querySelector("#input");

const g = canvas.getContext("2d");

// const SIZE = [500, 500];

function adjustCanvas() {
    if (window.SIZE) {
        canvas.width = SIZE[0];
        canvas.height = SIZE[1];
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

class Plant {

    /**
     * 
     * @returns {Plant}
     */
    static random() {
        return new Plant(Plant.createGene());
    }

    /**
     * 
     * @returns {number[]}
     */
    static createGene() {
        const petalSeriesSize = randomInt(12, 12 + 30);
        // const petalSeriesSize = 10;
        return [
            ...createArray(7, Math.random),
            petalSeriesSize,
            ...createArray(petalSeriesSize, Math.random),
            ...createArray(3 + 1 + 3, Math.random),
        ];
    }

    /**
     * 
     * @param {number[]} gene 
     */
    constructor(gene) {
        this.gene = gene;

        let i = 0;
        const factorStemHeight = gene[i++];
        const factorStemWidth = gene[i++];
        const factorStemInclination = gene[i++];
        const factorPetalAmount = gene[i++];
        const factorPetalSize = gene[i++];
        const factorPetalGap = gene[i++];
        const factorPetalWidth = gene[i++];
        const factorPetalSeriesSize = gene[i++]
        const factorPetalSeries = this.gene.slice(i, i += factorPetalSeriesSize);
        const factorPetalColor = this.gene.slice(i, i += 3);
        const factorFlowerCoreSize = this.gene[i++];
        const factorFlowerCoreColor = this.gene.slice(i, i += 3);

        this.stemHeight = 400 + 200 * factorStemHeight;
        this.stemWidth = 5 + 10 * factorStemWidth;
        this.stemInclination = (Math.PI / 4) * (factorStemInclination - 0.5);
        this.petelCenter = [
            this.stemHeight * Math.cos(0.5 * Math.PI + this.stemInclination),
            this.stemHeight * Math.sin(0.5 * Math.PI + this.stemInclination),
        ];
        this.petalAmount = Math.floor(50 + 42 * factorPetalAmount);
        this.petalSize = 200 + 100 * factorPetalSize;
        this.petalGap = this.petalSize * (0.2 + 0.8 * factorPetalGap);
        this.petalWidth = 2 * (Math.PI) * (0.3 + 0.7 * factorPetalWidth);
        this.petalColor = colorString(factorPetalColor.map(it => 0.7 + 0.3 * it));
        this.flowerCoreSize = this.petalSize * (0.1 + 0.1 * factorFlowerCoreSize);
        this.flowerCoreColor = colorString(factorFlowerCoreColor.map((it, i) => 0.5 + 0.3 * factorPetalColor[i] + 0.2 * it));

        this.petalTexture = createPetalTexture(this.petalWidth, factorPetalSeries, {
            radius: this.petalSize,
            lineWidth: 3,
            strokeStyle: "#404040",
            fillStyle: this.petalColor,
        });
    }


    /**
     * 
     * @param {number} frame 
     */
    draw(frame) {

        adjustCanvas();
        g.clearRect(0, 0, canvas.width, canvas.height);

        g.save();
        g.scale(1, -1);
        g.translate(canvas.width / 2, -canvas.height + 20);

        g.fillStyle = "#aa6644";
        g.fillRect(-canvas.width / 2, -20, canvas.width, 20);

        this.drawPlant(frame);

        g.restore();
    }

    /**
     * 
     * @param {number} frame 
     */
    drawPlant(frame) {

        const stemHeight = this.stemHeight;
        const petelCenter = this.petelCenter;
        const petalAmount = this.petalAmount;
        const petalSize = this.petalSize;
        const petalGap = this.petalGap;
        const flowerCoreSize = this.flowerCoreSize;

        const actualPetalCenter = petelCenter.map(it => frame * it);

        // Draw stem
        g.lineWidth = frame * this.stemWidth;
        g.strokeStyle = "green";
        g.beginPath();
        g.moveTo(0, 0);
        g.bezierCurveTo(0, frame * stemHeight / 4, 0, frame * stemHeight * 3 / 4, ...actualPetalCenter);
        g.stroke();

        const petalTexture = this.petalTexture;

        // Draw petals
        g.save();
        g.translate(...actualPetalCenter);

        let angle = 0;
        for (let i = 0; i < frame * petalAmount; i++) {

            const ratio = Math.cos((i / petalAmount) * (Math.PI / 2));
            const radius = flowerCoreSize + ratio * (petalSize - flowerCoreSize);
            angle += petalGap / radius;

            const acutalRatio = (frame - i / petalAmount) * ratio;

            g.save();
            g.rotate(angle);
            g.scale(acutalRatio, acutalRatio);

            g.drawImage(petalTexture, -petalTexture.width / 2, -petalTexture.height / 2);

            g.restore();
        }

        g.fillStyle = this.flowerCoreColor;
        g.lineWidth = 2;
        g.strokeStyle = "#404040";
        g.beginPath();
        g.arc(0, 0, Math.sqrt(frame) * this.flowerCoreSize, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

        g.restore();
    }
}


/**
 * 
 * @param {number[]} data
 * @return {Float64Array}
 */
function toBinaryArray(data) {
    // const array = new Float64Array(data.length);
    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     array[index] = element;
    // }
    const array = Float64Array.from(data);
    return array;
}

/**
 * 
 * @param {ArrayBuffer} buffer 
 * @return {string}
 */
function to卦String(buffer) {
    const readerArray = new Uint8Array(buffer);
    const output = [];
    for (const d of readerArray) {
        for (let i = 0; i < 3; i++) {
            const offset = (d >>> (3 * i)) & 0b0111;
            output.push(0x2630 + offset);
        }
    }

    return String.fromCharCode(...output);
}

/**
 * 
 * @param {ArrayBuffer} buffer 
 * @return {string}
 */
function toBinaryString(buffer, sectionSize = 8) {
    const readerArray = new Uint8Array(buffer);
    const output = [];
    let i = 0;
    for (const d of readerArray) {
        output.push(d.toString(16).padStart(2, '0').toUpperCase());

        i++;
        if (i === sectionSize) {
            output.push(',');
            i = 0;
        }
    }

    return output.join("");
}



/**
 * 
 * @param {number} petalWidth 
 * @param {number[]} series 
 * @param {object} props
 * @param {number} props.radius
 * @param {number} props.lineWidth
 * @param {string} props.strokeStyle
 * @param {string} props.fillStyle
 * @return {CanvasImageSource}
 */
function createPetalTexture(petalWidth, series, props) {
    // 傅里叶参数
    // 重新调整傅里叶参数
    const newSeries = [];
    {
        const count = Math.ceil(series.length / 2) + 1;
        const total = (count + 1) * count / 2;
        // let t = 0;
        for (let i = 0; i < series.length; i += 2) {
            const ratio = 0.5 * (count - (i / 2)) / total;
            // console.log("r = ", ratio * 2);
            // t += ratio * 2;

            newSeries.push(ratio * (0.7 + 0.3 * series[i]));
            if (i + 1 < series.length) newSeries.push(ratio * (0.7 + 0.3 * series[i + 1]));
        }
        // console.log("t = ", t);
    }
    const curve = createFourierCurve(newSeries);

    const period = petalWidth;
    const scalar = 1 / (0.5 + 5.5 * series[1]);

    const radius = props.radius;

    const canvas = document.createElement("canvas");
    const canvasEdgeSize = Math.ceil(2 * (radius + props.lineWidth));
    canvas.width = canvasEdgeSize;
    canvas.height = canvasEdgeSize;
    const g = canvas.getContext("2d");

    g.save();
    g.translate(canvas.width / 2, canvas.height / 2);

    g.lineWidth = props.lineWidth;
    g.strokeStyle = props.strokeStyle;
    g.fillStyle = props.fillStyle;

    g.beginPath();
    g.moveTo(0, 0);
    for (let angle = 0; angle < period; angle += Math.PI / 128) {
        const actualX = scalar * ((angle >= period / 2) ? (period - angle) : angle);
        // console.log(curve(actualX));
        const modulo = radius * curve(actualX);
        const point = [modulo * Math.cos(angle), modulo * Math.sin(angle)];
        g.lineTo(...point);
    }
    g.closePath();
    g.fill();
    g.stroke();

    g.restore();
    // console.log(canvas.toDataURL())
    return canvas;
}

/**
 * 
 * @param {number[]} series 
 * @return {(x: number) => number}
 */
function createFourierCurve(series) {
    const curve = (x) => {
        let y = 0;
        for (let i = 0; i < series.length; i += 2) {
            const c = i / 2;
            y += series[i] * Math.cos(c * x);
            if (i + 1 < series.length) y += series[i + 1] * Math.sin(c * x);
        }
        return y;
    };
    return curve;
}


function randomFloat(v1, v2) {
    if (typeof v1 !== 'number') return Math.random();
    if (typeof v2 !== 'number') return Math.random() * v1;
    else return Math.random() * (v2 - v1) + v1;
}

function randomInt(v1, v2) {
    return Math.floor(randomFloat(v1, v2));
}

/**
 * @template T
 * @param {number} length 
 * @param {(index: number) => T} generate 
 * @return {Array<T>}
 */
function createArray(length, generate) {
    const array = Array(length);
    for (let index = 0; index < array.length; index++) {
        array[index] = generate(index);
    }
    return array;
}

function randomColor(v1, v2) {
    return '#' + createArray(3, () => Math.floor(randomFloat(v1, v2) * 0x0100).toString(16).padStart(2, '0')).join('');
}

function colorString(rgb) {
    return '#' + rgb.map(it => Math.min(Math.floor(it * 0x0100), 0xff).toString(16).padStart(2, '0')).join('');
}

/** @type {Plant} */
let plant = null;
let animationStartTimestamp = null;
let easingFunction = (x) => Math.sin((Math.PI / 2) * x);

function main() {
    setPlant(Plant.random());
    console.log(plant);

    const duration = 5000;
    const loop = (timestamp) => {
        if (animationStartTimestamp === null) animationStartTimestamp = timestamp;
        const frame = Math.min((timestamp - animationStartTimestamp) / duration, 1.0);
        plant.draw(easingFunction(frame));
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}

function setPlant(p) {
    plant = p;
    animationStartTimestamp = null;
    input.value = toBinaryString(toBinaryArray(p.gene).buffer);
}

main();

function onButtonPlantClick() {
    const s = [];
    const data = input.value.split(',').filter(it => !!it);
    for (const section of data) {
        for (let i = 0; i < section.length; i += 2) {
            const hex = section.slice(i, i + 2);
            s.push(parseInt(hex, 16));
        }
    }
    const gene = Array.from(new Float64Array(Uint8Array.from(s).buffer));
    const plant = new Plant(gene);
    setPlant(plant);
}

function onButtonRandomClick() {
    setPlant(Plant.random());
}