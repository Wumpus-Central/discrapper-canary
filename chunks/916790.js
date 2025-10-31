n.d(t, { Z: () => Z }), n(35282), n(388685), n(49124), n(975844), n(781311);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(392711),
    o = n(913527),
    c = n.n(o),
    d = n(28664),
    u = n(755721),
    m = n(481060),
    p = n(570140),
    h = n(665149),
    x = n(886118),
    g = n(301801),
    f = n(4912),
    b = n(572004),
    v = n(55935),
    j = n(428530),
    _ = n(257785),
    y = n(484036),
    C = n(681619),
    S = n(621060),
    E = n(981631),
    T = n(687278),
    N = n(451429);
function O(e) {
    return parseFloat(e.toFixed(3));
}
let P = [
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
            return "".concat(O(t.time), " ms");
        },
    },
];
function w(e) {
    let { actionLog: t } = e,
        n = i.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, a.jsx)(m.zJl, {
        children: (0, a.jsx)(C.Z, {
            columns: P,
            data: n,
        }),
    });
}
let I = [
    {
        id: "action",
        name: "Action",
        group: S.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                i = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(_.E, {
                        className: T.actionProperties,
                        children: [
                            (0, a.jsx)(_.Z9, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, v.vc)(i, "LLLL"),
                                    children: (0, v.Y4)(i),
                                }),
                            }),
                            (0, a.jsxs)(_.Z9, {
                                name: "Total Time",
                                children: [O(n.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.zJl, {
                        className: T.inspectorContainer,
                        children: (0, a.jsx)(j.Z, { data: n.action }),
                    }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: S.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(w, { actionLog: t });
        },
    },
];
function k(e) {
    let { actionLog: t, initialHeight: n } = e,
        l = i.useMemo(
            () =>
                t.error
                    ? [
                          ...I,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(f.Z, { className: T.errorIcon }), "Error"],
                              }),
                              group: S.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: r()(T.errorToolbar, N.toolbar),
                                              children: (0, a.jsx)("div", {
                                                  className: N.toolbarGroup,
                                                  children: (0, a.jsx)(u.zx, {
                                                      className: N.toolbarButton,
                                                      size: u.zx.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)(m.zJl, {
                                              className: T.inspectorContainer,
                                              children: (0, a.jsx)(j.Z, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : I,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, S.ZP)({ tabs: l }, [l]);
    return (0, a.jsxs)(y.Z, {
        className: T.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(h.ZP, {
                className: r()(N.headerBar, T.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: m.xVZ,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(h.ZP.Title, {
                        wrapperClassName: r()(N.headerTitle, N.dispatcherHeader),
                        className: N.headerTitleText,
                        children: t.name,
                    }),
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: m.TIy,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), E.Jn9.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, b.JG)(n, () =>
                                (0, m.showToast)({
                                    id: "copy-action-log-name",
                                    type: m.ToastType.SUCCESS,
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
                    children: [t.error && (0, a.jsx)(f.Z, { className: T.errorIcon }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(O(t.totalTime), " ms");
            },
        },
        {
            key: "timestamp",
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return c()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    R = {
        searchType: x.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function Z() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        l = (function (e) {
            let [t, n] = i.useState(e.logs),
                a = i.useCallback(() => {
                    (0, s.debounce)(() => {
                        n([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                i.useEffect(
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
        })(p.Z.actionLogger),
        o = i.useMemo(
            () =>
                l
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [l],
        ),
        [c, u] = i.useState(o),
        [h, x] = i.useState(o),
        [f, b] = i.useState(!1),
        [v, j] = i.useState(),
        _ = i.useCallback((e) => {
            x(e);
        }, []);
    (0, g.BO)(t, f ? c : o, _, R);
    let y = i.useCallback(
            (e) => {
                u(o), b(e);
            },
            [o],
        ),
        S = t.trim().length > 0,
        E = i.useMemo(() => (S ? h : f ? c : o), [o, h, S, f, c]),
        O = f ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(N.panel, T.panel),
        children: [
            (0, a.jsxs)("div", {
                className: T.toolbar,
                children: [
                    (0, a.jsx)(d.u, {
                        text: O,
                        children: (0, a.jsx)(m.hU, {
                            size: "sm",
                            variant: f ? "primary" : "active",
                            icon: f ? m.o1U : m.fpf,
                            "aria-label": O,
                            onClick: () => y(!f),
                        }),
                    }),
                    (0, a.jsx)(m.E1j, {
                        size: "sm",
                        query: t,
                        onChange: n,
                        onClear: () => n(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, a.jsx)(C.Z, {
                columns: A,
                data: E,
                selectedRowKey: null == v ? void 0 : v.id.toString(),
                onClickRow: (e) => j(e.actionLog),
            }),
            null != v &&
                (0, a.jsx)(k, {
                    actionLog: v,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
