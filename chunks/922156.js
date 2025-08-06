n.d(t, { Z: () => p });
var r,
    i = n(442837),
    o = n(570140),
    a = n(186901);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = null,
    c = [a.ff.REDISTRIBUTABLE_INSTALL_FAILED, a.ff.POST_INSTALL_FAILED, a.ff.POST_INSTALL_CANCELLED],
    u = [a.ff.APPLICATION_NOT_FOUND, a.ff.APPLICATION_LOAD_FAILED, a.ff.INTERRUPTED, a.ff.DESERIALIZATION_FAILED];
function d(e) {
    let { error: t } = e;
    l = null != t.code && u.includes(t.code) ? null : t;
}
function f() {
    null != l && null != l.code && c.includes(l.code) && (l = null);
}
class _ extends (r = i.ZP.Store) {
    getLastError() {
        return l;
    }
}
s(_, "displayName", "DispatchApplicationErrorStore");
let p = new _(o.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
    DISPATCH_APPLICATION_ERROR: d,
});
