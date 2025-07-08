n.d(t, { Z: () => m });
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(990705),
    s = n(335818),
    c = n(255835),
    u = n(481060),
    d = n(410030),
    p = n(501431),
    f = n(215023),
    g = n(231338),
    h = n(388032),
    b = n(590305);
function m() {
    let { onToggleOrbEligible: e, orbEligible: t } = (0, p.S)();
    return (0, r.jsxs)('div', {
        className: b.filterBar,
        children: [
            (0, r.jsxs)('div', {
                className: b.filterCheckboxes,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: h.intl.string(h.t.Qk6r1d)
                    }),
                    f.xg.map((e) => (0, r.jsx)(_, { filter: e }, e)),
                    (0, r.jsx)(C, {
                        onChange: () => e(),
                        text: h.intl.string(h.t.AHHHgI),
                        value: t
                    })
                ]
            }),
            (0, r.jsx)(O, {}),
            (0, r.jsx)(S, {})
        ]
    });
}
let _ = (e) => {
        var t;
        let { filter: n } = e,
            l = {
                [s.G.AVATAR_DECORATION]: h.intl.string(h.t.dRZYND),
                [s.G.PROFILE_EFFECT]: h.intl.string(h.t['1cNjt7']),
                [s.G.NAMEPLATE]: h.intl.string(h.t.V68Fq6),
                [s.G.BUNDLE]: h.intl.string(h.t.FYFppq)
            },
            { itemTypeFilters: o, onToggleItemType: i } = (0, p.S)();
        return (0, r.jsx)('div', {
            children: (0, r.jsx)(C, {
                onChange: () => i(n),
                text: null != (t = l[n]) ? t : '',
                value: o.has(n)
            })
        });
    },
    C = (e) => {
        let { onChange: t, text: n, value: l } = e;
        return (0, r.jsxs)(u.P3F, {
            className: b.filterCheckbox,
            onClick: t,
            children: [
                (0, r.jsx)('div', {
                    className: b.checkbox,
                    children: (0, r.jsx)(u.XZJ, { value: l })
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: n
                })
            ]
        });
    },
    O = () => {
        let e = l.useMemo(
                () => [
                    {
                        color: '#9B59B6',
                        label: h.intl.string(h.t.kqUD4O),
                        enum: a.x.PURPLE
                    },
                    {
                        color: '#3498DB',
                        label: h.intl.string(h.t.qQTRaW),
                        enum: a.x.BLUE
                    },
                    {
                        color: '#2ECC71',
                        label: h.intl.string(h.t['f/Ylk5']),
                        enum: a.x.GREEN
                    },
                    {
                        color: '#A0522D',
                        label: h.intl.string(h.t['Sd/BMT']),
                        enum: a.x.BROWN
                    },
                    {
                        color: '#F1C40F',
                        label: h.intl.string(h.t['0fevY2']),
                        enum: a.x.YELLOW
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#E67E22',
                        label: h.intl.string(h.t.ZE7weH),
                        enum: a.x.ORANGE
                    },
                    {
                        color: '#E74C3C',
                        label: h.intl.string(h.t.hKJGOD),
                        enum: a.x.RED
                    },
                    {
                        color: '#EC407A',
                        label: h.intl.string(h.t.HvLEGB),
                        enum: a.x.PINK
                    },
                    {
                        color: '#FFFFFF',
                        label: h.intl.string(h.t['CB+lND']),
                        enum: a.x.WHITE
                    },
                    {
                        color: '#262626',
                        label: h.intl.string(h.t['dMey+v']),
                        enum: a.x.BLACK
                    }
                ],
                []
            );
        return (0, r.jsxs)('div', {
            className: b.colorSwatches,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/semibold',
                    children: h.intl.string(h.t.K1xGoK)
                }),
                (0, r.jsx)(E, { colors: e }),
                (0, r.jsx)(E, { colors: t })
            ]
        });
    },
    E = (e) => {
        let { colors: t } = e,
            { colorFilters: n, onToggleColor: l } = (0, p.S)();
        return (0, r.jsx)('div', {
            className: b.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: o, enum: i } = e;
                return (0, r.jsx)(
                    v,
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
    v = (e) => {
        let { color: t, label: n, enum: l, isToggled: o, onToggleColor: a } = e;
        return (0, r.jsx)(
            u.ua7,
            {
                text: n,
                children: (e) => {
                    let { onMouseEnter: s, onMouseLeave: c } = e;
                    return (0, r.jsx)(
                        u.P3F,
                        {
                            onMouseEnter: s,
                            onMouseLeave: c,
                            onFocus: s,
                            onBlur: c,
                            className: i()(b.circle, { [b.circleToggled]: o }),
                            style: { backgroundColor: t },
                            'aria-label': n,
                            onClick: () => {
                                a(l);
                            },
                            children:
                                o &&
                                (0, r.jsx)('div', {
                                    className: b.checkIcon,
                                    children: (0, r.jsx)(u.sV5, { color: u.TVs.colors.WHITE })
                                })
                        },
                        t
                    );
                }
            },
            n
        );
    },
    S = () => {
        let { themeFilters: e, onToggleTheme: t } = (0, p.S)(),
            n = (0, d.ZP)() === g.BR.DARK,
            o = l.useCallback(
                (t) => {
                    if (e.has(t) || n) return 'always-white';
                },
                [e, n]
            ),
            a = l.useCallback((t) => (e.has(t) || n ? u.TVs.colors.WHITE : u.TVs.colors.INTERACTIVE_NORMAL), [e, n]),
            s = l.useMemo(
                () => [
                    {
                        name: h.intl.string(h.t.aVBOKi),
                        icon: (0, r.jsx)(u.wGt, {
                            size: 'xs',
                            color: a(c.h.ANIME)
                        }),
                        enum: c.h.ANIME
                    },
                    {
                        name: h.intl.string(h.t['3WoZBQ']),
                        icon: (0, r.jsx)(u.iWm, {
                            size: 'xs',
                            color: a(c.h.GAMING)
                        }),
                        enum: c.h.GAMING
                    },
                    {
                        name: h.intl.string(h.t.yuEmLi),
                        icon: (0, r.jsx)(u.YqE, {
                            size: 'xs',
                            color: a(c.h.CUTE_COZY)
                        }),
                        enum: c.h.CUTE_COZY
                    },
                    {
                        name: h.intl.string(h.t.mMvCHh),
                        icon: (0, r.jsx)(u.lqV, {
                            size: 'xs',
                            color: a(c.h.SCI_FI)
                        }),
                        enum: c.h.SCI_FI
                    },
                    {
                        name: h.intl.string(h.t.TlhOQE),
                        icon: (0, r.jsx)(u.ED8, {
                            size: 'xs',
                            color: a(c.h.FOOD_DRINKS)
                        }),
                        enum: c.h.FOOD_DRINKS
                    },
                    {
                        name: h.intl.string(h.t['4IaUIC']),
                        icon: (0, r.jsx)(u.HI3, {
                            size: 'xs',
                            color: a(c.h.FANTASY)
                        }),
                        enum: c.h.FANTASY
                    },
                    {
                        name: h.intl.string(h.t.w0nSGx),
                        icon: (0, r.jsx)(u.Qjj, {
                            size: 'xs',
                            color: a(c.h.ANIMALS_PETS)
                        }),
                        enum: c.h.ANIMALS_PETS
                    },
                    {
                        name: h.intl.string(h.t.cJng7u),
                        icon: (0, r.jsx)(u.hg2, {
                            size: 'xs',
                            color: a(c.h.NATURE)
                        }),
                        enum: c.h.NATURE
                    },
                    {
                        name: h.intl.string(h.t['5mUvyM']),
                        icon: (0, r.jsx)(u.Roe, {
                            size: 'xs',
                            color: a(c.h.MOVIES_TV_SHOWS)
                        }),
                        enum: c.h.MOVIES_TV_SHOWS
                    },
                    {
                        name: h.intl.string(h.t.MB9H5e),
                        icon: (0, r.jsx)(u.Z6G, {
                            size: 'xs',
                            color: a(c.h.DARK_MOODY)
                        }),
                        enum: c.h.DARK_MOODY
                    }
                ],
                [a]
            );
        return (0, r.jsxs)('div', {
            className: b.themesSection,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/semibold',
                    children: h.intl.string(h.t.t1Ztrq)
                }),
                (0, r.jsx)('div', {
                    className: b.themeRow,
                    children: s.map((n) => {
                        let { name: l, icon: a, enum: s } = n;
                        return (0, r.jsxs)(
                            u.P3F,
                            {
                                className: i()(b.theme, { [b.themeToggled]: e.has(s) }),
                                onClick: () => t(s),
                                children: [
                                    a,
                                    (0, r.jsx)(u.Text, {
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
