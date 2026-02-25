i.d(t, { n: () => m });
var s = i(627968),
    n = i(64700),
    a = i(158954),
    l = i(311907),
    r = i(71393),
    d = i(365258),
    c = i(704037),
    u = i(985018),
    o = i(593636);
function m(e) {
    let { guildIds: t, direction: i } = e,
        m = (0, n.useMemo)(() => (0, d.AB)(t), [t]),
        x = (0, l.bG)([r.A], () => r.A.getGuild(m[0])),
        h = i === d.AI.RESTRICTING ? u.intl.string(u.t.e6Kpa7) : u.intl.string(u.t.cy4G4y),
        j = x?.name ?? "",
        f = null != x && m.length > 1;
    return (0, s.jsxs)("div", {
        className: o.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: o.Bj,
                children: [
                    (0, s.jsx)(a.DZT, {
                        variant: "text-md/semibold",
                        children: u.intl.format(u.t["0fkj8J"], { count: m.length }),
                    }),
                    (0, s.jsxs)("div", {
                        className: o.jf,
                        children: [
                            (0, s.jsx)(a.EYj, {
                                variant: "text-sm/medium",
                                color: i === d.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: o.Rh,
                                children: h,
                            }),
                            (0, s.jsx)(a.EYj, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: o.SI,
                                children: u.intl.format(f ? u.t["8ZLbvR"] : u.t["+NoTYm"], { guildName: j }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(c.l, { guildIds: m, iconSize: 24 }),
        ],
    });
}
