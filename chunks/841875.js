r.d(t, { Z: () => _ });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(990705),
    s = r(335818),
    c = r(255835),
    u = r(481060),
    d = r(410030),
    p = r(822857),
    f = r(501431),
    g = r(215023),
    h = r(231338),
    b = r(388032),
    m = r(590305);
function _() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: r, hasFilters: l } = (0, f.S)(),
        i = l(),
        { enabled: o } = (0, p.WX)({ location: 'Shop' });
    return (0, n.jsxs)('div', {
        className: m.filterBar,
        children: [
            (0, n.jsxs)('div', {
                className: a()(m.filterSection, m.itemType),
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        className: m.filterTitle,
                        children: b.intl.string(b.t.Qk6r1d)
                    }),
                    g.xg.map((e) => (0, n.jsx)(O, { filter: e }, e)),
                    o &&
                        (0, n.jsx)(u.XZJ, {
                            value: t,
                            onChange: e,
                            children: (0, n.jsx)(u.Text, {
                                variant: 'text-md/normal',
                                children: b.intl.string(b.t.AHHHgI)
                            })
                        })
                ]
            }),
            (0, n.jsx)(v, {}),
            (0, n.jsx)(S, {}),
            i &&
                (0, n.jsx)(u.zxk, {
                    variant: 'secondary',
                    onClick: r,
                    text: b.intl.string(b.t.jwH6KS),
                    fullWidth: !0
                })
        ]
    });
}
let O = (e) => {
        var t;
        let { filter: r } = e,
            l = {
                [s.G.AVATAR_DECORATION]: b.intl.string(b.t.dRZYND),
                [s.G.PROFILE_EFFECT]: b.intl.string(b.t['1cNjt7']),
                [s.G.NAMEPLATE]: b.intl.string(b.t.V68Fq6),
                [s.G.BUNDLE]: b.intl.string(b.t.FYFppq)
            },
            { itemTypeFilters: i, onToggleItemType: a } = (0, f.S)();
        return (0, n.jsx)(u.XZJ, {
            value: i.has(r),
            onChange: () => a(r),
            children: (0, n.jsx)(u.Text, {
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
                        label: b.intl.string(b.t.kqUD4O),
                        enum: o.x.PURPLE
                    },
                    {
                        color: '#3498DB',
                        label: b.intl.string(b.t.qQTRaW),
                        enum: o.x.BLUE
                    },
                    {
                        color: '#2ECC71',
                        label: b.intl.string(b.t['f/Ylk5']),
                        enum: o.x.GREEN
                    },
                    {
                        color: '#A0522D',
                        label: b.intl.string(b.t['Sd/BMT']),
                        enum: o.x.BROWN
                    },
                    {
                        color: '#F1C40F',
                        label: b.intl.string(b.t['0fevY2']),
                        enum: o.x.YELLOW
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#E67E22',
                        label: b.intl.string(b.t.ZE7weH),
                        enum: o.x.ORANGE
                    },
                    {
                        color: '#E74C3C',
                        label: b.intl.string(b.t.hKJGOD),
                        enum: o.x.RED
                    },
                    {
                        color: '#EC407A',
                        label: b.intl.string(b.t.HvLEGB),
                        enum: o.x.PINK
                    },
                    {
                        color: '#FFFFFF',
                        label: b.intl.string(b.t['CB+lND']),
                        enum: o.x.WHITE
                    },
                    {
                        color: '#262626',
                        label: b.intl.string(b.t['dMey+v']),
                        enum: o.x.BLACK
                    }
                ],
                []
            );
        return (0, n.jsxs)('div', {
            className: m.filterSection,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: 'text-md/semibold',
                    className: m.filterTitle,
                    children: b.intl.string(b.t.K1xGoK)
                }),
                (0, n.jsx)(C, { colors: e }),
                (0, n.jsx)(C, { colors: t })
            ]
        });
    },
    C = (e) => {
        let { colors: t } = e,
            { colorFilters: r, onToggleColor: l } = (0, f.S)();
        return (0, n.jsx)('div', {
            className: m.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: i, enum: a } = e;
                return (0, n.jsx)(
                    E,
                    {
                        color: t,
                        label: i,
                        enum: a,
                        isToggled: r.has(a),
                        onToggleColor: l
                    },
                    a
                );
            })
        });
    },
    E = (e) => {
        let { color: t, label: r, enum: l, isToggled: i, onToggleColor: o } = e;
        return (0, n.jsx)(
            u.ua7,
            {
                text: r,
                children: (e) => {
                    let { onMouseEnter: s, onMouseLeave: c } = e;
                    return (0, n.jsx)(
                        u.P3F,
                        {
                            onMouseEnter: s,
                            onMouseLeave: c,
                            onFocus: s,
                            onBlur: c,
                            className: a()(m.circle, { [m.circleToggled]: i }),
                            style: { backgroundColor: t },
                            'aria-label': r,
                            onClick: () => {
                                o(l);
                            },
                            children:
                                i &&
                                (0, n.jsx)('div', {
                                    className: m.checkIcon,
                                    children: (0, n.jsx)(u.sV5, {
                                        size: 'xs',
                                        color: u.TVs.colors.WHITE
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
    S = () => {
        let { themeFilters: e, onToggleTheme: t } = (0, f.S)(),
            r = (0, d.ZP)() === h.BR.DARK,
            i = l.useCallback(
                (t) => {
                    if (e.has(t) || r) return 'always-white';
                },
                [e, r]
            ),
            o = l.useCallback((t) => (e.has(t) || r ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL), [e, r]),
            s = l.useMemo(
                () => [
                    {
                        name: b.intl.string(b.t.aVBOKi),
                        icon: (0, n.jsx)(u.wGt, {
                            size: 'xs',
                            color: o(c.h.ANIME)
                        }),
                        enum: c.h.ANIME
                    },
                    {
                        name: b.intl.string(b.t['3WoZBQ']),
                        icon: (0, n.jsx)(u.iWm, {
                            size: 'xs',
                            color: o(c.h.GAMING)
                        }),
                        enum: c.h.GAMING
                    },
                    {
                        name: b.intl.string(b.t.yuEmLi),
                        icon: (0, n.jsx)(u.h_8, {
                            size: 'xs',
                            color: o(c.h.CUTE_COZY)
                        }),
                        enum: c.h.CUTE_COZY
                    },
                    {
                        name: b.intl.string(b.t.mMvCHh),
                        icon: (0, n.jsx)(u.lqV, {
                            size: 'xs',
                            color: o(c.h.SCI_FI)
                        }),
                        enum: c.h.SCI_FI
                    },
                    {
                        name: b.intl.string(b.t.TlhOQE),
                        icon: (0, n.jsx)(u.ED8, {
                            size: 'xs',
                            color: o(c.h.FOOD_DRINKS)
                        }),
                        enum: c.h.FOOD_DRINKS
                    },
                    {
                        name: b.intl.string(b.t['4IaUIC']),
                        icon: (0, n.jsx)(u.HI3, {
                            size: 'xs',
                            color: o(c.h.FANTASY)
                        }),
                        enum: c.h.FANTASY
                    },
                    {
                        name: b.intl.string(b.t.w0nSGx),
                        icon: (0, n.jsx)(u.Ffc, {
                            size: 'xs',
                            color: o(c.h.ANIMALS_PETS)
                        }),
                        enum: c.h.ANIMALS_PETS
                    },
                    {
                        name: b.intl.string(b.t.cJng7u),
                        icon: (0, n.jsx)(u.hg2, {
                            size: 'xs',
                            color: o(c.h.NATURE)
                        }),
                        enum: c.h.NATURE
                    },
                    {
                        name: b.intl.string(b.t['5mUvyM']),
                        icon: (0, n.jsx)(u.Roe, {
                            size: 'xs',
                            color: o(c.h.MOVIES_TV_SHOWS)
                        }),
                        enum: c.h.MOVIES_TV_SHOWS
                    },
                    {
                        name: b.intl.string(b.t.MB9H5e),
                        icon: (0, n.jsx)(u.Z6G, {
                            size: 'xs',
                            color: o(c.h.DARK_MOODY)
                        }),
                        enum: c.h.DARK_MOODY
                    }
                ],
                [o]
            );
        return (0, n.jsxs)('div', {
            className: m.filterSection,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: 'text-md/semibold',
                    className: m.filterTitle,
                    children: b.intl.string(b.t.t1Ztrq)
                }),
                (0, n.jsx)('div', {
                    className: m.themeRow,
                    children: s.map((r) => {
                        let { name: l, icon: o, enum: s } = r;
                        return (0, n.jsxs)(
                            u.P3F,
                            {
                                className: a()(m.theme, { [m.themeToggled]: e.has(s) }),
                                onClick: () => t(s),
                                children: [
                                    o,
                                    (0, n.jsx)(u.Text, {
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
