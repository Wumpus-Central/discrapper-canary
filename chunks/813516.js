"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(580679),
    l = n(985018),
    u = n(647162);
let c = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: a, children: c, id: d, role: _, "aria-label": f } = e;
    return (0, r.jsxs)("div", {
        className: s()(n, { [u.yF]: !0, [u.KJ]: a, [u.ov]: null != c }),
        ref: t,
        id: d,
        role: _,
        "aria-label": f,
        children: [
            null != c ? (0, r.jsx)("span", { className: s()(u.Qs, i), children: c }) : null,
            a
                ? (0, r.jsxs)("span", {
                      className: u.dM,
                      children: [(0, r.jsx)(o.A, { foreground: u.BH, className: u.fE }), l.intl.string(l.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
