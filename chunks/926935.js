n.d(t, { A: () => d });
var i = n(439372),
    r = n(77729),
    a = n(351906);
let s = !1;
function l() {
    let e = r.A?.window?.setContentProtection;
    if (null == e) return;
    let t = a.A.enableContentProtection;
    t !== s && (e(t), (s = t));
}
class o extends i.A {
    stores = new Map().set(a.A, l);
    constructor() {
        l(), super();
    }
}
let d = new o();
