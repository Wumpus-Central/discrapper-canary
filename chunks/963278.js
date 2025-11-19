n.d(t, { Z: () => v });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    f = n(128922),
    g = n(937510),
    p = n(709999),
    m = n(653126),
    h = n(786040),
    C = n(215023),
    _ = n(388032),
    b = n(310582);
let v = (e) => {
    let { shelf: t, handleTransition: n, tab: i } = e,
        v = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        x = (0, s.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)),
        E = f.Z.useConfig({ location: "ShelfBlock" }).showCardsV2,
        O = (0, u.sp)(),
        S = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        y = (0, g.l)(S).slice(0, 4);
    return null == v
        ? null
        : (0, r.jsxs)("div", {
              className: a()(b.shelfBlockContainer, b.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: b.blockHeader,
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "secondary",
                              text: _.intl.formatToPlainString(_.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: null == x ? void 0 : x.isOrbsExclusive,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: b.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: y.map((e, n) => {
                              let l = d.Z.getCategoryForProduct(e.skuId);
                              if (null == l || null == e) return null;
                              let a = e.skuId;
                              return (0, r.jsx)(
                                  u.k0,
                                  {
                                      newValue: {
                                          tilePosition: n,
                                          pageSection: t.name,
                                          categoryPosition: 2,
                                      },
                                      children: E
                                          ? (0, r.jsx)(
                                                m.Z,
                                                {
                                                    skuId: a,
                                                    prioritizedCurrency: i === C.AW.ORBS ? h.tA.ORBS : void 0,
                                                    onClickAnalytics: (0, h.wO)(e, i, O),
                                                },
                                                a,
                                            )
                                          : (0, r.jsx)(
                                                p.Z,
                                                {
                                                    product: e,
                                                    category: l,
                                                    user: v,
                                                    tab: i,
                                                },
                                                a,
                                            ),
                                  },
                                  a,
                              );
                          }),
                      }),
                  }),
              ],
          });
};
