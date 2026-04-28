l.d(t, { A: () => c });
var r = l(627968),
    n = l(64700),
    a = l(674658),
    s = l(491438),
    i = l(561769);
let c = (e) => {
    let { skuId: t, aspectRatio: l } = e,
        { product: c } = (0, a.q)(t, !0),
        d = n.useContext(i.v3);
    if (null == c) return null;
    let { flattenProductVariants: o, ...u } = d;
    return (0, r.jsx)(i.v3.Provider, {
        value: { flattenProductVariants: o ?? !0, ...u },
        children: (0, r.jsx)(s.A, { skuId: t, aspectRatio: l }),
    });
};
