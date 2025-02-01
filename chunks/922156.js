n.d(t, { Z: () => h });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(186901);
let c = null,
    d = [o.ff.REDISTRIBUTABLE_INSTALL_FAILED, o.ff.POST_INSTALL_FAILED, o.ff.POST_INSTALL_CANCELLED],
    u = [o.ff.APPLICATION_NOT_FOUND, o.ff.APPLICATION_LOAD_FAILED, o.ff.INTERRUPTED, o.ff.DESERIALIZATION_FAILED];
class m extends (a = r.ZP.Store) {
    getLastError() {
        return c;
    }
}
(l = 'DispatchApplicationErrorStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = l);
let h = new m(s.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != c && null != c.code && d.includes(c.code) && (c = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        c = null != t.code && u.includes(t.code) ? null : t;
    }
});
