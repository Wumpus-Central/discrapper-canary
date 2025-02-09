n.d(t, { Z: () => m });
var i,
    r,
    l,
    a = n(973361),
    o = n(442837),
    s = n(570140),
    c = n(358085),
    d = n(723359);
let u = null,
    h = 'underage';
class _ extends (l = o.ZP.Store) {
    isUnderageAnonymous() {
        return c.isPlatformEmbedded ? !!(null != u && u + d.k0 > Date.now()) : null != a.parse(document.cookie)[h];
    }
}
(r = 'AgeGateStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = r);
let m = new _(s.Z, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (u = Date.now()), (document.cookie = ''.concat(h, '=1;path=/'));
    },
    LOGIN_SUCCESS: function () {
        (u = null), (document.cookie = ''.concat(h, '=1;path=/;max-age=0'));
    }
});
