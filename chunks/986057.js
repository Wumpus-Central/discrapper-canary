n.d(t, { Z: () => h }), n(47120);
var i = n(846027),
    r = n(147913),
    a = n(353926),
    s = n(131951),
    o = n(19780),
    l = n(626135),
    u = n(743498),
    c = n(875527),
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
function _() {
    return (0, c.wt)({
        location: 'VoiceFilterLoopbackManager',
        autoTrackExposure: !1
    });
}
class p extends r.Z {
    handleExperimentStateChange() {
        !_() && s.Z.getVoiceFilterPlaybackEnabled() && (0, u._j)(!1);
    }
    handleRtcConnectionState(e) {
        let { state: t } = e,
            n = s.Z.getActiveVoiceFilter();
        if (!_() || null == n) return;
        let r = s.Z.getVoiceFilterPlaybackEnabled();
        t === d.hes.RTC_CONNECTED ? i.Z.setLoopback(r) : t === d.hes.RTC_DISCONNECTED && i.Z.setLoopback(!1);
    }
    handleLoopbackToggle(e) {
        var t;
        let { enabled: n } = e;
        l.default.track(d.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
            active_voice_filter_id: null !== (t = s.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            enabled: n
        }),
            o.Z.isConnected() && i.Z.setLoopback(n);
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
            f(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRtcConnectionState,
                VOICE_FILTER_LOOPBACK_TOGGLE: this.handleLoopbackToggle,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied
            }),
            f(this, 'stores', new Map().set(a.Z, this.handleExperimentStateChange));
    }
}
let h = new p();
