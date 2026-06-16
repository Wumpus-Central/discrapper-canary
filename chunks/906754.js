"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(548118),
    o = n(936755),
    l = n(499413);
let u = function (e) {
    let { guild: t, children: n } = e,
        r =
            null != t
                ? (0, i.jsx)(a.Ay, {
                      guild: t,
                      size: a.Ay.Sizes.MEDIUM,
                      className: s()(l.Kk, null == t.icon ? l.HO : l.FP),
                      active: !0,
                  })
                : null;
    return (0, i.jsxs)("span", {
        children: [(0, i.jsx)(o.A, { children: r }), (0, i.jsx)("span", { className: l.UU, children: n })],
    });
};
