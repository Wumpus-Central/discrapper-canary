n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
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
    C = n(681619),
    T = n(621060),
    _ = n(388032),
    S = n(931933),
    N = n(941469);
let y = [
    {
        key: 'event',
        cellClassName: S.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        }
    },
    {
        key: 'location',
        cellClassName: S.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        }
    }
];
function k(e) {
    let { children: t } = e;
    return (0, r.jsx)(u.ScrollerThin, {
        className: S.customPropertiesContainer,
        children: (0, r.jsx)('dl', { children: t })
    });
}
function I(e) {
    let { name: t, children: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('dt', {
                className: S.customPropertiesName,
                children: t
            }),
            (0, r.jsx)('dd', {
                className: S.customPropertiesValue,
                children: n
            })
        ]
    });
}
let E = [
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
                        (0, r.jsxs)(m.ZP, {
                            className: i()(N.headerBar, S.subPanelHeaderBar),
                            children: [
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.AnalyticsIcon,
                                    tooltip: t
                                }),
                                (0, r.jsx)(m.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: t
                                }),
                                (0, r.jsx)(m.ZP.Icon, {
                                    icon: u.CircleXIcon,
                                    tooltip: 'Close',
                                    onClick: o
                                })
                            ]
                        }),
                        (0, r.jsxs)(v.E, {
                            className: S.commonProperties,
                            children: [
                                (0, r.jsx)(v.Z9, {
                                    name: 'Timestamp (local)',
                                    children: (0, r.jsxs)('time', {
                                        dateTime: a.toISOString(),
                                        title: (0, p.vc)(d, 'LLLL'),
                                        children: [c().locale(), (0, p.Y4)(d)]
                                    })
                                }),
                                null != s &&
                                    (0, r.jsx)(v.Z9, {
                                        name: 'User',
                                        children: (0, r.jsx)(h.Z, { user: s })
                                    }),
                                (0, r.jsx)(v.Z9, {
                                    name: 'Fingerprint',
                                    children: (0, r.jsx)('code', { children: l })
                                })
                            ]
                        }),
                        (0, r.jsx)(k, {
                            children: Object.entries(n).map((e) => {
                                let [t, n] = e;
                                return (0, r.jsx)(
                                    I,
                                    {
                                        name: ''.concat(t, ':'),
                                        children:
                                            null != n
                                                ? (0, r.jsx)('code', { children: JSON.stringify(n) })
                                                : (0, r.jsx)('code', {
                                                      className: S.emptyProperty,
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
function Z() {
    let e = a.useRef(null),
        [t, n] = a.useState(''),
        l = (0, d.e7)([b.Z], () => b.Z.loggedEventsVersion),
        s = a.useMemo(() => b.Z.loggedEvents, [l]),
        [c, h] = a.useState(Object.keys(w)),
        [m, f] = a.useState(s),
        p = a.useRef(null),
        v = a.useCallback(
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
        k = a.useMemo(
            () =>
                m.filter((e) => {
                    for (let t of c) if (w[t].filter(e)) return !0;
                    return !1;
                }),
            [m, c]
        );
    a.useEffect(() => {
        v(t, s);
    }, [t, v, s]);
    let [I, Z] = a.useState(void 0),
        R = k.find((e) => e.key === I),
        { TabBar: O, renderSelectedTab: B } = (0, T.Z)({ tabs: E }, []);
    return (0, r.jsxs)('div', {
        ref: e,
        className: i()(N.panel, S.panel),
        children: [
            (0, r.jsxs)('div', {
                className: S.toolbar,
                children: [
                    (0, r.jsx)(u.Button, {
                        className: S.toolbarButton,
                        look: u.Button.Looks.BLANK,
                        size: u.Button.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, r.jsx)('span', {
                            title: _.intl.string(_.t.VkKicX),
                            children: (0, r.jsx)(u.TrashIcon, {
                                size: 'md',
                                color: 'currentColor',
                                'aria-label': _.intl.string(_.t.VkKicX)
                            })
                        })
                    }),
                    (0, r.jsx)('div', { className: S.toolbarDivider }),
                    (0, r.jsx)('div', {
                        className: S.filters,
                        children: Object.entries(w).map((e) => {
                            let [t, n] = e;
                            return (0, r.jsx)(
                                u.Clickable,
                                {
                                    className: i()(S.filter, c.includes(t) && S.activeFilter),
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
            (0, r.jsx)('div', {
                className: S.toolbar,
                children: (0, r.jsx)(u.SearchBar, {
                    className: S.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(''),
                    placeholder: 'Search by event name'
                })
            }),
            (0, r.jsx)(C.Z, {
                columns: y,
                data: k,
                selectedRowKey: I,
                onClickRow: (e) => Z(e.key)
            }),
            null != R &&
                (0, r.jsxs)(j.Z, {
                    className: S.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, r.jsx)(O, {}),
                        B({
                            loggedEvent: R,
                            onClose: () => Z(void 0)
                        })
                    ]
                })
        ]
    });
}
