n.d(t, { Z: () => C });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    i = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    f = n(937510),
    g = n(653126),
    b = n(786040),
    p = n(215023),
    m = n(388032),
    h = n(222194);
let C = (e) => {
    let { shelf: t, handleTransition: n, tab: a } = e,
        C = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        E = (0, o.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)),
        v = (0, u.sp)(),
        S = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        _ = (0, f.l)(S).slice(0, 4);
    return null == C
        ? null
        : (0, r.jsxs)("div", {
              className: s()(h.shelfBlockContainer, h.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: h.blockHeader,
                      children: [
                          (0, r.jsx)(i.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(i.Button, {
                              variant: "secondary",
                              text: m.intl.formatToPlainString(m.t.bc9RBE, { category_name: t.name }),
                              onClick: () => {
                                  n({
                                      sourceButton: "shelf block see all",
                                      categorySkuId: t.categorySkuId,
                                      isInternalShopDeeplink: !0,
                                      isOrbsExclusive: (null == E ? void 0 : E.isOrbsExclusive) && a !== p.AW.ORBS,
                                  });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: h.feed,
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
                                              prioritizedCurrency: a === p.AW.ORBS ? b.tA.ORBS : void 0,
                                              onClickAnalytics: (0, b.wO)(e, a, v),
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
