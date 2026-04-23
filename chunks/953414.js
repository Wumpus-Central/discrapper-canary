a.d(t, { A: () => E }), a(321073);
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(573613),
    d = a(821609),
    c = a(278416),
    u = a(892547),
    m = a(73153),
    h = a(58736),
    p = a(231545),
    x = a(260880),
    g = a(303054),
    v = a(231643),
    b = a(505206),
    _ = a(220631);
function f(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function j(e) {
    let { store: t, dataGetter: a } = e,
        [i, s] = l.useState(a(t));
    return (
        l.useEffect(() => {
            let e = () => s(a(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, n.jsx)(o.Ip, { className: _.Dx, children: (0, n.jsx)(p.A, { data: i }) })
    );
}
function A(e) {
    let { store: t } = e,
        [a, i] = l.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [r, o] = l.useState(null),
        c = l.useCallback(() => {
            i(JSON.stringify(t.__getLocalVars(), null, 2)), o(null);
        }, [t]);
    l.useEffect(() => (t.addChangeListener(c), () => t.removeChangeListener(c)), [t, c]);
    let u = l.useCallback(() => {
            let e;
            o(null);
            try {
                e = JSON.parse(a);
            } catch (e) {
                o(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let n = t.__getLocalVarsEditConfig?.();
            if (null == n) return void o("Store does not support editing");
            try {
                for (let e of n.preDispatches ?? []) m.h.dispatch(e);
                m.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), c();
            } catch (e) {
                o(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, c]),
        h = l.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void o("Store does not support purge");
            o(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) m.h.dispatch(t);
                m.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), c();
            } catch (e) {
                o(e instanceof Error ? e.message : String(e));
            }
        }, [t, c]);
    return (0, n.jsxs)("div", {
        className: s()(_.Dx, _.Ef),
        children: [
            (0, n.jsx)("textarea", {
                className: _.Vz,
                value: a,
                onChange: (e) => i(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != r && (0, n.jsx)("div", { className: _.Xf, role: "alert", children: r }),
            (0, n.jsxs)("div", {
                className: _.KA,
                children: [
                    (0, n.jsx)(d.$, { variant: "primary", size: "sm", text: "Apply", onClick: u }),
                    (0, n.jsx)(d.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: c }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, n.jsx)(d.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: h }),
                ],
            }),
        ],
    });
}
let y = [
    {
        key: "name",
        cellClassName: _.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function C(e) {
    let { store: t, initialHeight: a } = e,
        i = l.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: v.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, n.jsxs)("div", {
                                      className: _.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, n.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, n.jsx)(j, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: v.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, n.jsx)(j, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: v.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, n.jsxs)("div", {
                                      className: _.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, n.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, n.jsx)(A, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: r, renderSelectedTab: o } = (0, v.Ay)({ tabs: i }, []);
    return (0, n.jsxs)(x.A, {
        className: _.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, n.jsx)(r, {}),
            (0, n.jsxs)(h.Ay, {
                className: s()(b.jr, _.nZ),
                children: [
                    (0, n.jsx)(h.Ay.Icon, { icon: c.g, tooltip: t.getName() }),
                    (0, n.jsx)(h.Ay.Title, { children: t.getName() }),
                ],
            }),
            o({ store: t }),
        ],
    });
}
function E() {
    let e = l.useRef(null),
        [t, a] = l.useState(""),
        i = r.il.getAll(),
        o = l
            .useMemo(() => i.map((e) => ({ key: e._dispatchToken, store: e })).sort(f), [i])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [d, c] = l.useState(),
        m = i.find((e) => e._dispatchToken === d);
    return (0, n.jsxs)("div", {
        ref: e,
        className: s()(b.nd, _.nd),
        children: [
            (0, n.jsx)("div", {
                className: _.KE,
                children: (0, n.jsx)(u.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, n.jsx)(g.A, { columns: y, data: o, selectedRowKey: d, onClickRow: (e) => c(e.key) }),
            null != m &&
                (0, n.jsx)(C, { store: m, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, d),
        ],
    });
}
