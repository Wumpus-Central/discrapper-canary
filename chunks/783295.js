var i = r(47120);
var a = r(147913),
    o = r(314897),
    s = r(592125),
    l = r(242291),
    u = r(981631);
function c(e, n, r) {
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
class d extends a.Z {
    constructor(...e) {
        super(...e),
            c(this, 'prevConnected', !1),
            c(this, 'tempMutedChannel', null),
            c(this, 'handleRTCConnectionState', (e) => {
                let { state: n, channelId: r } = e,
                    i = n === u.hes.RTC_CONNECTED,
                    a = i && !this.prevConnected,
                    o = s.Z.getChannel(r),
                    c = null == o ? void 0 : o.getGuildId(),
                    d = this.tempMutedChannel === r;
                a && null != c && (d ? (this.tempMutedChannel = null) : (0, l.M2)(c)), (this.prevConnected = i);
            }),
            c(this, 'handleMute', (e) => {
                let { channelId: n } = e;
                this.tempMutedChannel = n;
            }),
            c(this, 'handleVoiceStateUpdates', (e) => {
                let { voiceStates: n } = e,
                    r = o.default.getId(),
                    i = o.default.getSessionId();
                n.forEach((e) => {
                    let { userId: n, channelId: a, sessionId: o } = e;
                    n === r && o !== i && null != a && (this.tempMutedChannel = a);
                });
            }),
            c(this, 'actions', {
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
            });
    }
}
n.Z = new d();
