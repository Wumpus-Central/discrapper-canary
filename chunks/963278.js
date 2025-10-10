n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    i = n(481060),
    o = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(128922),
    g = n(709999),
    p = n(653126),
    f = n(388032),
    C = n(310582);
let h = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        h = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
        _ = d.Z.useConfig({ location: "ShelfBlock" }).showCardsV2;
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: a()(C.shelfBlockContainer, C.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: C.blockHeader,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(i.zxk, {
                              variant: "secondary",
                              text: f.intl.formatToPlainString(f.t.bc9RBA, { category_name: t.name }),
                              onClick: () => n("shelf block see all", t.categorySkuId),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: C.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: t.rankedSkuIds.map((e, n) => {
                              let a = u.Z.getCategoryForProduct(e),
                                  s = u.Z.getProduct(e);
                              return null == a || null == s
                                  ? null
                                  : (0, r.jsx)(
                                        c.k0,
                                        {
                                            newValue: {
                                                tilePosition: n,
                                                pageSection: t.name,
                                                categoryPosition: 2,
                                            },
                                            children: _
                                                ? (0, r.jsx)(p.Z, { skuId: e }, e)
                                                : (0, r.jsx)(
                                                      g.Z,
                                                      {
                                                          product: s,
                                                          category: a,
                                                          user: h,
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
