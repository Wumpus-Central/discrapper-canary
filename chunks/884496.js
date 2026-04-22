r.d(t, { B: () => d });
var n = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(939249),
    i = r(289873),
    o = r(7689),
    u = r(789645),
    c = r(985018),
    h = r(596854);
let d = (e) => {
    let { hasContent: t, onClear: r, className: s, isLoading: d, size: _ = "sm" } = e;
    return (0, n.jsx)(a.D, {
        className: l()(s, h.Qm, { [h.Wn]: t }),
        "data-size": _,
        onClick: (e) => {
            e.stopPropagation(), null != r && r(e);
        },
        tabIndex: t ? 0 : -1,
        "aria-hidden": !t,
        onMouseDown: (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        children: (0, n.jsx)("div", {
            className: h.zc,
            children: d
                ? (0, n.jsx)(i.y, { type: i.y.Type.SPINNING_CIRCLE, className: l()(h.Kk, h.RK) })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.$, {
                              color: "currentColor",
                              className: l()(h.Kk, { [h.RK]: !t }),
                              "aria-label": c.intl.string(c.t["5h0QOP"]),
                          }),
                          (0, n.jsx)(u.P, {
                              color: "currentColor",
                              className: l()(h.IU, { [h.RK]: t }),
                              "aria-label": c.intl.string(c.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
