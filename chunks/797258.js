n.d(t, { Z: () => p });
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
function _(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class f extends (r = o.ZP.Store) {
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
        return null != t ? t.activities : u;
    }
    getHiddenActivities() {
        let e = l.default.getSessionId(),
            t = a().find(d, (t) => t.active && t.sessionId !== e);
        return null != t && null != t.hiddenActivities ? t.hiddenActivities : u;
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
c(f, 'displayName', 'SessionsStore');
let p = new f(s.Z, {
    CONNECTION_OPEN: _,
    SESSIONS_REPLACE: _
});
