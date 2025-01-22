n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
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
    f = n(594174),
    p = n(55935),
    b = n(120816),
    g = n(31336),
    v = n(257785),
    j = n(484036),
    _ = n(681619),
    C = n(621060),
    T = n(388032),
    N = n(931933),
    S = n(941469);
let y = [
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
function I(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.ScrollerThin, {
        className: N.customPropertiesContainer,
        children: (0, a.jsx)('dl', { children: t })
    });
}
function E(e) {
    let { name: t, children: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: N.customPropertiesName,
                children: t
            }),
            (0, a.jsx)('dd', {
                className: N.customPropertiesValue,
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
                        loggedEvent: { event: t, properties: n, timestamp: r, fingerprint: l },
                        onClose: o
                    } = e,
                    s = f.default.getUser(l),
                    d = c()(r);
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.ZP, {
                            className: i()(S.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, a.jsx)(m.ZP.Title, {
                                    wrapperClassName: S.headerTitle,
                                    children: t
                                }),
                                (0, a.jsx)(m.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, a.jsxs)(v.E, {
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, a.jsxs)('time', {
                                        dateTime: r.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, p.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, a.jsx)(v.Z9, {
                                        name: 'User',
                                        children: (0, a.jsx)(h.Z, { user: s })
                                    }),
                                (0, a.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, a.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, a.jsx)(I, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, a.jsx)(
                                    E,
                                    {
                                        name: ''.concat(t, ':'),
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
function k() {
    let e = r.useRef(null),
        [t, n] = r.useState(''),
        l = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
        s = r.useMemo(() => b.Z.loggedEvents, [l]),
        [c, h] = r.useState(Object.keys(w)),
        [m, f] = r.useState(s),
        p = r.useRef(null),
        v = r.useMemo(
            () =>
                (0, o.throttle)(
                    async (e, t) => {
                        if ('' === e) {
                            f(t);
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
                        if (null != p.current) f(n);
                    },
                    300,
                    { leading: !0 }
                ),
            []
        ),
        I = r.useMemo(
            () =>
                m.filter((e) => {
                    for (let t of c) if (w[t].filter(e)) return !0;
                    return !1;
                }),
            [m, c]
        );
    r.useEffect(() => {
        v(t, s);
    }, [t, v, s]);
    let [E, k] = r.useState(void 0),
        O = I.find((e) => e.key === E),
        { TabBar: R, renderSelectedTab: B } = (0, C.Z)({ tabs: Z }, []);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(S.panel, N.panel),
        children: [
            (0, a.jsxs)('div', {
                className: N.toolbar,
                children: [
                    (0, a.jsx)(u.Button, {
                        className: N.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, a.jsx)('span', {
                            title: T.intl.string(T.t.VkKicX),
                            children: (0, a.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': T.intl.string(T.t.VkKicX)
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: N.toolbarDivider }),
                    (0, a.jsx)('div', {
                        className: N.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.Clickable,
                                {
                                    className: i()(N.filter, c.includes(t) && N.activeFilter),
                                    onClick: () => {
                                        var e;
                                        return (e = t), void h((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
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
                children: (0, a.jsx)(u.SearchBar, {
                    className: N.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, a.jsx)(_.Z, {
                columns: y,
                data: I,
                selectedRowKey: E,
                onClickRow: (e) => k(e.key)
            }),
            null != O &&
                (0, a.jsxs)(j.Z, {
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(R, {}),
                        B({
                            loggedEvent: O,
                            onClose: () => k(void 0)
                        })
                    ]
                })
        ]
    });
}
