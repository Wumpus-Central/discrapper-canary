n.d(t, { Z: () => v });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    g = n(128922),
    p = n(937510),
    f = n(709999),
    C = n(653126),
    h = n(786040),
    _ = n(215023),
    m = n(388032),
    b = n(310582);
let v = (e) => {
    let { shelf: t, handleTransition: n, tab: i } = e,
        v = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        E = g.Z.useConfig({ location: "ShelfBlock" }).showCardsV2,
        x = (0, u.sp)(),
        O = l.useMemo(() => t.rankedSkuIds.map((e) => d.Z.getProduct(e)).filter((e) => null != e), [t.rankedSkuIds]),
        S = (0, p.l)(O).slice(0, 4);
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
                              text: m.intl.formatToPlainString(m.t.bc9RBE, { category_name: t.name }),
                              onClick: () => n("shelf block see all", t.categorySkuId, void 0, !0),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: b.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: S.map((e, n) => {
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
                                                C.Z,
                                                {
                                                    skuId: a,
                                                    prioritizedCurrency: i === _.AW.ORBS ? h.tA.ORBS : void 0,
                                                    onClickAnalytics: (0, h.wO)(e, i, x),
                                                },
                                                a,
                                            )
                                          : (0, r.jsx)(
                                                f.Z,
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
