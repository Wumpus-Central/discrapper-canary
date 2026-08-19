"use strict";
n.d(t, { A: () => s });
var i = n(306173),
    r = n(439372);
class a extends r.A {
    intervalID;
    _initialize() {
        if ((0, i.xd)()) {
            let e = `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/bad-hash-delta`;
            (0, i.kk)(e);
            return;
        }
    }
}
let s = new a();
