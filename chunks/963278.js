n.d(t, { Z: () => p });
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
    b = n(388032),
    f = n(806734);
let p = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        p = (0, a.e7)([s.default], () => s.default.getCurrentUser());
    return null == p
        ? null
        : (0, r.jsxs)('div', {
              className: i()(f.shelfBlockContainer, f.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: f.blockHeader,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: t.name
                          }),
                          (0, r.jsx)(o.zxk, {
                              color: o.Ttl.PRIMARY,
                              look: o.iLD.FILLED,
                              onClick: () => n('shelf block see all', t.categorySkuId),
                              children: b.intl.formatToPlainString(b.t.bc9RBA, { category_name: t.name })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: f.feed,
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
                                                    user: p,
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
