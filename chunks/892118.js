"use strict";
n.d(t, { A: () => s });
var r = n(575593),
    i = n(149807);
class s extends i.A {
    label;
    layers;
    constructor(e) {
        super(e), (this.type = r.R.PROFILE_FRAME), (this.label = e.label), (this.layers = e.layers);
    }
    static fromServer(e) {
        return new s({ ...super.fromServer(e), ...e });
    }
}
