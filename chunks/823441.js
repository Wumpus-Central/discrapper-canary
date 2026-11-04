var i = n(573648),
    r = n(327891),
    a = n(792996);
let s = "twitch:";
class l extends r.Ay {
    constructor(e) {
        (super(e), (this.id = `${s}${e.url}`), (this.name = a.intl.string(a.t.JIPtgq)));
    }
    getIconURL() {
        return i.A.get("twitch").icon.lightPNG;
    }
}
n.d(t, {}, { A: l, K: s });
