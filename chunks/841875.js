n.d(t, { Z: () => f });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(410030),
    c = n(501431),
    u = n(215023),
    d = n(231338),
    p = n(388032),
    g = n(590305);
function f() {
    return (0, r.jsxs)('div', {
        className: g.filterBar,
        children: [
            (0, r.jsxs)('div', {
                className: g.filterCheckboxes,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/semibold',
                        children: p.intl.string(p.t.Qk6r1d)
                    }),
                    u.xg.map((e) => (0, r.jsx)(h, { filter: e }, e))
                ]
            }),
            (0, r.jsx)(b, {}),
            (0, r.jsx)(_, {})
        ]
    });
}
let h = (e) => {
        let { filter: t } = e,
            n = {
                [u.Vh.AVATAR_DECORATIONS]: p.intl.string(p.t.dRZYND),
                [u.Vh.PROFILE_EFFECTS]: p.intl.string(p.t['1cNjt7']),
                [u.Vh.NAMEPLATES]: p.intl.string(p.t.V68Fq6),
                [u.Vh.BUNDLES]: p.intl.string(p.t.FYFppq),
                [u.Vh.ORBS_ELIGIBLE]: p.intl.string(p.t.AHHHgI)
            },
            { itemTypeFilters: l, onToggleItemType: i } = (0, c.S)();
        return (0, r.jsxs)(o.P3F, {
            className: g.filterCheckbox,
            onClick: () => i(t),
            children: [
                (0, r.jsx)('div', {
                    className: g.checkbox,
                    children: (0, r.jsx)(o.XZJ, { value: l.has(t) })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: n[t]
                })
            ]
        });
    },
    b = () => {
        let e = l.useMemo(
                () => [
                    {
                        color: '#262626',
                        label: p.intl.string(p.t['dMey+v']),
                        enum: u.S1.BLACK
                    },
                    {
                        color: '#9B59B6',
                        label: p.intl.string(p.t.kqUD4O),
                        enum: u.S1.PURPLE
                    },
                    {
                        color: '#3498DB',
                        label: p.intl.string(p.t.qQTRaW),
                        enum: u.S1.BLUE
                    },
                    {
                        color: '#1ABC9C',
                        label: p.intl.string(p.t.ceaZKy),
                        enum: u.S1.TEAL
                    },
                    {
                        color: '#2ECC71',
                        label: p.intl.string(p.t['f/Ylk5']),
                        enum: u.S1.GREEN
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#A0522D',
                        label: p.intl.string(p.t['Sd/BMT']),
                        enum: u.S1.BROWN
                    },
                    {
                        color: '#F1C40F',
                        label: p.intl.string(p.t['0fevY2']),
                        enum: u.S1.YELLOW
                    },
                    {
                        color: '#E67E22',
                        label: p.intl.string(p.t.ZE7weH),
                        enum: u.S1.ORANGE
                    },
                    {
                        color: '#E74C3C',
                        label: p.intl.string(p.t.hKJGOD),
                        enum: u.S1.RED
                    },
                    {
                        color: '#EC407A',
                        label: p.intl.string(p.t.HvLEGB),
                        enum: u.S1.PINK
                    }
                ],
                []
            );
        return (0, r.jsxs)('div', {
            className: g.colorSwatches,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    children: p.intl.string(p.t.K1xGoK)
                }),
                (0, r.jsx)(m, { colors: e }),
                (0, r.jsx)(m, { colors: t })
            ]
        });
    },
    m = (e) => {
        let { colors: t } = e,
            { colorFilters: n, onToggleColor: l } = (0, c.S)();
        return (0, r.jsx)('div', {
            className: g.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: i, enum: s } = e;
                return (0, r.jsx)(
                    o.P3F,
                    {
                        className: a()(g.circle, { [g.circleToggled]: n.has(s) }),
                        style: { backgroundColor: t },
                        'aria-label': i,
                        onClick: () => l(s)
                    },
                    t
                );
            })
        });
    },
    _ = () => {
        let { themeFilters: e, onToggleTheme: t } = (0, c.S)(),
            n = (0, s.ZP)() === d.BR.DARK,
            i = l.useCallback(
                (t) => {
                    if (e.has(t) || n) return 'always-white';
                },
                [e, n]
            ),
            f = l.useCallback((t) => (e.has(t) || n ? o.TVs.colors.WHITE : o.TVs.colors.INTERACTIVE_NORMAL), [e, n]),
            h = l.useMemo(
                () => [
                    [
                        {
                            name: p.intl.string(p.t.aVBOKi),
                            icon: (0, r.jsx)(o.wGt, {
                                size: 'xxs',
                                color: f(u.t0.ANIME)
                            }),
                            enum: u.t0.ANIME
                        },
                        {
                            name: p.intl.string(p.t['3WoZBQ']),
                            icon: (0, r.jsx)(o.iWm, {
                                size: 'xxs',
                                color: f(u.t0.GAMING)
                            }),
                            enum: u.t0.GAMING
                        }
                    ],
                    [
                        {
                            name: p.intl.string(p.t.yuEmLi),
                            icon: (0, r.jsx)(o.YqE, {
                                size: 'xxs',
                                color: f(u.t0.CUTE_COZY)
                            }),
                            enum: u.t0.CUTE_COZY
                        },
                        {
                            name: p.intl.string(p.t.mMvCHh),
                            icon: (0, r.jsx)(o.lqV, {
                                size: 'xxs',
                                color: f(u.t0.SCI_FI)
                            }),
                            enum: u.t0.SCI_FI
                        }
                    ],
                    [
                        {
                            name: p.intl.string(p.t.TlhOQE),
                            icon: (0, r.jsx)(o.ED8, {
                                size: 'xxs',
                                color: f(u.t0.FOOD_DRINKS)
                            }),
                            enum: u.t0.FOOD_DRINKS
                        },
                        {
                            name: p.intl.string(p.t['4IaUIC']),
                            icon: (0, r.jsx)(o.HI3, {
                                size: 'xxs',
                                color: f(u.t0.FANTASY)
                            }),
                            enum: u.t0.FANTASY
                        }
                    ],
                    [
                        {
                            name: p.intl.string(p.t.w0nSGx),
                            icon: (0, r.jsx)(o.Qjj, {
                                size: 'xxs',
                                color: f(u.t0.ANIMALS_PETS)
                            }),
                            enum: u.t0.ANIMALS_PETS
                        },
                        {
                            name: p.intl.string(p.t.cJng7u),
                            icon: (0, r.jsx)(o.hg2, {
                                size: 'xxs',
                                color: f(u.t0.NATURE)
                            }),
                            enum: u.t0.NATURE
                        }
                    ],
                    [
                        {
                            name: p.intl.string(p.t['5mUvyM']),
                            icon: (0, r.jsx)(o.Roe, {
                                size: 'xxs',
                                color: f(u.t0.MOVIES_TV)
                            }),
                            enum: u.t0.MOVIES_TV
                        },
                        {
                            name: p.intl.string(p.t.MB9H5e),
                            icon: (0, r.jsx)(o.Z6G, {
                                size: 'xxs',
                                color: f(u.t0.DARK_MOODY)
                            }),
                            enum: u.t0.DARK_MOODY
                        }
                    ]
                ],
                [f]
            );
        return (0, r.jsxs)('div', {
            className: g.themesSection,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    children: p.intl.string(p.t.t1Ztrq)
                }),
                h.map((n) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: g.themeRow,
                            children: n.map((n) => {
                                let { name: l, icon: s, enum: c } = n;
                                return (0, r.jsxs)(
                                    o.P3F,
                                    {
                                        className: a()(g.theme, { [g.themeToggled]: e.has(c) }),
                                        onClick: () => t(c),
                                        children: [
                                            s,
                                            (0, r.jsx)(o.Text, {
                                                color: i(c),
                                                variant: 'text-xs/medium',
                                                children: l
                                            })
                                        ]
                                    },
                                    l
                                );
                            })
                        },
                        n.map((e) => e.name).join(',')
                    )
                )
            ]
        });
    };
