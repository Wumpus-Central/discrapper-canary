a.d(t, { A: () => W }), a(172879);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(985623),
    o = a.n(r),
    d = a(989349),
    c = a.n(d),
    u = a(990078),
    m = a(862482),
    h = a(573613),
    p = a(874804),
    x = a(624479),
    g = a(691540),
    v = a(97483),
    b = a(408278),
    _ = a(782134),
    f = a(113494),
    j = a(892547),
    A = a(73153),
    y = a(58736),
    C = a(379078),
    E = a(704554),
    S = a(603349),
    N = a(957565),
    k = a(405269),
    I = a(231545),
    D = a(708403),
    T = a(260880),
    w = a(303054),
    O = a(231643),
    R = a(652215),
    L = a(155466),
    M = a(505206);
function P(e) {
    return parseFloat(e.toFixed(3));
}
let U = [
    {
        key: "store",
        cellClassName: L.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: L.i7,
        render(e) {
            let { trace: t } = e;
            return `${P(t.time)} ms`;
        },
    },
];
function B(e) {
    let { actionLog: t } = e,
        a = l.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, n.jsx)(h.Ip, { children: (0, n.jsx)(w.A, { columns: U, data: a }) });
}
let G = [
    {
        id: "action",
        name: "Action",
        group: O.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = c()(t.createdAt);
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)(D.OA, {
                        className: L.mP,
                        children: [
                            (0, n.jsx)(D.mA, {
                                name: "Created at",
                                children: (0, n.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, k.i$)(a, "LLLL"),
                                    children: (0, k.mk)(a),
                                }),
                            }),
                            (0, n.jsxs)(D.mA, { name: "Total Time", children: [P(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, n.jsx)(h.Ip, { className: L.Dx, children: (0, n.jsx)(I.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: O.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, n.jsx)(B, { actionLog: t });
        },
    },
];
function F(e) {
    let { actionLog: t, initialHeight: a } = e,
        i = l.useMemo(
            () =>
                t.error
                    ? [
                          ...G,
                          {
                              id: "error",
                              name: (0, n.jsxs)(n.Fragment, {
                                  children: [(0, n.jsx)(S.A, { className: L.ik }), "Error"],
                              }),
                              group: O.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              className: s()(L.u4, M.KE),
                                              children: (0, n.jsx)("div", {
                                                  className: M.R5,
                                                  children: (0, n.jsx)(m.$n, {
                                                      className: M.Q$,
                                                      size: m.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(h.Ip, {
                                              className: L.Dx,
                                              children: (0, n.jsx)(I.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : G,
            [t],
        ),
        { TabBar: r, renderSelectedTab: o } = (0, O.Ay)({ tabs: i }, [i]);
    return (0, n.jsxs)(T.A, {
        className: L.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, n.jsx)(r, {}),
            (0, n.jsxs)(y.Ay, {
                className: s()(M.jr, L.nZ),
                children: [
                    (0, n.jsx)(y.Ay.Icon, { icon: p.K, tooltip: t.name }),
                    (0, n.jsx)(y.Ay.Title, { wrapperClassName: s()(M.qd, M.ZE), className: M.Pz, children: t.name }),
                    (0, n.jsx)(y.Ay.Icon, {
                        icon: x.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), R.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, N.C)(a, () =>
                                (0, g.P0)({
                                    id: "copy-action-log-name",
                                    type: v.Ck.SUCCESS,
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
let V = [
        {
            key: "action",
            cellClassName: L.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, n.jsxs)(n.Fragment, { children: [t.error && (0, n.jsx)(S.A, { className: L.ik }), t.name] });
            },
        },
        {
            key: "total time",
            cellClassName: L.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${P(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: L.i7,
            render(e) {
                let { actionLog: t } = e;
                return c()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    $ = {
        searchType: C.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function W() {
    let e = l.useRef(null),
        [t, a] = l.useState(""),
        i = (function (e) {
            let [t, a] = l.useState(e.logs);
            return (
                l.useEffect(() => {
                    let t = o()(() => {
                        a([...e.logs]);
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
        })(A.h.actionLogger),
        r = l.useMemo(() => i.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [i]),
        [d, c] = l.useState(r),
        [m, h] = l.useState(r),
        [p, x] = l.useState(!1),
        [g, v] = l.useState(),
        y = l.useCallback((e) => {
            h(e);
        }, []);
    (0, E.RT)(t, p ? d : r, y, $);
    let C = l.useCallback(
            (e) => {
                c(r), x(e);
            },
            [r],
        ),
        S = t.trim().length > 0,
        N = l.useMemo(() => (S ? m : p ? d : r), [r, m, S, p, d]),
        k = p ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, n.jsxs)("div", {
        ref: e,
        className: s()(M.nd, L.nd),
        children: [
            (0, n.jsxs)("div", {
                className: L.KE,
                children: [
                    (0, n.jsx)(u.m, {
                        text: k,
                        children: (0, n.jsx)(b.K, {
                            size: "sm",
                            variant: p ? "primary" : "active",
                            icon: p ? _.u : f.E,
                            "aria-label": k,
                            onClick: () => C(!p),
                        }),
                    }),
                    (0, n.jsx)(j.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, n.jsx)(w.A, {
                columns: V,
                data: N,
                selectedRowKey: g?.id.toString(),
                onClickRow: (e) => v(e.actionLog),
            }),
            null != g &&
                (0, n.jsx)(F, { actionLog: g, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
