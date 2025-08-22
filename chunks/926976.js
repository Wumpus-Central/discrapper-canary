n.d(t, { Z: () => A }), n(388685), n(49124);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(129861),
    x = n(665149),
    h = n(886118),
    p = n(301801),
    f = n(594174),
    v = n(572004),
    b = n(55935),
    j = n(120816),
    g = n(31336),
    _ = n(257785),
    y = n(484036),
    C = n(681619),
    N = n(621060),
    E = n(388032),
    O = n(599832),
    T = n(451429);
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
    return (0, a.jsx)(u.zJl, {
        className: O.customPropertiesContainer,
        children: (0, a.jsx)("dl", { children: t }),
    });
}
function w(e) {
    let { name: t, children: n, copyValue: l } = e,
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (i) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [i]),
        (0, a.jsxs)("div", {
            className: O.customProperty,
            children: [
                (0, a.jsx)("dt", {
                    className: O.customPropertiesName,
                    children: t,
                }),
                (0, a.jsx)("dd", { children: n }),
                (0, a.jsx)(u.P3F, {
                    tag: "span",
                    className: O.copyPropertyButton,
                    onClick: () => (0, v.JG)(JSON.stringify(l), () => s(!0)),
                    children: i
                        ? (0, a.jsx)(u.kmB, {
                              color: "currentColor",
                              size: "sm",
                          })
                        : (0, a.jsx)(u.TIy, {
                              color: "currentColor",
                              size: "sm",
                          }),
                }),
            ],
        })
    );
}
let k = new Set(["client_performance_cpu", "client_performance_memory"]),
    I = [
        {
            id: "details",
            name: "Details",
            group: N.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: r, fingerprint: l },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = f.default.getUser(l),
                    h = o()(r);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(x.ZP, {
                            className: i()(T.headerBar, O.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(x.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsxs)(x.ZP.Title, {
                                    wrapperClassName: O.headerTitle,
                                    children: [
                                        t,
                                        (0, a.jsx)(u.P3F, {
                                            tag: "span",
                                            className: O.copyEventButton,
                                            onClick: () => (0, v.JG)(t),
                                            children: (0, a.jsx)(u.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(x.ZP.Icon, {
                                    icon: u.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, v.JG)(
                                            JSON.stringify(
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            a = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (a = a.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            a.forEach(function (t) {
                                                                var a;
                                                                (a = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: a,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = a);
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
                                                    n,
                                                ),
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, a.jsx)(x.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: "Close",
                                    onClick: s,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(_.E, {
                            className: O.commonProperties,
                            children: [
                                (0, a.jsx)(_.Z9, {
                                    name: "Timestamp (local)",
                                    copyValue: r.toISOString(),
                                    children: (0, a.jsxs)("time", {
                                        dateTime: r.toISOString(),
                                        title: (0, b.vc)(h, "LLLL"),
                                        children: ["(", o().locale(), ") ", (0, b.Y4)(h)],
                                    }),
                                }),
                                null != d &&
                                    (0, a.jsx)(_.Z9, {
                                        name: "User",
                                        copyValue: d.id,
                                        children: (0, a.jsx)(m.Z, { user: d }),
                                    }),
                                (0, a.jsx)(_.Z9, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, a.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(P, {
                            children: Object.entries(n).map((e) => {
                                let [n, r] = e,
                                    l = k.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let r = null,
                                                  l = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((l += 1), null == r ? (r = t) : (r += t));
                                              }
                                              return {
                                                  average: null !== r ? r / a.length : null,
                                                  count: l,
                                              };
                                          })(c, t, n)
                                        : null;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, a.jsx)(
                                                w,
                                                {
                                                    name: "".concat(n, ":"),
                                                    copyValue: { [n]: r || null },
                                                    children:
                                                        null != r
                                                            ? (0, a.jsx)("code", { children: JSON.stringify(r) })
                                                            : (0, a.jsx)("code", {
                                                                  className: O.emptyProperty,
                                                                  children: "null",
                                                              }),
                                                },
                                                n,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, a.jsx)(
                                                    w,
                                                    {
                                                        name: "".concat(n, "_avg:"),
                                                        copyValue: { [n]: r || null },
                                                        children: (0, a.jsxs)("code", {
                                                            children: [l.average.toFixed(3), " (", l.count, ")"],
                                                        }),
                                                    },
                                                    "".concat(n, "_avg"),
                                                ),
                                        ],
                                    },
                                    "".concat(n, "_container"),
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    R = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(R)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [n, { filter: a }] = t;
                        return !a(e);
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
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100,
    };
function A() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        l = (0, c.e7)([j.Z], () => j.Z.loggedEventsVersion),
        [s, o] = r.useState(() => Object.keys(R)),
        [m, x] = r.useState(j.Z.loggedEvents),
        h = r.useCallback((e) => {
            x(e);
        }, []);
    (0, p.BO)(t, j.Z.loggedEvents, h, Z, [l]);
    let f = m.filter((e) => {
            for (let t of s) if (R[t].filter(e)) return !0;
            return !1;
        }),
        [v, b] = r.useState(void 0),
        _ = f.find((e) => e.key === v),
        { TabBar: P, renderSelectedTab: w } = (0, N.ZP)({ tabs: I }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(T.panel, O.panel),
        children: [
            (0, a.jsxs)("div", {
                className: O.toolbar,
                children: [
                    (0, a.jsx)(d.zx, {
                        className: O.toolbarButton,
                        look: d.zx.Looks.BLANK,
                        size: d.zx.Sizes.ICON,
                        onClick: g.Zw,
                        children: (0, a.jsx)("span", {
                            title: E.intl.string(E.t.VkKicX),
                            children: (0, a.jsx)(u.XHJ, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": E.intl.string(E.t.VkKicX),
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", { className: O.toolbarDivider }),
                    (0, a.jsx)("div", {
                        className: O.filters,
                        children: Object.entries(R).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.P3F,
                                {
                                    className: i()(O.filter, s.includes(t) && O.activeFilter),
                                    onClick: () => {
                                        o((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: n.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: O.toolbar,
                children: (0, a.jsx)(u.E1j, {
                    size: "sm",
                    className: O.searchBar,
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, a.jsx)(C.Z, {
                columns: S,
                data: f,
                selectedRowKey: v,
                onClickRow: (e) => b(e.key),
            }),
            null != _ &&
                (0, a.jsxs)(y.Z, {
                    className: O.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(P, {}),
                        w({
                            loggedEvent: _,
                            onClose: () => b(void 0),
                            filteredEvents: f,
                        }),
                    ],
                }),
        ],
    });
}
