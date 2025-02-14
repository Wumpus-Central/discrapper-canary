n.d(t, { Z: () => O }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    h = n(129861),
    m = n(665149),
    x = n(301801),
    _ = n(594174),
    p = n(55935),
    f = n(120816),
    b = n(31336),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    C = n(621060),
    N = n(388032),
    T = n(822295),
    E = n(658951);
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
function y(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.zJl, {
        className: T.customPropertiesContainer,
        children: (0, a.jsx)('dl', { children: t })
    });
}
function k(e) {
    let { name: t, children: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: T.customPropertiesName,
                children: t
            }),
            (0, a.jsx)('dd', {
                className: T.customPropertiesValue,
                children: n
            })
        ]
    });
}
let R = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: r, fingerprint: l },
                        onClose: o
                    } = e,
                    s = _.default.getUser(l),
                    d = c()(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.ZP, {
                            className: i()(E.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, a.jsx)(m.ZP.Title, {
                                    wrapperClassName: E.headerTitle,
                                    children: t
                                }),
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, a.jsxs)(g.E, {
                            className: T.commonProperties,
                            children: [
                                (0, a.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsxs)('time', {
                                        dateTime: r.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, p.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, a.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, a.jsx)(h.Z, { user: s })
                                    }),
                                (0, a.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, a.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, a.jsx)(y, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, a.jsx)(
                                    k,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, a.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, a.jsx)('code', {
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
    };
function O() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (0, d.e7)([f.Z], () => f.Z.loggedEventsVersion),
        s = r.useMemo(() => f.Z.loggedEvents, [l]),
        [c, h] = r.useState(Object.keys(I)),
        [m, _] = r.useState(s),
        p = r.useRef(null),
        g = r.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            _(t);
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
                        null != p.current && _(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        y = r.useMemo(
            () =>
                m.filter((e) => {
                    for (let t of c) if (I[t].filter(e)) return !0;
                    return !1;
                }),
            [m, c]
        );
    r.useEffect(() => {
        g(t, s);
    }, [t, g, s]);
    let [k, O] = r.useState(void 0),
        Z = y.find((e) => e.key === k),
        { TabBar: w, renderSelectedTab: A } = (0, C.Z)({ tabs: R }, []);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(E.panel, T.panel),
        children: [
            (0, a.jsxs)('div', {
                className: T.toolbar,
                children: [
                    (0, a.jsx)(u.zxk, {
                        className: T.toolbarButton,
                        look: u.zxk.Looks.BLANK,
                        size: u.zxk.Sizes.ICON,
                        onClick: b.Zw,
                        children: (0, a.jsx)('span', {
                            title: N.intl.string(N.t.VkKicX),
                            children: (0, a.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': N.intl.string(N.t.VkKicX)
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: T.toolbarDivider }),
                    (0, a.jsx)('div', {
                        className: T.filters,
                        children: Object.entries(I).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.P3F,
                                {
                                    className: i()(T.filter, c.includes(t) && T.activeFilter),
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
            (0, a.jsx)('div', {
                className: T.toolbar,
                children: (0, a.jsx)(u.E1j, {
                    className: T.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, a.jsx)(j.Z, {
                columns: S,
                data: y,
                selectedRowKey: k,
                onClickRow: (e) => O(e.key)
            }),
            null != Z &&
                (0, a.jsxs)(v.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(w, {}),
                        A({
                            loggedEvent: Z,
                            onClose: () => O(void 0)
                        })
                    ]
                })
        ]
    });
}
