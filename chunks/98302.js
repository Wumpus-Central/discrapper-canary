var i = r(47120);
var a = r(846519),
    o = r(147913),
    s = r(603113),
    l = r(594190),
    u = r(131951),
    c = r(19780),
    d = r(885110),
    f = r(606304),
    p = r(938475),
    h = r(70956),
    _ = r(367907),
    m = r(981631);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = 1 * h.Z.Millis.MINUTE;
class v extends o.Z {
    _initialize() {
        __OVERLAY__ ? (this.stores = new Map()) : ((this.stores = new Map().set(f.Z, () => this._handleSpeakingStoreChanged()).set(c.Z, () => this._handleRTCConnectionStoreChanged())), this._reset());
    }
    _reset() {
        (this._currentUserSpeaking = !1), (this._anyoneElseSpeaking = !1), null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = c.Z.getChannelId(),
                n = c.Z.getGuildId();
            (0, _.yw)(m.rMx.START_SPEAKING, {
                mode: u.Z.getMode(),
                priority: f.Z.isCurrentUserPrioritySpeaking(),
                channel: e,
                server: n,
                channel_id: e,
                guild_id: n,
                rtc_connection_id: c.Z.getRTCConnectionId(),
                media_session_id: c.Z.getMediaSessionId(),
                voice_state_count: p.ZP.countVoiceStatesForChannel(this._voiceChannelId),
                ...this.getGameMetadata(),
                ...c.Z.getPacketStats()
            });
        }
    }
    _trackStartListening() {
        if (u.Z.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = c.Z.getChannelId(),
            n = c.Z.getGuildId();
        (0, _.yw)(m.rMx.START_LISTENING, {
            mute: u.Z.isMute(),
            anyone_priority: f.Z.isAnyonePrioritySpeaking(),
            channel: e,
            server: n,
            channel_id: e,
            guild_id: n,
            rtc_connection_id: c.Z.getRTCConnectionId(),
            media_session_id: c.Z.getMediaSessionId(),
            voice_state_count: p.ZP.countVoiceStatesForChannel(this._voiceChannelId),
            ...this.getGameMetadata()
        });
    }
    _terminate() {
        this._reset(), f.Z.removeChangeListener(this._handleSpeakingStoreChanged), c.Z.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = d.Z.findActivity((e) => e.type === m.IIU.PLAYING),
            n = l.ZP.getCurrentGameForAnalytics();
        return {
            game_platform: (0, s.Z)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != n ? n.exeName : null,
            game_id: null != e ? e.application_id : null
        };
    }
    constructor(...e) {
        super(...e),
            g(this, '_currentUserSpeaking', !1),
            g(this, '_anyoneElseSpeaking', !1),
            g(this, '_voiceChannelId', void 0),
            g(this, '_reportInterval', void 0),
            g(this, '_handleRTCConnectionStoreChanged', () => {
                let e = c.Z.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (((this._voiceChannelId = e), null == e)) {
                        this._reset();
                        return;
                    }
                    null == this._reportInterval &&
                        ((this._reportInterval = new a.Xp()),
                        this._reportInterval.start(E, () => {
                            this._trackStartSpeaking(), this._trackStartListening();
                        }));
                }
            }),
            g(this, '_handleSpeakingStoreChanged', () => {
                let e = f.Z.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
                let n = f.Z.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== n && ((this._anyoneElseSpeaking = n), this._trackStartListening());
            });
    }
}
n.Z = new v();
