n.d(t, { A: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(861672),
    r = n(477782),
    o = n(428689),
    d = n(956793),
    c = n(58149),
    u = n(688810),
    h = n(270816),
    _ = n(976860),
    g = n(961350),
    A = n(954571),
    f = n(855187),
    m = n(384059),
    v = n(652215),
    p = n(818348),
    x = n(731854),
    b = n(985018);
function I(e) {
    let { onClose: t, channel: n } = e,
        { analyticsLocations: I } = (0, u.Ay)(),
        E = (0, s.bG)([g.default], () => g.default.getId()),
        C = (0, h.H)({ deviceType: x.oh.VIDEO_INPUT, analyticsLocations: I, asSubmenu: !0 }),
        D = (0, f.A)(E),
        y = (0, l.useCallback)(() => {
            (0, m.X)(I[0], m.O.JOIN_VIDEO_CALL),
                A.default.track(v.HAw.RING_CALL_ACCEPTED, { location: I[0], guild_id: n.guild_id, ...(0, c.dI)(n) }),
                d.default.selectVoiceChannel(n.id, !0),
                (0, _.uh)(n.guild_id ?? v.ME, n.id),
                t();
        }, [t, I, n]);
    return (0, i.jsx)(a.W, {
        navId: "join-call-context",
        onSelect: p.FX,
        onInteraction: p.FX,
        onClose: t,
        "aria-label": b.intl.string(b.t["f+QbEQ"]),
        children: (0, i.jsxs)(r.rX, {
            children: [
                (0, i.jsx)(r.Dr, {
                    id: "join-video",
                    action: y,
                    label: b.intl.string(b.t["YbjQQ/"]),
                    leadingAccessory: { type: "icon", icon: o.n },
                }),
                C,
                D,
            ],
        }),
    });
}
