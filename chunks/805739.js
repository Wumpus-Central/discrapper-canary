i.d(t, { A: () => r });
var l = i(985018);
let n = ["a", "b", "c", "d"],
    a = (e) => e;
function s(e, t) {
    let i = {},
        l = Math.min(e.length, n.length);
    for (let a = 0; a < l; ++a) i[n[a]] = (i, l) => t(e[a], l);
    return i;
}
class r {
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
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_TWO, s(this.items, e));
            case 3:
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_THREE, s(this.items, e));
            default:
                return l.intl.format(l.t.GENERIC_FORMATTED_LIST_FOUR, s(this.items, e));
        }
    }
}
