t.d(l, { A: () => s });
var r = t(627968),
    n = t(64700),
    o = t(674658),
    i = t(751304),
    a = t(561769);
let s = (e) => {
    let { skuId: l, aspectRatio: t } = e,
        { product: s } = (0, o.q)(l, !0),
        d = n.useContext(a.v3);
    if (null == s) return null;
    let { flattenProductVariants: c, ...u } = d;
    return (0, r.jsx)(a.v3.Provider, {
        value: { flattenProductVariants: c ?? !0, ...u },
        children: (0, r.jsx)(i.A, { skuId: l, aspectRatio: t }),
    });
};
