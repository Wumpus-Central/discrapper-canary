n.d(t, { A: () => A }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(58736),
    u = n(231545),
    m = n(260880),
    h = n(303054),
    x = n(231643),
    p = n(793877),
    g = n(59830);
function _(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function f(e) {
    let { store: t, dataGetter: n } = e,
        [s, l] = i.useState(n(t));
    return (
        i.useEffect(() => {
            let e = () => l(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(o.IpV, { className: g.Dx, children: (0, a.jsx)(u.A, { data: s }) })
    );
}
function v(e) {
    let { store: t } = e,
        [n, s] = i.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [r, c] = i.useState(null),
        u = i.useCallback(() => {
            s(JSON.stringify(t.__getLocalVars(), null, 2)), c(null);
        }, [t]);
    i.useEffect(() => (t.addChangeListener(u), () => t.removeChangeListener(u)), [t, u]);
    let m = i.useCallback(() => {
            let e;
            c(null);
            try {
                e = JSON.parse(n);
            } catch (e) {
                c(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let a = t.__getLocalVarsEditConfig?.();
            if (null == a) return void c("Store does not support editing");
            try {
                for (let e of a.preDispatches ?? []) d.h.dispatch(e);
                d.h.dispatch({ ...a.buildPayload(e), type: a.actionType }), u();
            } catch (e) {
                c(e instanceof Error ? e.message : String(e));
            }
        }, [n, t, u]),
        h = i.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void c("Store does not support purge");
            c(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) d.h.dispatch(t);
                d.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), u();
            } catch (e) {
                c(e instanceof Error ? e.message : String(e));
            }
        }, [t, u]);
    return (0, a.jsxs)("div", {
        className: l()(g.Dx, g.Ef),
        children: [
            (0, a.jsx)("textarea", {
                className: g.Vz,
                value: n,
                onChange: (e) => s(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != r && (0, a.jsx)("div", { className: g.Xf, role: "alert", children: r }),
            (0, a.jsxs)("div", {
                className: g.KA,
                children: [
                    (0, a.jsx)(o.Button, { variant: "primary", size: "sm", text: "Apply", onClick: m }),
                    (0, a.jsx)(o.Button, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: u }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, a.jsx)(o.Button, { variant: "secondary", size: "sm", text: "Purge store", onClick: h }),
                ],
            }),
        ],
    });
}
let b = [
    {
        key: "name",
        cellClassName: g.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function j(e) {
    let { store: t, initialHeight: n } = e,
        s = i.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: x.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, a.jsxs)("div", {
                                      className: g.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, a.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, a.jsx)(f, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: x.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, a.jsx)(f, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: x.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, a.jsxs)("div", {
                                      className: g.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, a.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, a.jsx)(v, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: r, renderSelectedTab: d } = (0, x.Ay)({ tabs: s }, []);
    return (0, a.jsxs)(m.A, {
        className: g.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(r, {}),
            (0, a.jsxs)(c.Ay, {
                className: l()(p.jr, g.nZ),
                children: [
                    (0, a.jsx)(c.Ay.Icon, { icon: o.gqV, tooltip: t.getName() }),
                    (0, a.jsx)(c.Ay.Title, { children: t.getName() }),
                ],
            }),
            d({ store: t }),
        ],
    });
}
function A() {
    let e = i.useRef(null),
        [t, n] = i.useState(""),
        s = r.il.getAll(),
        d = i
            .useMemo(() => s.map((e) => ({ key: e._dispatchToken, store: e })).sort(_), [s])
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [c, u] = i.useState(),
        m = s.find((e) => e._dispatchToken === c);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(p.nd, g.nd),
        children: [
            (0, a.jsx)("div", {
                className: g.KE,
                children: (0, a.jsx)(o.IWV, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, a.jsx)(h.A, { columns: b, data: d, selectedRowKey: c, onClickRow: (e) => u(e.key) }),
            null != m &&
                (0, a.jsx)(j, { store: m, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, c),
        ],
    });
}
