"use strict";
n.d(t, { A: () => d });
var r = n(360345),
    i = n(476858),
    a = n(355418);
let s = RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${(0, i.uJ)(r.eB)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
    o = 1,
    l = 2,
    u = 3,
    c = 4;
class d extends a.c {
    strictMonthDateOrder;
    constructor(e) {
        super(), (this.strictMonthDateOrder = e);
    }
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = parseInt(t[o]),
            i = parseInt(t[c]),
            a = t[u] ? parseInt(t[u]) : r.eB[t[l].toLowerCase()];
        if (a < 1 || a > 12) {
            if (this.strictMonthDateOrder) return null;
            i >= 1 && i <= 12 && ([a, i] = [i, a]);
        }
        return i < 1 || i > 31 ? null : { day: i, month: a, year: n };
    }
}
