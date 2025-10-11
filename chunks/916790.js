n.d(t, { Z: () => Z }), n(35282), n(388685), n(49124), n(975844), n(781311);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n(913527),
    c = n.n(o),
    d = n(28664),
    u = n(755721),
    m = n(481060),
    p = n(570140),
    h = n(665149),
    x = n(886118),
    f = n(301801),
    b = n(4912),
    g = n(572004),
    v = n(55935),
    j = n(185910),
    _ = n(257785),
    y = n(484036),
    C = n(681619),
    E = n(621060),
    S = n(981631),
    T = n(687278),
    O = n(451429);
function N(e) {
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
            return "".concat(N(t.time), " ms");
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
    return (0, a.jsx)(m.zJl, {
        children: (0, a.jsx)(C.Z, {
            columns: P,
            data: n,
        }),
    });
}
let w = [
    {
        id: "action",
        name: "Action",
        group: E.v0.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                r = c()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(_.E, {
                        className: T.actionProperties,
                        children: [
                            (0, a.jsx)(_.Z9, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, v.vc)(r, "LLLL"),
                                    children: (0, v.Y4)(r),
                                }),
                            }),
                            (0, a.jsxs)(_.Z9, {
                                name: "Total Time",
                                children: [N(n.totalTime), " ms"],
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
        group: E.v0.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(I, { actionLog: t });
        },
    },
];
function k(e) {
    let { actionLog: t, initialHeight: n } = e,
        i = r.useMemo(
            () =>
                t.error
                    ? [
                          ...w,
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
                                              className: l()(T.errorToolbar, O.toolbar),
                                              children: (0, a.jsx)("div", {
                                                  className: O.toolbarGroup,
                                                  children: (0, a.jsx)(u.zx, {
                                                      className: O.toolbarButton,
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
                    : w,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, E.ZP)({ tabs: i }, [i]);
    return (0, a.jsxs)(y.Z, {
        className: T.subPanel,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(h.ZP, {
                className: l()(O.headerBar, T.subPanelHeaderBar),
                children: [
                    (0, a.jsx)(h.ZP.Icon, {
                        icon: m.xVZ,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(h.ZP.Title, {
                        wrapperClassName: l()(O.headerTitle, O.dispatcherHeader),
                        className: O.headerTitleText,
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
                                    return (t[n] = ((a = e[n]), S.Jn9.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, g.JG)(n, () =>
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
let R = [
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
                return "".concat(N(t.totalTime), " ms");
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
    A = {
        searchType: x.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function Z() {
    let e = r.useRef(null),
        [t, n] = r.useState(""),
        i = (function (e) {
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
        })(p.Z.actionLogger),
        o = r.useMemo(
            () =>
                i
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [i],
        ),
        [c, u] = r.useState(o),
        [h, x] = r.useState(o),
        [b, g] = r.useState(!1),
        [v, j] = r.useState(),
        _ = r.useCallback((e) => {
            x(e);
        }, []);
    (0, f.BO)(t, b ? c : o, _, A);
    let y = r.useCallback(
            (e) => {
                u(o), g(e);
            },
            [o],
        ),
        E = t.trim().length > 0,
        S = r.useMemo(() => (E ? h : b ? c : o), [o, h, E, b, c]),
        N = b ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(O.panel, T.panel),
        children: [
            (0, a.jsxs)("div", {
                className: T.toolbar,
                children: [
                    (0, a.jsx)(d.u, {
                        text: N,
                        children: (0, a.jsx)(m.hU, {
                            size: "sm",
                            variant: b ? "primary" : "active",
                            icon: b ? m.o1U : m.fpf,
                            "aria-label": N,
                            onClick: () => y(!b),
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
                columns: R,
                data: S,
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
