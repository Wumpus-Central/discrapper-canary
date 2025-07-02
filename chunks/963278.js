n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(709999),
    p = n(388032),
    g = n(806734);
let f = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        f = (0, a.e7)([s.default], () => s.default.getCurrentUser());
    return null == f
        ? null
        : (0, r.jsxs)('div', {
              className: i()(g.shelfBlockContainer, g.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: g.blockHeader,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: t.name
                          }),
                          (0, r.jsx)(o.zxk, {
                              color: o.Ttl.PRIMARY,
                              look: o.iLD.FILLED,
                              onClick: () => n('shelf block see all', t.categorySkuId),
                              children: p.intl.formatToPlainString(p.t.bc9RBA, { category_name: t.name })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: g.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: t.rankedSkuIds.map((e, n) => {
                              let i = u.Z.getCategoryForProduct(e),
                                  a = u.Z.getProduct(e);
                              return null == i || null == a
                                  ? null
                                  : (0, r.jsx)(
                                        c.k0,
                                        {
                                            newValue: {
                                                tilePosition: n,
                                                pageSection: t.name,
                                                categoryPosition: 2
                                            },
                                            children: (0, r.jsx)(
                                                d.Z,
                                                {
                                                    product: a,
                                                    category: i,
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
