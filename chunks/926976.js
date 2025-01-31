n.d(t, { Z: () => O }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n(913527),
    c = n.n(s),
    d = n(442837),
    u = n(481060),
    m = n(129861),
    h = n(665149),
    x = n(301801),
    p = n(594174),
    f = n(55935),
    b = n(120816),
    _ = n(31336),
    g = n(257785),
    v = n(484036),
    j = n(681619),
    C = n(621060),
    N = n(388032),
    T = n(931933),
    E = n(941469);
let y = [
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
function S(e) {
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
let Z = [
        {
            id: 'details',
            name: 'Details',
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: l, fingerprint: r },
                        onClose: o
                    } = e,
                    s = p.default.getUser(r),
                    d = c()(l);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(h.ZP, {
                            className: i()(E.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(h.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t
                                }),
                                (0, a.jsx)(h.ZP.Title, {
                                    wrapperClassName: E.headerTitle,
                                    children: t
                                }),
                                (0, a.jsx)(h.ZP.Icon, {
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
                                        dateTime: l.toISOString(),
                                        title: (0, f.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, f.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, a.jsx)(g.Z9, {
                                        name: 'User',
                                        children: (0, a.jsx)(m.Z, { user: s })
                                    }),
                                (0, a.jsx)(g.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, a.jsx)('code', { children: r })
                                })
                            ]
                        }),
                        (0, a.jsx)(S, {
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
    let e = l.useRef(null),
        [t, n] = l.useState(''),
        r = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
        s = l.useMemo(() => b.Z.loggedEvents, [r]),
        [c, m] = l.useState(Object.keys(I)),
        [h, p] = l.useState(s),
        f = l.useRef(null),
        g = l.useMemo(
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
        S = l.useMemo(
            () =>
                h.filter((e) => {
                    for (let t of c) if (I[t].filter(e)) return !0;
                    return !1;
                }),
            [h, c]
        );
    l.useEffect(() => {
        g(t, s);
    }, [t, g, s]);
    let [k, O] = l.useState(void 0),
        w = S.find((e) => e.key === k),
        { TabBar: R, renderSelectedTab: P } = (0, C.Z)({ tabs: Z }, []);
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
                        onClick: _.Zw,
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
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                columns: y,
                data: S,
                selectedRowKey: k,
                onClickRow: (e) => O(e.key)
            }),
            null != w &&
                (0, a.jsxs)(v.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(R, {}),
                        P({
                            loggedEvent: w,
                            onClose: () => O(void 0)
                        })
                    ]
                })
        ]
    });
}
