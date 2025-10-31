n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    p = n(128922),
    g = n(937510),
    f = n(709999),
    h = n(653126),
    C = n(786040),
    m = n(215023),
    _ = n(388032),
    b = n(310582);
let v = (e) => {
    let { shelf: t, handleTransition: n, tab: i } = e,
        v = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        E = (0, a.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)),
        x = p.Z.useConfig({ location: "ShelfBlock" }).showCardsV2,
        O = (0, u.sp)(),
        S = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        y = (0, g.l)(S).slice(0, 4);
    return null == v
        ? null
        : (0, r.jsxs)("div", {
              className: s()(b.shelfBlockContainer, b.centeredSection),
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
                                      isOrbsExclusive: null == E ? void 0 : E.isOrbsExclusive,
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
                              let s = e.skuId;
                              return (0, r.jsx)(
                                  u.k0,
                                  {
                                      newValue: {
                                          tilePosition: n,
                                          pageSection: t.name,
                                          categoryPosition: 2,
                                      },
                                      children: x
                                          ? (0, r.jsx)(
                                                h.Z,
                                                {
                                                    skuId: s,
                                                    prioritizedCurrency: i === m.AW.ORBS ? C.tA.ORBS : void 0,
                                                    onClickAnalytics: (0, C.wO)(e, i, O),
                                                },
                                                s,
                                            )
                                          : (0, r.jsx)(
                                                f.Z,
                                                {
                                                    product: e,
                                                    category: l,
                                                    user: v,
                                                    tab: i,
                                                },
                                                s,
                                            ),
                                  },
                                  s,
                              );
                          }),
                      }),
                  }),
              ],
          });
};
