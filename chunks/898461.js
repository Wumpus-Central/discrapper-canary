"use strict";
n.d(t, { A: () => a, T: () => s });
var r = n(575593),
    i = n(149807);
let s = (e) => e instanceof a;
class a extends i.A {
    asset;
    label;
    constructor(e) {
        super(e), (this.type = r.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
