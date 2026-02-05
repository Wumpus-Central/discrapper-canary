"use strict";
n.d(t, { A: () => s });
var r = n(306173),
    i = n(439372);
class a extends i.A {
    intervalID;
    _initialize() {
        if ((0, r.xd)()) {
            let e = `https:${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/bad-hash-delta`;
            (0, r.kk)(e);
            return;
        }
    }
}
let s = new a();
