"use strict";
n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(548118),
    l = n(936755),
    o = n(734797);
let d = function (e) {
    let { guild: t, children: n } = e,
        r =
            null != t
                ? (0, i.jsx)(s.Ay, {
                      guild: t,
                      size: s.Ay.Sizes.MEDIUM,
                      className: a()(o.Kk, null == t.icon ? o.HO : o.FP),
                      active: !0,
                  })
                : null;
    return (0, i.jsxs)("span", {
        children: [(0, i.jsx)(l.A, { children: r }), (0, i.jsx)("span", { className: o.UU, children: n })],
    });
};
