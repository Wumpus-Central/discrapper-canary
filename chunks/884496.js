n.d(t, {
    B: () => u,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    l = n(985018),
    c = n(134130);
let u = (e) => {
    let { hasContent: t, onClear: n, className: i, isLoading: u, size: d = "sm" } = e;
    return (0, r.jsx)(s.DUT, {
        className: a()(i, c.Qm, {
            [c.Wn]: t,
        }),
        "data-size": d,
        onClick: (e) => {
            e.stopPropagation(), null != n && n(e);
        },
        tabIndex: t ? 0 : -1,
        "aria-hidden": !t,
        onMouseDown: (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        children: (0, r.jsx)("div", {
            className: c.zc,
            children: u
                ? (0, r.jsx)(s.y$y, {
                      type: s.y$y.Type.SPINNING_CIRCLE,
                      className: a()(c.Kk, c.RK),
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.$p$, {
                              color: "currentColor",
                              className: a()(c.Kk, {
                                  [c.RK]: !t,
                              }),
                              "aria-label": l.intl.string(l.t["5h0QOP"]),
                          }),
                          (0, r.jsx)(o.PGe, {
                              color: "currentColor",
                              className: a()(c.IU, {
                                  [c.RK]: t,
                              }),
                              "aria-label": l.intl.string(l.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
