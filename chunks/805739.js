i.d(t, { A: () => r });
var l = i(985018);
let n = ["a", "b", "c", "d"],
    s = (e) => e;
function a(e, t) {
    let i = {},
        l = Math.min(e.length, n.length);
    for (let s = 0; s < l; ++s) i[n[s]] = (i, l) => t(e[s], l);
    return i;
}
class r {
    items;
    constructor(e) {
        this.items = e;
    }
    asString() {
        return this.transformed(s);
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
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_TWO, a(this.items, e));
            case 3:
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_THREE, a(this.items, e));
            default:
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_FOUR, a(this.items, e));
        }
    }
}
