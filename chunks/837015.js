"use strict";
n.d(t, { A: () => s, F: () => a });
var i = n(575593),
    r = n(338535);
function a(e) {
    return e instanceof s;
}
class s extends r.A {
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
        return new s({ ...super.fromServer(e), ...e });
    }
}
