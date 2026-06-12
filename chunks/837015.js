"use strict";
n.d(t, { A: () => a, F: () => s });
var i = n(575593),
    r = n(149807);
let s = (e) => e instanceof a;
class a extends r.A {
    asset;
    label;
    palette;
    constructor(e) {
        super(e),
            (this.type = i.R.NAMEPLATE),
            (this.asset = e.asset),
            (this.label = e.label),
            (this.palette = e.palette);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
