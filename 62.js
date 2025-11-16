class Group {
    constructor() {
        this.items = [];
    }

    add(x) {
        if (!this.has(x)) this.items.push(x);
    }

    delete(x) {
        this.items = this.items.filter(item => item !== x);
    }

    has(x) {
        return this.items.includes(x);
    }

    static from(arr) {
        let g = new Group();
        for (let x of arr) g.add(x);
        return g;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));