n.d(t, {
    Gg: () => f,
    Hg: () => h,
    fr: () => d
});
var i = n(772848),
    r = n(433517);
let a = 30,
    s = 'LATEST_SESSION_TIMESTAMP',
    o = 'LATEST_SESSION_UUID',
    l = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    u = Promise.resolve(),
    c = !1;
function d(e) {
    c = e;
}
function f() {
    return (u = u.then(async () => {
        let e = await _();
        if (null == e || p(e)) {
            if (!c) return null;
            let t = {
                uuid: (0, i.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            r.K.set(o, t.uuid), r.K.set(l, t.initialized.toString()), r.K.set(s, Date.now().toString()), (e = t);
        } else c && r.K.set(s, Date.now().toString());
        return e;
    }));
}
async function _() {
    let e = await r.K.getAfterRefresh(o),
        t = await r.K.getAfterRefresh(l).then(h),
        n = await r.K.getAfterRefresh(s).then(h);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function p(e) {
    return 60000 * a + e.lastUsed - Date.now() <= 0;
}
function h(e) {
    return null != e ? Number(e) : 0;
}
