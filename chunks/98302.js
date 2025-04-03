n.d(t, { Z: () => b }), n(47120);
var r = n(846519),
    i = n(147913),
    o = n(603113),
    a = n(594190),
    s = n(131951),
    l = n(19780),
    c = n(885110),
    u = n(606304),
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = +f.Z.Millis.MINUTE;
class E extends i.Z {
    _initialize() {
        __OVERLAY__ ? (this.stores = new Map()) : ((this.stores = new Map().set(u.Z, () => this._handleSpeakingStoreChanged()).set(l.Z, () => this._handleRTCConnectionStoreChanged())), this._reset());
    }
    _reset() {
        (this._currentUserSpeaking = !1), (this._anyoneElseSpeaking = !1), null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = l.Z.getChannelId(),
                t = l.Z.getGuildId();
            (0, _.yw)(
                p.rMx.START_SPEAKING,
                m(
                    {
                        mode: s.Z.getMode(),
                        priority: u.Z.isCurrentUserPrioritySpeaking(),
                        channel: e,
                        server: t,
                        channel_id: e,
                        guild_id: t,
                        rtc_connection_id: l.Z.getRTCConnectionId(),
                        media_session_id: l.Z.getMediaSessionId(),
                        voice_state_count: d.ZP.countVoiceStatesForChannel(this._voiceChannelId)
                    },
                    this.getGameMetadata(),
                    l.Z.getPacketStats()
                )
            );
        }
    }
    _trackStartListening() {
        if (s.Z.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = l.Z.getChannelId(),
            t = l.Z.getGuildId();
        (0, _.yw)(
            p.rMx.START_LISTENING,
            m(
                {
                    mute: s.Z.isMute(),
                    anyone_priority: u.Z.isAnyonePrioritySpeaking(),
                    channel: e,
                    server: t,
                    channel_id: e,
                    guild_id: t,
                    rtc_connection_id: l.Z.getRTCConnectionId(),
                    media_session_id: l.Z.getMediaSessionId(),
                    voice_state_count: d.ZP.countVoiceStatesForChannel(this._voiceChannelId)
                },
                this.getGameMetadata()
            )
        );
    }
    _terminate() {
        this._reset(), u.Z.removeChangeListener(this._handleSpeakingStoreChanged), l.Z.removeChangeListener(this._handleRTCConnectionStoreChanged);
    }
    getGameMetadata() {
        let e = c.Z.findActivity((e) => e.type === p.IIU.PLAYING),
            t = a.ZP.getCurrentGameForAnalytics();
        return {
            game_platform: (0, o.Z)(e),
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
                    if (((this._voiceChannelId = e), null == e)) return void this._reset();
                    null == this._reportInterval &&
                        ((this._reportInterval = new r.Xp()),
                        this._reportInterval.start(g, () => {
                            this._trackStartSpeaking(), this._trackStartListening();
                        }));
                }
            }),
            h(this, '_handleSpeakingStoreChanged', () => {
                let e = u.Z.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
                let t = u.Z.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
            });
    }
}
let b = new E();
