t.d(r, { A: () => a });
var d = t(627968);
t(64700);
var l = t(674658),
    c = t(751304),
    o = t(561769);
let a = (e) => {
    let { skuId: r } = e,
        { product: t } = (0, l.q)(r, !0);
    return null == t
        ? null
        : (0, d.jsx)(o.v3.Provider, { value: { flattenProductVariants: !0 }, children: (0, d.jsx)(c.A, { skuId: r }) });
};
