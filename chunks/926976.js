n.d(t, { Z: () => w }), n(47120), n(26686);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    m = n(129861),
    h = n(665149),
    x = n(301801),
    f = n(594174),
    p = n(55935),
    b = n(120816),
    _ = n(31336),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    y = n(621060),
    C = n(388032),
    N = n(871133),
    O = n(710662);
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
    return (0, r.jsx)(u.zJl, {
        className: N.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function E(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: N.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: N.customPropertiesValue,
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
                        loggedEvent: { event: t, properties: n, timestamp: a, fingerprint: l },
                        onClose: o
                    } = e,
                    s = f.default.getUser(l),
                    d = c()(a);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(h.ZP, {
                            className: i()(O.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, r.jsx)(h.ZP.Title, {
                                    wrapperClassName: O.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(h.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(g.E, {
                            className: N.commonProperties,
                            children: [
                                (0, r.jsx)(g.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, p.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(m.Z, { user: s })
                                    }),
                                (0, r.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(S, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    E,
                                    {
                                        name: ''.concat(t, ':'),
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
        l = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
        [s, c] = a.useState(() => Object.keys(I)),
        [m, h] = a.useState(b.Z.loggedEvents),
        f = a.useRef(null),
        p = a.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            h(t);
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
                        null != f.current && h(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        g = m.filter((e) => {
            for (let t of s) if (I[t].filter(e)) return !0;
            return !1;
        });
    a.useEffect(() => {
        p(t, b.Z.loggedEvents);
    }, [t, p, l]);
    let [S, E] = a.useState(void 0),
        w = g.find((e) => e.key === S),
        { TabBar: Z, renderSelectedTab: P } = (0, y.Z)({ tabs: k }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(O.panel, N.panel),
        children: [
            (0, r.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, r.jsx)(u.zxk, {
                        className: N.toolbarButton,
                        look: u.zxk.Looks.BLANK,
                        size: u.zxk.Sizes.ICON,
                        onClick: _.Zw,
                        children: (0, r.jsx)('span', {
                            title: C.NW.string(C.t.VkKicX),
                            children: (0, r.jsx)(u.XHJ, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': C.NW.string(C.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: N.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: N.filters,
                        children: Object.entries(I).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.P3F,
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
                children: (0, r.jsx)(u.E1j, {
                    className: N.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(j.Z, {
                columns: T,
                data: g,
                selectedRowKey: S,
                onClickRow: (e) => E(e.key)
            }),
            null != w &&
                (0, r.jsxs)(v.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(Z, {}),
                        P({
                            loggedEvent: w,
                            onClose: () => E(void 0)
                        })
                    ]
                })
        ]
    });
}
