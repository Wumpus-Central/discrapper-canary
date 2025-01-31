n.d(t, { Z: () => g }), n(47120);
var i = n(275726),
    r = n(904245),
    a = n(147913),
    s = n(314897),
    o = n(592125),
    l = n(375954),
    u = n(496675),
    c = n(944486),
    d = n(594174),
    f = n(146085),
    _ = n(96052),
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
class m extends a.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: a, requestToSpeakTimestamp: h } = e;
            if (c.Z.getVoiceChannelId() === t && a && null != t && n !== s.default.getId() && u.Z.can(f.yP, o.Z.getChannel(t))) {
                if (null != h) {
                    let e = d.default.getUser(n);
                    null != e && (0, _.U)(t, e, h);
                } else {
                    let e = l.Z.getMessages(t).findNewest((e) => e.type === i.u.STAGE_RAISE_HAND && e.hasFlag(p.iLy.EPHEMERAL) && e.author.id === n);
                    null != e && r.Z.deleteMessage(t, e.id, !0);
                }
            }
        });
    }
    constructor(...e) {
        super(...e), h(this, 'actions', { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
let g = new m();
