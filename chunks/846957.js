a.d(e, { B: () => o });
var n = a(627968),
    l = a(503698),
    r = a.n(l),
    s = a(132198),
    i = a(587301);
let o = (t) => {
    let { product: e, animationState: a, className: l } = t,
        o = s.m[e.skuId];
    return null != o
        ? (0, n.jsx)("div", {
              className: r()(i.W, l),
              children: null != o.render && o.render({ animationState: a, alt: e.name }),
          })
        : null;
};
