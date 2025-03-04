n.d(t, { Z: () => P }), n(47120), n(26686);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(852229),
    u = n(442837),
    m = n(481060),
    h = n(129861),
    p = n(665149),
    x = n(301801),
    f = n(594174),
    b = n(55935),
    _ = n(120816),
    g = n(31336),
    v = n(257785),
    j = n(484036),
    y = n(681619),
    C = n(621060),
    O = n(388032),
    N = n(871133),
    T = n(710662);
let S = [
    {
        key: 'event',
        cellClassName: N.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: N.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)(m.zJl, {
        className: N.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function I(e) {
    let { name: t, children: n, copyValue: l } = e,
        [i, o] = a.useState(!1);
    return (
        a.useEffect(() => {
            if (i) {
                let e = setTimeout(() => o(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, r.jsxs)('div', {
            className: N.customProperty,
            children: [
                (0, r.jsx)('dt', {
                    className: N.customPropertiesName,
                    children: t
                }),
                (0, r.jsx)('dd', { children: n }),
                (0, r.jsx)(m.P3F, {
                    tag: 'span',
                    className: N.copyPropertyButton,
                    onClick: () => {
                        (0, d.J)(JSON.stringify(l)), o(!0);
                    },
                    children: i
                        ? (0, r.jsx)(m.kmB, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, r.jsx)(m.TIy, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                })
            ]
        })
    );
}
let k = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    s = f.default.getUser(l),
                    u = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(p.ZP, {
                            className: i()(T.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(p.ZP.Icon, {
                                    icon: m.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsxs)(p.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: [
                                        t,
                                        (0, r.jsx)(m.P3F, {
                                            tag: 'span',
                                            className: N.copyEventButton,
                                            onClick: () => (0, d.J)(t),
                                            children: (0, r.jsx)(m.TIy, {
                                                color: 'currentColor',
                                                size: 'sm'
                                            })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(p.ZP.Icon, {
                                    icon: m.TIy,
                                    tooltip: 'Copy all properties',
                                    onClick: () => {
                                        (0, d.J)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        event: t,
                                                        timestamp: a,
                                                        fingerprint: l,
                                                        user: null == s ? void 0 : s.id
                                                    },
                                                    n
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2
                                            )
                                        );
                                    }
                                }),
                                (0, r.jsx)(p.ZP.Icon, {
                                    icon: m.k$p,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: N.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    copyValue: a.toISOString(),
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, b.vc)(u, 'LLLL'),
                                        children: ['(', c().locale(), ') ', (0, b.Y4)(u)]
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        copyValue: s.id,
                                        children: (0, r.jsx)(h.Z, { user: s })
                                    }),
                                (0, r.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    copyValue: l,
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(E, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    I,
                                    {
                                        name: ''.concat(t, ':'),
                                        copyValue: { [t]: n || null },
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: N.emptyProperty,
                                                      children: 'null'
                                                  })
                                    },
                                    t
                                );
                            })
                        })
                    ]
                });
            }
        }
    ],
    w = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(w)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [n, { filter: r }] = t;
                        return !r(e);
                    })
                    .every((e) => e)
        },
        experiments: {
            label: 'Experiments',
            filter: (e) => ['experiment_user_triggered', 'experiment_guild_triggered'].includes(e.event)
        },
        impressions: {
            label: 'Impressions',
            filter: (e) => e.event.startsWith('impression_')
        },
        networkActions: {
            label: 'Network',
            filter: (e) => e.event.startsWith('network_action')
        }
    };
function P() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, u.e7)([_.Z], () => _.Z.loggedEventsVersion),
        [s, c] = a.useState(() => Object.keys(w)),
        [d, h] = a.useState(_.Z.loggedEvents),
        p = a.useRef(null),
        f = a.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            h(t);
                            return;
                        }
                        p.current = (0, o.uniqueId)();
                        let n = await (0, x.H)(
                            t,
                            (e) => {
                                let { event: t } = e;
                                return t;
                            },
                            e,
                            !0
                        );
                        null != p.current && h(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        b = d.filter((e) => {
            for (let t of s) if (w[t].filter(e)) return !0;
            return !1;
        });
    a.useEffect(() => {
        f(t, _.Z.loggedEvents);
    }, [t, f, l]);
    let [v, E] = a.useState(void 0),
        I = b.find((e) => e.key === v),
        { TabBar: P, renderSelectedTab: Z } = (0, C.Z)({ tabs: k }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(T.panel, N.panel),
        children: [
            (0, r.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, r.jsx)(m.zxk, {
                        className: N.toolbarButton,
                        look: m.zxk.Looks.BLANK,
                        size: m.zxk.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, r.jsx)('span', {
                            title: O.NW.string(O.t.VkKicX),
                            children: (0, r.jsx)(m.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': O.NW.string(O.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: N.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: N.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                m.P3F,
                                {
                                    className: i()(N.filter, s.includes(t) && N.activeFilter),
                                    onClick: () => {
                                        c((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: n.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: N.toolbar,
                children: (0, r.jsx)(m.E1j, {
                    className: N.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(y.Z, {
                columns: S,
                data: b,
                selectedRowKey: v,
                onClickRow: (e) => E(e.key)
            }),
            null != I &&
                (0, r.jsxs)(j.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(P, {}),
                        Z({
                            loggedEvent: I,
                            onClose: () => E(void 0)
                        })
                    ]
                })
        ]
    });
}
