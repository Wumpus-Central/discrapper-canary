i.d(t, { n: () => g });
var l = i(627968),
    s = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(534514),
    c = i(834730),
    d = i(17928),
    o = i(939249),
    u = i(881636),
    m = i(661531),
    h = i(71393),
    x = i(365258),
    j = i(926418),
    v = i(985018),
    f = i(563215);
function g(e) {
    let { guildIds: t, direction: i, onClick: n } = e,
        g = (0, s.useMemo)(() => (0, x.AB)(t), [t]),
        I = (0, d.bG)([h.A], () => h.A.getGuild(g[0])),
        A = i === x.AI.RESTRICTING ? v.intl.string(v.t.e6Kpa7) : v.intl.string(v.t.cy4G4y),
        p = I?.name ?? "",
        _ = null != I && g.length > 1,
        C = null != n ? o.D : "div";
    return (0, l.jsxs)(C, {
        className: a()(f.Nr, { [f.vk]: null != n }),
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: f.Bj,
                children: [
                    (0, l.jsx)(r.D, {
                        variant: "text-md/semibold",
                        children: v.intl.format(v.t["0fkj8J"], { count: g.length }),
                    }),
                    (0, l.jsxs)("div", {
                        className: f.jf,
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: i === x.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: f.Rh,
                                children: A,
                            }),
                            (0, l.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: f.SI,
                                children: v.intl.format(_ ? v.t["8ZLbvR"] : v.t["+NoTYm"], { guildName: p }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: f.hE,
                children: [
                    (0, l.jsx)(j.l, { guildIds: g, iconSize: 24 }),
                    null != n && (0, l.jsx)(u.u, { color: m.A.colors.TEXT_SUBTLE, size: "xs" }),
                ],
            }),
        ],
    });
}
