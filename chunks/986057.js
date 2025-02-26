n.d(t, { Z: () => g }), n(47120);
var r = n(846027),
    i = n(147913),
    o = n(353926),
    a = n(294629),
    s = n(592125),
    l = n(131951),
    c = n(19780),
    u = n(743498),
    d = n(875527);
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
    return (0, d.wt)({
        location: 'VoiceFilterLoopbackManager',
        autoTrackExposure: !1
    });
}
function p() {
    if (!_() || !l.Z.getVoiceFilterPlaybackEnabled() || !c.Z.isConnected() || null == l.Z.getActiveVoiceFilter()) return !1;
    let e = c.Z.getChannelId(),
        t = null != e ? s.Z.getChannel(e) : null,
        { mute: n, selfMute: r, suppress: i } = (0, a.b)({ channel: t });
    return !(n || r || i);
}
class h extends i.Z {
    handleExperimentStateChange() {
        !_() && l.Z.getVoiceFilterPlaybackEnabled() && (0, u._j)(!1);
    }
    updateLoopbackState() {
        let e = p();
        e !== l.Z.getLoopbackReasons().has('voice_filter') && r.Z.setLoopback('voice_filter', e);
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                VOICE_FILTER_LOOPBACK_TOGGLE: this.updateLoopbackState,
                RTC_CONNECTION_STATE: this.updateLoopbackState,
                VOICE_FILTER_APPLIED: this.updateLoopbackState,
                AUDIO_TOGGLE_SELF_MUTE: this.updateLoopbackState,
                AUDIO_SET_TEMPORARY_SELF_MUTE: this.updateLoopbackState,
                AUDIO_SET_SELF_MUTE: this.updateLoopbackState
            }),
            f(this, 'stores', new Map().set(o.Z, this.handleExperimentStateChange));
    }
}
let g = new h();
