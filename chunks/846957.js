n.d(t, { B: () => o });
var a = n(627968),
    r = n(503698),
    i = n.n(r),
    s = n(132198),
    l = n(68644);
let o = (e) => {
    let { product: t, animationState: n, className: r } = e,
        o = s.m[t.skuId];
    return null != o
        ? (0, a.jsx)("div", {
              className: i()(l.W, r),
              children: null != o.render && o.render({ animationState: n, alt: t.name }),
          })
        : null;
};
