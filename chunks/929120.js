l.d(s, { n: () => N });
var i = l(477900),
    t = l(582128),
    n = l(503698),
    d = l.n(n),
    a = l(17928),
    u = l(939249),
    r = l(534514),
    c = l(834730),
    o = l(881636),
    m = l(661531),
    h = l(71393),
    x = l(365258),
    A = l(926418),
    f = l(105292),
    j = l(286312);
function N(e) {
    let { guildIds: s, direction: l, onClick: n } = e,
        N = (0, t.useMemo)(() => (0, x.AB)(s), [s]),
        p = (0, a.bG)([h.A], () => h.A.getGuild(N[0])),
        v = l === x.AI.RESTRICTING ? f.intl.string(f.t.e6Kpa7) : f.intl.string(f.t.cy4G4y),
        I = p?.name ?? "",
        b = null != p && N.length > 1,
        G = null != n ? u.D : "div";
    return (0, i.jsxs)(G, {
        className: d()(j.Nr, { [j.vk]: null != n }),
        onClick: n,
        children: [
            (0, i.jsxs)("div", {
                className: j.Bj,
                children: [
                    (0, i.jsx)(r.D, {
                        variant: "body-md/semibold",
                        children: f.intl.format(f.t["0fkj8J"], { count: N.length }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.jf,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: l === x.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: j.Rh,
                                children: v,
                            }),
                            (0, i.jsx)(c.E, {
                                variant: "body-sm/medium",
                                color: "text-muted",
                                className: j.SI,
                                children: f.intl.format(b ? f.t["8ZLbvR"] : f.t["+NoTYm"], { guildName: I }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: j.hE,
                children: [
                    (0, i.jsx)(A.l, { guildIds: N, iconSize: 24 }),
                    null != n && (0, i.jsx)(o.u, { color: m.A.colors.TEXT_SUBTLE, size: "xs" }),
                ],
            }),
        ],
    });
}
