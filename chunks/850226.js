l.d(t, { A: () => E });
var n = l(627968),
    i = l(64700),
    s = l(311907),
    a = l(861672),
    r = l(477782),
    o = l(428689),
    c = l(956793),
    d = l(58149),
    u = l(688810),
    h = l(270816),
    g = l(976860),
    f = l(961350),
    A = l(954571),
    v = l(855187),
    _ = l(384059),
    m = l(652215),
    p = l(818348),
    x = l(731854),
    C = l(985018);
function E(e) {
    let { onClose: t, channel: l } = e,
        { analyticsLocations: E } = (0, u.Ay)(),
        I = (0, s.bG)([f.default], () => f.default.getId()),
        N = (0, h.H)({ deviceType: x.oh.VIDEO_INPUT, analyticsLocations: E, asSubmenu: !0 }),
        w = (0, v.A)(I),
        b = (0, i.useCallback)(() => {
            (0, _.X)(E[0], _.O.JOIN_VIDEO_CALL),
                A.default.track(m.HAw.RING_CALL_ACCEPTED, { location: E[0], guild_id: l.guild_id, ...(0, d.dI)(l) }),
                c.default.selectVoiceChannel(l.id, !0),
                (0, g.uh)(l.guild_id ?? m.ME, l.id),
                t();
        }, [t, E, l]);
    return (0, n.jsx)(a.W, {
        navId: "join-call-context",
        onSelect: p.FX,
        onInteraction: p.FX,
        onClose: t,
        "aria-label": C.intl.string(C.t["f+QbEQ"]),
        children: (0, n.jsxs)(r.rX, {
            children: [
                (0, n.jsx)(r.Dr, {
                    id: "join-video",
                    action: b,
                    label: C.intl.string(C.t["YbjQQ/"]),
                    leadingAccessory: { type: "icon", icon: o.n },
                }),
                N,
                w,
            ],
        }),
    });
}
