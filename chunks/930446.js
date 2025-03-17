n.d(t, { G: () => o });
var r = n(772848),
    i = n(70956),
    l = n(686325);
let a = null;
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Date.now();
    return null == a ||
        (function (e) {
            let t = Date.now(),
                n = t - e.lastUsed > l.iP * i.Z.Millis.MINUTE,
                r = t - e.initialized > 12 * i.Z.Millis.HOUR;
            return n || r;
        })(a)
        ? (a = {
              uuid: (0, r.Z)(),
              initialized: t,
              lastUsed: t
          })
        : (e && (a.lastUsed = t), a);
}
