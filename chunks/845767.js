n.d(t, { Z: () => a }), n(47120), n(301563);
var r = n(570140),
    i = n(317770),
    l = n(594174);
class o extends i.Z {
    _initialize() {
        r.Z.subscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), r.Z.subscribe('LOGOUT', this._maybeStopDevSession);
    }
    _terminate() {
        r.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), r.Z.unsubscribe('LOGOUT', this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = l.default.getCurrentUser();
        if ((null == e ? void 0 : e.email) == null || e.isStaff()) return;
        let [t] = e.email.split('@'),
            n = t.includes('+'),
            r = e.username.startsWith('mtcls');
        n && r ? window.DiscordDevSession.start() : window.DiscordDevSession.stop();
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let a = new o();
