"use strict";
n.d(t, { A: () => l, K: () => s });
var i = n(573648),
    r = n(395671),
    a = n(375708);
let s = "twitch:";
class l extends r.Ay {
    constructor(e) {
        super(e), (this.id = `${s}${e.url}`), (this.name = a.intl.string(a.t.JIPtgq));
    }
    getIconURL() {
        return i.A.get("twitch").icon.lightPNG;
    }
}
