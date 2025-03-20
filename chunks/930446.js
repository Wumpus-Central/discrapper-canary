n.d(t, { G: () => l });
var r = n(772848),
    i = n(70956),
    o = n(686325);
let a = 12,
    s = null;
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == s || c(s)
        ? (s = {
              uuid: (0, r.Z)(),
              initialized: t,
              lastUsed: t
          })
        : (e && (s.lastUsed = t), s);
}
function c(e) {
    let t = Date.now(),
        n = t - e.lastUsed > o.iP * i.Z.Millis.MINUTE,
        r = t - e.initialized > a * i.Z.Millis.HOUR;
    return n || r;
}
