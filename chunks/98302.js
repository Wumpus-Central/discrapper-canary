n.d(t, { Z: () => E }), n(47120);
var i = n(846519),
    r = n(147913),
    a = n(603113),
    s = n(594190),
    o = n(131951),
    l = n(19780),
    u = n(885110),
    c = n(606304),
    d = n(938475),
    f = n(70956),
    _ = n(367907),
    p = n(981631);
function h(e, t, n) {
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
let m = 1 * f.Z.Millis.MINUTE;
class g extends r.Z {
    _initialize() {
        __OVERLAY__ ? (this.stores = new Map()) : ((this.stores = new Map().set(c.Z, () => this._handleSpeakingStoreChanged()).set(l.Z, () => this._handleRTCConnectionStoreChanged())), this._reset());
    }
    _reset() {
        (this._currentUserSpeaking = !1), (this._anyoneElseSpeaking = !1), null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = l.Z.getChannelId(),
                t = l.Z.getGuildId();
            (0, _.yw)(p.rMx.START_SPEAKING, {
                mode: o.Z.getMode(),
                priority: c.Z.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: t,
                channel_id: e,
                guild_id: t,
                rtc_connection_id: l.Z.getRTCConnectionId(),
                media_session_id: l.Z.getMediaSessionId(),
                voice_state_count: d.ZP.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...l.Z.getPacketStats()
            });
        }
    }
    _trackStartListening() {
        if (o.Z.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = l.Z.getChannelId(),
            t = l.Z.getGuildId();
        (0, _.yw)(p.rMx.START_LISTENING, {
            mute: o.Z.isMute(),
            anyone_priority: c.Z.isAnyonePrioritySpeaking(),
            channel: e,
            server: t,
            channel_id: e,
            guild_id: t,
            rtc_connection_id: l.Z.getRTCConnectionId(),
            media_session_id: l.Z.getMediaSessionId(),
            voice_state_count: d.ZP.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata()
        });
    }
    _terminate() {
        this._reset(), c.Z.removeChangeListener(this._handleSpeakingStoreChanged), l.Z.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = u.Z.findActivity((e) => e.type === p.IIU.PLAYING),
            t = s.ZP.getCurrentGameForAnalytics();
        return {
            game_platform: (0, a.Z)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != t ? t.exeName : null,
            game_id: null != e ? e.application_id : null
        };
    }
    constructor(...e) {
        super(...e),
            h(this, '_currentUserSpeaking', !1),
            h(this, '_anyoneElseSpeaking', !1),
            h(this, '_voiceChannelId', void 0),
            h(this, '_reportInterval', void 0),
            h(this, '_handleRTCConnectionStoreChanged', () => {
                let e = l.Z.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (((this._voiceChannelId = e), null == e)) {
                        this._reset();
                        return;
                    }
                    null == this._reportInterval &&
                        ((this._reportInterval = new i.Xp()),
                        this._reportInterval.start(m, () => {
                            this._trackStartSpeaking(), this._trackStartListening();
                        }));
                }
            }),
            h(this, '_handleSpeakingStoreChanged', () => {
                let e = c.Z.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
                let t = c.Z.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
            });
    }
}
let E = new g();
