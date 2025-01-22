var i,
    a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(570140),
    u = r(314897);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = Object.freeze([]),
    f = {};
function p(e) {
    (f = {}),
        e.sessions.forEach((e) => {
            f[e.sessionId] = e;
        });
}
class h extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default);
    }
    getSessions() {
        return f;
    }
    getSession() {
        let e = u.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = u.default.getSessionId(),
            n = o().find(f, (n) => n.active && n.sessionId !== e);
        return null != n ? n.activities : d;
    }
    getSessionById(e) {
        return f[e];
    }
    getActiveSession() {
        return o().find(f, (e) => {
            let { active: n } = e;
            return n;
        });
    }
}
c(h, 'displayName', 'SessionsStore'),
    (n.Z = new h(l.Z, {
        CONNECTION_OPEN: p,
        SESSIONS_REPLACE: p
    }));
