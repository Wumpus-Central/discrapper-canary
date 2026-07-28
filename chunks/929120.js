t.d(s, { n: () => N });
var l = t(477900),
    i = t(582128),
    n = t(503698),
    a = t.n(n),
    d = t(297264),
    u = t(834730),
    r = t(17928),
    c = t(939249),
    m = t(881636),
    o = t(661531),
    x = t(71393),
    h = t(365258),
    A = t(926418),
    f = t(375708),
    j = t(975783);
function N(e) {
    let { guildIds: s, direction: t, onClick: n } = e,
        N = (0, i.useMemo)(() => (0, h.AB)(s), [s]),
        p = (0, r.bG)([x.A], () => x.A.getGuild(N[0])),
        v = t === h.AI.RESTRICTING ? f.intl.string(f.t.e6Kpa7) : f.intl.string(f.t.cy4G4y),
        I = p?.name ?? "",
        G = null != p && N.length > 1,
        S = null != n ? c.D : "div";
    return (0, l.jsxs)(S, {
        className: a()(j.Nr, { [j.vk]: null != n }),
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: j.Bj,
                children: [
                    (0, l.jsx)(d.D, {
                        variant: "text-md/semibold",
                        children: f.intl.format(f.t["0fkj8J"], { count: N.length }),
                    }),
                    (0, l.jsxs)("div", {
                        className: j.jf,
                        children: [
                            (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: t === h.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: j.Rh,
                                children: v,
                            }),
                            (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: j.SI,
                                children: f.intl.format(G ? f.t["8ZLbvR"] : f.t["+NoTYm"], { guildName: I }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: j.hE,
                children: [
                    (0, l.jsx)(A.l, { guildIds: N, iconSize: 24 }),
                    null != n && (0, l.jsx)(m.u, { color: o.A.colors.TEXT_SUBTLE, size: "xs" }),
                ],
            }),
        ],
    });
}
