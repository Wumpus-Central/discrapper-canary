n.d(t, { A: () => j });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(311907),
    o = n(397927),
    d = n(58736),
    c = n(231545),
    u = n(260880),
    m = n(303054),
    h = n(231643),
    x = n(661251),
    p = n(166812);
function g(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function _(e) {
    let { store: t, dataGetter: n } = e,
        [i, l] = s.useState(n(t));
    return (
        s.useEffect(() => {
            let e = () => l(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(o.IpV, { className: p.Dx, children: (0, a.jsx)(c.A, { data: i }) })
    );
}
let f = [
        {
            key: "name",
            cellClassName: p.__invalid_eventColumn,
            render(e) {
                let { store: t } = e;
                return t.getName();
            },
        },
    ],
    v = [
        {
            id: "local",
            name: "Local Variables",
            group: h.fu.NONE,
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)("div", {
                          className: p.Dx,
                          children: [
                              "Store is missing ",
                              (0, a.jsx)("code", { children: "__getLocalVars" }),
                              " method.",
                          ],
                      })
                    : (0, a.jsx)(_, { store: t, dataGetter: (e) => e.__getLocalVars() });
            },
        },
        {
            id: "instance",
            name: "Store Instance",
            group: h.fu.NONE,
            render(e) {
                let { store: t } = e;
                return (0, a.jsx)(_, { store: t, dataGetter: (e) => e });
            },
        },
    ];
function b(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: s, renderSelectedTab: i } = (0, h.Ay)({ tabs: v }, []);
    return (0, a.jsxs)(u.A, {
        className: p.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(s, {}),
            (0, a.jsxs)(d.Ay, {
                className: l()(x.jr, p.nZ),
                children: [
                    (0, a.jsx)(d.Ay.Icon, { icon: o.gqV, tooltip: t.getName() }),
                    (0, a.jsx)(d.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function j() {
    let e = s.useRef(null),
        [t, n] = s.useState(""),
        i = r.il.getAll(),
        d = s
            .useMemo(() => i.map((e) => ({ key: e._dispatchToken, store: e })).sort(g), [i])
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [c, u] = s.useState(),
        h = i.find((e) => e._dispatchToken === c);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(x.nd, p.nd),
        children: [
            (0, a.jsx)("div", {
                className: p.KE,
                children: (0, a.jsx)(o.IWV, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, a.jsx)(m.A, { columns: f, data: d, selectedRowKey: c, onClickRow: (e) => u(e.key) }),
            null != h &&
                (0, a.jsx)(b, { store: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
