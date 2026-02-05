"use strict";
n.d(t, { A: () => s, T: () => a });
var r = n(575593),
    i = n(149807);
let a = (e) => e instanceof s;
class s extends i.A {
    asset;
    label;
    constructor(e) {
        super(e), (this.type = r.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
    static fromServer(e) {
        return new s({ ...super.fromServer(e), ...e });
    }
}
