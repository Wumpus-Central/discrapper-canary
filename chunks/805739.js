"use strict";
n.d(t, { A: () => o });
var r = n(985018);
let i = ["a", "b", "c", "d"],
    a = (e) => e;
function s(e, t) {
    let n = {},
        r = Math.min(e.length, i.length);
    for (let a = 0; a < r; ++a) n[i[a]] = (n, r) => t(e[a], r);
    return n;
}
class o {
    items;
    constructor(e) {
        this.items = e;
    }
    asString() {
        return this.transformed(a);
    }
    isEmpty() {
        return 0 === this.items.length;
    }
    transformed(e) {
        switch (this.items.length) {
            case 0:
                return "";
            case 1:
                return e(this.items[0], "");
            case 2:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, s(this.items, e));
            case 3:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, s(this.items, e));
            default:
                return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, s(this.items, e));
        }
    }
}
