var i = r(47120);
var a = r(570140),
    o = r(317770),
    s = r(280837),
    l = r(592125),
    u = r(914010),
    c = r(823379);
function d(e, n, r) {
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
class f extends o.Z {
    _initialize() {
        a.Z.subscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.subscribe('LOGOUT', this.handleLogout);
    }
    _terminate() {
        a.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.handleVoiceChannelSelect), a.Z.unsubscribe('LOGOUT', this.handleLogout);
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: n, guildId: r } = e;
                if (null != n) {
                    let e = l.Z.getChannel(n);
                    if (null == e || e.isGuildStageVoice()) return;
                }
                this.terminate();
                let i = null == n ? null : null != r ? r : null;
                this.handleDisconnectFromStageChannel(i);
            }),
            d(this, 'handleDisconnectFromStageChannel', (e) => {
                let n = u.Z.getGuildId();
                (0, s.O)([n, e].filter(c.lm));
            }),
            d(this, 'handleLogout', () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null);
            });
    }
}
n.Z = new f();
