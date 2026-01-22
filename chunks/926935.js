n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(439372),
    i = n(77729),
    a = n(351906);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = !1;

function l() {
    var e;
    let t = null === i.A || void 0 === i.A || null == (e = i.A.window) ? void 0 : e.setContentProtection;
    if (null == t) return;
    let n = a.A.enableContentProtection;
    n !== o && (t(n), (o = n));
}
class c extends r.A {
    constructor() {
        l(), super(), s(this, "stores", new Map().set(a.A, l));
    }
}
let u = new c();
