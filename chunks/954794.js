n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(768762),
    c = n(823379),
    d = n(882029),
    u = n(955204),
    m = n(248998),
    g = n(388032),
    h = n(986544);
function p(e) {
    let { onBackClick: t } = e,
        n = (0, r.e7)([d.Z], () => d.Z.getAllUnlockedAchievements()),
        p = s.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        x = s.useMemo(
            () =>
                Object.values(u.LG)
                    .filter(c.lm)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.FormSection, {
                children: (0, i.jsxs)(l.Clickable, {
                    onClick: t,
                    className: h.backContainer,
                    children: [
                        (0, i.jsx)(o.Z, {
                            direction: o.Z.Directions.LEFT,
                            className: h.icon
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-lg/normal',
                            color: 'text-normal',
                            children: g.intl.string(g.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, i.jsxs)('div', {
                className: h.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.headerTextContainer,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/extrabold',
                                color: 'header-primary',
                                children: g.intl.string(g.t['6jI0hY'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.GuUItb)
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: h.headerIcon,
                        children: (0, i.jsx)(l.TrophyIcon, {
                            size: 'custom',
                            color: a.Z.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40
                        })
                    })
                ]
            }),
            p.length > 0 &&
                (0, i.jsx)(l.FormSection, {
                    className: h.divider,
                    children: (0, i.jsx)('div', {
                        className: h.achievementGrid,
                        children: p.map((e) => {
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
            x.length > 0 &&
                (0, i.jsxs)(l.FormSection, {
                    className: h.divider,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.headerTextContainer,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-md/bold',
                                color: 'header-secondary',
                                children: g.intl.string(g.t.GFyMg4)
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: h.achievementGrid,
                            children: x.map((e) => (0, i.jsx)(m.Z, { achievementId: e.id }, e.id))
                        })
                    ]
                }),
            (0, i.jsx)(l.FormSection, {
                className: h.divider,
                children: (0, i.jsx)('div', { className: h.bottomPadding })
            })
        ]
    });
}
