n.d(t, { B: () => o });
var r = n(627968),
    a = n(503698),
    i = n.n(a),
    s = n(132198),
    l = n(594452);
let o = (e) => {
    let { product: t, animationState: n, className: a } = e,
        o = s.m[t.skuId];
    return null != o
        ? (0, r.jsx)("div", {
              className: i()(l.W, a),
              children: null != o.render && o.render({ animationState: n, alt: t.name }),
          })
        : null;
};
