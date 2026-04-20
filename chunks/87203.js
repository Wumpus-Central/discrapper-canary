n.d(t, { s: () => g });
var i = n(827343),
    l = n(63995),
    a = n(69407),
    r = n(96566),
    s = n(405018),
    o = n(222692),
    d = n(442353),
    c = n(734057),
    u = n(430452),
    A = n(383501),
    h = n(287809),
    _ = n(652215),
    m = n(731854);
function g() {
    let e = u.Ay.isVideoEnabled(),
        t = Object.values(u.Ay.getVideoDevices())[0],
        n = t?.disabled ?? !0,
        g = u.Ay.supportsInApp(m.O5.VIDEO) && u.Ay.supportsInApp(m.O5.DESKTOP_CAPTURE),
        p = c.A.getChannel(A.A.getChannelId()),
        E = h.default.getCurrentUser()?.id;
    if (null == p || null == E) return;
    let { reachedLimit: I } = (0, s.M)(p);
    if (!I) {
        if (p.isGuildStageVoice()) {
            let e = l.A.getMutableParticipants(p.id, a.ip.SPEAKER),
                t = e?.find((e) => {
                    let { user: t } = e;
                    return t.id === E;
                });
            if (!(0, r.Bw)(p.guild_id) || !g || null == t || t.voiceState.suppress) return;
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
