"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(956793),
    l = n(58149),
    u = n(688810),
    c = n(48435),
    d = n(976860),
    _ = n(961350),
    f = n(954571),
    p = n(855187),
    h = n(384059),
    m = n(652215),
    E = n(818348),
    g = n(731854),
    A = n(985018);
function I(e) {
    let { onClose: t, channel: n } = e,
        { analyticsLocations: I } = (0, u.Ay)(),
        T = (0, s.bG)([_.default], () => _.default.getId()),
        S = (0, c.H)({ deviceType: g.oh.VIDEO_INPUT, analyticsLocations: I, asSubmenu: !0 }),
        y = (0, p.A)(T),
        v = (0, i.useCallback)(() => {
            (0, h.X)(I[0], h.O.JOIN_VIDEO_CALL),
                f.default.track(m.HAw.RING_CALL_ACCEPTED, { location: I[0], guild_id: n.guild_id, ...(0, l.dI)(n) }),
                o.default.selectVoiceChannel(n.id, !0),
                (0, d.uh)(n.guild_id ?? m.ME, n.id),
                t();
        }, [t, I, n]);
    return (0, r.jsx)(a.W1t, {
        navId: "join-call-context",
        onSelect: E.FX,
        onInteraction: E.FX,
        onClose: t,
        "aria-label": A.intl.string(A.t["f+QbEQ"]),
        children: (0, r.jsxs)(a.rXV, {
            children: [
                (0, r.jsx)(a.Drp, {
                    id: "join-video",
                    action: v,
                    label: A.intl.string(A.t["YbjQQ/"]),
                    leadingAccessory: { type: "icon", icon: a.npA },
                }),
                S,
                y,
            ],
        }),
    });
}
