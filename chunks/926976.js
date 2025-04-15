n.d(t, { Z: () => R }), n(388685), n(49124);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(129861),
    m = n(665149),
    x = n(886118),
    h = n(301801),
    p = n(594174),
    b = n(572004),
    f = n(55935),
    v = n(120816),
    j = n(31336),
    g = n(257785),
    _ = n(484036),
    y = n(681619),
    C = n(621060),
    O = n(388032),
    N = n(459100),
    E = n(616257);
let T = [
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
function S(e) {
    let { children: t } = e;
    return (0, a.jsx)(d.zJl, {
        className: N.customPropertiesContainer,
        children: (0, a.jsx)('dl', { children: t })
    });
}
function P(e) {
    let { name: t, children: n, copyValue: l } = e,
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, a.jsxs)('div', {
            className: N.customProperty,
            children: [
                (0, a.jsx)('dt', {
                    className: N.customPropertiesName,
                    children: t
                }),
                (0, a.jsx)('dd', { children: n }),
                (0, a.jsx)(d.P3F, {
                    tag: 'span',
                    className: N.copyPropertyButton,
                    onClick: () => {
                        (0, b.JG)(JSON.stringify(l)), s(!0);
                    },
                    children: i
                        ? (0, a.jsx)(d.kmB, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, a.jsx)(d.TIy, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                })
            ]
        })
    );
}
let w = [
        {
            id: 'details',
            name: 'Details',
            group: C.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: r, fingerprint: l },
                        onClose: s
                    } = e,
                    c = p.default.getUser(l),
                    x = o()(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.ZP, {
                            className: i()(E.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: d.IeX,
                                    tooltip: t
                                }),
                                (0, a.jsxs)(m.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: [
                                        t,
                                        (0, a.jsx)(d.P3F, {
                                            tag: 'span',
                                            className: N.copyEventButton,
                                            onClick: () => (0, b.JG)(t),
                                            children: (0, a.jsx)(d.TIy, {
                                                color: 'currentColor',
                                                size: 'sm'
                                            })
                                        })
                                    ]
                                }),
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: d.TIy,
                                    tooltip: 'Copy all properties',
                                    onClick: () => {
                                        (0, b.JG)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            a = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (a = a.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                })
                                                            )),
                                                            a.forEach(function (t) {
                                                                var a;
                                                                (a = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: a,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = a);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        event: t,
                                                        timestamp: r,
                                                        fingerprint: l,
                                                        user: null == c ? void 0 : c.id
                                                    },
                                                    n
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2
                                            )
                                        );
                                    }
                                }),
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: d.k$p,
                                    tooltip: 'Close',
                                    onClick: s
                                })
                            ]
                        }),
                        (0, a.jsxs)(g.E, {
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    copyValue: r.toISOString(),
                                    children: (0, a.jsxs)('time', {
                                        dateTime: r.toISOString(),
                                        title: (0, f.vc)(x, 'LLLL'),
                                        children: ['(', o().locale(), ') ', (0, f.Y4)(x)]
                                    })
                                }),
                                null != c &&
                                    (0, a.jsx)(g.Z9, {
                                        name: 'User',
                                        copyValue: c.id,
                                        children: (0, a.jsx)(u.Z, { user: c })
                                    }),
                                (0, a.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    copyValue: l,
                                    children: (0, a.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, a.jsx)(S, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, a.jsx)(
                                    P,
                                    {
                                        name: ''.concat(t, ':'),
                                        copyValue: { [t]: n || null },
                                        children:
                                            null != n
                                                ? (0, a.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, a.jsx)('code', {
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
    k = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(k)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [n, { filter: a }] = t;
                        return !a(e);
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
    },
    I = {
        searchType: x.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100
    };
function R() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
        [s, o] = r.useState(() => Object.keys(k)),
        [u, m] = r.useState(v.Z.loggedEvents),
        x = r.useCallback((e) => {
            m(e);
        }, []);
    (0, h.BO)(t, v.Z.loggedEvents, x, I, [l]);
    let p = u.filter((e) => {
            for (let t of s) if (k[t].filter(e)) return !0;
            return !1;
        }),
        [b, f] = r.useState(void 0),
        g = p.find((e) => e.key === b),
        { TabBar: S, renderSelectedTab: P } = (0, C.ZP)({ tabs: w }, []);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(E.panel, N.panel),
        children: [
            (0, a.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, a.jsx)(d.zxk, {
                        className: N.toolbarButton,
                        look: d.zxk.Looks.BLANK,
                        size: d.zxk.Sizes.ICON,
                        onClick: j.Zw,
                        children: (0, a.jsx)('span', {
                            title: O.NW.string(O.t.VkKicX),
                            children: (0, a.jsx)(d.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': O.NW.string(O.t.VkKicX)
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: N.toolbarDivider }),
                    (0, a.jsx)('div', {
                        className: N.filters,
                        children: Object.entries(k).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                d.P3F,
                                {
                                    className: i()(N.filter, s.includes(t) && N.activeFilter),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: n.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: N.toolbar,
                children: (0, a.jsx)(d.E1j, {
                    className: N.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, a.jsx)(y.Z, {
                columns: T,
                data: p,
                selectedRowKey: b,
                onClickRow: (e) => f(e.key)
            }),
            null != g &&
                (0, a.jsxs)(_.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(S, {}),
                        P({
                            loggedEvent: g,
                            onClose: () => f(void 0)
                        })
                    ]
                })
        ]
    });
}
