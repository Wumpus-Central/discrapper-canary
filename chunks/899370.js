n.d(t, { Z: () => p });
var r,
    i,
    l,
    a = n(973361),
    o = n(442837),
    s = n(570140),
    c = n(358085),
    u = n(723359);
let d = null,
    g = 'underage';
class h extends (l = o.ZP.Store) {
    isUnderageAnonymous() {
        if (c.isPlatformEmbedded && 1) {
            if (null != d && d + u.k0 > Date.now()) return !0;
        } else if (1) return null != a.parse(document.cookie)[g];
        return !1;
    }
}
(i = 'AgeGateStore'),
    (r = 'displayName') in h
        ? Object.defineProperty(h, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[r] = i);
let p = new h(s.Z, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (d = Date.now()), (document.cookie = ''.concat(g, '=1;path=/'));
    },
    LOGIN_SUCCESS: function () {
        (d = null), (document.cookie = ''.concat(g, '=1;path=/;max-age=0'));
    }
});
