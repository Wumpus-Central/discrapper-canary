n.d(t, { Z: () => f });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(793030),
    s = n(194594),
    o = n(359993),
    c = n(424472),
    d = n(682807),
    u = n(691703),
    p = n(953989),
    m = n(388032),
    h = n(758701);
function f(e) {
    let { className: t, view: n, application: r } = e,
        f = "embedded" === n,
        g = (0, o.Z)({ application: r });
    return (0, a.jsxs)("div", {
        className: i()(t, {
            [h.sideContainer]: !f,
            [h.gridContainer]: f,
        }),
        children: [
            (0, a.jsxs)("div", {
                className: i()(h.sectionContainer, { [h.reducedGap]: f }),
                children: [
                    (0, a.jsx)("div", {
                        className: h.infoSection,
                        children: (0, a.jsx)(s.Z, {
                            application: r,
                            mutualGuilds: g,
                            mutualGuildShownMax: 3,
                            className: h.guildCountContainer,
                            guildIconSize: s.x.SMALL,
                            guildsClassName: h.guildsIconContainer,
                            compact: !0,
                            children: (0, a.jsx)(l.X6q, {
                                variant: "heading-sm/semibold",
                                color: "text-strong",
                                children: m.intl.string(m.t["3NxHC4"]),
                            }),
                        }),
                    }),
                    (0, a.jsx)(c.Z, {
                        application: r,
                        className: h.infoSection,
                    }),
                    (0, a.jsx)(p.Z, {
                        application: r,
                        className: h.infoSection,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(h.sectionContainer, { [h.reducedGap]: f }),
                children: [
                    (0, a.jsx)(d.Z, {
                        application: r,
                        className: h.infoSection,
                        innerClassName: f ? h.linkGrid : void 0,
                    }),
                    (0, a.jsx)(u.Z, {
                        application: r,
                        className: h.infoSection,
                    }),
                ],
            }),
        ],
    });
}
