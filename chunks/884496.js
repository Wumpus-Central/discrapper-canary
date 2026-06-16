e.d(s, { B: () => h });
var r = e(627968);
e(64700);
var i = e(503698),
    n = e.n(i),
    t = e(939249),
    l = e(289873),
    c = e(7689),
    o = e(789645),
    d = e(375708),
    p = e(374473);
let h = (a) => {
    let { hasContent: s, onClear: e, className: i, isLoading: h, size: u = "sm" } = a;
    return (0, r.jsx)(t.D, {
        className: n()(i, p.Qm, { [p.Wn]: s }),
        "data-size": u,
        onClick: (a) => {
            a.stopPropagation(), null != e && e(a);
        },
        tabIndex: s ? 0 : -1,
        "aria-hidden": !s,
        onMouseDown: (a) => {
            a.preventDefault(), a.stopPropagation();
        },
        children: (0, r.jsx)("div", {
            className: p.zc,
            children: h
                ? (0, r.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE, className: n()(p.Kk, p.RK) })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.$, {
                              color: "currentColor",
                              className: n()(p.Kk, { [p.RK]: !s }),
                              "aria-label": d.intl.string(d.t["5h0QOP"]),
                              "aria-hidden": s,
                          }),
                          (0, r.jsx)(o.P, {
                              color: "currentColor",
                              className: n()(p.IU, { [p.RK]: s }),
                              "aria-label": d.intl.string(d.t.VkKicb),
                              "aria-hidden": !s,
                          }),
                      ],
                  }),
        }),
    });
};
