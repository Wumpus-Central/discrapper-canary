n.d(t, { Z: () => g });
var i,
    r,
    l,
    a = n(973361),
    o = n(442837),
    s = n(570140),
    c = n(358085),
    d = n(723359);
let u = null,
    _ = 'underage';
class h extends (l = o.ZP.Store) {
    isUnderageAnonymous() {
        return c.isPlatformEmbedded ? !!(null != u && u + d.k0 > Date.now()) : null != a.parse(document.cookie)[_];
    }
}
(r = 'AgeGateStore'),
    (i = 'displayName') in h
        ? Object.defineProperty(h, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[i] = r);
let g = new h(s.Z, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (u = Date.now()), (document.cookie = ''.concat(_, '=1;path=/'));
    },
    LOGIN_SUCCESS: function () {
        (u = null), (document.cookie = ''.concat(_, '=1;path=/;max-age=0'));
    }
});
