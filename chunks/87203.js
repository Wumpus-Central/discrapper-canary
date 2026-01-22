n.d(t, { s: () => m });
var r = n(827343),
    i = n(168943),
    l = n(63995),
    a = n(69407),
    s = n(96566),
    o = n(405018),
    c = n(222692),
    u = n(442353),
    d = n(734057),
    p = n(430452),
    f = n(383501),
    h = n(287809),
    A = n(652215),
    g = n(731854);
function m() {
    var e, t;
    if (!(0, i.L)()) return;
    let n = p.A.isVideoEnabled(),
        m = Object.values(p.A.getVideoDevices())[0],
        b = !1 === (null == (e = null == m ? void 0 : m.disabled) || e),
        _ = p.A.supportsInApp(g.O5.VIDEO) && p.A.supportsInApp(g.O5.DESKTOP_CAPTURE),
        E = d.A.getChannel(f.A.getChannelId()),
        O = null == (t = h.default.getCurrentUser()) ? void 0 : t.id;
    if (null == E || null == O) return;
    let { reachedLimit: y } = (0, o.M)(E);
    if (!y) {
        if (E.isGuildStageVoice()) {
            let e = l.A.getMutableParticipants(E.id, a.ip.SPEAKER),
                t =
                    null == e
                        ? void 0
                        : e.find((e) => {
                              let { user: t } = e;
                              return t.id === O;
                          });
            if (!(0, s.Bw)(E.guild_id) || !_ || null == t || t.voiceState.suppress) return;
        }
        return (
            n
                ? r.A.setVideoEnabled(!1)
                : !n && b
                  ? (0, u.A)(
                        () => {
                            r.A.setVideoEnabled(!0);
                        },
                        A.BRT.APP,
                        !0,
                    )
                  : b || (0, c.A)(),
            !1
        );
    }
}
