"use strict";
n.d(t, { A: () => a, T: () => s });
var i = n(575593),
    r = n(149807);
let s = (e) => e instanceof a;
class a extends r.A {
    asset;
    label;
    constructor(e) {
        super(e), (this.type = i.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
