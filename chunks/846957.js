r.d(e, { B: () => c });
var s = r(477900),
    d = r(503698),
    l = r.n(d),
    u = r(132198),
    a = r(690524);
function c(n) {
    let { product: e, animationState: r, className: d } = n,
        c = u.m[e.skuId];
    return null != c
        ? (0, s.jsx)("div", {
              className: l()(a.W4, d),
              children: null != c.render && c.render({ animationState: r, alt: e.name }),
          })
        : null;
}
