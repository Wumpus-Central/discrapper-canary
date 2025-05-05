n.d(t, {
    Gg: () => h,
    fr: () => _,
    hn: () => b
});
var r = n(772848),
    i = n(990547),
    o = n(433517),
    a = n(960048),
    s = n(686325);
let l = 'LATEST_SESSION_TIMESTAMP',
    c = 'LATEST_SESSION_UUID',
    u = 'LATEST_SESSION_INITIALIZED_TIMESTAMP',
    d = Promise.resolve(),
    f = !1;
function _(e) {
    f = e;
}
async function p() {
    try {
        let e = await m();
        if (null == e || (0, s.qK)(e)) {
            if (!f) return null;
            let t = {
                uuid: (0, r.Z)(),
                initialized: Date.now(),
                lastUsed: Date.now()
            };
            o.K.set(c, t.uuid), o.K.set(u, t.initialized.toString()), o.K.set(l, Date.now().toString()), (e = t);
        } else f && o.K.set(l, Date.now().toString());
        return e;
    } catch (e) {
        return a.Z.captureException(e), null;
    }
}
function h() {
    return (d = d.then(() => p()));
}
async function m() {
    try {
        let e = await o.K.getAfterRefresh(c),
            t = await o.K.getAfterRefresh(u).then(s.Hg),
            n = await o.K.getAfterRefresh(l).then(s.Hg);
        return null != e && null != t
            ? {
                  uuid: e,
                  initialized: t,
                  lastUsed: n
              }
            : null;
    } catch (e) {
        return a.Z.captureException(e), null;
    }
}
function g() {
    let e = o.K.get(c),
        t = (0, s.Hg)(o.K.get(u)),
        n = (0, s.Hg)(o.K.get(l));
    return null != e && null != t
        ? {
              uuid: e,
              initialized: t,
              lastUsed: n
          }
        : null;
}
function E() {
    let e = g();
    return null == e || (0, s.qK)(e) ? null : e.uuid;
}
function b() {
    let e = E(),
        t = (0, i.getSuperProperties)();
    (null == t ? void 0 : t.client_heartbeat_session_id) !== e && (0, i.extendSuperProperties)({ client_heartbeat_session_id: e });
}
