n.d(t, { Z: () => h }), n(642613);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(692547),
    a = n(481060),
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
        h = r.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        f = r.useMemo(
            () =>
                Object.values(u.LG)
                    .filter(c.lm)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.hjN, {
                children: (0, i.jsxs)(a.P3F, {
                    onClick: t,
                    className: p.backContainer,
                    children: [
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Directions.LEFT,
                            className: p.icon
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-lg/normal',
                            color: 'text-normal',
                            children: g.intl.string(g.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, i.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.headerTextContainer,
                        children: [
                            (0, i.jsx)(a.X6q, {
                                variant: 'heading-lg/extrabold',
                                color: 'header-primary',
                                children: g.intl.string(g.t['6jI0hY'])
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.GuUItb)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: p.headerIcon,
                        children: (0, i.jsx)(a.rm8, {
                            size: 'custom',
                            color: l.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            h.length > 0 &&
                (0, i.jsx)(a.hjN, {
                    className: p.divider,
                    children: (0, i.jsx)('div', {
                        className: p.achievementGrid,
                        children: h.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, i.jsx)(
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
                (0, i.jsxs)(a.hjN, {
                    className: p.divider,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.headerTextContainer,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-md/bold',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.GFyMg4)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: p.achievementGrid,
                            children: f.map((e) => (0, i.jsx)(m.Z, { achievementId: e.id }, e.id))
                        })
                    ]
                }),
            (0, i.jsx)(a.hjN, {
                className: p.divider,
                children: (0, i.jsx)('div', { className: p.bottomPadding })
            })
        ]
    });
}
