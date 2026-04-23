n.d(t, { s: () => p });
var i = n(827343),
    r = n(63995),
    a = n(69407),
    l = n(96566),
    s = n(405018),
    o = n(222692),
    d = n(442353),
    u = n(734057),
    c = n(430452),
    A = n(383501),
    h = n(287809),
    _ = n(652215),
    E = n(731854);
function p() {
    let e = c.Ay.isVideoEnabled(),
        t = Object.values(c.Ay.getVideoDevices())[0],
        n = t?.disabled ?? !0,
        p = c.Ay.supportsInApp(E.O5.VIDEO) && c.Ay.supportsInApp(E.O5.DESKTOP_CAPTURE),
        m = u.A.getChannel(A.A.getChannelId()),
        g = h.default.getCurrentUser()?.id;
    if (null == m || null == g) return;
    let { reachedLimit: I } = (0, s.M)(m);
    if (!I) {
        if (m.isGuildStageVoice()) {
            let e = r.A.getMutableParticipants(m.id, a.ip.SPEAKER),
                t = e?.find((e) => {
                    let { user: t } = e;
                    return t.id === g;
                });
            if (!(0, l.Bw)(m.guild_id) || !p || null == t || t.voiceState.suppress) return;
        }
        return (
            e
                ? i.A.setVideoEnabled(!1)
                : !1 === n
                  ? (0, d.A)(
                        () => {
                            i.A.setVideoEnabled(!0);
                        },
                        _.BRT.APP,
                        !0,
                    )
                  : (0, o.A)(),
            !1
        );
    }
}
