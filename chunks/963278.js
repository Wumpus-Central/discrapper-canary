n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    s = n(442837),
    i = n(481060),
    o = n(594174),
    c = n(381585),
    u = n(597688),
    d = n(709999),
    g = n(388032),
    f = n(310582);
let p = (e) => {
    let { shelf: t, handleTransition: n, tab: l } = e,
        p = (0, s.e7)([o.default], () => o.default.getCurrentUser());
    return null == p
        ? null
        : (0, r.jsxs)("div", {
              className: a()(f.shelfBlockContainer, f.centeredSection),
              children: [
                  (0, r.jsxs)("div", {
                      className: f.blockHeader,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: "heading-lg/semibold",
                              children: t.name,
                          }),
                          (0, r.jsx)(i.zxk, {
                              variant: "secondary",
                              text: g.intl.formatToPlainString(g.t.bc9RBA, { category_name: t.name }),
                              onClick: () => n("shelf block see all", t.categorySkuId),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: f.feed,
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
                                            children: (0, r.jsx)(
                                                d.Z,
                                                {
                                                    product: s,
                                                    category: a,
                                                    user: p,
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
