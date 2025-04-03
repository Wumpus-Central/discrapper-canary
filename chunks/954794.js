n.d(t, { Z: () => h }), n(230036);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(768762),
    c = n(823379),
    d = n(882029),
    u = n(955204),
    m = n(248998),
    g = n(388032),
    p = n(167407);
function h(e) {
    let { onBackClick: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()),
        h = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        f = i.useMemo(
            () =>
                Object.values(u.LG)
                    .filter(c.lm)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.hjN, {
                children: (0, r.jsxs)(l.P3F, {
                    onClick: t,
                    className: p.backContainer,
                    children: [
                        (0, r.jsx)(o.Z, {
                            direction: o.Z.Directions.LEFT,
                            className: p.icon
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-lg/normal',
                            color: 'text-normal',
                            children: g.NW.string(g.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, r.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.headerTextContainer,
                        children: [
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-lg/extrabold',
                                color: 'header-primary',
                                children: g.NW.string(g.t['6jI0hY'])
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: g.NW.string(g.t.GuUItb)
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: p.headerIcon,
                        children: (0, r.jsx)(l.rm8, {
                            size: 'custom',
                            color: a.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            h.length > 0 &&
                (0, r.jsx)(l.hjN, {
                    className: p.divider,
                    children: (0, r.jsx)('div', {
                        className: p.achievementGrid,
                        children: h.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, r.jsx)(
                                m.Z,
                                {
                                    achievementId: t,
                                    dateUnlocked: n
                                },
                                t
                            );
                        })
                    })
                }),
            f.length > 0 &&
                (0, r.jsxs)(l.hjN, {
                    className: p.divider,
                    children: [
                        (0, r.jsx)('div', {
                            className: p.headerTextContainer,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-md/bold',
                                color: 'header-secondary',
                                children: g.NW.string(g.t.GFyMg4)
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: p.achievementGrid,
                            children: f.map((e) => (0, r.jsx)(m.Z, { achievementId: e.id }, e.id))
                        })
                    ]
                }),
            (0, r.jsx)(l.hjN, {
                className: p.divider,
                children: (0, r.jsx)('div', { className: p.bottomPadding })
            })
        ]
    });
}
