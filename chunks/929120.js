var l = i(477900),
    t = i(582128),
    n = i(503698),
    d = i.n(n),
    a = i(855986),
    r = i(939249),
    u = i(534514),
    c = i(834730),
    o = i(881636),
    m = i(646514),
    h = i(71393),
    x = i(365258),
    A = i(926418),
    f = i(792996),
    j = i(286312);
i.d(
    s,
    {},
    {
        n: function (e) {
            let { guildIds: s, direction: i, onClick: n } = e,
                v = (0, t.useMemo)(() => (0, x.AB)(s), [s]),
                I = (0, a.bG)([h.A], () => h.A.getGuild(v[0])),
                N = i === x.AI.RESTRICTING ? f.intl.string(f.t.e6Kpa7) : f.intl.string(f.t.cy4G4y),
                p = I?.name ?? "",
                b = null != I && v.length > 1,
                g = null != n ? r.D : "div";
            return (0, l.jsxs)(g, {
                className: d()(j.Nr, { [j.vk]: null != n }),
                onClick: n,
                children: [
                    (0, l.jsxs)("div", {
                        className: j.Bj,
                        children: [
                            (0, l.jsx)(u.D, {
                                variant: "body-md/semibold",
                                children: f.intl.format(f.t["0fkj8J"], { count: v.length }),
                            }),
                            (0, l.jsxs)("div", {
                                className: j.jf,
                                children: [
                                    (0, l.jsx)(c.E, {
                                        variant: "body-sm/medium",
                                        color: i === x.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                        className: j.Rh,
                                        children: N,
                                    }),
                                    (0, l.jsx)(c.E, {
                                        variant: "body-sm/medium",
                                        color: "text-muted",
                                        className: j.SI,
                                        children: f.intl.format(b ? f.t["8ZLbvR"] : f.t["+NoTYm"], { guildName: p }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: j.hE,
                        children: [
                            (0, l.jsx)(A.l, { guildIds: v, iconSize: 24 }),
                            null != n &&
                                (0, l.jsx)(o.ChevronLargeRightIcon, { color: m.A.colors.TEXT_SUBTLE, size: "xs" }),
                        ],
                    }),
                ],
            });
        },
    },
);
