"use strict";
r.d(t, { A: () => c });
var l = r(627968),
    s = r(64700),
    n = r(674658),
    a = r(491438),
    i = r(561769);
let c = (e) => {
    let { skuId: t, aspectRatio: r } = e,
        { product: c } = (0, n.q)(t, !0),
        u = s.useContext(i.v3);
    if (null == c) return null;
    let { flattenProductVariants: d, ...o } = u;
    return (0, l.jsx)(i.v3.Provider, {
        value: { flattenProductVariants: d ?? !0, ...o },
        children: (0, l.jsx)(a.A, { skuId: t, aspectRatio: r }),
    });
};
