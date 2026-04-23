"use strict";
n.d(t, { A: () => a, s: () => s });
var r = n(575593),
    i = n(149807);
let s = (e) => e instanceof a;
class a extends i.A {
    label;
    layers;
    constructor(e) {
        super(e), (this.type = r.R.PROFILE_FRAME), (this.label = e.label), (this.layers = e.layers);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
