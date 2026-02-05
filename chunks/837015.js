"use strict";
n.d(t, { A: () => s, F: () => a });
var r = n(575593),
    i = n(149807);
let a = (e) => e instanceof s;
class s extends i.A {
    asset;
    label;
    palette;
    constructor(e) {
        super(e),
            (this.type = r.R.NAMEPLATE),
            (this.asset = e.asset),
            (this.label = e.label),
            (this.palette = e.palette);
    }
    static fromServer(e) {
        return new s({ ...super.fromServer(e), ...e });
    }
}
