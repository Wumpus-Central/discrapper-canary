"use strict";
n.d(t, { A: () => a, s: () => s });
var i = n(575593),
    r = n(149807);
let s = (e) => e instanceof a;
class a extends r.A {
    label;
    layers;
    constructor(e) {
        super(e), (this.type = i.R.PROFILE_FRAME), (this.label = e.label), (this.layers = e.layers);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
