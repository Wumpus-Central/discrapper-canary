t.d(l, { A: () => c });
var r = t(627968),
    n = t(64700),
    o = t(575593),
    i = t(751304),
    a = t(561769),
    s = t(684910),
    d = t(970488);
let c = (e) => {
    let { productId: l, auto: t, columns: c, rows: u } = e,
        { product: h } = (0, s.A)({ productId: l, includePricing: !0 }),
        m = n.useMemo(() => h?.toCollectiblesProduct(), [h]);
    if (null == m) return null;
    if (m.type === o.R.BUNDLE) {
        let e = t ? 2 : c,
            l = t ? 1 : u,
            n = `${e}/${l}`;
        return (0, r.jsx)(a.v3.Provider, {
            value: { productOverride: m },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: l,
                children: (0, r.jsx)(i.A, { skuId: m.skuId, aspectRatio: n }),
            }),
        });
    }
    if (m.type === o.R.PROFILE_EFFECT) {
        let e = t ? 1 : c,
            l = t ? 2 : u,
            n = `${e}/${l}`;
        return (0, r.jsx)(a.v3.Provider, {
            value: { productOverride: m },
            children: (0, r.jsx)(d.A, {
                columns: e,
                rows: l,
                children: (0, r.jsx)(i.A, { skuId: m.skuId, aspectRatio: n }),
            }),
        });
    }
    return t
        ? (0, r.jsx)(a.v3.Provider, {
              value: { productOverride: m },
              children: (0, r.jsx)(i.A, { skuId: m.skuId, aspectRatio: "1/1" }),
          })
        : (0, r.jsx)(a.v3.Provider, {
              value: { productOverride: m },
              children: (0, r.jsx)(d.A, {
                  columns: c,
                  rows: u,
                  children: (0, r.jsx)(i.A, { skuId: m.skuId, aspectRatio: `${c}/${u}` }),
              }),
          });
};
