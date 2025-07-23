(n.d(t, { Z: () => y }), n(388685));
var r = n(846519),
    i = n(147913),
    a = n(603113),
    o = n(594190),
    s = n(509003),
    l = n(131951),
    c = n(19780),
    u = n(885110),
    d = n(606304),
    _ = n(938475),
    f = n(70956),
    p = n(367907),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
let E = +f.Z.Millis.MINUTE;
class b extends i.Z {
    _initialize() {
        __OVERLAY__ ? (this.stores = new Map()) : ((this.stores = new Map().set(d.Z, () => this._handleSpeakingStoreChanged()).set(c.Z, () => this._handleRTCConnectionStoreChanged())), this._reset());
    }
    _reset() {
        ((this._currentUserSpeaking = !1), (this._anyoneElseSpeaking = !1), null != this._reportInterval && (this._reportInterval.stop(), (this._reportInterval = null)));
    }
    _trackStartSpeaking() {
        if (this._currentUserSpeaking) {
            let e = c.Z.getChannelId(),
                t = c.Z.getGuildId();
            (0, p.yw)(
                h.rMx.START_SPEAKING,
                g(
                    {
                        mode: l.Z.getMode(),
                        priority: d.Z.isCurrentUserPrioritySpeaking(),
                        channel: e,
                        server: t,
                        channel_id: e,
                        guild_id: t,
                        rtc_connection_id: c.Z.getRTCConnectionId(),
                        media_session_id: c.Z.getMediaSessionId(),
                        voice_state_count: _.ZP.countVoiceStatesForChannel(this._voiceChannelId)
                    },
                    this.getGameMetadata(),
                    c.Z.getPacketStats()
                )
            );
        }
    }
    _trackStartListening() {
        if (l.Z.isDeaf() || !this._anyoneElseSpeaking) return;
        let e = c.Z.getChannelId(),
            t = c.Z.getGuildId();
        (0, p.yw)(
            h.rMx.START_LISTENING,
            g(
                {
                    mute: l.Z.isMute(),
                    anyone_priority: d.Z.isAnyonePrioritySpeaking(),
                    channel: e,
                    server: t,
                    channel_id: e,
                    guild_id: t,
                    rtc_connection_id: c.Z.getRTCConnectionId(),
                    media_session_id: c.Z.getMediaSessionId(),
                    voice_state_count: _.ZP.countVoiceStatesForChannel(this._voiceChannelId)
                },
                this.getGameMetadata()
            )
        );
    }
    _terminate() {
        (this._reset(), d.Z.removeChangeListener(this._handleSpeakingStoreChanged), c.Z.removeChangeListener(this._handleRTCConnectionStoreChanged));
    }
    getGameMetadata() {
        let e = u.Z.findActivity((e) => e.type === h.IIU.PLAYING),
            t = o.ZP.getCurrentGameForAnalytics();
        return {
            game_platform: (0, a.Z)(e),
            game_name: null != e ? e.name : null,
            game_exe_name: null != t ? t.exeName : null,
            game_id: null != e ? e.application_id : null,
            game_distributor: null != t ? t.distributor : null,
            game_distributor_game_id: null != t ? t.sku : null,
            game_metadata: null != t ? (0, s.sD)(t) : null
        };
    }
    constructor(...e) {
        (super(...e),
            m(this, '_currentUserSpeaking', !1),
            m(this, '_anyoneElseSpeaking', !1),
            m(this, '_voiceChannelId', void 0),
            m(this, '_reportInterval', void 0),
            m(this, '_handleRTCConnectionStoreChanged', () => {
                let e = c.Z.getChannelId();
                if (this._voiceChannelId !== e) {
                    if (((this._voiceChannelId = e), null == e)) return void this._reset();
                    null == this._reportInterval &&
                        ((this._reportInterval = new r.Xp()),
                        this._reportInterval.start(E, () => {
                            (this._trackStartSpeaking(), this._trackStartListening());
                        }));
                }
            }),
            m(this, '_handleSpeakingStoreChanged', () => {
                let e = d.Z.isCurrentUserSpeaking();
                this._currentUserSpeaking !== e && ((this._currentUserSpeaking = e), this._trackStartSpeaking());
                let t = d.Z.isAnyoneElseSpeaking();
                this._anyoneElseSpeaking !== t && ((this._anyoneElseSpeaking = t), this._trackStartListening());
            }));
    }
}
let y = new b();
