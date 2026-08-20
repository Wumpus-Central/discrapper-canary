"use strict";
n.d(t, { A: () => u });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(548118),
    a = n(936755),
    o = n(978110);
let u = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, l.jsx)(r.Ay, {
                      guild: t,
                      size: r.Ay.Sizes.MEDIUM,
                      className: s()(o.Kk, null == t.icon ? o.HO : o.FP),
                      active: !0,
                  })
                : null;
    return (0, l.jsxs)("span", {
        children: [(0, l.jsx)(a.A, { children: i }), (0, l.jsx)("span", { className: o.UU, children: n })],
    });
};
