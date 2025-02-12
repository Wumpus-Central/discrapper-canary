a.d(e, { ZN: () => _ });
var r = a(147498),
    n = a(939747);
let _ = {
    [r.JM]: class {
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
    [r.uG]: class {
        constructor(t) {
            (this._last = t), (this._min = t), (this._max = t), (this._sum = t), (this._count = 1);
        }
        get weight() {
            return 5;
        }
        add(t) {
            (this._last = t), t < this._min && (this._min = t), t > this._max && (this._max = t), (this._sum += t), this._count++;
        }
        toString() {
            return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
        }
    },
    [r.g_]: class {
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
            return this._value.join(':');
        }
    },
    [r.is]: class {
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
                .map((t) => ('string' == typeof t ? (0, n.M)(t) : t))
                .join(':');
        }
    }
};
