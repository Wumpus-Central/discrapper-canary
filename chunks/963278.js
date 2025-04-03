n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    o = n(442837),
    i = n(481060),
    s = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(709999),
    b = n(388032),
    p = n(806734);
let f = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        f = (0, o.e7)([s.default], () => s.default.getCurrentUser());
    return null == f
        ? null
        : (0, r.jsxs)('div', {
              className: a()(p.shelfBlockContainer, p.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: p.blockHeader,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: 'heading-lg/semibold',
                              children: t.name
                          }),
                          (0, r.jsx)(i.zxk, {
                              color: i.Ttl.PRIMARY,
                              look: i.iLD.FILLED,
                              onClick: () => n('shelf block see all', t.categorySkuId),
                              children: b.NW.formatToPlainString(b.t.bc9RBA, { category_name: t.name })
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: p.feed,
                      children: (0, r.jsx)(r.Fragment, {
                          children: t.rankedSkuIds.map((e, n) => {
                              let a = u.Z.getCategoryForProduct(e),
                                  o = u.Z.getProduct(e);
                              return null == a || null == o
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
                                                    product: o,
                                                    category: a,
                                                    user: f,
                                                    tab: l,
                                                    isInFeedView: !0
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
