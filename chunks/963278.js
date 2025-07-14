r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var l = r(120356),
    o = r.n(l),
    i = r(442837),
    a = r(481060),
    s = r(594174),
    c = r(381585),
    u = r(597688),
    d = r(709999),
    p = r(388032),
    g = r(806734);
let f = (e) => {
    let { shelf: t, handleTransition: r, tab: l } = e,
        f = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return null == f
        ? null
        : (0, n.jsxs)('div', {
              className: o()(g.shelfBlockContainer, g.centeredSection),
              children: [
                  (0, n.jsxs)('div', {
                      className: g.blockHeader,
                      children: [
                          (0, n.jsx)(a.X6q, {
                              variant: 'heading-lg/semibold',
                              children: t.name
                          }),
                          (0, n.jsx)(a.zxk, {
                              variant: 'secondary',
                              text: p.intl.formatToPlainString(p.t.bc9RBA, { category_name: t.name }),
                              onClick: () => r('shelf block see all', t.categorySkuId)
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: g.feed,
                      children: (0, n.jsx)(n.Fragment, {
                          children: t.rankedSkuIds.map((e, r) => {
                              let o = u.Z.getCategoryForProduct(e),
                                  i = u.Z.getProduct(e);
                              return null == o || null == i
                                  ? null
                                  : (0, n.jsx)(
                                        c.k0,
                                        {
                                            newValue: {
                                                tilePosition: r,
                                                pageSection: t.name,
                                                categoryPosition: 2
                                            },
                                            children: (0, n.jsx)(
                                                d.Z,
                                                {
                                                    product: i,
                                                    category: o,
                                                    user: f,
                                                    tab: l
                                                },
                                                e
                                            )
                                        },
                                        e
                                    );
                          })
                      })
                  })
              ]
          });
};
