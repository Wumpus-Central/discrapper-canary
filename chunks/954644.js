l.d(t, { A: () => o });
var r = l(627968),
    a = l(64700),
    d = l(674658),
    c = l(751304),
    n = l(561769);
let o = (e) => {
    let { skuId: t } = e,
        { product: l } = (0, d.q)(t, !0),
        o = a.useContext(n.v3);
    if (null == l) return null;
    let { flattenProductVariants: s, ...u } = o;
    return (0, r.jsx)(n.v3.Provider, {
        value: { flattenProductVariants: s ?? !0, ...u },
        children: (0, r.jsx)(c.A, { skuId: t }),
    });
};
