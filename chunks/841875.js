n.d(t, { Z: () => _ });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(990705),
    s = n(335818),
    c = n(255835),
    u = n(755721),
    d = n(481060),
    p = n(410030),
    g = n(501431),
    f = n(215023),
    h = n(231338),
    b = n(388032),
    m = n(590305);
function _() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: l } = (0, g.S)(),
        o = l();
    return (0, r.jsxs)('div', {
        className: m.filterBar,
        children: [
            (0, r.jsxs)('div', {
                className: m.filterCheckboxes,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: 'text-md/semibold',
                        children: b.intl.string(b.t.Qk6r1d)
                    }),
                    f.xg.map((e) => (0, r.jsx)(C, { filter: e }, e)),
                    (0, r.jsx)(O, {
                        onChange: () => e(),
                        text: b.intl.string(b.t.AHHHgI),
                        value: t
                    })
                ]
            }),
            (0, r.jsx)(E, {}),
            (0, r.jsx)(x, {}),
            o &&
                (0, r.jsx)(u.zx, {
                    color: u.Tt.PRIMARY,
                    className: m.resetButton,
                    onClick: n,
                    children: b.intl.string(b.t.jwH6KS)
                })
        ]
    });
}
let C = (e) => {
        var t;
        let { filter: n } = e,
            l = {
                [s.G.AVATAR_DECORATION]: b.intl.string(b.t.dRZYND),
                [s.G.PROFILE_EFFECT]: b.intl.string(b.t['1cNjt7']),
                [s.G.NAMEPLATE]: b.intl.string(b.t.V68Fq6),
                [s.G.BUNDLE]: b.intl.string(b.t.FYFppq)
            },
            { itemTypeFilters: o, onToggleItemType: i } = (0, g.S)();
        return (0, r.jsx)('div', {
            children: (0, r.jsx)(O, {
                onChange: () => i(n),
                text: null != (t = l[n]) ? t : '',
                value: o.has(n)
            })
        });
    },
    O = (e) => {
        let { onChange: t, text: n, value: l } = e;
        return (0, r.jsxs)(d.P3F, {
            className: m.filterCheckbox,
            onClick: t,
            children: [
                (0, r.jsx)('div', {
                    className: m.checkbox,
                    children: (0, r.jsx)(d.XZJ, { value: l })
                }),
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            ]
        });
    },
    E = () => {
        let e = l.useMemo(
                () => [
                    {
                        color: '#9B59B6',
                        label: b.intl.string(b.t.kqUD4O),
                        enum: a.x.PURPLE
                    },
                    {
                        color: '#3498DB',
                        label: b.intl.string(b.t.qQTRaW),
                        enum: a.x.BLUE
                    },
                    {
                        color: '#2ECC71',
                        label: b.intl.string(b.t['f/Ylk5']),
                        enum: a.x.GREEN
                    },
                    {
                        color: '#A0522D',
                        label: b.intl.string(b.t['Sd/BMT']),
                        enum: a.x.BROWN
                    },
                    {
                        color: '#F1C40F',
                        label: b.intl.string(b.t['0fevY2']),
                        enum: a.x.YELLOW
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#E67E22',
                        label: b.intl.string(b.t.ZE7weH),
                        enum: a.x.ORANGE
                    },
                    {
                        color: '#E74C3C',
                        label: b.intl.string(b.t.hKJGOD),
                        enum: a.x.RED
                    },
                    {
                        color: '#EC407A',
                        label: b.intl.string(b.t.HvLEGB),
                        enum: a.x.PINK
                    },
                    {
                        color: '#FFFFFF',
                        label: b.intl.string(b.t['CB+lND']),
                        enum: a.x.WHITE
                    },
                    {
                        color: '#262626',
                        label: b.intl.string(b.t['dMey+v']),
                        enum: a.x.BLACK
                    }
                ],
                []
            );
        return (0, r.jsxs)('div', {
            className: m.colorSwatches,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    children: b.intl.string(b.t.K1xGoK)
                }),
                (0, r.jsx)(v, { colors: e }),
                (0, r.jsx)(v, { colors: t })
            ]
        });
    },
    v = (e) => {
        let { colors: t } = e,
            { colorFilters: n, onToggleColor: l } = (0, g.S)();
        return (0, r.jsx)('div', {
            className: m.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: o, enum: i } = e;
                return (0, r.jsx)(
                    S,
                    {
                        color: t,
                        label: o,
                        enum: i,
                        isToggled: n.has(i),
                        onToggleColor: l
                    },
                    i
                );
            })
        });
    },
    S = (e) => {
        let { color: t, label: n, enum: l, isToggled: o, onToggleColor: a } = e;
        return (0, r.jsx)(
            d.ua7,
            {
                text: n,
                children: (e) => {
                    let { onMouseEnter: s, onMouseLeave: c } = e;
                    return (0, r.jsx)(
                        d.P3F,
                        {
                            onMouseEnter: s,
                            onMouseLeave: c,
                            onFocus: s,
                            onBlur: c,
                            className: i()(m.circle, { [m.circleToggled]: o }),
                            style: { backgroundColor: t },
                            'aria-label': n,
                            onClick: () => {
                                a(l);
                            },
                            children:
                                o &&
                                (0, r.jsx)('div', {
                                    className: m.checkIcon,
                                    children: (0, r.jsx)(d.sV5, {
                                        size: 'xs',
                                        color: d.TVs.colors.WHITE
                                    })
                                })
                        },
                        t
                    );
                }
            },
            n
        );
    },
    x = () => {
        let { themeFilters: e, onToggleTheme: t } = (0, g.S)(),
            n = (0, p.ZP)() === h.BR.DARK,
            o = l.useCallback(
                (t) => {
                    if (e.has(t) || n) return 'always-white';
                },
                [e, n]
            ),
            a = l.useCallback((t) => (e.has(t) || n ? d.TVs.colors.WHITE : d.TVs.colors.INTERACTIVE_NORMAL), [e, n]),
            s = l.useMemo(
                () => [
                    {
                        name: b.intl.string(b.t.aVBOKi),
                        icon: (0, r.jsx)(d.wGt, {
                            size: 'xs',
                            color: a(c.h.ANIME)
                        }),
                        enum: c.h.ANIME
                    },
                    {
                        name: b.intl.string(b.t['3WoZBQ']),
                        icon: (0, r.jsx)(d.iWm, {
                            size: 'xs',
                            color: a(c.h.GAMING)
                        }),
                        enum: c.h.GAMING
                    },
                    {
                        name: b.intl.string(b.t.yuEmLi),
                        icon: (0, r.jsx)(d.YqE, {
                            size: 'xs',
                            color: a(c.h.CUTE_COZY)
                        }),
                        enum: c.h.CUTE_COZY
                    },
                    {
                        name: b.intl.string(b.t.mMvCHh),
                        icon: (0, r.jsx)(d.lqV, {
                            size: 'xs',
                            color: a(c.h.SCI_FI)
                        }),
                        enum: c.h.SCI_FI
                    },
                    {
                        name: b.intl.string(b.t.TlhOQE),
                        icon: (0, r.jsx)(d.ED8, {
                            size: 'xs',
                            color: a(c.h.FOOD_DRINKS)
                        }),
                        enum: c.h.FOOD_DRINKS
                    },
                    {
                        name: b.intl.string(b.t['4IaUIC']),
                        icon: (0, r.jsx)(d.HI3, {
                            size: 'xs',
                            color: a(c.h.FANTASY)
                        }),
                        enum: c.h.FANTASY
                    },
                    {
                        name: b.intl.string(b.t.w0nSGx),
                        icon: (0, r.jsx)(d.Qjj, {
                            size: 'xs',
                            color: a(c.h.ANIMALS_PETS)
                        }),
                        enum: c.h.ANIMALS_PETS
                    },
                    {
                        name: b.intl.string(b.t.cJng7u),
                        icon: (0, r.jsx)(d.hg2, {
                            size: 'xs',
                            color: a(c.h.NATURE)
                        }),
                        enum: c.h.NATURE
                    },
                    {
                        name: b.intl.string(b.t['5mUvyM']),
                        icon: (0, r.jsx)(d.Roe, {
                            size: 'xs',
                            color: a(c.h.MOVIES_TV_SHOWS)
                        }),
                        enum: c.h.MOVIES_TV_SHOWS
                    },
                    {
                        name: b.intl.string(b.t.MB9H5e),
                        icon: (0, r.jsx)(d.Z6G, {
                            size: 'xs',
                            color: a(c.h.DARK_MOODY)
                        }),
                        enum: c.h.DARK_MOODY
                    }
                ],
                [a]
            );
        return (0, r.jsxs)('div', {
            className: m.themesSection,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/semibold',
                    children: b.intl.string(b.t.t1Ztrq)
                }),
                (0, r.jsx)('div', {
                    className: m.themeRow,
                    children: s.map((n) => {
                        let { name: l, icon: a, enum: s } = n;
                        return (0, r.jsxs)(
                            d.P3F,
                            {
                                className: i()(m.theme, { [m.themeToggled]: e.has(s) }),
                                onClick: () => t(s),
                                children: [
                                    a,
                                    (0, r.jsx)(d.Text, {
                                        color: o(s),
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
