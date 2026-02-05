a.d(t, { A: () => _ });
var n = a(627968),
    i = a(64700),
    s = a(311907),
    l = a(292455),
    r = a(701508),
    o = a(979590),
    c = a(783531),
    d = a(620140),
    u = a(38181),
    h = a(111737),
    m = a(573),
    p = a(401186);
let _ = function (e) {
    let { tabId: t, onSelectApplication: a, onScroll: _ } = e,
        g = i.useRef(null),
        x = i.useCallback(() => {
            g.current?.scrollTo({ to: 0 });
        }, []),
        A = (0, s.bG)([u.A], () => u.A.getCategories()),
        C = i.useMemo(() => A.find((e) => e.id === t), [A, t]),
        b = i.useMemo(() => (null != C ? (0, d.C)(C) : ""), [C]);
    return (0, n.jsxs)(c.A, {
        onScroll: _,
        ref: g,
        children: [
            (0, n.jsx)(r.A, { title: C?.name ?? "", description: b, children: (0, n.jsx)(l.A, {}) }),
            (0, n.jsx)(o.A, {
                children:
                    null == C
                        ? (0, n.jsx)("div", { className: p.U, children: (0, n.jsx)(h.A, { className: p.z }) })
                        : (0, n.jsx)(m.A, { categoryId: C.id, onSelectApplication: a, resetScroll: x }),
            }),
        ],
    });
};
