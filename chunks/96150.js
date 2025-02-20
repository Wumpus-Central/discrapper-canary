n.d(t, { Z: () => d }), n(47120);
var r = n(570140),
    i = n(317770),
    o = n(280837),
    a = n(592125),
    s = n(914010),
    l = n(823379);
function c(e, t, n) {
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
class u extends i.Z {
    _initialize() {
        r.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), r.Z.subscribe('LOGOUT', this.handleLogout);
    }
    _terminate() {
        r.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), r.Z.unsubscribe('LOGOUT', this.handleLogout);
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e;
                if (null != t) {
                    let e = a.Z.getChannel(t);
                    if (null == e || e.isGuildStageVoice()) return;
                }
                this.terminate();
                let r = null == t ? null : null != n ? n : null;
                this.handleDisconnectFromStageChannel(r);
            }),
            c(this, 'handleDisconnectFromStageChannel', (e) => {
                let t = s.Z.getGuildId();
                (0, o.O)([t, e].filter(l.lm));
            }),
            c(this, 'handleLogout', () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null);
            });
    }
}
let d = new u();
