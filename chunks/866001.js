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
    x = n(73153),
    p = n(58736),
    g = n(379078),
    f = n(704554),
    v = n(603349),
    _ = n(957565),
    b = n(405269),
    j = n(231545),
    A = n(708403),
    C = n(260880),
    y = n(303054),
    S = n(231643),
    E = n(652215),
    T = n(35226),
    N = n(310086);
function I(e) {
    return parseFloat(e.toFixed(3));
}
let k = [
    {
        key: "store",
        cellClassName: T.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: T.i7,
        render(e) {
            let { trace: t } = e;
            return `${I(t.time)} ms`;
        },
    },
];
function O(e) {
    let { actionLog: t } = e,
        n = i.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, a.jsx)(h.IpV, { children: (0, a.jsx)(y.A, { columns: k, data: n }) });
}
let R = [
    {
        id: "action",
        name: "Action",
        group: S.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                n = c()(t.createdAt);
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsxs)(A.OA, {
                        className: T.mP,
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
                    (0, a.jsx)(h.IpV, { className: T.Dx, children: (0, a.jsx)(j.A, { data: t.action }) }),
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
            return (0, a.jsx)(O, { actionLog: t });
        },
    },
];
function w(e) {
    let { actionLog: t, initialHeight: n } = e,
        s = i.useMemo(
            () =>
                t.error
                    ? [
                          ...R,
                          {
                              id: "error",
                              name: (0, a.jsxs)(a.Fragment, {
                                  children: [(0, a.jsx)(v.A, { className: T.ik }), "Error"],
                              }),
                              group: S.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: l()(T.u4, N.KE),
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
                                              className: T.Dx,
                                              children: (0, a.jsx)(j.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : R,
            [t],
        ),
        { TabBar: r, renderSelectedTab: o } = (0, S.Ay)({ tabs: s }, [s]);
    return (0, a.jsxs)(C.A, {
        className: T.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(p.Ay, {
                className: l()(N.jr, T.nZ),
                children: [
                    (0, a.jsx)(p.Ay.Icon, { icon: h.KBH, tooltip: t.name }),
                    (0, a.jsx)(p.Ay.Title, { wrapperClassName: l()(N.qd, N.ZE), className: N.Pz, children: t.name }),
                    (0, a.jsx)(p.Ay.Icon, {
                        icon: h.TdU,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let n = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, n) => {
                                    var a;
                                    return (t[n] = ((a = e[n]), E.AKn.test(a) ? "REDACTED" : a)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, _.C)(n, () =>
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
            cellClassName: T.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, a.jsxs)(a.Fragment, { children: [t.error && (0, a.jsx)(v.A, { className: T.ik }), t.name] });
            },
        },
        {
            key: "total time",
            cellClassName: T.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${I(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: T.i7,
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
        })(x.h.actionLogger),
        r = i.useMemo(() => s.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [s]),
        [d, c] = i.useState(r),
        [m, p] = i.useState(r),
        [g, v] = i.useState(!1),
        [_, b] = i.useState(),
        j = i.useCallback((e) => {
            p(e);
        }, []);
    (0, f.RT)(t, g ? d : r, j, M);
    let A = i.useCallback(
            (e) => {
                c(r), v(e);
            },
            [r],
        ),
        C = t.trim().length > 0,
        S = i.useMemo(() => (C ? m : g ? d : r), [r, m, C, g, d]),
        E = g ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(N.nd, T.nd),
        children: [
            (0, a.jsxs)("div", {
                className: T.KE,
                children: [
                    (0, a.jsx)(u.m, {
                        text: E,
                        children: (0, a.jsx)(h.K0, {
                            size: "sm",
                            variant: g ? "primary" : "active",
                            icon: g ? h.udU : h.E$n,
                            "aria-label": E,
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
                data: S,
                selectedRowKey: _?.id.toString(),
                onClickRow: (e) => b(e.actionLog),
            }),
            null != _ &&
                (0, a.jsx)(w, { actionLog: _, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
