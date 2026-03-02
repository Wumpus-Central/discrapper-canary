t.d(l, { A: () => d });
var r = t(627968),
    o = t(64700),
    n = t(751304),
    i = t(561769),
    a = t(684910);
let d = (e) => {
    let { productId: l } = e,
        { product: t } = (0, a.A)({ productId: l, includePricing: !0 }),
        d = o.useMemo(() => t?.toCollectiblesProduct(), [t]);
    return null == d
        ? null
        : (0, r.jsx)(i.v3.Provider, { value: { productOverride: d }, children: (0, r.jsx)(n.A, { skuId: d.skuId }) });
};
