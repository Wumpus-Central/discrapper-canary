n.d(t, {
    Gg: () => _,
    fr: () => f,
    hn: () => g
});
var r = n(772848),
    i = n(990547),
    o = n(433517),
    a = n(686325);
let s = 'LATEST_SESSION_TIMESTAMP',
    l = 'LATEST_SESSION_UUID',
    c = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    u = Promise.resolve(),
    d = !1;
function f(e) {
    d = e;
}
function _() {
    return (u = u.then(async () => {
        let e = await p();
        if (null == e || (0, a.qK)(e)) {
            if (!d) return null;
            let t = {
                uuid: (0, r.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            o.K.set(l, t.uuid), o.K.set(c, t.initialized.toString()), o.K.set(s, Date.now().toString()), (e = t);
        } else d && o.K.set(s, Date.now().toString());
        return e;
    }));
}
async function p() {
    let e = await o.K.getAfterRefresh(l),
        t = await o.K.getAfterRefresh(c).then(a.Hg),
        n = await o.K.getAfterRefresh(s).then(a.Hg);
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function h() {
    let e = o.K.get(l),
        t = (0, a.Hg)(o.K.get(c)),
        n = (0, a.Hg)(o.K.get(s));
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function m() {
    let e = h();
    return null == e || (0, a.qK)(e) ? null : e.uuid;
}
function g() {
    let e = m(),
        t = (0, i.getSuperProperties)();
    (null == t ? void 0 : t.client_heartbeat_session_id) !== e && (0, i.extendSuperProperties)({ client_heartbeat_session_id: e });
}
