n.d(t, { Z: () => h }), n(47120);
var r = n(846027),
    i = n(147913),
    o = n(353926),
    a = n(131951),
    s = n(19780),
    l = n(626135),
    c = n(743498),
    u = n(875527),
    d = n(981631);
function f(e, t, n) {
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
function p() {
    return (0, u.wt)({
        location: 'VoiceFilterLoopbackManager',
        autoTrackExposure: !1
    });
}
class _ extends i.Z {
    handleExperimentStateChange() {
        !p() && a.Z.getVoiceFilterPlaybackEnabled() && (0, c._j)(!1);
    }
    handleRtcConnectionState(e) {
        let { state: t } = e,
            n = a.Z.getActiveVoiceFilter();
        if (!p() || null == n) return;
        let i = a.Z.getVoiceFilterPlaybackEnabled();
        t === d.hes.RTC_CONNECTED ? r.Z.setLoopback('voice_filter', i) : t === d.hes.RTC_DISCONNECTED && r.Z.setLoopback('voice_filter', !1);
    }
    handleLoopbackToggle(e) {
        var t;
        let { enabled: n } = e;
        l.default.track(d.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
            active_voice_filter_id: null !== (t = a.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            enabled: n
        }),
            s.Z.isConnected() && r.Z.setLoopback('voice_filter', n);
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t } = e,
            n = a.Z.getVoiceFilterPlaybackEnabled();
        null == t ? n && r.Z.setLoopback('voice_filter', !1) : n && s.Z.isConnected() && r.Z.setLoopback('voice_filter', !0);
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRtcConnectionState,
                VOICE_FILTER_LOOPBACK_TOGGLE: this.handleLoopbackToggle,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied
            }),
            f(this, 'stores', new Map().set(o.Z, this.handleExperimentStateChange));
    }
}
let h = new _();
