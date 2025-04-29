n.d(t, {
    G: () => f,
    f: () => d
});
var r = n(772848),
    i = n(433517),
    o = n(686325);
let a = 'LATEST_SESSION_TIMESTAMP',
    s = 'LATEST_SESSION_UUID',
    l = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    c = Promise.resolve(),
    u = !1;
function d(e) {
    u = e;
}
function f() {
    return (c = c.then(async () => {
        let e = await _();
        if (null == e || (0, o.qK)(e)) {
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
async function _() {
    let e = await i.K.getAfterRefresh(s),
        t = await i.K.getAfterRefresh(l).then(o.Hg),
        n = await i.K.getAfterRefresh(a).then(o.Hg);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
