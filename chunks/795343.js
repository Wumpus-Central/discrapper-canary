n.d(t, { Z: () => C });
var r = n(255367),
    l = n(73800),
    i = n(399606),
    o = n(481060),
    a = n(594174),
    s = n(381585),
    c = n(597688),
    u = n(370039),
    d = n(937510),
    p = n(501431),
    g = n(149705),
    f = n(303952),
    h = n(38900),
    b = n(709999),
    m = n(81136),
    _ = n(484920);
function C(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: C, scrollerRef: O, tab: v } = e,
        E = (0, s.sp)(),
        S = null != (t = null == E ? void 0 : E.sessionId) ? t : '',
        { noCache: x, includeUnpublished: y } = (0, m.Z)(),
        T = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        { skus: j, currentPage: P, pageLimit: L, totalCount: k } = (0, g.a)(),
        I = (0, i.Wu)([c.Z], () => c.Z.getProductsBySkus(j)),
        B = (0, p.Iy)(),
        N = l.useCallback(() => {
            var e;
            null == O || null == (e = O.current) || e.scrollToTop({ animate: !0 });
        }, [O]),
        A = (0, u.a)(),
        R = (0, d.l)(A(I));
    return (l.useEffect(() => {
        (0, f.n)({
            sessionId: S,
            checkpoint: f.a.SHOP_MOUNTED,
            tab: v,
            isFullScreen: C,
            unpublishedCategoriesShown: y,
            cacheDisabled: x
        });
    }, []),
    l.useEffect(() => {
        n ||
            (0, f.n)({
                sessionId: S,
                checkpoint: f.a.SHOP_RENDERED,
                tab: v,
                isFullScreen: C,
                unpublishedCategoriesShown: y,
                cacheDisabled: x
            });
    }, [S, C, y, x, n, v]),
    n || null == T)
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: _.products,
                      children: R.map((e, t) => {
                          let n = c.Z.getCategory(e.categorySkuId);
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    s.k0,
                                    {
                                        newValue: { tilePosition: t },
                                        children: (0, r.jsx)(
                                            b.Z,
                                            {
                                                product: e,
                                                user: T,
                                                category: n,
                                                tab: v
                                            },
                                            e.skuId
                                        )
                                    },
                                    e.skuId
                                );
                      })
                  }),
                  k > L &&
                      (0, r.jsx)('div', {
                          className: _.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: P,
                                  totalCount: k,
                                  pageSize: L,
                                  onPageChange: (e) => {
                                      (B(e - 1), N());
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
