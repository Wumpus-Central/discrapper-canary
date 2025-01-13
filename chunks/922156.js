var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(186901);
let d = null,
    u = [c.ff.REDISTRIBUTABLE_INSTALL_FAILED, c.ff.POST_INSTALL_FAILED, c.ff.POST_INSTALL_CANCELLED],
    m = [c.ff.APPLICATION_NOT_FOUND, c.ff.APPLICATION_LOAD_FAILED, c.ff.INTERRUPTED, c.ff.DESERIALIZATION_FAILED];
class h extends (a = o.ZP.Store) {
    getLastError() {
        return d;
    }
}
(l = 'DispatchApplicationErrorStore'),
    (r = 'displayName') in (i = h)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new h(s.Z, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            null != d && null != d.code && u.includes(d.code) && (d = null);
        },
        DISPATCH_APPLICATION_ERROR: function (e) {
            let { error: t } = e;
            d = null != t.code && m.includes(t.code) ? null : t;
        }
    }));
