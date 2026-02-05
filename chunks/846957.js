"use strict";
n.d(t, { B: () => l });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(132198),
    o = n(587301);
let l = (e) => {
    let { product: t, animationState: n, className: i } = e,
        l = s.m[t.skuId];
    return null != l
        ? (0, r.jsx)("div", {
              className: a()(o.W, i),
              children: null != l.render && l.render({ animationState: n, alt: t.name }),
          })
        : null;
};
