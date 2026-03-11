n.d(t, { A: () => P }), n(172879);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(985623),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(990078),
    m = n(421380),
    h = n(397927),
    p = n(73153),
    x = n(58736),
    g = n(379078),
    _ = n(704554),
    f = n(603349),
    v = n(957565),
    b = n(405269),
    j = n(231545),
    A = n(708403),
    C = n(260880),
    y = n(303054),
    T = n(231643),
    S = n(652215),
    E = n(704623),
    N = n(930821);
function I(e) {
    return parseFloat(e.toFixed(3));
}
let k = [
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
            return `${I(t.time)} ms`;
        },
    },
];
function R(e) {
    let { actionLog: t } = e,
        n = i.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, a.jsx)(h.IpV, { children: (0, a.jsx)(y.A, { columns: k, data: n }) });
}
let O = [
    {
        id: "action",
        name: "Action",
        group: T.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                n = c()(t.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(A.OA, {
                        className: E.mP,
                        children: [
                            (0, a.jsx)(A.mA, {
                                name: "Created at",
                                children: (0, a.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, b.i$)(n, "LLLL"),
                                    children: (0, b.mk)(n),
                                }),
                            }),
                            (0, a.jsxs)(A.mA, { name: "Total Time", children: [I(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, a.jsx)(h.IpV, { className: E.Dx, children: (0, a.jsx)(j.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: T.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, a.jsx)(R, { actionLog: t });
        },
    },
];
function w(e) {
    let { actionLog: t, initialHeight: n } = e,
        s = i.useMemo(
            () =>
                t.error
                    ? [
                          ...O,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(f.A, { className: E.ik }), "Error"],
                              }),
                              group: T.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: l()(E.u4, N.KE),
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
                                          (0, a.jsx)(h.IpV, {
                                              className: E.Dx,
                                              children: (0, a.jsx)(j.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : O,
            [t],
        ),
        { TabBar: r, renderSelectedTab: o } = (0, T.Ay)({ tabs: s }, [s]);
    return (0, a.jsxs)(C.A, {
        className: E.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(x.Ay, {
                className: l()(N.jr, E.nZ),
                children: [
                    (0, a.jsx)(x.Ay.Icon, { icon: h.KBH, tooltip: t.name }),
                    (0, a.jsx)(x.Ay.Title, { wrapperClassName: l()(N.qd, N.ZE), className: N.Pz, children: t.name }),
                    (0, a.jsx)(x.Ay.Icon, {
                        icon: h.TdU,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), S.AKn.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, v.C)(n, () =>
                                (0, h.showToast)({
                                    id: "copy-action-log-name",
                                    type: h.ToastType.SUCCESS,
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
let D = [
        {
            key: "action",
            cellClassName: E.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, { children: [t.error && (0, a.jsx)(f.A, { className: E.ik }), t.name] });
            },
        },
        {
            key: "total time",
            cellClassName: E.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${I(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: E.i7,
            render(e) {
                let { actionLog: t } = e;
                return c()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    M = {
        searchType: g.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function P() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        s = (function (e) {
            let [t, n] = i.useState(e.logs);
            return (
                i.useEffect(() => {
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
        })(p.h.actionLogger),
        r = i.useMemo(() => s.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [s]),
        [d, c] = i.useState(r),
        [m, x] = i.useState(r),
        [g, f] = i.useState(!1),
        [v, b] = i.useState(),
        j = i.useCallback((e) => {
            x(e);
        }, []);
    (0, _.RT)(t, g ? d : r, j, M);
    let A = i.useCallback(
            (e) => {
                c(r), f(e);
            },
            [r],
        ),
        C = t.trim().length > 0,
        T = i.useMemo(() => (C ? m : g ? d : r), [r, m, C, g, d]),
        S = g ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(N.nd, E.nd),
        children: [
            (0, a.jsxs)("div", {
                className: E.KE,
                children: [
                    (0, a.jsx)(u.m, {
                        text: S,
                        children: (0, a.jsx)(h.K0, {
                            size: "sm",
                            variant: g ? "primary" : "active",
                            icon: g ? h.udU : h.E$n,
                            "aria-label": S,
                            onClick: () => A(!g),
                        }),
                    }),
                    (0, a.jsx)(h.IWV, {
                        size: "sm",
                        query: t,
                        onChange: n,
                        onClear: () => n(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, a.jsx)(y.A, {
                columns: D,
                data: T,
                selectedRowKey: v?.id.toString(),
                onClickRow: (e) => b(e.actionLog),
            }),
            null != v &&
                (0, a.jsx)(w, { actionLog: v, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
