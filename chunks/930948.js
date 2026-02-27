t.d(l, { A: () => d });
var r = t(627968),
    o = t(64700),
    n = t(565235),
    a = t(751304),
    i = t(561769);
let d = (e) => {
    let { productId: l } = e,
        { product: t } = (0, n.A)({ productId: l, includePricing: !0 }),
        d = o.useMemo(() => t?.toLegacyRecord(), [t]);
    return null == d
        ? null
        : (0, r.jsx)(i.v3.Provider, { value: { productOverride: d }, children: (0, r.jsx)(a.A, { skuId: d.skuId }) });
};
