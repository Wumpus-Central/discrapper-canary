"use strict";
n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(548118),
    r = n(936755),
    o = n(499413);
let c = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, l.jsx)(a.Ay, {
                      guild: t,
                      size: a.Ay.Sizes.MEDIUM,
                      className: s()(o.Kk, null == t.icon ? o.HO : o.FP),
                      active: !0,
                  })
                : null;
    return (0, l.jsxs)("span", {
        children: [(0, l.jsx)(r.A, { children: i }), (0, l.jsx)("span", { className: o.UU, children: n })],
    });
};
