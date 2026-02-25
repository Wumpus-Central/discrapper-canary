"use strict";
l.d(t, { A: () => o });
var r = l(627968),
    a = l(64700),
    n = l(151645),
    s = l(751304),
    i = l(561769);
let o = (e) => {
    let { skuId: t } = e,
        { product: l } = (0, n.A)({ skuId: t, includePricing: !0 }),
        o = a.useMemo(() => l?.toLegacyRecord(), [l]);
    return null == o
        ? null
        : (0, r.jsx)(i.v3.Provider, { value: { productOverride: o }, children: (0, r.jsx)(s.A, { skuId: t }) });
};
