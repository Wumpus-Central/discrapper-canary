a.d(t, { A: () => _ });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(292455),
    r = a(701508),
    o = a(979590),
    c = a(783531),
    d = a(620140),
    u = a(38181),
    h = a(111737),
    m = a(573),
    p = a(504797);
let _ = function (e) {
    let { tabId: t, onSelectApplication: a, onScroll: _ } = e,
        g = l.useRef(null),
        x = l.useCallback(() => {
            g.current?.scrollTo({ to: 0 });
        }, []),
        A = (0, i.bG)([u.A], () => u.A.getCategories()),
        f = l.useMemo(() => A.find((e) => e.id === t), [A, t]),
        C = l.useMemo(() => (null != f ? (0, d.C)(f) : ""), [f]);
    return (0, n.jsxs)(c.A, {
        onScroll: _,
        ref: g,
        children: [
            (0, n.jsx)(r.A, { title: f?.name ?? "", description: C, children: (0, n.jsx)(s.A, {}) }),
            (0, n.jsx)(o.A, {
                children:
                    null == f
                        ? (0, n.jsx)("div", { className: p.U, children: (0, n.jsx)(h.A, { className: p.z }) })
                        : (0, n.jsx)(m.A, { categoryId: f.id, onSelectApplication: a, resetScroll: x }),
            }),
        ],
    });
};
