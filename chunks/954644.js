r.d(t, { A: () => n });
var l = r(627968);
r(64700);
var d = r(674658),
    c = r(751304),
    a = r(561769);
let n = (e) => {
    let { skuId: t } = e,
        { product: r } = (0, d.q)(t, !0);
    return null == r
        ? null
        : (0, l.jsx)(a.v3.Provider, { value: { flattenProductVariants: !0 }, children: (0, l.jsx)(c.A, { skuId: t }) });
};
