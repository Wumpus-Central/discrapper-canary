n.d(t, { s: () => g });
var i = n(827343),
    r = n(168943),
    a = n(63995),
    l = n(69407),
    s = n(96566),
    o = n(405018),
    d = n(222692),
    c = n(442353),
    u = n(734057),
    A = n(430452),
    h = n(383501),
    _ = n(287809),
    m = n(652215),
    p = n(731854);
function g() {
    if (!(0, r.L)()) return;
    let e = A.A.isVideoEnabled(),
        t = Object.values(A.A.getVideoDevices())[0],
        n = !1 === (t?.disabled ?? !0),
        g = A.A.supportsInApp(p.O5.VIDEO) && A.A.supportsInApp(p.O5.DESKTOP_CAPTURE),
        E = u.A.getChannel(h.A.getChannelId()),
        f = _.default.getCurrentUser()?.id;
    if (null == E || null == f) return;
    let { reachedLimit: I } = (0, o.M)(E);
    if (!I) {
        if (E.isGuildStageVoice()) {
            let e = a.A.getMutableParticipants(E.id, l.ip.SPEAKER),
                t = e?.find((e) => {
                    let { user: t } = e;
                    return t.id === f;
                });
            if (!(0, s.Bw)(E.guild_id) || !g || null == t || t.voiceState.suppress) return;
        }
        return (
            e
                ? i.A.setVideoEnabled(!1)
                : !e && n
                  ? (0, c.A)(
                        () => {
                            i.A.setVideoEnabled(!0);
                        },
                        m.BRT.APP,
                        !0,
                    )
                  : n || (0, d.A)(),
            !1
        );
    }
}
