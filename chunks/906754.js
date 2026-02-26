"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(263063),
    o = n(936755),
    l = n(116170);
let u = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, r.jsx)(a.Ay, {
                      guild: t,
                      size: a.Ay.Sizes.MEDIUM,
                      className: s()(l.Kk, null == t.icon ? l.HO : l.FP),
                      active: !0,
                  })
                : null;
    return (0, r.jsxs)("span", {
        children: [(0, r.jsx)(o.A, { children: i }), (0, r.jsx)("span", { className: l.UU, children: n })],
    });
};
