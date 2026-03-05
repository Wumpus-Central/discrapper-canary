"use strict";
n.d(t, { B: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(397927),
    l = n(985018),
    u = n(83372);
let c = (e) => {
    let { hasContent: t, onClear: n, className: i, isLoading: c, size: d = "sm" } = e;
    return (0, r.jsx)(a.DUT, {
        className: s()(i, u.Qm, { [u.Wn]: t }),
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
            className: u.zc,
            children: c
                ? (0, r.jsx)(a.y$y, { type: a.y$y.Type.SPINNING_CIRCLE, className: s()(u.Kk, u.RK) })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(o.$p$, {
                              color: "currentColor",
                              className: s()(u.Kk, { [u.RK]: !t }),
                              "aria-label": l.intl.string(l.t["5h0QOP"]),
                          }),
                          (0, r.jsx)(o.PGe, {
                              color: "currentColor",
                              className: s()(u.IU, { [u.RK]: t }),
                              "aria-label": l.intl.string(l.t.VkKicb),
                          }),
                      ],
                  }),
        }),
    });
};
