i.d(e, { A: () => a });
var t = i(228366),
    n = i(272355),
    o = i(287809);
class r extends n.A {
    _initialize() {
        t.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            t.h.subscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            t.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        t.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            t.h.unsubscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            t.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let s = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            e = o.default.getCurrentUser();
        e?.email == null ||
            (s && e.isStaff()) ||
            (e.username.startsWith("mtcls") || !s ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let a = new r();
