e.d(s, { B: () => h });
var r = e(627968);
e(64700);
var t = e(503698),
    l = e.n(t),
    n = e(939249),
    i = e(289873),
    c = e(7689),
    o = e(789645),
    p = e(985018),
    d = e(374473);
let h = (a) => {
    let { hasContent: s, onClear: e, className: t, isLoading: h, size: u = "sm" } = a;
    return (0, r.jsx)(n.D, {
        className: l()(t, d.Qm, { [d.Wn]: s }),
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
            className: d.zc,
            children: h
                ? (0, r.jsx)(i.y, { type: i.y.Type.SPINNING_CIRCLE, className: l()(d.Kk, d.RK) })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.$, {
                              color: "currentColor",
                              className: l()(d.Kk, { [d.RK]: !s }),
                              "aria-label": p.intl.string(p.t["5h0QOP"]),
                          }),
                          (0, r.jsx)(o.P, {
                              color: "currentColor",
                              className: l()(d.IU, { [d.RK]: s }),
                              "aria-label": p.intl.string(p.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
