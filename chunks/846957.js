n.d(t, {
    B: () => s,
});
var r = n(627968),
    l = n(503698),
    a = n.n(l),
    i = n(132198),
    o = n(587301);
let s = (e) => {
    let { product: t, animationState: n, className: l } = e,
        s = i.m[t.skuId];
    return null != s
        ? (0, r.jsx)("div", {
              className: a()(o.W, l),
              children:
                  null != s.render &&
                  s.render({
                      animationState: n,
                      alt: t.name,
                  }),
          })
        : null;
};
