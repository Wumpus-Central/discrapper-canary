n.d(t, {
    A: () => M,
}),
    n(747238),
    n(896048),
    n(457529),
    n(172879),
    n(733351);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(985623),
    o = n.n(s),
    c = n(989349),
    d = n.n(c),
    u = n(990078),
    m = n(421380),
    p = n(397927),
    h = n(73153),
    f = n(58736),
    x = n(379078),
    b = n(704554),
    g = n(603349),
    v = n(957565),
    j = n(405269),
    y = n(231545),
    _ = n(708403),
    A = n(260880),
    C = n(303054),
    S = n(231643),
    O = n(652215),
    E = n(84113),
    N = n(661251);

function T(e) {
    return parseFloat(e.toFixed(3));
}
let I = [
    {
        key: "store",
        cellClassName: E.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: E.i7,
        render(e) {
            let { trace: t } = e;
            return "".concat(T(t.time), " ms");
        },
    },
];

function w(e) {
    let { actionLog: t } = e,
        n = l.useMemo(
            () =>
                t.traces.map((e) => ({
                    key: e.name,
                    trace: e,
                })),
            [t],
        );
    return (0, a.jsx)(p.IpV, {
        children: (0, a.jsx)(C.A, {
            columns: I,
            data: n,
        }),
    });
}
let k = [
    {
        id: "action",
        name: "Action",
        group: S.fu.NONE,
        render(e) {
            var t;
            let { actionLog: n } = e,
                l = d()(n.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(_.OA, {
                        className: E.mP,
                        children: [
                            (0, a.jsx)(_.mA, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: null == (t = n.createdAt) ? void 0 : t.toISOString(),
                                    title: (0, j.i$)(l, "LLLL"),
                                    children: (0, j.mk)(l),
                                }),
                            }),
                            (0, a.jsxs)(_.mA, {
                                name: "Total Time",
                                children: [T(n.totalTime), " ms"],
                            }),
                        ],
                    }),
                    (0, a.jsx)(p.IpV, {
                        className: E.Dx,
                        children: (0, a.jsx)(y.A, {
                            data: n.action,
                        }),
                    }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: S.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(w, {
                actionLog: t,
            });
        },
    },
];

function P(e) {
    let { actionLog: t, initialHeight: n } = e,
        i = l.useMemo(
            () =>
                t.error
                    ? [
                          ...k,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(g.A, {
                                          className: E.ik,
                                      }),
                                      "Error",
                                  ],
                              }),
                              group: S.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: r()(E.u4, N.KE),
                                              children: (0, a.jsx)("div", {
                                                  className: N.R5,
                                                  children: (0, a.jsx)(m.$n, {
                                                      className: N.Q$,
                                                      size: m.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)(p.IpV, {
                                              className: E.Dx,
                                              children: (0, a.jsx)(y.A, {
                                                  data: t.error,
                                              }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : k,
            [t],
        ),
        { TabBar: s, renderSelectedTab: o } = (0, S.Ay)(
            {
                tabs: i,
            },
            [i],
        );
    return (0, a.jsxs)(A.A, {
        className: E.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(f.Ay, {
                className: r()(N.jr, E.nZ),
                children: [
                    (0, a.jsx)(f.Ay.Icon, {
                        icon: p.KBH,
                        tooltip: t.name,
                    }),
                    (0, a.jsx)(f.Ay.Title, {
                        wrapperClassName: r()(N.qd, N.ZE),
                        className: N.Pz,
                        children: t.name,
                    }),
                    (0, a.jsx)(f.Ay.Icon, {
                        icon: p.TdU,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), O.AKn.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, v.C)(n, () =>
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
            o({
                actionLog: t,
            }),
        ],
    });
}
let R = [
        {
            key: "action",
            cellClassName: E.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        t.error &&
                            (0, a.jsx)(g.A, {
                                className: E.ik,
                            }),
                        t.name,
                    ],
                });
            },
        },
        {
            key: "total time",
            cellClassName: E.i7,
            render(e) {
                let { actionLog: t } = e;
                return "".concat(T(t.totalTime), " ms");
            },
        },
        {
            key: "timestamp",
            cellClassName: E.i7,
            render(e) {
                let { actionLog: t } = e;
                return d()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    D = {
        searchType: x.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };

function M() {
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        i = (function (e) {
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
        })(h.h.actionLogger),
        s = l.useMemo(
            () =>
                i
                    .map((e) => ({
                        key: e.id.toString(),
                        actionLog: e,
                    }))
                    .toReversed(),
            [i],
        ),
        [c, d] = l.useState(s),
        [m, f] = l.useState(s),
        [x, g] = l.useState(!1),
        [v, j] = l.useState(),
        y = l.useCallback((e) => {
            f(e);
        }, []);
    (0, b.RT)(t, x ? c : s, y, D);
    let _ = l.useCallback(
            (e) => {
                d(s), g(e);
            },
            [s],
        ),
        A = t.trim().length > 0,
        S = l.useMemo(() => (A ? m : x ? c : s), [s, m, A, x, c]),
        O = x ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(N.nd, E.nd),
        children: [
            (0, a.jsxs)("div", {
                className: E.KE,
                children: [
                    (0, a.jsx)(u.m, {
                        text: O,
                        children: (0, a.jsx)(p.K0, {
                            size: "sm",
                            variant: x ? "primary" : "active",
                            icon: x ? p.udU : p.E$n,
                            "aria-label": O,
                            onClick: () => _(!x),
                        }),
                    }),
                    (0, a.jsx)(p.IWV, {
                        size: "sm",
                        query: t,
                        onChange: n,
                        onClear: () => n(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, a.jsx)(C.A, {
                columns: R,
                data: S,
                selectedRowKey: null == v ? void 0 : v.id.toString(),
                onClickRow: (e) => j(e.actionLog),
            }),
            null != v &&
                (0, a.jsx)(P, {
                    actionLog: v,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
