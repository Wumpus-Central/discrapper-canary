var i,
    r,
    s,
    l,
    o = n(973361),
    a = n(442837),
    c = n(570140),
    d = n(358085),
    u = n(723359);
let h = null,
    g = 'underage';
class m extends (l = a.ZP.Store) {
    isUnderageAnonymous() {
        if (d.isPlatformEmbedded) {
            if (null != h && h + u.k0 > Date.now()) return !0;
        } else return null != o.parse(document.cookie)[g];
        return !1;
    }
}
(s = 'AgeGateStore'),
    (r = 'displayName') in (i = m)
        ? Object.defineProperty(i, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = s),
    (t.Z = new m(c.Z, {
        AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
            h = Date.now();
            document.cookie = ''.concat(g, '=1;path=/');
        },
        LOGIN_SUCCESS: function () {
            h = null;
            document.cookie = ''.concat(g, '=1;path=/;max-age=0');
        }
    }));
