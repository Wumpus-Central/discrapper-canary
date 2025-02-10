n.d(t, { Z: () => p }), n(47120);
var i = n(846027),
    r = n(147913),
    a = n(353926),
    s = n(131951),
    o = n(19780),
    l = n(743498),
    u = n(875527),
    c = n(981631);
function d(e, t, n) {
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
function f() {
    let { enabled: e } = u.c.getCurrentConfig({ location: 'VoiceFilterLoopbackManager' }, { autoTrackExposure: !1 });
    return e;
}
class _ extends r.Z {
    handleExperimentStateChange() {
        !f() && s.Z.getVoiceFilterPlaybackEnabled() && (0, l._j)(!1);
    }
    handleRtcConnectionState(e) {
        let { state: t } = e,
            n = s.Z.getActiveVoiceFilter();
        if (!f() || null == n) return;
        let r = s.Z.getVoiceFilterPlaybackEnabled();
        t === c.hes.RTC_CONNECTED ? i.Z.setLoopback(r) : t === c.hes.RTC_DISCONNECTED && i.Z.setLoopback(!1);
    }
    handleLoopbackToggle(e) {
        let { enabled: t } = e;
        o.Z.isConnected() && i.Z.setLoopback(t);
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t } = e,
            n = s.Z.getVoiceFilterPlaybackEnabled();
        if (null == t) {
            let e = s.Z.getLoopback();
            n && e && i.Z.setLoopback(!1);
        } else n && o.Z.isConnected() && i.Z.setLoopback(!0);
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRtcConnectionState,
                VOICE_FILTER_LOOPBACK_TOGGLE: this.handleLoopbackToggle,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied
            }),
            d(this, 'stores', new Map().set(a.Z, this.handleExperimentStateChange));
    }
}
let p = new _();
