n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    a = n(570140),
    o = n(186901);
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
    c = [o.ff.REDISTRIBUTABLE_INSTALL_FAILED, o.ff.POST_INSTALL_FAILED, o.ff.POST_INSTALL_CANCELLED],
    u = [o.ff.APPLICATION_NOT_FOUND, o.ff.APPLICATION_LOAD_FAILED, o.ff.INTERRUPTED, o.ff.DESERIALIZATION_FAILED];
function d(e) {
    let { error: t } = e;
    l = null != t.code && u.includes(t.code) ? null : t;
}
function f() {
    null != l && null != l.code && c.includes(l.code) && (l = null);
}
class p extends (r = i.ZP.Store) {
    getLastError() {
        return l;
    }
}
s(p, "displayName", "DispatchApplicationErrorStore");
let _ = new p(a.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
    DISPATCH_APPLICATION_ERROR: d,
});
