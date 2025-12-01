n.d(t, { Z: () => m }), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(692547),
    s = n(481060),
    l = n(768762),
    c = n(823379),
    u = n(882029),
    d = n(955204),
    f = n(248998),
    p = n(388032),
    _ = n(599710);
function m(e) {
    let { onBackClick: t } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getAllUnlockedAchievements()),
        m = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        h = i.useMemo(
            () =>
                Object.values(d.LG)
                    .filter(c.lm)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(s.P3F, {
                onClick: t,
                className: _.backContainer,
                children: [
                    (0, r.jsx)(l.Z, {
                        direction: l.Z.Directions.LEFT,
                        className: _.icon,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: p.intl.string(p.t["13/7kX"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: _.headerContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.headerTextContainer,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "header-primary",
                                children: p.intl.string(p.t["6jI0hd"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: p.intl.string(p.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.headerIcon,
                        children: (0, r.jsx)(s.rm8, {
                            size: "custom",
                            color: o.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            m.length > 0 &&
                (0, r.jsx)("div", {
                    className: _.divider,
                    children: (0, r.jsx)("div", {
                        className: _.achievementGrid,
                        children: m.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, r.jsx)(
                                f.Z,
                                {
                                    achievementId: t,
                                    dateUnlocked: n,
                                },
                                t,
                            );
                        }),
                    }),
                }),
            h.length > 0 &&
                (0, r.jsxs)("div", {
                    className: _.divider,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.headerTextContainer,
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/bold",
                                color: "header-secondary",
                                children: p.intl.string(p.t.GFyMg1),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.achievementGrid,
                            children: h.map((e) => (0, r.jsx)(f.Z, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: _.divider,
                children: (0, r.jsx)("div", { className: _.bottomPadding }),
            }),
        ],
    });
}
