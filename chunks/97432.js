n.d(t, {
    A: () => b,
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(292455),
    s = n(701508),
    c = n(979590),
    o = n(783531),
    d = n(620140),
    u = n(38181),
    p = n(111737),
    h = n(573),
    m = n(401186);
let b = function (e) {
    var t;
    let { tabId: n, onSelectApplication: b, onScroll: f } = e,
        g = a.useRef(null),
        x = a.useCallback(() => {
            var e;
            null == (e = g.current) ||
                e.scrollTo({
                    to: 0,
                });
        }, []),
        v = (0, r.bG)([u.A], () => u.A.getCategories()),
        j = a.useMemo(() => v.find((e) => e.id === n), [v, n]),
        A = a.useMemo(() => (null != j ? (0, d.C)(j) : ""), [j]);
    return (0, l.jsxs)(o.A, {
        onScroll: f,
        ref: g,
        children: [
            (0, l.jsx)(s.A, {
                title: null != (t = null == j ? void 0 : j.name) ? t : "",
                description: A,
                children: (0, l.jsx)(i.A, {}),
            }),
            (0, l.jsx)(c.A, {
                children:
                    null == j
                        ? (0, l.jsx)("div", {
                              className: m.U,
                              children: (0, l.jsx)(p.A, {
                                  className: m.z,
                              }),
                          })
                        : (0, l.jsx)(h.A, {
                              categoryId: j.id,
                              onSelectApplication: b,
                              resetScroll: x,
                          }),
            }),
        ],
    });
};
