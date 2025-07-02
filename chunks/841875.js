n.d(t, { Z: () => u });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(824274),
    o = n(215023),
    s = n(388032),
    c = n(590305);
function u() {
    let { filterSettings: e, onChange: t } = (0, a.C)();
    return (0, r.jsxs)('div', {
        className: c.filterBar,
        children: [
            (0, r.jsxs)('div', {
                className: c.filterCheckboxes,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/semibold',
                        children: s.intl.string(s.t.Qk6r1d)
                    }),
                    o.xg.map((n) =>
                        (0, r.jsx)(
                            d,
                            {
                                filter: n,
                                filterSettings: e,
                                onChange: t
                            },
                            n
                        )
                    )
                ]
            }),
            (0, r.jsx)(p, {}),
            (0, r.jsx)(f, {})
        ]
    });
}
let d = (e) => {
        let { filter: t, filterSettings: n, onChange: l } = e,
            a = {
                [o.Vh.AVATAR_DECORATIONS]: s.intl.string(s.t.dRZYND),
                [o.Vh.PROFILE_EFFECTS]: s.intl.string(s.t['1cNjt7']),
                [o.Vh.NAMEPLATES]: s.intl.string(s.t.V68Fq6),
                [o.Vh.BUNDLES]: s.intl.string(s.t.FYFppq),
                [o.Vh.ORBS_ELIGIBLE]: s.intl.string(s.t.AHHHgI)
            };
        return (0, r.jsxs)('div', {
            className: c.filterCheckbox,
            children: [
                (0, r.jsx)('div', {
                    className: c.checkbox,
                    children: (0, r.jsx)(i.XZJ, {
                        value: n.has(t),
                        onChange: (e, n) => {
                            (e.stopPropagation(), l(t, n));
                        }
                    })
                }),
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/normal',
                    children: a[t]
                })
            ]
        });
    },
    p = () => {
        let e = l.useMemo(
                () => [
                    {
                        color: '#262626',
                        label: s.intl.string(s.t['dMey+v'])
                    },
                    {
                        color: '#9B59B6',
                        label: s.intl.string(s.t.kqUD4O)
                    },
                    {
                        color: '#3498DB',
                        label: s.intl.string(s.t.qQTRaW)
                    },
                    {
                        color: '#1ABC9C',
                        label: s.intl.string(s.t.ceaZKy)
                    },
                    {
                        color: '#2ECC71',
                        label: s.intl.string(s.t['f/Ylk5'])
                    }
                ],
                []
            ),
            t = l.useMemo(
                () => [
                    {
                        color: '#A0522D',
                        label: s.intl.string(s.t['Sd/BMT'])
                    },
                    {
                        color: '#F1C40F',
                        label: s.intl.string(s.t['0fevY2'])
                    },
                    {
                        color: '#E67E22',
                        label: s.intl.string(s.t.ZE7weH)
                    },
                    {
                        color: '#E74C3C',
                        label: s.intl.string(s.t.hKJGOD)
                    },
                    {
                        color: '#EC407A',
                        label: s.intl.string(s.t.HvLEGB)
                    }
                ],
                []
            );
        return (0, r.jsxs)('div', {
            className: c.colorSwatches,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/semibold',
                    children: s.intl.string(s.t.K1xGoK)
                }),
                (0, r.jsx)(g, { colors: e }),
                (0, r.jsx)(g, { colors: t })
            ]
        });
    },
    g = (e) => {
        let { colors: t } = e;
        return (0, r.jsx)('div', {
            className: c.colorSwatchRow,
            children: t.map((e) => {
                let { color: t, label: n } = e;
                return (0, r.jsx)(
                    i.P3F,
                    {
                        className: c.circle,
                        style: { backgroundColor: t },
                        'aria-label': n
                    },
                    t
                );
            })
        });
    },
    f = () => {
        let e = l.useMemo(
            () => [
                [
                    {
                        name: s.intl.string(s.t.aVBOKi),
                        icon: (0, r.jsx)(i.wGt, { size: 'xxs' })
                    },
                    {
                        name: s.intl.string(s.t['3WoZBQ']),
                        icon: (0, r.jsx)(i.iWm, { size: 'xxs' })
                    }
                ],
                [
                    {
                        name: s.intl.string(s.t.yuEmLi),
                        icon: (0, r.jsx)(i.YqE, { size: 'xxs' })
                    },
                    {
                        name: s.intl.string(s.t.mMvCHh),
                        icon: (0, r.jsx)(i.lqV, { size: 'xxs' })
                    }
                ],
                [
                    {
                        name: s.intl.string(s.t.TlhOQE),
                        icon: (0, r.jsx)(i.ED8, { size: 'xxs' })
                    },
                    {
                        name: s.intl.string(s.t['4IaUIC']),
                        icon: (0, r.jsx)(i.HI3, { size: 'xxs' })
                    }
                ],
                [
                    {
                        name: s.intl.string(s.t.w0nSGx),
                        icon: (0, r.jsx)(i.Qjj, { size: 'xxs' })
                    },
                    {
                        name: s.intl.string(s.t.cJng7u),
                        icon: (0, r.jsx)(i.hg2, { size: 'xxs' })
                    }
                ],
                [
                    {
                        name: s.intl.string(s.t['5mUvyM']),
                        icon: (0, r.jsx)(i.Roe, { size: 'xxs' })
                    },
                    {
                        name: s.intl.string(s.t.MB9H5e),
                        icon: (0, r.jsx)(i.Z6G, { size: 'xxs' })
                    }
                ]
            ],
            []
        );
        return (0, r.jsxs)('div', {
            className: c.themesSection,
            children: [
                (0, r.jsx)(i.Text, {
                    variant: 'text-md/semibold',
                    children: s.intl.string(s.t.t1Ztrq)
                }),
                e.map((e) =>
                    (0, r.jsx)(
                        'div',
                        {
                            className: c.themeRow,
                            children: e.map((e) => {
                                let { name: t, icon: n } = e;
                                return (0, r.jsxs)(
                                    i.P3F,
                                    {
                                        className: c.theme,
                                        children: [
                                            n,
                                            (0, r.jsx)(i.Text, {
                                                variant: 'text-xs/medium',
                                                children: t
                                            })
                                        ]
                                    },
                                    t
                                );
                            })
                        },
                        e.map((e) => e.name).join(',')
                    )
                )
            ]
        });
    };
