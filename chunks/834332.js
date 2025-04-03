n.d(t, { Z: () => g }), n(47120);
var r = n(275726),
    i = n(904245),
    o = n(147913),
    a = n(314897),
    s = n(592125),
    l = n(375954),
    c = n(496675),
    u = n(944486),
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
class m extends o.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: o, requestToSpeakTimestamp: h } = e;
            if (u.Z.getVoiceChannelId() === t && o && null != t && n !== a.default.getId() && c.Z.can(f.yP, s.Z.getChannel(t)))
                if (null != h) {
                    let e = d.default.getUser(n);
                    null != e && (0, _.U)(t, e, h);
                } else {
                    let e = l.Z.getMessages(t).findNewest((e) => e.type === r.u.STAGE_RAISE_HAND && e.hasFlag(p.iLy.EPHEMERAL) && e.author.id === n);
                    null != e && i.Z.deleteMessage(t, e.id, !0);
                }
        });
    }
    constructor(...e) {
        super(...e), h(this, 'actions', { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
let g = new m();
