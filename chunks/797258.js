n.d(t, { Z: () => p });
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(314897);
function u(e, t, n) {
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
let c = Object.freeze([]),
    d = {};
function f(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class _ extends (i = s.ZP.Store) {
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
            t = a().find(d, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : c;
    }
    getSessionById(e) {
        return d[e];
    }
    getActiveSession() {
        return a().find(d, (e) => {
            let { active: t } = e;
            return t;
        });
    }
}
u(_, 'displayName', 'SessionsStore');
let p = new _(o.Z, {
    CONNECTION_OPEN: f,
    SESSIONS_REPLACE: f
});
