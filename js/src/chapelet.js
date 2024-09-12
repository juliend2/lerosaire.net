export default class Chapelet {
    constructor(name, mysteres) {
        this.name = name;
        this.mysteres = mysteres;
    }

    get anchors() {
        return this.mysteres.map(m => m.anchor);
    }

    get backgroundColors() {
        return this.mysteres.map(m => 'white');
    }
}