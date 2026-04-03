n.d(t, { A: () => s });
var i = n(73153),
    a = n(272355),
    l = n(287809);
class r extends a.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            i.h.subscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            i.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            i.h.unsubscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            i.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = l.default.getCurrentUser();
        t?.email == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let s = new r();
