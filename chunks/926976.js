n.d(t, { Z: () => Z }), n(47120), n(26686);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(913527),
    s = n.n(o),
    c = n(852229),
    d = n(442837),
    u = n(481060),
    m = n(129861),
    h = n(665149),
    p = n(886118),
    x = n(301801),
    f = n(594174),
    b = n(55935),
    _ = n(120816),
    g = n(31336),
    v = n(257785),
    j = n(484036),
    y = n(681619),
    C = n(621060),
    N = n(388032),
    T = n(871133),
    O = n(710662);
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
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.zJl, {
        className: T.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function I(e) {
    let { name: t, children: n, copyValue: i } = e,
        [l, o] = a.useState(!1);
    return (
        a.useEffect(() => {
            if (l) {
                let e = setTimeout(() => o(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)('div', {
            className: T.customProperty,
            children: [
                (0, r.jsx)('dt', {
                    className: T.customPropertiesName,
                    children: t
                }),
                (0, r.jsx)('dd', { children: n }),
                (0, r.jsx)(u.P3F, {
                    tag: 'span',
                    className: T.copyPropertyButton,
                    onClick: () => {
                        (0, c.J)(JSON.stringify(i)), o(!0);
                    },
                    children: l
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
let k = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: i },
                        onClose: o
                    } = e,
                    d = f.default.getUser(i),
                    p = s()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.ZP, {
                            className: l()(O.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsxs)(h.ZP.Title, {
                                    wrapperClassName: T.headerTitle,
                                    children: [
                                        t,
                                        (0, r.jsx)(u.P3F, {
                                            tag: 'span',
                                            className: T.copyEventButton,
                                            onClick: () => (0, c.J)(t),
                                            children: (0, r.jsx)(u.TIy, {
                                                color: 'currentColor',
                                                size: 'sm'
                                            })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(h.ZP.Icon, {
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
                                                        fingerprint: i,
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
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: T.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    copyValue: a.toISOString(),
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, b.vc)(p, 'LLLL'),
                                        children: ['(', s().locale(), ') ', (0, b.Y4)(p)]
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
                                    copyValue: i,
                                    children: (0, r.jsx)('code', { children: i })
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
    },
    P = {
        searchType: p.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        }
    };
function Z() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        i = (0, d.e7)([_.Z], () => _.Z.loggedEventsVersion),
        [o, s] = a.useState(() => Object.keys(w)),
        [c, m] = a.useState(_.Z.loggedEvents),
        h = a.useCallback((e) => {
            m(e);
        }, []);
    (0, x.BO)(t, _.Z.loggedEvents, h, P, [i]);
    let p = c.filter((e) => {
            for (let t of o) if (w[t].filter(e)) return !0;
            return !1;
        }),
        [f, b] = a.useState(void 0),
        v = p.find((e) => e.key === f),
        { TabBar: E, renderSelectedTab: I } = (0, C.Z)({ tabs: k }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(O.panel, T.panel),
        children: [
            (0, r.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, r.jsx)(u.zxk, {
                        className: T.toolbarButton,
                        look: u.zxk.Looks.BLANK,
                        size: u.zxk.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, r.jsx)('span', {
                            title: N.NW.string(N.t.VkKicX),
                            children: (0, r.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': N.NW.string(N.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: T.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: T.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.P3F,
                                {
                                    className: l()(T.filter, o.includes(t) && T.activeFilter),
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
                className: T.toolbar,
                children: (0, r.jsx)(u.E1j, {
                    className: T.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(y.Z, {
                columns: S,
                data: p,
                selectedRowKey: f,
                onClickRow: (e) => b(e.key)
            }),
            null != v &&
                (0, r.jsxs)(j.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(E, {}),
                        I({
                            loggedEvent: v,
                            onClose: () => b(void 0)
                        })
                    ]
                })
        ]
    });
}
