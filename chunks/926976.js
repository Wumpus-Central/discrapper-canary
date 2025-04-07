n.d(t, { Z: () => Z }), n(388685), n(49124);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(852229),
    d = n(442837),
    u = n(481060),
    m = n(129861),
    x = n(665149),
    h = n(886118),
    p = n(301801),
    b = n(594174),
    f = n(55935),
    _ = n(120816),
    g = n(31336),
    v = n(257785),
    j = n(484036),
    y = n(681619),
    C = n(621060),
    T = n(388032),
    N = n(459100),
    S = n(616257);
let O = [
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
    return (0, r.jsx)(u.zJl, {
        className: N.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function k(e) {
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
                (0, r.jsx)(u.P3F, {
                    tag: 'span',
                    className: N.copyPropertyButton,
                    onClick: () => {
                        (0, c.J)(JSON.stringify(l)), o(!0);
                    },
                    children: i
                        ? (0, r.jsx)(u.kmB, {
                              color: 'currentColor',
                              size: 'sm'
                          })
                        : (0, r.jsx)(u.TIy, {
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
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    d = b.default.getUser(l),
                    h = s()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(x.ZP, {
                            className: i()(S.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsxs)(x.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: [
                                        t,
                                        (0, r.jsx)(u.P3F, {
                                            tag: 'span',
                                            className: N.copyEventButton,
                                            onClick: () => (0, c.J)(t),
                                            children: (0, r.jsx)(u.TIy, {
                                                color: 'currentColor',
                                                size: 'sm'
                                            })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: u.TIy,
                                    tooltip: 'Copy all properties',
                                    onClick: () => {
                                        (0, c.J)(
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
                                                        user: null == d ? void 0 : d.id
                                                    },
                                                    n
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2
                                            )
                                        );
                                    }
                                }),
                                (0, r.jsx)(x.ZP.Icon, {
                                    icon: u.k$p,
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
                                        title: (0, f.vc)(h, 'LLLL'),
                                        children: ['(', s().locale(), ') ', (0, f.Y4)(h)]
                                    })
                                }),
                                null != d &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        copyValue: d.id,
                                        children: (0, r.jsx)(m.Z, { user: d })
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
                                    k,
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
    P = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(P)
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
    },
    I = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100
    };
function Z() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, d.e7)([_.Z], () => _.Z.loggedEventsVersion),
        [o, s] = a.useState(() => Object.keys(P)),
        [c, m] = a.useState(_.Z.loggedEvents),
        x = a.useCallback((e) => {
            m(e);
        }, []);
    (0, p.BO)(t, _.Z.loggedEvents, x, I, [l]);
    let h = c.filter((e) => {
            for (let t of o) if (P[t].filter(e)) return !0;
            return !1;
        }),
        [b, f] = a.useState(void 0),
        v = h.find((e) => e.key === b),
        { TabBar: E, renderSelectedTab: k } = (0, C.ZP)({ tabs: w }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(S.panel, N.panel),
        children: [
            (0, r.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, r.jsx)(u.zxk, {
                        className: N.toolbarButton,
                        look: u.zxk.Looks.BLANK,
                        size: u.zxk.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, r.jsx)('span', {
                            title: T.NW.string(T.t.VkKicX),
                            children: (0, r.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': T.NW.string(T.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: N.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: N.filters,
                        children: Object.entries(P).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.P3F,
                                {
                                    className: i()(N.filter, o.includes(t) && N.activeFilter),
                                    onClick: () => {
                                        s((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                children: (0, r.jsx)(u.E1j, {
                    className: N.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(y.Z, {
                columns: O,
                data: h,
                selectedRowKey: b,
                onClickRow: (e) => f(e.key)
            }),
            null != v &&
                (0, r.jsxs)(j.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(E, {}),
                        k({
                            loggedEvent: v,
                            onClose: () => f(void 0)
                        })
                    ]
                })
        ]
    });
}
