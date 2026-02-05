"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(77729),
    a = n(351906);
let s = !1;
function o() {
    let e = i.A?.window?.setContentProtection;
    if (null == e) return;
    let t = a.A.enableContentProtection;
    t !== s && (e(t), (s = t));
}
class l extends r.A {
    stores = new Map().set(a.A, o);
    constructor() {
        o(), super();
    }
}
let u = new l();
