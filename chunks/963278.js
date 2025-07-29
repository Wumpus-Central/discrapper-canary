r.d(t, { Z: () => g });
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    a = r(442837),
    o = r(481060),
    s = r(594174),
    c = r(381585),
    u = r(597688),
    d = r(709999),
    p = r(388032),
    f = r(806734);
let g = (e) => {
    let { shelf: t, handleTransition: r, tab: l } = e,
        g = (0, a.e7)([s.default], () => s.default.getCurrentUser());
    return null == g
        ? null
        : (0, n.jsxs)('div', {
              className: i()(f.shelfBlockContainer, f.centeredSection),
              children: [
                  (0, n.jsxs)('div', {
                      className: f.blockHeader,
                      children: [
                          (0, n.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: t.name
                          }),
                          (0, n.jsx)(o.zxk, {
                              variant: 'secondary',
                              text: p.intl.formatToPlainString(p.t.bc9RBA, { category_name: t.name }),
                              onClick: () => r('shelf block see all', t.categorySkuId)
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: f.feed,
                      children: (0, n.jsx)(n.Fragment, {
                          children: t.rankedSkuIds.map((e, r) => {
                              let i = u.Z.getCategoryForProduct(e),
                                  a = u.Z.getProduct(e);
                              return null == i || null == a
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
                                                    product: a,
                                                    category: i,
                                                    user: g,
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
