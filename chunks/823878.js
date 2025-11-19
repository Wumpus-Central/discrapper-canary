_.d(e, { ZN: () => n });
var a = _(147498),
    r = _(939747);
let n = {
    [a.JM]: class {
        constructor(t) {
            this._value = t;
        }
        get weight() {
            return 1;
        }
        add(t) {
            this._value += t;
        }
        toString() {
            return `${this._value}`;
        }
    },
    [a.uG]: class {
        constructor(t) {
            (this._last = t), (this._min = t), (this._max = t), (this._sum = t), (this._count = 1);
        }
        get weight() {
            return 5;
        }
        add(t) {
            (this._last = t),
                t < this._min && (this._min = t),
                t > this._max && (this._max = t),
                (this._sum += t),
                this._count++;
        }
        toString() {
            return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
        }
    },
    [a.g_]: class {
        constructor(t) {
            this._value = [t];
        }
        get weight() {
            return this._value.length;
        }
        add(t) {
            this._value.push(t);
        }
        toString() {
            return this._value.join(":");
        }
    },
    [a.is]: class {
        constructor(t) {
            (this.first = t), (this._value = new Set([t]));
        }
        get weight() {
            return this._value.size;
        }
        add(t) {
            this._value.add(t);
        }
        toString() {
            return Array.from(this._value)
                .map((t) => ("string" == typeof t ? (0, r.M)(t) : t))
                .join(":");
        }
    },
};
