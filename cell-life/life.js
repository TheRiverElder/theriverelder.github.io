const MAX_POWER = 50;
class CellMap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = Array(width * height)
            .fill(0)
            .map((e, i) => new Cell(i % MAP_WIDTH, Math.floor(i / MAP_WIDTH), this, 1, NIL_LIFE));
    }

    indexOf(x, y) {
        return ((y + this.height) % this.height) * this.width + (x + this.width) % this.width;
    }

    get(x, y) {
        return this.cells[this.indexOf(x, y)];
    }

    take(x, y) {
        let cell = this.cells[this.indexOf(x, y)];
        let life = cell.life;
        cell.life = NIL_LIFE;
        return life;
    }

    set(x, y, life) {
        this.cells[this.indexOf(x, y)].life = life || NIL_LIFE;
    }

    replace(x, y, life) {
        let cell = this.cells[this.indexOf(x, y)];
        let prev = cell.life;
        cell.life = life || NIL_LIFE;
        return prev;
    }
}

class Cell {
    constructor(x, y, map, power, life = NIL_LIFE) {
        this.x = x;
        this.y = y;
        this.map = map;
        this.power = power;
        this.life = life;
    }

    invade(cost, offsetX = randOff(), offsetY = randOff()) {
        let cast = Math.min(cost, this.power);
        if (cast > 0) {
            this.power -= cast;
            let target = this.map.get(this.x + offsetX, this.y + offsetY);
            if (target.life === NIL_LIFE) {
                target.power = Math.min(MAX_POWER, target.power + cost);
                target.life = this.life.copy();
            // } else if (target.life.color === this.life.color) {
            //     target.power = Math.min(MAX_POWER, target.power + cost);
            } else {
                target.power -= cost;
                if (target.power === 0) {
                    target.life = NIL_LIFE;
                } else if (target.power < 0) {
                    target.life = this.life.copy();
                    target.power = Math.abs(target.power);
                }
            }
            if (this.power === 0) {
                this.life = NIL_LIFE;
            }
        }
    }

    mutate(game) {
        if (check(game.mutateRate)) {
            this.life = this.life.mutate(game.geneLimit);
        }
    }

    spread(game, offsetX = randOff(), offsetY = randOff()) {
        let target = this.map.get(this.x + offsetX, this.y + offsetY);
        if (target.life === NIL_LIFE) {
            let newLife;
            if (check(game.crossoverRate)) {
                newLife = this.life.crossover(this.map.get(this.x + randOff(), this.y + randOff()).life);
            } else {
                newLife = this.life.copy();
            }
            target.life = newLife;
        }
    }
}

class Life {
    constructor(dna = genDna(), color) {
        this.dna = dna;
        this.color = color || colorOf(dna.reduce((p, e, i) => (p ^ (e * Math.pow(0x10, i % 6))), 0) || 0xffffff);
    }

    copy() {
        return new Life(this.dna);
    }

    mutate(geneLimit) {
        return new Life(this.dna.map(e => check(0.1) ? randInt(geneLimit) : e));
    }

    crossover(another) {
        let anotherDna = another.dna;
        return new Life(this.dna.map((e, i) => check(0.1) ? saveGet(anotherDna, i, 0) : e));
    }
}

class LifeGame {
    constructor({
                    geneLimit = 0x0F,
                    mutateRate = 0.1,
                    crossoverRate = 0.1,
                    mapWidth = 90,
                    mapHeight = 60,
    }) {
        this.geneLimit = geneLimit;
        this.mutateRate = mutateRate;
        this.crossoverRate = crossoverRate;
        this.map = new CellMap(mapWidth, mapHeight);
    }

    step() {
        this.map.cells.forEach(cell => cell.power = Math.min(MAX_POWER, Math.max(1, Math.floor(cell.power * 1.05))));
        for (let cell of this.map.cells) {
            cell.life.dna.forEach((e, i) => {
                switch (e) {
                    case 0x00: break;
                    case 0x01: cell.invade(saveGet(cell.life.dna, i + 1, 3)); break;
                    case 0x02: cell.spread(this); break;
                    case 0x03: cell.mutate(this); break;
                }
            });
        }
    }


}

function genDna() {
    return Array(randInt(10, 5)).fill(0).map(() => randInt(0x0F));
}

const NIL_LIFE = new Life([], '#ffffff');
