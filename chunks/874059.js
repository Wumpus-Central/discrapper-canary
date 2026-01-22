n.d(t, {
    A: () => s,
});
var r = n(73153),
    i = n(272355),
    l = n(287809);
class a extends i.A {
    _initialize() {
        r.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            r.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        r.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            r.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = l.default.getCurrentUser();
        (null == t ? void 0 : t.email) == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let s = new a();
