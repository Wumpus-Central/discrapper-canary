n.d(t, {
    A: () => o,
    K: () => s,
});
var r = n(573648),
    i = n(611010),
    a = n(985018);
let s = "twitch:";
class o extends i.Ay {
    getIconURL() {
        return r.A.get("twitch").icon.lightPNG;
    }
    constructor(e) {
        super(e), (this.id = "".concat(s).concat(e.url)), (this.name = a.intl.string(a.t.JIPtgq));
    }
}
