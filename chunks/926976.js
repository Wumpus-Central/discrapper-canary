n.d(t, { Z: () => w }), n(47120), n(26686);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    h = n(129861),
    m = n(665149),
    x = n(301801),
    p = n(594174),
    f = n(55935),
    b = n(120816),
    _ = n(31336),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    C = n(621060),
    y = n(388032),
    O = n(414746),
    N = n(841699);
let T = [
    {
        key: 'event',
        cellClassName: O.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: O.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.zJl, {
        className: O.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function S(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: O.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: O.customPropertiesValue,
                children: n
            })
        ]
    });
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
                    s = p.default.getUser(i),
                    d = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.ZP, {
                            className: l()(N.headerBar, O.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsx)(m.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.E, {
                            className: O.commonProperties,
                            children: [
                                (0, r.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, f.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, f.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(h.Z, { user: s })
                                    }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: i })
                                })
                            ]
                        }),
                        (0, r.jsx)(E, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    S,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: O.emptyProperty,
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
    I = {
        events: {
            label: 'Events',
            filter: (e) =>
                Object.entries(I)
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
function w() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        i = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
        s = a.useMemo(() => b.Z.loggedEvents, [i]),
        [c, h] = a.useState(Object.keys(I)),
        [m, p] = a.useState(s),
        f = a.useRef(null),
        g = a.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            p(t);
                            return;
                        }
                        f.current = (0, o.uniqueId)();
                        let n = await (0, x.H)(
                            t,
                            (e) => {
                                let { event: t } = e;
                                return t;
                            },
                            e,
                            !0
                        );
                        null != f.current && p(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        E = a.useMemo(
            () =>
                m.filter((e) => {
                    for (let t of c) if (I[t].filter(e)) return !0;
                    return !1;
                }),
            [m, c]
        );
    a.useEffect(() => {
        g(t, s);
    }, [t, g, s]);
    let [S, w] = a.useState(void 0),
        R = E.find((e) => e.key === S),
        { TabBar: Z, renderSelectedTab: P } = (0, C.Z)({ tabs: k }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: l()(N.panel, O.panel),
        children: [
            (0, r.jsxs)('div', {
                className: O.toolbar,
                children: [
                    (0, r.jsx)(u.zxk, {
                        className: O.toolbarButton,
                        look: u.zxk.Looks.BLANK,
                        size: u.zxk.Sizes.ICON,
                        onClick: _.Zw,
                        children: (0, r.jsx)('span', {
                            title: y.NW.string(y.t.VkKicX),
                            children: (0, r.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': y.NW.string(y.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: O.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: O.filters,
                        children: Object.entries(I).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.P3F,
                                {
                                    className: l()(O.filter, c.includes(t) && O.activeFilter),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                className: O.toolbar,
                children: (0, r.jsx)(u.E1j, {
                    className: O.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(j.Z, {
                columns: T,
                data: E,
                selectedRowKey: S,
                onClickRow: (e) => w(e.key)
            }),
            null != R &&
                (0, r.jsxs)(v.Z, {
                    className: O.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(Z, {}),
                        P({
                            loggedEvent: R,
                            onClose: () => w(void 0)
                        })
                    ]
                })
        ]
    });
}
