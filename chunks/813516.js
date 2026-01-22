n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(580679),
    l = n(985018),
    c = n(647162);
let u = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: a, children: u, id: d, role: f, "aria-label": p } = e;
    return (0, r.jsxs)("div", {
        className: s()(n, {
            [c.yF]: !0,
            [c.KJ]: a,
            [c.ov]: null != u,
        }),
        ref: t,
        id: d,
        role: f,
        "aria-label": p,
        children: [
            null != u
                ? (0, r.jsx)("span", {
                      className: s()(c.Qs, i),
                      children: u,
                  })
                : null,
            a
                ? (0, r.jsxs)("span", {
                      className: c.dM,
                      children: [
                          (0, r.jsx)(o.A, {
                              foreground: c.BH,
                              className: c.fE,
                          }),
                          l.intl.string(l.t.y2b7CA),
                      ],
                  })
                : null,
        ],
    });
});
