n.d(t, { Z: () => p });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(186901);
let s = null,
    c = [o.ff.REDISTRIBUTABLE_INSTALL_FAILED, o.ff.POST_INSTALL_FAILED, o.ff.POST_INSTALL_CANCELLED],
    u = [o.ff.APPLICATION_NOT_FOUND, o.ff.APPLICATION_LOAD_FAILED, o.ff.INTERRUPTED, o.ff.DESERIALIZATION_FAILED];
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
let p = new d(a.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != s && null != s.code && c.includes(s.code) && (s = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        s = null != t.code && u.includes(t.code) ? null : t;
    },
});
