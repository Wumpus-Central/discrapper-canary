n.d(t, { Z: () => D }), n(35282), n(388685), n(49124), n(975844), n(781311);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(299608),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(28664),
    m = n(755721),
    p = n(481060),
    h = n(570140),
    f = n(665149),
    x = n(886118),
    b = n(301801),
    g = n(4912),
    v = n(572004),
    j = n(55935),
    y = n(428530),
    C = n(257785),
    _ = n(975775),
    S = n(681619),
    E = n(621060),
    T = n(981631),
    O = n(461015),
    N = n(663618);
function w(e) {
    return parseFloat(e.toFixed(3));
}
let P = [
    {
        key: "store",
        cellClassName: O.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: O.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return "".concat(w(t.time), " ms");
        },
    },
];
function I(e) {
    let { actionLog: t } = e,
        n = r.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, a.jsx)(p.zJl, {
        children: (0, a.jsx)(S.Z, {
            columns: P,
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
                r = d()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(C.E, {
                        className: O.actionProperties,
                        children: [
                            (0, a.jsx)(C.Z9, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, j.vc)(r, "LLLL"),
                                    children: (0, j.Y4)(r),
                                }),
                            }),
                            (0, a.jsxs)(C.Z9, {
                                name: "Total Time",
                                children: [w(n.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, a.jsx)(p.zJl, {
                        className: O.inspectorContainer,
                        children: (0, a.jsx)(y.Z, { data: n.action }),
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
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...k,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(g.Z, { className: O.errorIcon }), "Error"],
                              }),
                              group: E.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: i()(O.errorToolbar, N.toolbar),
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
                                              className: O.inspectorContainer,
                                              children: (0, a.jsx)(y.Z, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : k,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, E.ZP)({ tabs: l }, [l]);
    return (0, a.jsxs)(_.Z, {
        className: O.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(f.ZP, {
                className: i()(N.headerBar, O.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(f.ZP.Icon, {
                        icon: p.xVZ,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(f.ZP.Title, {
                        wrapperClassName: i()(N.headerTitle, N.dispatcherHeader),
                        className: N.headerTitleText,
                        children: t.name,
                    }),
                    (0, a.jsx)(f.ZP.Icon, {
                        icon: p.TIy,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), T.Jn9.test(a) ? "REDACTED" : a)), t;
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
            cellClassName: O.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [t.error && (0, a.jsx)(g.Z, { className: O.errorIcon }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: O.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(w(t.totalTime), " ms");
            },
        },
        {
            key: "timestamp",
            cellClassName: O.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return d()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    Z = {
        searchType: x.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function D() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        l = (function (e) {
            let [t, n] = r.useState(e.logs);
            return (
                r.useEffect(() => {
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
        s = r.useMemo(
            () =>
                l
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [l],
        ),
        [c, d] = r.useState(s),
        [m, f] = r.useState(s),
        [x, g] = r.useState(!1),
        [v, j] = r.useState(),
        y = r.useCallback((e) => {
            f(e);
        }, []);
    (0, b.BO)(t, x ? c : s, y, Z);
    let C = r.useCallback(
            (e) => {
                d(s), g(e);
            },
            [s],
        ),
        _ = t.trim().length > 0,
        E = r.useMemo(() => (_ ? m : x ? c : s), [s, m, _, x, c]),
        T = x ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(N.panel, O.panel),
        children: [
            (0, a.jsxs)("div", {
                className: O.toolbar,
                children: [
                    (0, a.jsx)(u.u, {
                        text: T,
                        children: (0, a.jsx)(p.hU, {
                            size: "sm",
                            variant: x ? "primary" : "active",
                            icon: x ? p.o1U : p.fpf,
                            "aria-label": T,
                            onClick: () => C(!x),
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
