"use strict";
n.d(t, { B: () => m });
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(939249),
    r = n(289873),
    o = n(7689),
    c = n(789645),
    d = n(985018),
    u = n(374473);
let m = (e) => {
    let { hasContent: t, onClear: n, className: a, isLoading: m, size: h = "sm" } = e;
    return (0, l.jsx)(s.D, {
        className: i()(a, u.Qm, { [u.Wn]: t }),
        "data-size": h,
        onClick: (e) => {
            e.stopPropagation(), null != n && n(e);
        },
        tabIndex: t ? 0 : -1,
        "aria-hidden": !t,
        onMouseDown: (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        children: (0, l.jsx)("div", {
            className: u.zc,
            children: m
                ? (0, l.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE, className: i()(u.Kk, u.RK) })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(o.$, {
                              color: "currentColor",
                              className: i()(u.Kk, { [u.RK]: !t }),
                              "aria-label": d.intl.string(d.t["5h0QOP"]),
                          }),
                          (0, l.jsx)(c.P, {
                              color: "currentColor",
                              className: i()(u.IU, { [u.RK]: t }),
                              "aria-label": d.intl.string(d.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
