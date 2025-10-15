n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    a = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(128922),
    g = n(709999),
    f = n(653126),
    p = n(786040),
    C = n(215023),
    h = n(388032),
    _ = n(310582);
let m = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        m = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        b = d.Z.useConfig({ location: "ShelfBlock" }).showCardsV2,
        v = (0, c.sp)();
    return null == m
        ? null
        : (0, r.jsxs)("div", {
              className: i()(_.shelfBlockContainer, _.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: _.blockHeader,
                      children: [
                          (0, r.jsx)(s.Heading, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              text: h.intl.formatToPlainString(h.t.bc9RBA, { category_name: t.name }),
                              onClick: () => n("shelf block see all", t.categorySkuId, void 0, !0),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: _.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: t.rankedSkuIds.map((e, n) => {
                              let i = u.Z.getCategoryForProduct(e),
                                  o = u.Z.getProduct(e);
                              return null == i || null == o
                                  ? null
                                  : (0, r.jsx)(
                                        c.k0,
                                        {
                                            newValue: {
                                                tilePosition: n,
                                                pageSection: t.name,
                                                categoryPosition: 2,
                                            },
                                            children: b
                                                ? (0, r.jsx)(
                                                      f.Z,
                                                      {
                                                          skuId: e,
                                                          prioritizedCurrency: l === C.AW.ORBS ? p.tA.ORBS : void 0,
                                                          onClickAnalytics: (0, p.wO)(o, l, v),
                                                      },
                                                      e,
                                                  )
                                                : (0, r.jsx)(
                                                      g.Z,
                                                      {
                                                          product: o,
                                                          category: i,
                                                          user: m,
                                                          tab: l,
                                                      },
                                                      e,
                                                  ),
                                        },
                                        e,
                                    );
                          }),
                      }),
                  }),
              ],
          });
};
