(a.d(t, { Z: () => Z }), a(388685), a(49124));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(913527),
    o = a.n(s),
    c = a(442837),
    d = a(755721),
    u = a(481060),
    m = a(129861),
    x = a(665149),
    p = a(886118),
    h = a(301801),
    b = a(594174),
    f = a(572004),
    v = a(55935),
    j = a(120816),
    g = a(31336),
    _ = a(257785),
    y = a(484036),
    C = a(681619),
    O = a(621060),
    N = a(388032),
    T = a(459100),
    E = a(616257);
let S = [
    {
        key: 'event',
        cellClassName: T.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: T.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function P(e) {
    let { children: t } = e;
    return (0, n.jsx)(u.zJl, {
        className: T.customPropertiesContainer,
        children: (0, n.jsx)('dl', { children: t })
    });
}
function w(e) {
    let { name: t, children: a, copyValue: l } = e,
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, n.jsxs)('div', {
            className: T.customProperty,
            children: [
                (0, n.jsx)('dt', {
                    className: T.customPropertiesName,
                    children: t
                }),
                (0, n.jsx)('dd', { children: a }),
                (0, n.jsx)(u.P3F, {
                    tag: 'span',
                    className: T.copyPropertyButton,
                    onClick: () => (0, f.JG)(JSON.stringify(l), () => s(!0)),
                    children: i
                        ? (0, n.jsx)(u.kmB, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, n.jsx)(u.TIy, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                })
            ]
        })
    );
}
let I = [
        {
            id: 'details',
            name: 'Details',
            group: O.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: r, fingerprint: l },
                        onClose: s
                    } = e,
                    c = b.default.getUser(l),
                    d = o()(r);
                return (0, n.jsxs)('div', {
                    'data-mtctest-ignore': 'true',
                    children: [
                        (0, n.jsxs)(x.ZP, {
                            className: i()(E.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, n.jsxs)(x.ZP.Title, {
                                    wrapperClassName: T.headerTitle,
                                    children: [
                                        t,
                                        (0, n.jsx)(u.P3F, {
                                            tag: 'span',
                                            className: T.copyEventButton,
                                            onClick: () => (0, f.JG)(t),
                                            children: (0, n.jsx)(u.TIy, {
                                                color: 'currentColor',
                                                size: 'sm'
                                            })
                                        })
                                    ]
                                }),
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.TIy,
                                    tooltip: 'Copy all properties',
                                    onClick: () => {
                                        (0, f.JG)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var a = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(a);
                                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                                })
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                ((n = a[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = n));
                                                            }));
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        event: t,
                                                        timestamp: r,
                                                        fingerprint: l,
                                                        user: null == c ? void 0 : c.id
                                                    },
                                                    a
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2
                                            )
                                        );
                                    }
                                }),
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: 'Close',
                                    onClick: s
                                })
                            ]
                        }),
                        (0, n.jsxs)(_.E, {
                            className: T.commonProperties,
                            children: [
                                (0, n.jsx)(_.Z9, {
                                    name: 'Timestamp (local)',
                                    copyValue: r.toISOString(),
                                    children: (0, n.jsxs)('time', {
                                        dateTime: r.toISOString(),
                                        title: (0, v.vc)(d, 'LLLL'),
                                        children: ['(', o().locale(), ') ', (0, v.Y4)(d)]
                                    })
                                }),
                                null != c &&
                                    (0, n.jsx)(_.Z9, {
                                        name: 'User',
                                        copyValue: c.id,
                                        children: (0, n.jsx)(m.Z, { user: c })
                                    }),
                                (0, n.jsx)(_.Z9, {
                                    name: 'Fingerprint',
                                    copyValue: l,
                                    children: (0, n.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, n.jsx)(P, {
                            children: Object.entries(a).map((e) => {
                                let [t, a] = e;
                                return (0, n.jsx)(
                                    w,
                                    {
                                        name: ''.concat(t, ':'),
                                        copyValue: { [t]: a || null },
                                        children:
                                            null != a
                                                ? (0, n.jsx)('code', { children: JSON.stringify(a) })
                                                : (0, n.jsx)('code', {
                                                      className: T.emptyProperty,
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
    R = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(R)
                    .filter((e) => {
                        let [t] = e;
                        return 'events' !== t;
                    })
                    .map((t) => {
                        let [a, { filter: n }] = t;
                        return !n(e);
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
    k = {
        searchType: p.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100
    };
function Z() {
    let e = r.useRef(null),
        [t, a] = r.useState(''),
        l = (0, c.e7)([j.Z], () => j.Z.loggedEventsVersion),
        [s, o] = r.useState(() => Object.keys(R)),
        [m, x] = r.useState(j.Z.loggedEvents),
        p = r.useCallback((e) => {
            x(e);
        }, []);
    (0, h.BO)(t, j.Z.loggedEvents, p, k, [l]);
    let b = m.filter((e) => {
            for (let t of s) if (R[t].filter(e)) return !0;
            return !1;
        }),
        [f, v] = r.useState(void 0),
        _ = b.find((e) => e.key === f),
        { TabBar: P, renderSelectedTab: w } = (0, O.ZP)({ tabs: I }, []);
    return (0, n.jsxs)('div', {
        ref: e,
        className: i()(E.panel, T.panel),
        children: [
            (0, n.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, n.jsx)(d.zx, {
                        className: T.toolbarButton,
                        look: d.zx.Looks.BLANK,
                        size: d.zx.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, n.jsx)('span', {
                            title: N.intl.string(N.t.VkKicX),
                            children: (0, n.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': N.intl.string(N.t.VkKicX)
                            })
                        })
                    }),
                    (0, n.jsx)('div', { className: T.toolbarDivider }),
                    (0, n.jsx)('div', {
                        className: T.filters,
                        children: Object.entries(R).map((e) => {
                            let [t, a] = e;
                            return (0, n.jsx)(
                                u.P3F,
                                {
                                    className: i()(T.filter, s.includes(t) && T.activeFilter),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: a.label
                                },
                                t
                            );
                        })
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: T.toolbar,
                children: (0, n.jsx)(u.E1j, {
                    className: T.searchBar,
                    query: t,
                    onChange: a,
                    onClear: () => a(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, n.jsx)(C.Z, {
                columns: S,
                data: b,
                selectedRowKey: f,
                onClickRow: (e) => v(e.key)
            }),
            null != _ &&
                (0, n.jsxs)(y.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, n.jsx)(P, {}),
                        w({
                            loggedEvent: _,
                            onClose: () => v(void 0)
                        })
                    ]
                })
        ]
    });
}
