n.d(t, { A: () => P }), n(172879);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(985623),
    o = n.n(r),
    d = n(989349),
    c = n.n(d),
    u = n(990078),
    m = n(421380),
    h = n(397927),
    x = n(73153),
    p = n(58736),
    g = n(379078),
    _ = n(704554),
    f = n(603349),
    v = n(957565),
    b = n(405269),
    j = n(231545),
    A = n(708403),
    C = n(260880),
    S = n(303054),
    T = n(231643),
    y = n(652215),
    N = n(84113),
    E = n(661251);
function I(e) {
    return parseFloat(e.toFixed(3));
}
let k = [
    {
        key: "store",
        cellClassName: N.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: N.i7,
        render(e) {
            let { trace: t } = e;
            return `${I(t.time)} ms`;
        },
    },
];
function R(e) {
    let { actionLog: t } = e,
        n = s.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, a.jsx)(h.IpV, { children: (0, a.jsx)(S.A, { columns: k, data: n }) });
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
                        className: N.mP,
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
                    (0, a.jsx)(h.IpV, { className: N.Dx, children: (0, a.jsx)(j.A, { data: t.action }) }),
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
        i = s.useMemo(
            () =>
                t.error
                    ? [
                          ...O,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(f.A, { className: N.ik }), "Error"],
                              }),
                              group: T.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: l()(N.u4, E.KE),
                                              children: (0, a.jsx)("div", {
                                                  className: E.R5,
                                                  children: (0, a.jsx)(m.$n, {
                                                      className: E.Q$,
                                                      size: m.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsx)(h.IpV, {
                                              className: N.Dx,
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
        { TabBar: r, renderSelectedTab: o } = (0, T.Ay)({ tabs: i }, [i]);
    return (0, a.jsxs)(C.A, {
        className: N.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(p.Ay, {
                className: l()(E.jr, N.nZ),
                children: [
                    (0, a.jsx)(p.Ay.Icon, { icon: h.KBH, tooltip: t.name }),
                    (0, a.jsx)(p.Ay.Title, { wrapperClassName: l()(E.qd, E.ZE), className: E.Pz, children: t.name }),
                    (0, a.jsx)(p.Ay.Icon, {
                        icon: h.TdU,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), y.AKn.test(a) ? "REDACTED" : a)), t;
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
            cellClassName: N.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, { children: [t.error && (0, a.jsx)(f.A, { className: N.ik }), t.name] });
            },
        },
        {
            key: "total time",
            cellClassName: N.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${I(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: N.i7,
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
    let e = s.useRef(null),
        [t, n] = s.useState(""),
        i = (function (e) {
            let [t, n] = s.useState(e.logs);
            return (
                s.useEffect(() => {
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
        })(x.h.actionLogger),
        r = s.useMemo(() => i.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [i]),
        [d, c] = s.useState(r),
        [m, p] = s.useState(r),
        [g, f] = s.useState(!1),
        [v, b] = s.useState(),
        j = s.useCallback((e) => {
            p(e);
        }, []);
    (0, _.RT)(t, g ? d : r, j, M);
    let A = s.useCallback(
            (e) => {
                c(r), f(e);
            },
            [r],
        ),
        C = t.trim().length > 0,
        T = s.useMemo(() => (C ? m : g ? d : r), [r, m, C, g, d]),
        y = g ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(E.nd, N.nd),
        children: [
            (0, a.jsxs)("div", {
                className: N.KE,
                children: [
                    (0, a.jsx)(u.m, {
                        text: y,
                        children: (0, a.jsx)(h.K0, {
                            size: "sm",
                            variant: g ? "primary" : "active",
                            icon: g ? h.udU : h.E$n,
                            "aria-label": y,
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
            (0, a.jsx)(S.A, {
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
