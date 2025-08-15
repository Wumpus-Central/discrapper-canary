a.d(t, { Z: () => A }), a(388685), a(49124);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(913527),
    o = a.n(s),
    c = a(442837),
    d = a(755721),
    u = a(481060),
    m = a(129861),
    x = a(665149),
    h = a(886118),
    p = a(301801),
    b = a(594174),
    v = a(572004),
    f = a(55935),
    g = a(120816),
    j = a(31336),
    _ = a(257785),
    y = a(484036),
    C = a(681619),
    N = a(621060),
    T = a(388032),
    O = a(599832),
    E = a(451429);
let S = [
    {
        key: "event",
        cellClassName: O.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: O.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function P(e) {
    let { children: t } = e;
    return (0, n.jsx)(u.zJl, {
        className: O.customPropertiesContainer,
        children: (0, n.jsx)("dl", { children: t }),
    });
}
function I(e) {
    let { name: t, children: a, copyValue: l } = e,
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, n.jsxs)("div", {
            className: O.customProperty,
            children: [
                (0, n.jsx)("dt", {
                    className: O.customPropertiesName,
                    children: t,
                }),
                (0, n.jsx)("dd", { children: a }),
                (0, n.jsx)(u.P3F, {
                    tag: "span",
                    className: O.copyPropertyButton,
                    onClick: () => (0, v.JG)(JSON.stringify(l), () => s(!0)),
                    children: i
                        ? (0, n.jsx)(u.kmB, {
                              color: "currentColor",
                              size: "sm",
                          })
                        : (0, n.jsx)(u.TIy, {
                              color: "currentColor",
                              size: "sm",
                          }),
                }),
            ],
        })
    );
}
let w = new Set(["client_performance_cpu", "client_performance_memory"]),
    R = [
        {
            id: "details",
            name: "Details",
            group: N.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: r, fingerprint: l },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = b.default.getUser(l),
                    h = o()(r);
                return (0, n.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, n.jsxs)(x.ZP, {
                            className: i()(E.headerBar, O.subPanelHeaderBar),
                            children: [
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t,
                                }),
                                (0, n.jsxs)(x.ZP.Title, {
                                    wrapperClassName: O.headerTitle,
                                    children: [
                                        t,
                                        (0, n.jsx)(u.P3F, {
                                            tag: "span",
                                            className: O.copyEventButton,
                                            onClick: () => (0, v.JG)(t),
                                            children: (0, n.jsx)(u.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, v.JG)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var a = null != arguments[t] ? arguments[t] : {},
                                                            n = Object.keys(a);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (n = n.concat(
                                                                Object.getOwnPropertySymbols(a).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(a, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            n.forEach(function (t) {
                                                                var n;
                                                                (n = a[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: n,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = n);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        event: t,
                                                        timestamp: r,
                                                        fingerprint: l,
                                                        user: null == d ? void 0 : d.id,
                                                    },
                                                    a,
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, n.jsx)(x.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: "Close",
                                    onClick: s,
                                }),
                            ],
                        }),
                        (0, n.jsxs)(_.E, {
                            className: O.commonProperties,
                            children: [
                                (0, n.jsx)(_.Z9, {
                                    name: "Timestamp (local)",
                                    copyValue: r.toISOString(),
                                    children: (0, n.jsxs)("time", {
                                        dateTime: r.toISOString(),
                                        title: (0, f.vc)(h, "LLLL"),
                                        children: ["(", o().locale(), ") ", (0, f.Y4)(h)],
                                    }),
                                }),
                                null != d &&
                                    (0, n.jsx)(_.Z9, {
                                        name: "User",
                                        copyValue: d.id,
                                        children: (0, n.jsx)(m.Z, { user: d }),
                                    }),
                                (0, n.jsx)(_.Z9, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, n.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(P, {
                            children: Object.entries(a).map((e) => {
                                let [a, r] = e,
                                    l = w.has(a)
                                        ? ((e, t, a) => {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let r = null,
                                                  l = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((l += 1), null == r ? (r = t) : (r += t));
                                              }
                                              return {
                                                  average: null !== r ? r / n.length : null,
                                                  count: l,
                                              };
                                          })(c, t, a)
                                        : null;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, n.jsx)(
                                                I,
                                                {
                                                    name: "".concat(a, ":"),
                                                    copyValue: { [a]: r || null },
                                                    children:
                                                        null != r
                                                            ? (0, n.jsx)("code", { children: JSON.stringify(r) })
                                                            : (0, n.jsx)("code", {
                                                                  className: O.emptyProperty,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, n.jsx)(
                                                    I,
                                                    {
                                                        name: "".concat(a, "_avg:"),
                                                        copyValue: { [a]: r || null },
                                                        children: (0, n.jsxs)("code", {
                                                            children: [l.average.toFixed(3), " (", l.count, ")"],
                                                        }),
                                                    },
                                                    "".concat(a, "_avg"),
                                                ),
                                        ],
                                    },
                                    "".concat(a, "_container"),
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    k = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(k)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [a, { filter: n }] = t;
                        return !n(e);
                    })
                    .every((e) => e),
        },
        experiments: {
            label: "Experiments",
            filter: (e) => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event),
        },
        impressions: {
            label: "Impressions",
            filter: (e) => e.event.startsWith("impression_"),
        },
        networkActions: {
            label: "Network",
            filter: (e) => e.event.startsWith("network_action"),
        },
    },
    Z = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function A() {
    let e = r.useRef(null),
        [t, a] = r.useState(""),
        l = (0, c.e7)([g.Z], () => g.Z.loggedEventsVersion),
        [s, o] = r.useState(() => Object.keys(k)),
        [m, x] = r.useState(g.Z.loggedEvents),
        h = r.useCallback((e) => {
            x(e);
        }, []);
    (0, p.BO)(t, g.Z.loggedEvents, h, Z, [l]);
    let b = m.filter((e) => {
            for (let t of s) if (k[t].filter(e)) return !0;
            return !1;
        }),
        [v, f] = r.useState(void 0),
        _ = b.find((e) => e.key === v),
        { TabBar: P, renderSelectedTab: I } = (0, N.ZP)({ tabs: R }, []);
    return (0, n.jsxs)("div", {
        ref: e,
        className: i()(E.panel, O.panel),
        children: [
            (0, n.jsxs)("div", {
                className: O.toolbar,
                children: [
                    (0, n.jsx)(d.zx, {
                        className: O.toolbarButton,
                        look: d.zx.Looks.BLANK,
                        size: d.zx.Sizes.ICON,
                        onClick: j.Zw,
                        children: (0, n.jsx)("span", {
                            title: T.intl.string(T.t.VkKicX),
                            children: (0, n.jsx)(u.XHJ, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": T.intl.string(T.t.VkKicX),
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", { className: O.toolbarDivider }),
                    (0, n.jsx)("div", {
                        className: O.filters,
                        children: Object.entries(k).map((e) => {
                            let [t, a] = e;
                            return (0, n.jsx)(
                                u.P3F,
                                {
                                    className: i()(O.filter, s.includes(t) && O.activeFilter),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: a.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: O.toolbar,
                children: (0, n.jsx)(u.E1j, {
                    size: "sm",
                    className: O.searchBar,
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, n.jsx)(C.Z, {
                columns: S,
                data: b,
                selectedRowKey: v,
                onClickRow: (e) => f(e.key),
            }),
            null != _ &&
                (0, n.jsxs)(y.Z, {
                    className: O.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, n.jsx)(P, {}),
                        I({
                            loggedEvent: _,
                            onClose: () => f(void 0),
                            filteredEvents: b,
                        }),
                    ],
                }),
        ],
    });
}
