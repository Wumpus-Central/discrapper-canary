n.d(t, { Z: () => m });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140),
    s = n(186901);
let c = null,
    d = [s.ff.REDISTRIBUTABLE_INSTALL_FAILED, s.ff.POST_INSTALL_FAILED, s.ff.POST_INSTALL_CANCELLED],
    u = [s.ff.APPLICATION_NOT_FOUND, s.ff.APPLICATION_LOAD_FAILED, s.ff.INTERRUPTED, s.ff.DESERIALIZATION_FAILED];
class p extends (a = o.ZP.Store) {
    getLastError() {
        return c;
    }
}
(i = 'DispatchApplicationErrorStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let m = new p(l.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != c && null != c.code && d.includes(c.code) && (c = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        c = null != t.code && u.includes(t.code) ? null : t;
    }
});
