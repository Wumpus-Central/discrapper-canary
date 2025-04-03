n.d(t, { Z: () => o });
var r = n(570140),
    i = n(317770),
    l = n(594174);
class a extends i.Z {
    _initialize() {
        r.Z.subscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), r.Z.subscribe('LOGOUT', this._maybeStopDevSession);
    }
    _terminate() {
        r.Z.unsubscribe('POST_CONNECTION_OPEN', this._maybeStartDevSession), r.Z.unsubscribe('LOGOUT', this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = 'production' === window.GLOBAL_ENV.PROJECT_ENV,
            t = l.default.getCurrentUser();
        if (!((null == t ? void 0 : t.email) == null || (e && t.isStaff()))) t.username.startsWith('mtcls') || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop();
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let o = new a();
