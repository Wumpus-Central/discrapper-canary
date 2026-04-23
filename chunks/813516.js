"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580679),
    l = n(985018),
    u = n(356929);
let c = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: s, children: c, ...d } = e;
    return (0, r.jsxs)("div", {
        ...d,
        className: a()(n, { [u.yF]: !0, [u.KJ]: s, [u.ov]: null != c }),
        ref: t,
        children: [
            null != c ? (0, r.jsx)("span", { className: a()(u.Qs, i), children: c }) : null,
            s
                ? (0, r.jsxs)("span", {
                      className: u.dM,
                      children: [(0, r.jsx)(o.A, { foreground: u.BH, className: u.fE }), l.intl.string(l.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
