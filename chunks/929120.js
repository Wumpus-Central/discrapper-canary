i.d(t, { n: () => j });
var s = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    r = i(158954),
    c = i(311907),
    d = i(397927),
    o = i(71393),
    u = i(365258),
    m = i(704037),
    x = i(985018),
    h = i(593636);
function j(e) {
    let { guildIds: t, direction: i, onClick: n } = e,
        j = (0, l.useMemo)(() => (0, u.AB)(t), [t]),
        T = (0, c.bG)([o.A], () => o.A.getGuild(j[0])),
        I = i === u.AI.RESTRICTING ? x.intl.string(x.t.e6Kpa7) : x.intl.string(x.t.cy4G4y),
        f = T?.name ?? "",
        v = null != T && j.length > 1,
        g = null != n ? d.DUT : "div";
    return (0, s.jsxs)(g, {
        className: a()(h.Nr, { [h.vk]: null != n }),
        onClick: n,
        children: [
            (0, s.jsxs)("div", {
                className: h.Bj,
                children: [
                    (0, s.jsx)(r.DZT, {
                        variant: "text-md/semibold",
                        children: x.intl.format(x.t["0fkj8J"], { count: j.length }),
                    }),
                    (0, s.jsxs)("div", {
                        className: h.jf,
                        children: [
                            (0, s.jsx)(r.EYj, {
                                variant: "text-sm/medium",
                                color: i === u.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: h.Rh,
                                children: I,
                            }),
                            (0, s.jsx)(r.EYj, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: h.SI,
                                children: x.intl.format(v ? x.t["8ZLbvR"] : x.t["+NoTYm"], { guildName: f }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: h.hE,
                children: [
                    (0, s.jsx)(m.l, { guildIds: j, iconSize: 24 }),
                    null != n && (0, s.jsx)(d.uhT, { color: d.LU0.colors.TEXT_SUBTLE, size: "xs" }),
                ],
            }),
        ],
    });
}
