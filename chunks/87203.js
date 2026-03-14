n.d(t, { s: () => p });
var i = n(827343),
    r = n(168943),
    l = n(63995),
    a = n(69407),
    s = n(96566),
    o = n(405018),
    d = n(222692),
    c = n(442353),
    u = n(734057),
    A = n(430452),
    h = n(383501),
    _ = n(287809),
    m = n(652215),
    g = n(731854);
function p() {
    if (!(0, r.L)()) return;
    let e = A.Ay.isVideoEnabled(),
        t = Object.values(A.Ay.getVideoDevices())[0],
        n = t?.disabled ?? !0,
        p = A.Ay.supportsInApp(g.O5.VIDEO) && A.Ay.supportsInApp(g.O5.DESKTOP_CAPTURE),
        E = u.A.getChannel(h.A.getChannelId()),
        I = _.default.getCurrentUser()?.id;
    if (null == E || null == I) return;
    let { reachedLimit: f } = (0, o.M)(E);
    if (!f) {
        if (E.isGuildStageVoice()) {
            let e = l.A.getMutableParticipants(E.id, a.ip.SPEAKER),
                t = e?.find((e) => {
                    let { user: t } = e;
                    return t.id === I;
                });
            if (!(0, s.Bw)(E.guild_id) || !p || null == t || t.voiceState.suppress) return;
        }
        return (
            e
                ? i.A.setVideoEnabled(!1)
                : !1 === n
                  ? (0, c.A)(
                        () => {
                            i.A.setVideoEnabled(!0);
                        },
                        m.BRT.APP,
                        !0,
                    )
                  : (0, d.A)(),
            !1
        );
    }
}
