var i = r(47120);
var a = r(275726),
    o = r(904245),
    s = r(147913),
    l = r(314897),
    u = r(592125),
    c = r(375954),
    d = r(496675),
    f = r(944486),
    p = r(594174),
    h = r(146085),
    _ = r(96052),
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
class E extends s.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: n } = e;
        n.forEach((e) => {
            let { channelId: n, userId: r, suppress: i, requestToSpeakTimestamp: s } = e;
            if (f.Z.getVoiceChannelId() === n && !!i && null != n && r !== l.default.getId()) {
                if (d.Z.can(h.yP, u.Z.getChannel(n))) {
                    if (null != s) {
                        let e = p.default.getUser(r);
                        null != e && (0, _.U)(n, e, s);
                    } else {
                        let e = c.Z.getMessages(n).findNewest((e) => e.type === a.u.STAGE_RAISE_HAND && e.hasFlag(m.iLy.EPHEMERAL) && e.author.id === r);
                        null != e && o.Z.deleteMessage(n, e.id, !0);
                    }
                }
            }
        });
    }
    constructor(...e) {
        super(...e), g(this, 'actions', { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
n.Z = new E();
