"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(77729),
    s = n(351906);
let a = !1;
function o() {
    let e = r.A?.window?.setContentProtection;
    if (null == e) return;
    let t = s.A.enableContentProtection;
    t !== a && (e(t), (a = t));
}
class l extends i.A {
    stores = new Map().set(s.A, o);
    constructor() {
        o(), super();
    }
}
let u = new l();
