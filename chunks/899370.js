n.d(t, { Z: () => p });
var r,
    i,
    s,
    o = n(973361),
    l = n(442837),
    a = n(570140),
    c = n(358085),
    u = n(723359);
let d = null,
    h = 'underage';
class g extends (s = l.ZP.Store) {
    isUnderageAnonymous() {
        if (c.isPlatformEmbedded && 1) {
            if (null != d && d + u.k0 > Date.now()) return !0;
        } else if (1) return null != o.parse(document.cookie)[h];
        return !1;
    }
}
(i = 'AgeGateStore'),
    (r = 'displayName') in g
        ? Object.defineProperty(g, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[r] = i);
let p = new g(a.Z, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (d = Date.now()), (document.cookie = ''.concat(h, '=1;path=/'));
    },
    LOGIN_SUCCESS: function () {
        (d = null), (document.cookie = ''.concat(h, '=1;path=/;max-age=0'));
    }
});
