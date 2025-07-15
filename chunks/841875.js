r.d(t, { Z: () => O });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(990705),
    s = r(335818),
    c = r(255835),
    u = r(755721),
    d = r(481060),
    p = r(410030),
    f = r(822857),
    g = r(501431),
    h = r(215023),
    b = r(231338),
    m = r(388032),
    _ = r(590305);
function O() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: r, hasFilters: l } = (0, g.S)(),
        i = l(),
        { enabled: a } = (0, f.WX)({ location: 'Shop' });
    return (0, n.jsxs)('div', {
        className: _.filterBar,
        children: [
            (0, n.jsxs)('div', {
                className: o()(_.filterSection, _.itemType),
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        className: _.filterTitle,
                        children: m.intl.string(m.t.Qk6r1d)
                    }),
                    h.xg.map((e) => (0, n.jsx)(C, { filter: e }, e)),
                    a &&
                        (0, n.jsx)(d.XZJ, {
                            value: t,
                            onChange: e,
                            children: (0, n.jsx)(d.Text, {
                                variant: 'text-md/normal',
                                children: m.intl.string(m.t.AHHHgI)
                            })
                        })
                ]
            }),
            (0, n.jsx)(v, {}),
            (0, n.jsx)(y, {}),
            i &&
                (0, n.jsx)(u.zx, {
                    color: u.Tt.PRIMARY,
                    className: _.resetButton,
                    onClick: r,
                    children: m.intl.string(m.t.jwH6KS)
                })
        ]
    });
}
let C = (e) => {
        var t;
        let { filter: r } = e,
            l = {
                [s.G.AVATAR_DECORATION]: m.intl.string(m.t.dRZYND),
                [s.G.PROFILE_EFFECT]: m.intl.string(m.t['1cNjt7']),
                [s.G.NAMEPLATE]: m.intl.string(m.t.V68Fq6),
                [s.G.BUNDLE]: m.intl.string(m.t.FYFppq)
            },
            { itemTypeFilters: i, onToggleItemType: o } = (0, g.S)();
        return (0, n.jsx)(d.XZJ, {
            value: i.has(r),
            onChange: () => o(r),
            children: (0, n.jsx)(d.Text, {
                variant: 'text-md/normal',
                children: null != (t = l[r]) ? t : ''
            })
        });
    },
    v = () => {
        let e = l.useMemo(
                () => [
                    {
                        color: '#9B59B6',
                        label: m.intl.string(m.t.kqUD4O),
                        enum: a.x.PURPLE
                    },
                    {
                        color: '#3498DB',
                        label: m.intl.string(m.t.qQTRaW),
                        enum: a.x.BLUE
                    },
                    {
                        color: '#2ECC71',
                        label: m.intl.string(m.t['f/Ylk5']),
                        enum: a.x.GREEN
                    },
                    {
                        color: '#A0522D',
                        label: m.intl.string(m.t['Sd/BMT']),
                        enum: a.x.BROWN
                    },
                    {
                        color: '#F1C40F',
                        label: m.intl.string(m.t['0fevY2']),
                        enum: a.x.YELLOW
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#E67E22',
                        label: m.intl.string(m.t.ZE7weH),
                        enum: a.x.ORANGE
                    },
                    {
                        color: '#E74C3C',
                        label: m.intl.string(m.t.hKJGOD),
                        enum: a.x.RED
                    },
                    {
                        color: '#EC407A',
                        label: m.intl.string(m.t.HvLEGB),
                        enum: a.x.PINK
                    },
                    {
                        color: '#FFFFFF',
                        label: m.intl.string(m.t['CB+lND']),
                        enum: a.x.WHITE
                    },
                    {
                        color: '#262626',
                        label: m.intl.string(m.t['dMey+v']),
                        enum: a.x.BLACK
                    }
                ],
                []
            );
        return (0, n.jsxs)('div', {
            className: _.filterSection,
            children: [
                (0, n.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    className: _.filterTitle,
                    children: m.intl.string(m.t.K1xGoK)
                }),
                (0, n.jsx)(E, { colors: e }),
                (0, n.jsx)(E, { colors: t })
            ]
        });
    },
    E = (e) => {
        let { colors: t } = e,
            { colorFilters: r, onToggleColor: l } = (0, g.S)();
        return (0, n.jsx)('div', {
            className: _.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: i, enum: o } = e;
                return (0, n.jsx)(
                    S,
                    {
                        color: t,
                        label: i,
                        enum: o,
                        isToggled: r.has(o),
                        onToggleColor: l
                    },
                    o
                );
            })
        });
    },
    S = (e) => {
        let { color: t, label: r, enum: l, isToggled: i, onToggleColor: a } = e;
        return (0, n.jsx)(
            d.ua7,
            {
                text: r,
                children: (e) => {
                    let { onMouseEnter: s, onMouseLeave: c } = e;
                    return (0, n.jsx)(
                        d.P3F,
                        {
                            onMouseEnter: s,
                            onMouseLeave: c,
                            onFocus: s,
                            onBlur: c,
                            className: o()(_.circle, { [_.circleToggled]: i }),
                            style: { backgroundColor: t },
                            'aria-label': r,
                            onClick: () => {
                                a(l);
                            },
                            children:
                                i &&
                                (0, n.jsx)('div', {
                                    className: _.checkIcon,
                                    children: (0, n.jsx)(d.sV5, {
                                        size: 'xs',
                                        color: d.TVs.colors.WHITE
                                    })
                                })
                        },
                        t
                    );
                }
            },
            r
        );
    },
    y = () => {
        let { themeFilters: e, onToggleTheme: t } = (0, g.S)(),
            r = (0, p.ZP)() === b.BR.DARK,
            i = l.useCallback(
                (t) => {
                    if (e.has(t) || r) return 'always-white';
                },
                [e, r]
            ),
            a = l.useCallback((t) => (e.has(t) || r ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [e, r]),
            s = l.useMemo(
                () => [
                    {
                        name: m.intl.string(m.t.aVBOKi),
                        icon: (0, n.jsx)(d.wGt, {
                            size: 'xs',
                            color: a(c.h.ANIME)
                        }),
                        enum: c.h.ANIME
                    },
                    {
                        name: m.intl.string(m.t['3WoZBQ']),
                        icon: (0, n.jsx)(d.iWm, {
                            size: 'xs',
                            color: a(c.h.GAMING)
                        }),
                        enum: c.h.GAMING
                    },
                    {
                        name: m.intl.string(m.t.yuEmLi),
                        icon: (0, n.jsx)(d.h_8, {
                            size: 'xs',
                            color: a(c.h.CUTE_COZY)
                        }),
                        enum: c.h.CUTE_COZY
                    },
                    {
                        name: m.intl.string(m.t.mMvCHh),
                        icon: (0, n.jsx)(d.lqV, {
                            size: 'xs',
                            color: a(c.h.SCI_FI)
                        }),
                        enum: c.h.SCI_FI
                    },
                    {
                        name: m.intl.string(m.t.TlhOQE),
                        icon: (0, n.jsx)(d.ED8, {
                            size: 'xs',
                            color: a(c.h.FOOD_DRINKS)
                        }),
                        enum: c.h.FOOD_DRINKS
                    },
                    {
                        name: m.intl.string(m.t['4IaUIC']),
                        icon: (0, n.jsx)(d.HI3, {
                            size: 'xs',
                            color: a(c.h.FANTASY)
                        }),
                        enum: c.h.FANTASY
                    },
                    {
                        name: m.intl.string(m.t.w0nSGx),
                        icon: (0, n.jsx)(d.Ffc, {
                            size: 'xs',
                            color: a(c.h.ANIMALS_PETS)
                        }),
                        enum: c.h.ANIMALS_PETS
                    },
                    {
                        name: m.intl.string(m.t.cJng7u),
                        icon: (0, n.jsx)(d.hg2, {
                            size: 'xs',
                            color: a(c.h.NATURE)
                        }),
                        enum: c.h.NATURE
                    },
                    {
                        name: m.intl.string(m.t['5mUvyM']),
                        icon: (0, n.jsx)(d.Roe, {
                            size: 'xs',
                            color: a(c.h.MOVIES_TV_SHOWS)
                        }),
                        enum: c.h.MOVIES_TV_SHOWS
                    },
                    {
                        name: m.intl.string(m.t.MB9H5e),
                        icon: (0, n.jsx)(d.Z6G, {
                            size: 'xs',
                            color: a(c.h.DARK_MOODY)
                        }),
                        enum: c.h.DARK_MOODY
                    }
                ],
                [a]
            );
        return (0, n.jsxs)('div', {
            className: _.filterSection,
            children: [
                (0, n.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    className: _.filterTitle,
                    children: m.intl.string(m.t.t1Ztrq)
                }),
                (0, n.jsx)('div', {
                    className: _.themeRow,
                    children: s.map((r) => {
                        let { name: l, icon: a, enum: s } = r;
                        return (0, n.jsxs)(
                            d.P3F,
                            {
                                className: o()(_.theme, { [_.themeToggled]: e.has(s) }),
                                onClick: () => t(s),
                                children: [
                                    a,
                                    (0, n.jsx)(d.Text, {
                                        color: i(s),
                                        variant: 'text-sm/medium',
                                        children: l
                                    })
                                ]
                            },
                            l
                        );
                    })
                })
            ]
        });
    };
