n.d(t, {
    Gg: () => f,
    Hg: () => h,
    fr: () => d
});
var r = n(772848),
    i = n(433517);
let o = 30,
    a = 'LATEST_SESSION_TIMESTAMP',
    s = 'LATEST_SESSION_UUID',
    l = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    c = Promise.resolve(),
    u = !1;
function d(e) {
    u = e;
}
function f() {
    return (c = c.then(async () => {
        let e = await p();
        if (null == e || _(e)) {
            if (!u) return null;
            let t = {
                uuid: (0, r.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            i.K.set(s, t.uuid), i.K.set(l, t.initialized.toString()), i.K.set(a, Date.now().toString()), (e = t);
        } else u && i.K.set(a, Date.now().toString());
        return e;
    }));
}
async function p() {
    let e = await i.K.getAfterRefresh(s),
        t = await i.K.getAfterRefresh(l).then(h),
        n = await i.K.getAfterRefresh(a).then(h);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function _(e) {
    return 60000 * o + e.lastUsed - Date.now() <= 0;
}
function h(e) {
    return null != e ? Number(e) : 0;
}
