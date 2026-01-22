n.d(t, {
    A: () => y,
}),
    n(896048),
    n(638769);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(58736),
    d = n(231545),
    u = n(260880),
    m = n(303054),
    p = n(231643),
    h = n(661251),
    f = n(166812);

function x(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}

function b(e) {
    let { store: t, dataGetter: n } = e,
        [i, r] = l.useState(n(t));
    return (
        l.useEffect(() => {
            let e = () => r(n(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, n]),
        (0, a.jsx)(o.IpV, {
            className: f.Dx,
            children: (0, a.jsx)(d.A, {
                data: i,
            }),
        })
    );
}
let g = [
        {
            key: "name",
            cellClassName: f.__invalid_eventColumn,
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
            group: p.fu.NONE,
            render(e) {
                let { store: t } = e;
                return null == t.__getLocalVars
                    ? (0, a.jsxs)("div", {
                          className: f.Dx,
                          children: [
                              "Store is missing ",
                              (0, a.jsx)("code", {
                                  children: "__getLocalVars",
                              }),
                              " method.",
                          ],
                      })
                    : (0, a.jsx)(b, {
                          store: t,
                          dataGetter: (e) => e.__getLocalVars(),
                      });
            },
        },
        {
            id: "instance",
            name: "Store Instance",
            group: p.fu.NONE,
            render(e) {
                let { store: t } = e;
                return (0, a.jsx)(b, {
                    store: t,
                    dataGetter: (e) => e,
                });
            },
        },
    ];

function j(e) {
    let { store: t, initialHeight: n } = e,
        { TabBar: l, renderSelectedTab: i } = (0, p.Ay)(
            {
                tabs: v,
            },
            [],
        );
    return (0, a.jsxs)(u.A, {
        className: f.rf,
        minHeight: 100,
        initialHeight: n,
        children: [
            (0, a.jsx)(l, {}),
            (0, a.jsxs)(c.Ay, {
                className: r()(h.jr, f.nZ),
                children: [
                    (0, a.jsx)(c.Ay.Icon, {
                        icon: o.gqV,
                        tooltip: t.getName(),
                    }),
                    (0, a.jsx)(c.Ay.Title, {
                        children: t.getName(),
                    }),
                ],
            }),
            i({
                store: t,
            }),
        ],
    });
}

function y() {
    let e = l.useRef(null),
        [t, n] = l.useState(""),
        i = s.il.getAll(),
        c = l
            .useMemo(
                () =>
                    i
                        .map((e) => ({
                            key: e._dispatchToken,
                            store: e,
                        }))
                        .sort(x),
                [i],
            )
            .filter((e) =>
                (function (e, t) {
                    let { store: n } = e;
                    return n.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [d, u] = l.useState(),
        p = i.find((e) => e._dispatchToken === d);
    return (0, a.jsxs)("div", {
        ref: e,
        className: r()(h.nd, f.nd),
        children: [
            (0, a.jsx)("div", {
                className: f.KE,
                children: (0, a.jsx)(o.IWV, {
                    size: "sm",
                    query: t,
                    onChange: n,
                    onClear: () => n(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, a.jsx)(m.A, {
                columns: g,
                data: c,
                selectedRowKey: d,
                onClickRow: (e) => u(e.key),
            }),
            null != p &&
                (0, a.jsx)(j, {
                    store: p,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                }),
        ],
    });
}
