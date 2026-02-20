i.d(e, { n: () => o });
var s = i(627968),
    n = i(158954),
    l = i(311907),
    a = i(71393),
    r = i(546351),
    d = i(704037),
    c = i(985018),
    u = i(832974);
function o(t) {
    let { guildIds: e, direction: i } = t,
        o = (0, l.bG)([a.A], () => a.A.getGuild(e[0])),
        m = i === r.AI.RESTRICTING ? c.intl.string(c.t.e6Kpa7) : c.intl.string(c.t.cy4G4y),
        x = o?.name ?? "",
        h =
            null != o && e.length > 1
                ? c.intl.format(c.t.UPWFEu, { guildName: x })
                : c.intl.format(c.t.xYCTVQ, { guildName: x });
    return (0, s.jsxs)("div", {
        className: u.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: u.Bj,
                children: [
                    (0, s.jsx)(n.DZT, {
                        variant: "text-md/semibold",
                        children: c.intl.format(c.t["0fkj8J"], { count: e.length }),
                    }),
                    (0, s.jsxs)("div", {
                        className: u.jf,
                        children: [
                            (0, s.jsx)(n.EYj, {
                                variant: "text-sm/medium",
                                color: i === r.AI.RESTRICTING ? "text-feedback-positive" : "text-muted",
                                className: u.Rh,
                                children: m,
                            }),
                            (0, s.jsxs)(n.EYj, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: u.SI,
                                children: ["\xb7 ", h],
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(d.l, { guildIds: e, iconSize: 24 }),
        ],
    });
}
