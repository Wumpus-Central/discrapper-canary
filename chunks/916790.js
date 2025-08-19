a.d(t, { Z: () => Z }), a(35282), a(388685), a(49124), a(975844), a(781311);
var n = a(951288),
    r = a(647438),
    l = a(120356),
    i = a.n(l),
    s = a(392711),
    o = a(913527),
    c = a.n(o),
    d = a(755721),
    u = a(481060),
    m = a(570140),
    x = a(665149),
    h = a(886118),
    p = a(301801),
    v = a(4912),
    b = a(572004),
    f = a(55935),
    g = a(428530),
    j = a(257785),
    _ = a(484036),
    y = a(681619),
    C = a(621060),
    N = a(981631),
    T = a(687278),
    O = a(451429);
function E(e) {
    return parseFloat(e.toFixed(3));
}
let S = [
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
            return "".concat(E(t.time), " ms");
        },
    },
];
function P(e) {
    let { actionLog: t } = e,
        a = r.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, n.jsx)(u.zJl, {
        children: (0, n.jsx)(y.Z, {
            columns: S,
            data: a,
        }),
    });
}
let I = [
    {
        id: "action",
        name: "Action",
        group: C.v0.NONE,
        render(e) {
            var t;
            let { actionLog: a } = e,
                r = c()(a.createdAt);
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)(j.E, {
                        className: T.actionProperties,
                        children: [
                            (0, n.jsx)(j.Z9, {
                                name: "Created at",
                                children: (0, n.jsx)("time", {
                                    dateTime: null == (t = a.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, f.vc)(r, "LLLL"),
                                    children: (0, f.Y4)(r),
                                }),
                            }),
                            (0, n.jsxs)(j.Z9, {
                                name: "Total Time",
                                children: [E(a.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, n.jsx)(u.zJl, {
                        className: T.inspectorContainer,
                        children: (0, n.jsx)(g.Z, { data: a.action }),
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
            return (0, n.jsx)(P, { actionLog: t });
        },
    },
];
function w(e) {
    let { actionLog: t, initialHeight: a } = e,
        l = r.useMemo(
            () =>
                t.error
                    ? [
                          ...I,
                          {
                              id: "error",
                              name: (0, n.jsxs)(n.Fragment, {
                                  children: [(0, n.jsx)(v.Z, { className: T.errorIcon }), "Error"],
                              }),
                              group: C.v0.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: i()(T.errorToolbar, O.toolbar),
                                              children: (0, n.jsx)("div", {
                                                  className: O.toolbarGroup,
                                                  children: (0, n.jsx)(d.zx, {
                                                      className: O.toolbarButton,
                                                      size: d.zx.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(u.zJl, {
                                              className: T.inspectorContainer,
                                              children: (0, n.jsx)(g.Z, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : I,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, C.ZP)({ tabs: l }, [l]);
    return (0, n.jsxs)(_.Z, {
        className: T.subPanel,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, n.jsx)(s, {}),
            (0, n.jsxs)(x.ZP, {
                className: i()(O.headerBar, T.subPanelHeaderBar),
                children: [
                    (0, n.jsx)(x.ZP.Icon, {
                        icon: u.xVZ,
                        tooltip: t.name,
                    }),
                    (0, n.jsx)(x.ZP.Title, {
                        wrapperClassName: i()(O.headerTitle, O.dispatcherHeader),
                        className: O.headerTitleText,
                        children: t.name,
                    }),
                    (0, n.jsx)(x.ZP.Icon, {
                        icon: u.TIy,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), N.Jn9.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, b.JG)(a, () =>
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
let R = [
        {
            key: "action",
            cellClassName: T.actionColumn,
            render(e) {
                let { actionLog: t } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [t.error && (0, n.jsx)(v.Z, { className: T.errorIcon }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: T.totalTimeColumn,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(E(t.totalTime), " ms");
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
    k = {
        searchType: h.S.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function Z() {
    let e = r.useRef(null),
        [t, a] = r.useState(""),
        l = (function (e) {
            let [t, a] = r.useState(e.logs),
                n = r.useCallback(() => {
                    (0, s.debounce)(() => {
                        a([...e.logs]);
                    }, 500)();
                }, [e]);
            return (
                r.useEffect(
                    () => (
                        e.on("log", n),
                        () => {
                            e.off("log", n);
                        }
                    ),
                    [e, n],
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
        [c, d] = r.useState(o),
        [x, h] = r.useState(o),
        [v, b] = r.useState(!1),
        [f, g] = r.useState(),
        j = r.useCallback((e) => {
            h(e);
        }, []);
    (0, p.BO)(t, v ? c : o, j, k);
    let _ = r.useCallback(
            (e) => {
                d(o), b(e);
            },
            [o],
        ),
        C = t.trim().length > 0,
        N = r.useMemo(() => (C ? x : v ? c : o), [o, x, C, v, c]);
    return (0, n.jsxs)("div", {
        ref: e,
        className: i()(O.panel, T.panel),
        children: [
            (0, n.jsxs)("div", {
                className: T.toolbar,
                children: [
                    (0, n.jsx)("div", {
                        title: "Toggles the flow of Actions",
                        className: T.pausedEvents,
                        children: (0, n.jsx)(u.rsf, {
                            checked: !v,
                            onChange: (e) => _(!e),
                        }),
                    }),
                    (0, n.jsx)(u.E1j, {
                        size: "sm",
                        className: T.searchBar,
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, n.jsx)(y.Z, {
                columns: R,
                data: N,
                selectedRowKey: null == f ? void 0 : f.id.toString(),
                onClickRow: (e) => g(e.actionLog),
            }),
            null != f &&
                (0, n.jsx)(w, {
                    actionLog: f,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
