n.d(t, { Z: () => d }), n(47120);
var i = n(570140),
    r = n(317770),
    a = n(280837),
    s = n(592125),
    o = n(914010),
    l = n(823379);
function u(e, t, n) {
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
class c extends r.Z {
    _initialize() {
        i.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.subscribe('LOGOUT', this.handleLogout);
    }
    _terminate() {
        i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), i.Z.unsubscribe('LOGOUT', this.handleLogout);
    }
    constructor(...e) {
        super(...e),
            u(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e;
                if (null != t) {
                    let e = s.Z.getChannel(t);
                    if (null == e || e.isGuildStageVoice()) return;
                }
                this.terminate();
                let i = null == t ? null : null != n ? n : null;
                this.handleDisconnectFromStageChannel(i);
            }),
            u(this, 'handleDisconnectFromStageChannel', (e) => {
                let t = o.Z.getGuildId();
                (0, a.O)([t, e].filter(l.lm));
            }),
            u(this, 'handleLogout', () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null);
            });
    }
}
let d = new c();
