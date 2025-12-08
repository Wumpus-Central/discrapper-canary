n.d(t, { Z: () => Z }), n(388685), n(49124);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(129861),
    p = n(665149),
    h = n(886118),
    x = n(301801),
    f = n(594174),
    g = n(572004),
    b = n(55935),
    v = n(120816),
    j = n(31336),
    _ = n(257785),
    y = n(484036),
    C = n(681619),
    S = n(621060),
    E = n(388032),
    O = n(599832),
    N = n(451429);
let T = [
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
function I(e) {
    let { name: t, children: n, copyValue: r } = e,
        [i, s] = l.useState(!1);
    return (
        l.useEffect(() => {
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
                    onClick: () => (0, g.JG)(JSON.stringify(r), () => s(!0)),
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
let w = new Set(["client_performance_cpu", "client_performance_memory"]),
    k = [
        {
            id: "details",
            name: "Details",
            group: S.v0.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: n, timestamp: l, fingerprint: r },
                        onClose: s,
                        filteredEvents: c,
                    } = e,
                    d = f.default.getUser(r),
                    h = o()(l);
                return (0, a.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, a.jsxs)(p.ZP, {
                            className: i()(N.headerBar, O.subPanelHeaderBar),
                            children: [
                                (0, a.jsx)(p.ZP.Icon, {
                                    icon: u.IeX,
                                    tooltip: t,
                                }),
                                (0, a.jsxs)(p.ZP.Title, {
                                    wrapperClassName: O.headerTitle,
                                    children: [
                                        t,
                                        (0, a.jsx)(u.P3F, {
                                            tag: "span",
                                            className: O.copyEventButton,
                                            onClick: () => (0, g.JG)(t),
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
                                        (0, g.JG)(
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
                                                        fingerprint: r,
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
                            className: O.commonProperties,
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
                                    copyValue: r,
                                    children: (0, a.jsx)("code", { children: r }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(P, {
                            children: Object.entries(n).map((e) => {
                                let [n, l] = e,
                                    r = w.has(n)
                                        ? ((e, t, n) => {
                                              let a = e.filter((e) => e.event === t);
                                              if (0 === a.length)
                                                  return {
                                                      average: null,
                                                      count: 0,
                                                  };
                                              let l = null,
                                                  r = 0;
                                              for (let e of a) {
                                                  let t = e.properties[n];
                                                  "number" == typeof t && ((r += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return {
                                                  average: null !== l ? l / a.length : null,
                                                  count: r,
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
                                                                  className: O.emptyProperty,
                                                                  children: "null",
                                                              }),
                                                },
                                                n,
                                            ),
                                            null !== r &&
                                                null !== r.average &&
                                                (0, a.jsx)(
                                                    I,
                                                    {
                                                        name: "".concat(n, "_avg:"),
                                                        copyValue: { [n]: l || null },
                                                        children: (0, a.jsxs)("code", {
                                                            children: [r.average.toFixed(3), " (", r.count, ")"],
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
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        r = (0, c.e7)([v.Z], () => v.Z.loggedEventsVersion),
        [s, o] = l.useState(() => Object.keys(R)),
        [m, p] = l.useState(v.Z.loggedEvents),
        h = l.useCallback((e) => {
            p(e);
        }, []);
    (0, x.BO)(t, v.Z.loggedEvents, h, A, [r]);
    let f = m.filter((e) => {
            for (let t of s) if (R[t].filter(e)) return !0;
            return !1;
        }),
        [g, b] = l.useState(void 0),
        _ = f.find((e) => e.key === g),
        { TabBar: P, renderSelectedTab: I } = (0, S.ZP)({ tabs: k }, []);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(N.panel, O.panel),
        children: [
            (0, a.jsxs)("div", {
                className: O.toolbar,
                children: [
                    (0, a.jsx)(d.zx, {
                        className: O.toolbarButton,
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
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, a.jsx)(C.Z, {
                columns: T,
                data: f,
                selectedRowKey: g,
                onClickRow: (e) => b(e.key),
            }),
            null != _ &&
                (0, a.jsxs)(y.Z, {
                    className: O.subPanel,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [
                        (0, a.jsx)(P, {}),
                        I({
                            loggedEvent: _,
                            onClose: () => b(void 0),
                            filteredEvents: f,
                        }),
                    ],
                }),
        ],
    });
}
