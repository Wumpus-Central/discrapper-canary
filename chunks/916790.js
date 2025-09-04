n.d(t, { Z: () => Z }), n(35282), n(388685), n(49124), n(975844), n(781311);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n(913527),
    c = n.n(o),
    d = n(755721),
    u = n(481060),
    m = n(570140),
    x = n(665149),
    h = n(886118),
    p = n(301801),
    f = n(4912),
    v = n(572004),
    b = n(55935),
    j = n(428530),
    g = n(257785),
    _ = n(484036),
    y = n(681619),
    C = n(621060),
    N = n(981631),
    E = n(687278),
    O = n(451429);
function T(e) {
    return parseFloat(e.toFixed(3));
}
let S = [
    {
        key: "store",
        cellClassName: E.actionColumn,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: E.totalTimeColumn,
        render(e) {
            let { trace: t } = e;
            return "".concat(T(t.time), " ms");
        },
    },
];
function P(e) {
    let { actionLog: t } = e,
        n = r.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, a.jsx)(u.zJl, {
        children: (0, a.jsx)(y.Z, {
            columns: S,
            data: n,
        }),
    });
}
let w = [
    {
        id: "action",
        name: "Action",
        group: C.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                r = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(g.E, {
                        className: E.actionProperties,
                        children: [
                            (0, a.jsx)(g.Z9, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, b.vc)(r, "LLLL"),
                                    children: (0, b.Y4)(r),
                                }),
                            }),
                            (0, a.jsxs)(g.Z9, {
                                name: "Total Time",
                                children: [T(n.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.zJl, {
                        className: E.inspectorContainer,
                        children: (0, a.jsx)(j.Z, { data: n.action }),
                    }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: C.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(P, { actionLog: t });
        },
    },
];
function k(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...w,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(f.Z, { className: E.errorIcon }), "Error"],
                              }),
                              group: C.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: i()(E.errorToolbar, O.toolbar),
                                              children: (0, a.jsx)("div", {
                                                  className: O.toolbarGroup,
                                                  children: (0, a.jsx)(d.zx, {
                                                      className: O.toolbarButton,
                                                      size: d.zx.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)(u.zJl, {
                                              className: E.inspectorContainer,
                                              children: (0, a.jsx)(j.Z, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : w,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, C.ZP)({ tabs: l }, [l]);
    return (0, a.jsxs)(_.Z, {
        className: E.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(x.ZP, {
                className: i()(O.headerBar, E.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(x.ZP.Icon, {
                        icon: u.xVZ,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(x.ZP.Title, {
                        wrapperClassName: i()(O.headerTitle, O.dispatcherHeader),
                        className: O.headerTitleText,
                        children: t.name,
                    }),
                    (0, a.jsx)(x.ZP.Icon, {
                        icon: u.TIy,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), N.Jn9.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, v.JG)(n, () =>
                                (0, u.showToast)({
                                    id: "copy-action-log-name",
                                    type: u.ToastType.SUCCESS,
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
let I = [
        {
            key: "action",
            cellClassName: E.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [t.error && (0, a.jsx)(f.Z, { className: E.errorIcon }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: E.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(T(t.totalTime), " ms");
            },
        },
        {
            key: "timestamp",
            cellClassName: E.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return c()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    R = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function Z() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        l = (function (e) {
            let [t, n] = r.useState(e.logs),
                a = r.useCallback(() => {
                    (0, s.debounce)(() => {
                        n([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                r.useEffect(
                    () => (
                        e.on("log", a),
                        () => {
                            e.off("log", a);
                        }
                    ),
                    [e, a],
                ),
                t
            );
        })(m.Z.actionLogger),
        o = r.useMemo(
            () =>
                l
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [l],
        ),
        [c, x] = r.useState(o),
        [h, f] = r.useState(o),
        [v, b] = r.useState(!1),
        [j, g] = r.useState(),
        _ = r.useCallback((e) => {
            f(e);
        }, []);
    (0, p.BO)(t, v ? c : o, _, R);
    let C = r.useCallback(
            (e) => {
                x(o), b(e);
            },
            [o],
        ),
        N = t.trim().length > 0,
        T = r.useMemo(() => (N ? h : v ? c : o), [o, h, N, v, c]);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(O.panel, E.panel),
        children: [
            (0, a.jsxs)("div", {
                className: E.toolbar,
                children: [
                    (0, a.jsx)("div", {
                        title: "Toggles the flow of Actions",
                        className: E.pausedEvents,
                        children: (0, a.jsx)(d.T2, {
                            checked: !v,
                            onChange: (e) => C(!e),
                        }),
                    }),
                    (0, a.jsx)(u.E1j, {
                        size: "sm",
                        className: E.searchBar,
                        query: t,
                        onChange: n,
                        onClear: () => n(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, a.jsx)(y.Z, {
                columns: I,
                data: T,
                selectedRowKey: null == j ? void 0 : j.id.toString(),
                onClickRow: (e) => g(e.actionLog),
            }),
            null != j &&
                (0, a.jsx)(k, {
                    actionLog: j,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
