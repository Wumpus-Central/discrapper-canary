n.d(t, { Z: () => p });
var r,
    i,
    l = n(442837),
    o = n(570140),
    a = n(186901);
let s = null,
    c = [a.ff.REDISTRIBUTABLE_INSTALL_FAILED, a.ff.POST_INSTALL_FAILED, a.ff.POST_INSTALL_CANCELLED],
    u = [a.ff.APPLICATION_NOT_FOUND, a.ff.APPLICATION_LOAD_FAILED, a.ff.INTERRUPTED, a.ff.DESERIALIZATION_FAILED];
class d extends (i = l.ZP.Store) {
    getLastError() {
        return s;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "DispatchApplicationErrorStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "DispatchApplicationErrorStore");
let p = new d(o.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && c.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && u.includes(t.code) ? null : t;
    },
});
