n.d(t, { Z: () => Z }), n(388685), n(49124);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(129861),
    p = n(665149),
    h = n(886118),
    x = n(301801),
    g = n(594174),
    f = n(572004),
    b = n(55935),
    v = n(120816),
    j = n(31336),
    _ = n(257785),
    y = n(484036),
    C = n(681619),
    S = n(621060),
    E = n(388032),
    T = n(599832),
    N = n(451429);
let O = [
    {
        key: "event",
        cellClassName: T.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: T.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function P(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.zJl, {
        className: T.customPropertiesContainer,
        children: (0, a.jsx)("dl", { children: t }),
    });
}
function w(e) {
    let { name: t, children: n, copyValue: l } = e,
        [r, s] = i.useState(!1);
    return (
        i.useEffect(() => {
            if (r) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [r]),
        (0, a.jsxs)("div", {
            className: T.customProperty,
            children: [
                (0, a.jsx)("dt", {
                    className: T.customPropertiesName,
                    children: t,
                }),
                (0, a.jsx)("dd", { children: n }),
                (0, a.jsx)(u.P3F, {
                    tag: "span",
                    className: T.copyPropertyButton,
                    onClick: () => (0, f.JG)(JSON.stringify(l), () => s(!0)),
                    children: r
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
let I = new Set(["client_performance_cpu", "client_performance_memory"]),
    k = [
        {
            id: "details",
            name: "Details",
            group: S.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: i, fingerprint: l },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = g.default.getUser(l),
                    h = o()(i);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(p.ZP, {
                            className: r()(N.headerBar, T.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsxs)(p.ZP.Title, {
                                    wrapperClassName: T.headerTitle,
                                    children: [
                                        t,
                                        (0, a.jsx)(u.P3F, {
                                            tag: "span",
                                            className: T.copyEventButton,
                                            onClick: () => (0, f.JG)(t),
                                            children: (0, a.jsx)(u.TIy, {
                                                color: "currentColor",
                                                size: "sm",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: u.TIy,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, f.JG)(
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
                                                        timestamp: i,
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
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: u.k$p,
                                    tooltip: "Close",
                                    onClick: s,
                                }),
                            ],
                        }),
                        (0, a.jsxs)(_.E, {
                            className: T.commonProperties,
                            children: [
                                (0, a.jsx)(_.Z9, {
                                    name: "Timestamp (local)",
                                    copyValue: i.toISOString(),
                                    children: (0, a.jsxs)("time", {
                                        dateTime: i.toISOString(),
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
                                let [n, i] = e,
                                    l = I.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let i = null,
                                                  l = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((l += 1), null == i ? (i = t) : (i += t));
                                              }
                                              return {
                                                  average: null !== i ? i / a.length : null,
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
                                                    copyValue: { [n]: i || null },
                                                    children:
                                                        null != i
                                                            ? (0, a.jsx)("code", { children: JSON.stringify(i) })
                                                            : (0, a.jsx)("code", {
                                                                  className: T.emptyProperty,
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
                                                        copyValue: { [n]: i || null },
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
    A = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(A)
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
    R = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100,
    };
function Z() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        l = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
        [s, o] = i.useState(() => Object.keys(A)),
        [m, p] = i.useState(v.Z.loggedEvents),
        h = i.useCallback((e) => {
            p(e);
        }, []);
    (0, x.BO)(t, v.Z.loggedEvents, h, R, [l]);
    let g = m.filter((e) => {
            for (let t of s) if (A[t].filter(e)) return !0;
            return !1;
        }),
        [f, b] = i.useState(void 0),
        _ = g.find((e) => e.key === f),
        { TabBar: P, renderSelectedTab: w } = (0, S.ZP)({ tabs: k }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(N.panel, T.panel),
        children: [
            (0, a.jsxs)("div", {
                className: T.toolbar,
                children: [
                    (0, a.jsx)(d.zx, {
                        className: T.toolbarButton,
                        look: d.zx.Looks.BLANK,
                        size: d.zx.Sizes.ICON,
                        onClick: j.Zw,
                        children: (0, a.jsx)("span", {
                            title: E.intl.string(E.t.VkKicb),
                            children: (0, a.jsx)(u.XHJ, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": E.intl.string(E.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", { className: T.toolbarDivider }),
                    (0, a.jsx)("div", {
                        className: T.filters,
                        children: Object.entries(A).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.P3F,
                                {
                                    className: r()(T.filter, s.includes(t) && T.activeFilter),
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
                className: T.toolbar,
                children: (0, a.jsx)(u.E1j, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, a.jsx)(C.Z, {
                columns: O,
                data: g,
                selectedRowKey: f,
                onClickRow: (e) => b(e.key),
            }),
            null != _ &&
                (0, a.jsxs)(y.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(P, {}),
                        w({
                            loggedEvent: _,
                            onClose: () => b(void 0),
                            filteredEvents: g,
                        }),
                    ],
                }),
        ],
    });
}
