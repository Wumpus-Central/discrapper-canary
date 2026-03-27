"use strict";
r.d(t, { B: () => o });
var n = r(627968),
    i = r(503698),
    s = r.n(i),
    a = r(132198),
    l = r(594452);
let o = (e) => {
    let { product: t, animationState: r, className: i } = e,
        o = a.m[t.skuId];
    return null != o
        ? (0, n.jsx)("div", {
              className: s()(l.W, i),
              children: null != o.render && o.render({ animationState: r, alt: t.name }),
          })
        : null;
};
