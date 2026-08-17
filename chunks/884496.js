n.d(s, { B: () => h });
var e = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    t = n(939249),
    l = n(289873),
    c = n(7689),
    o = n(789645),
    d = n(375708),
    p = n(611537);
function h(a) {
    let { hasContent: s, onClear: n, className: i, isLoading: h, size: u = "sm" } = a;
    return (0, e.jsx)(t.D, {
        className: r()(i, p.Qm, { [p.Wn]: s }),
        "data-size": u,
        onClick: (a) => {
            a.stopPropagation(), null != n && n(a);
        },
        tabIndex: s ? 0 : -1,
        "aria-hidden": !s,
        onMouseDown: (a) => {
            a.preventDefault(), a.stopPropagation();
        },
        children: (0, e.jsx)("div", {
            className: p.zc,
            children: h
                ? (0, e.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE, className: r()(p.Kk, p.RK) })
                : (0, e.jsxs)(e.Fragment, {
                      children: [
                          (0, e.jsx)(c.MagnifyingGlassIcon, {
                              color: "currentColor",
                              className: r()(p.Kk, { [p.RK]: !s }),
                              "aria-label": d.intl.string(d.t["5h0QOP"]),
                              "aria-hidden": s,
                          }),
                          (0, e.jsx)(o.P, {
                              color: "currentColor",
                              className: r()(p.IU, { [p.RK]: s }),
                              "aria-label": d.intl.string(d.t.VkKicb),
                              "aria-hidden": !s,
                          }),
                      ],
                  }),
        }),
    });
}
