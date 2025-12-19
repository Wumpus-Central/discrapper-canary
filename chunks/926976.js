n.d(t, { Z: () => Z }), n(388685), n(49124);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(129861),
    p = n(665149),
    h = n(886118),
    f = n(301801),
    x = n(594174),
    b = n(572004),
    g = n(55935),
    v = n(120816),
    j = n(31336),
    y = n(257785),
    C = n(975775),
    _ = n(681619),
    S = n(621060),
    E = n(388032),
    T = n(865362),
    O = n(663618);
let N = [
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
    let { name: t, children: n, copyValue: i } = e,
        [l, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            if (l) {
                let e = setTimeout(() => s(!1), 1000);
                return () => clearTimeout(e);
            }
        }, [l]),
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
                    onClick: () => (0, b.JG)(JSON.stringify(i), () => s(!0)),
                    children: l
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
                        loggedEvent: { event: t, properties: n, timestamp: r, fingerprint: i },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = x.default.getUser(i),
                    h = o()(r);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(p.ZP, {
                            className: l()(O.headerBar, T.subPanelHeaderBar),
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
                                            onClick: () => (0, b.JG)(t),
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
                                        (0, b.JG)(
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
                        (0, a.jsxs)(y.E, {
                            className: T.commonProperties,
                            children: [
                                (0, a.jsx)(y.Z9, {
                                    name: "Timestamp (local)",
                                    copyValue: r.toISOString(),
                                    children: (0, a.jsxs)("time", {
                                        dateTime: r.toISOString(),
                                        title: (0, g.vc)(h, "LLLL"),
                                        children: ["(", o().locale(), ") ", (0, g.Y4)(h)],
                                    }),
                                }),
                                null != d &&
                                    (0, a.jsx)(y.Z9, {
                                        name: "User",
                                        copyValue: d.id,
                                        children: (0, a.jsx)(m.Z, { user: d }),
                                    }),
                                (0, a.jsx)(y.Z9, {
                                    name: "Fingerprint",
                                    copyValue: i,
                                    children: (0, a.jsx)("code", { children: i }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(P, {
                            children: Object.entries(n).map((e) => {
                                let [n, r] = e,
                                    i = I.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let r = null,
                                                  i = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((i += 1), null == r ? (r = t) : (r += t));
                                              }
                                              return {
                                                  average: null !== r ? r / a.length : null,
                                                  count: i,
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
                                                                  className: T.emptyProperty,
                                                                  children: "null",
                                                              }),
                                                },
                                                n,
                                            ),
                                            null !== i &&
                                                null !== i.average &&
                                                (0, a.jsx)(
                                                    w,
                                                    {
                                                        name: "".concat(n, "_avg:"),
                                                        copyValue: { [n]: r || null },
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
    A = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: n } = e;
            return null != n.location ? [t, n.location] : t;
        },
        throttleMs: 100,
    };
function Z() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        i = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
        [s, o] = r.useState(() => Object.keys(R)),
        [m, p] = r.useState(v.Z.loggedEvents),
        h = r.useCallback((e) => {
            p(e);
        }, []);
    (0, f.BO)(t, v.Z.loggedEvents, h, A, [i]);
    let x = m.filter((e) => {
            for (let t of s) if (R[t].filter(e)) return !0;
            return !1;
        }),
        [b, g] = r.useState(void 0),
        y = x.find((e) => e.key === b),
        { TabBar: P, renderSelectedTab: w } = (0, S.ZP)({ tabs: k }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(O.panel, T.panel),
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
                        children: Object.entries(R).map((e) => {
                            let [t, n] = e;
                            return (0, a.jsx)(
                                u.P3F,
                                {
                                    className: l()(T.filter, s.includes(t) && T.activeFilter),
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
            (0, a.jsx)(_.Z, {
                columns: N,
                data: x,
                selectedRowKey: b,
                onClickRow: (e) => g(e.key),
            }),
            null != y &&
                (0, a.jsxs)(C.Z, {
                    className: T.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(P, {}),
                        w({
                            loggedEvent: y,
                            onClose: () => g(void 0),
                            filteredEvents: x,
                        }),
                    ],
                }),
        ],
    });
}
