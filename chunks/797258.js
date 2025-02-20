n.d(t, { Z: () => _ });
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(314897);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = Object.freeze([]),
    d = {};
function f(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class p extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    getSessions() {
        return d;
    }
    getSession() {
        let e = l.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = l.default.getSessionId(),
            t = o().find(d, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : u;
    }
    getSessionById(e) {
        return d[e];
    }
    getActiveSession() {
        return o().find(d, (e) => {
            let { active: t } = e;
            return t;
        });
    }
}
c(p, 'displayName', 'SessionsStore');
let _ = new p(s.Z, {
    CONNECTION_OPEN: f,
    SESSIONS_REPLACE: f
});
