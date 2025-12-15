n.d(t, { Z: () => h });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(442837),
    s = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    f = n(937510),
    g = n(653126),
    p = n(786040),
    b = n(215023),
    m = n(388032),
    C = n(222194);
let h = (e) => {
    let { shelf: t, handleTransition: n, tab: a } = e,
        h = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        v = (0, i.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)),
        E = (0, u.sp)(),
        S = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        _ = (0, f.l)(S).slice(0, 4);
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: o()(C.shelfBlockContainer, C.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.blockHeader,
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              text: m.intl.formatToPlainString(m.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: (null == v ? void 0 : v.isOrbsExclusive) && a !== b.AW.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: C.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: _.map((e, n) => {
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
                                          g.Z,
                                          {
                                              skuId: l,
                                              prioritizedCurrency: a === b.AW.ORBS ? p.tA.ORBS : void 0,
                                              onClickAnalytics: (0, p.wO)(e, a, E),
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
