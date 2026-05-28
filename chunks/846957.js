n.d(l, { B: () => t });
var r = n(627968),
    s = n(503698),
    d = n.n(s),
    a = n(576052),
    u = n(68644);
let t = (e) => {
    let { product: l, animationState: n, className: s } = e,
        t = a.m[l.skuId];
    return null != t
        ? (0, r.jsx)("div", {
              className: d()(u.W4, s),
              children: null != t.render && t.render({ animationState: n, alt: l.name }),
          })
        : null;
};
