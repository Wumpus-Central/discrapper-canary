n.d(t, { Z: () => g }), n(388685);
var r = n(275726),
    i = n(904245),
    a = n(147913),
    o = n(314897),
    s = n(592125),
    l = n(375954),
    c = n(496675),
    u = n(944486),
    d = n(594174),
    f = n(146085),
    p = n(96052),
    _ = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class h extends a.Z {
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            let { channelId: t, userId: n, suppress: a, requestToSpeakTimestamp: m } = e;
            if (
                u.Z.getVoiceChannelId() === t &&
                a &&
                null != t &&
                n !== o.default.getId() &&
                c.Z.can(f.yP, s.Z.getChannel(t))
            )
                if (null != m) {
                    let e = d.default.getUser(n);
                    null != e && (0, p.U)(t, e, m);
                } else {
                    let e = l.Z.getMessages(t).findNewest(
                        (e) => e.type === r.u.STAGE_RAISE_HAND && e.hasFlag(_.iLy.EPHEMERAL) && e.author.id === n,
                    );
                    null != e && i.Z.deleteMessage(t, e.id, !0);
                }
        });
    }
    constructor(...e) {
        super(...e), m(this, "actions", { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates });
    }
}
let g = new h();
