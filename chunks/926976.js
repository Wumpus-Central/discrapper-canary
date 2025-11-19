n.d(t, { Z: () => Z }), n(388685), n(49124);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
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
    N = n(599832),
    T = n(451429);
let O = [
    {
        key: "event",
        cellClassName: N.eventColumn,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: N.locationColumn,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function P(e) {
    let { children: t } = e;
    return (0, a.jsx)(u.zJl, {
        className: N.customPropertiesContainer,
        children: (0, a.jsx)("dl", { children: t }),
    });
}
function I(e) {
    let { name: t, children: n, copyValue: i } = e,
        [r, s] = l.useState(!1);
    return (
        l.useEffect(() => {
            if (r) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [r]),
        (0, a.jsxs)("div", {
            className: N.customProperty,
            children: [
                (0, a.jsx)("dt", {
                    className: N.customPropertiesName,
                    children: t,
                }),
                (0, a.jsx)("dd", { children: n }),
                (0, a.jsx)(u.P3F, {
                    tag: "span",
                    className: N.copyPropertyButton,
                    onClick: () => (0, f.JG)(JSON.stringify(i), () => s(!0)),
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
let w = new Set(["client_performance_cpu", "client_performance_memory"]),
    k = [
        {
            id: "details",
            name: "Details",
            group: S.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: l, fingerprint: i },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = g.default.getUser(i),
                    h = o()(l);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(p.ZP, {
                            className: r()(T.headerBar, N.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsxs)(p.ZP.Title, {
                                    wrapperClassName: N.headerTitle,
                                    children: [
                                        t,
                                        (0, a.jsx)(u.P3F, {
                                            tag: "span",
                                            className: N.copyEventButton,
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
                                                        timestamp: l,
                                                        fingerprint: i,
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
                            className: N.commonProperties,
                            children: [
                                (0, a.jsx)(_.Z9, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, a.jsxs)("time", {
                                        dateTime: l.toISOString(),
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
                                    copyValue: i,
                                    children: (0, a.jsx)("code", { children: i }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(P, {
                            children: Object.entries(n).map((e) => {
                                let [n, l] = e,
                                    i = w.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let l = null,
                                                  i = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((i += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return {
                                                  average: null !== l ? l / a.length : null,
                                                  count: i,
                                              };
                                          })(c, t, n)
                                        : null;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, a.jsx)(
                                                I,
                                                {
                                                    name: "".concat(n, ":"),
                                                    copyValue: { [n]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, a.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, a.jsx)("code", {
                                                                  className: N.emptyProperty,
                                                                  children: "null",
                                                              }),
                                                },
                                                n,
                                            ),
                                            null !== i &&
                                                null !== i.average &&
                                                (0, a.jsx)(
                                                    I,
                                                    {
                                                        name: "".concat(n, "_avg:"),
                                                        copyValue: { [n]: l || null },
                                                        children: (0, a.jsxs)("code", {
                                                            children: [i.average.toFixed(3), " (", i.count, ")"],
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
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        i = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
        [s, o] = l.useState(() => Object.keys(A)),
        [m, p] = l.useState(v.Z.loggedEvents),
        h = l.useCallback((e) => {
            p(e);
        }, []);
    (0, x.BO)(t, v.Z.loggedEvents, h, R, [i]);
    let g = m.filter((e) => {
            for (let t of s) if (A[t].filter(e)) return !0;
            return !1;
        }),
        [f, b] = l.useState(void 0),
        _ = g.find((e) => e.key === f),
        { TabBar: P, renderSelectedTab: I } = (0, S.ZP)({ tabs: k }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(T.panel, N.panel),
        children: [
            (0, a.jsxs)("div", {
                className: N.toolbar,
                children: [
                    (0, a.jsx)(d.zx, {
                        className: N.toolbarButton,
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
                    (0, a.jsx)("div", { className: N.toolbarDivider }),
                    (0, a.jsx)("div", {
                        className: N.filters,
                        children: Object.entries(A).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.P3F,
                                {
                                    className: r()(N.filter, s.includes(t) && N.activeFilter),
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
                className: N.toolbar,
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
                    className: N.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(P, {}),
                        I({
                            loggedEvent: _,
                            onClose: () => b(void 0),
                            filteredEvents: g,
                        }),
                    ],
                }),
        ],
    });
}
