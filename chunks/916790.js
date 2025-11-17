n.d(t, { Z: () => D }), n(35282), n(388685), n(49124), n(975844), n(781311);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(299608),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(28664),
    m = n(755721),
    p = n(481060),
    h = n(570140),
    x = n(665149),
    g = n(886118),
    f = n(301801),
    b = n(4912),
    v = n(572004),
    j = n(55935),
    _ = n(428530),
    y = n(257785),
    C = n(484036),
    S = n(681619),
    E = n(621060),
    O = n(981631),
    T = n(687278),
    N = n(451429);
function P(e) {
    return parseFloat(e.toFixed(3));
}
let w = [
    {
        key: "store",
        cellClassName: T.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: T.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return "".concat(P(t.time), " ms");
        },
    },
];
function I(e) {
    let { actionLog: t } = e,
        n = l.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, a.jsx)(p.zJl, {
        children: (0, a.jsx)(S.Z, {
            columns: w,
            data: n,
        }),
    });
}
let k = [
    {
        id: "action",
        name: "Action",
        group: E.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                l = d()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(y.E, {
                        className: T.actionProperties,
                        children: [
                            (0, a.jsx)(y.Z9, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, j.vc)(l, "LLLL"),
                                    children: (0, j.Y4)(l),
                                }),
                            }),
                            (0, a.jsxs)(y.Z9, {
                                name: "Total Time",
                                children: [P(n.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, a.jsx)(p.zJl, {
                        className: T.inspectorContainer,
                        children: (0, a.jsx)(_.Z, { data: n.action }),
                    }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: E.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(I, { actionLog: t });
        },
    },
];
function R(e) {
    let { actionLog: t, initialHeight: n } = e,
        r = l.useMemo(
            () =>
                t.error
                    ? [
                          ...k,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(b.Z, { className: T.errorIcon }), "Error"],
                              }),
                              group: E.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: i()(T.errorToolbar, N.toolbar),
                                              children: (0, a.jsx)("div", {
                                                  className: N.toolbarGroup,
                                                  children: (0, a.jsx)(m.zx, {
                                                      className: N.toolbarButton,
                                                      size: m.zx.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)(p.zJl, {
                                              className: T.inspectorContainer,
                                              children: (0, a.jsx)(_.Z, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : k,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, E.ZP)({ tabs: r }, [r]);
    return (0, a.jsxs)(C.Z, {
        className: T.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(x.ZP, {
                className: i()(N.headerBar, T.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(x.ZP.Icon, {
                        icon: p.xVZ,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(x.ZP.Title, {
                        wrapperClassName: i()(N.headerTitle, N.dispatcherHeader),
                        className: N.headerTitleText,
                        children: t.name,
                    }),
                    (0, a.jsx)(x.ZP.Icon, {
                        icon: p.TIy,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), O.Jn9.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, v.JG)(n, () =>
                                (0, p.showToast)({
                                    id: "copy-action-log-name",
                                    type: p.ToastType.SUCCESS,
                                    message: "Copied action log data to clipboard",
                                }),
                            );
                        },
                    }),
                ],
            }),
            o({ actionLog: t }),
        ],
    });
}
let A = [
        {
            key: "action",
            cellClassName: T.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [t.error && (0, a.jsx)(b.Z, { className: T.errorIcon }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(P(t.totalTime), " ms");
            },
        },
        {
            key: "timestamp",
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return d()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    Z = {
        searchType: g.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function D() {
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        r = (function (e) {
            let [t, n] = l.useState(e.logs);
            return (
                l.useEffect(() => {
                    let t = o()(() => {
                        n([...e.logs]);
                    }, 500);
                    return (
                        e.on("log", t),
                        () => {
                            e.off("log", t);
                        }
                    );
                }, [e]),
                t
            );
        })(h.Z.actionLogger),
        s = l.useMemo(
            () =>
                r
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [r],
        ),
        [c, d] = l.useState(s),
        [m, x] = l.useState(s),
        [g, b] = l.useState(!1),
        [v, j] = l.useState(),
        _ = l.useCallback((e) => {
            x(e);
        }, []);
    (0, f.BO)(t, g ? c : s, _, Z);
    let y = l.useCallback(
            (e) => {
                d(s), b(e);
            },
            [s],
        ),
        C = t.trim().length > 0,
        E = l.useMemo(() => (C ? m : g ? c : s), [s, m, C, g, c]),
        O = g ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(N.panel, T.panel),
        children: [
            (0, a.jsxs)("div", {
                className: T.toolbar,
                children: [
                    (0, a.jsx)(u.u, {
                        text: O,
                        children: (0, a.jsx)(p.hU, {
                            size: "sm",
                            variant: g ? "primary" : "active",
                            icon: g ? p.o1U : p.fpf,
                            "aria-label": O,
                            onClick: () => y(!g),
                        }),
                    }),
                    (0, a.jsx)(p.E1j, {
                        size: "sm",
                        query: t,
                        onChange: n,
                        onClear: () => n(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, a.jsx)(S.Z, {
                columns: A,
                data: E,
                selectedRowKey: null == v ? void 0 : v.id.toString(),
                onClickRow: (e) => j(e.actionLog),
            }),
            null != v &&
                (0, a.jsx)(R, {
                    actionLog: v,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
