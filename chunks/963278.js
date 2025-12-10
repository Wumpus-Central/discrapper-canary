n.d(t, { Z: () => _ });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(442837),
    a = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    g = n(937510),
    f = n(653126),
    p = n(786040),
    m = n(215023),
    h = n(388032),
    C = n(310582);
let _ = (e) => {
    let { shelf: t, handleTransition: n, tab: i } = e,
        _ = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        b = (0, s.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)),
        v = (0, u.sp)(),
        E = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        S = (0, g.l)(E).slice(0, 4);
    return null == _
        ? null
        : (0, r.jsxs)("div", {
              className: o()(C.shelfBlockContainer, C.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.blockHeader,
                      children: [
                          (0, r.jsx)(a.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(a.Button, {
                              variant: "secondary",
                              text: h.intl.formatToPlainString(h.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: null == b ? void 0 : b.isOrbsExclusive,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: C.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: S.map((e, n) => {
                              if (null == d.Z.getCategoryForProduct(e.skuId) || null == e) return null;
                              let l = e.skuId;
                              return (0, r.jsx)(
                                  u.k0,
                                  {
                                      newValue: {
                                          tilePosition: n,
                                          pageSection: t.name,
                                          categoryPosition: 2,
                                      },
                                      children: (0, r.jsx)(
                                          f.Z,
                                          {
                                              skuId: l,
                                              prioritizedCurrency: i === m.AW.ORBS ? p.tA.ORBS : void 0,
                                              onClickAnalytics: (0, p.wO)(e, i, v),
                                          },
                                          l,
                                      ),
                                  },
                                  l,
                              );
                          }),
                      }),
                  }),
              ],
          });
};
