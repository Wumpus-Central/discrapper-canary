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
    f = n(149705),
    g = n(303952),
    h = n(38900),
    b = n(709999),
    m = n(81136),
    _ = n(484920);
function C(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: C, scrollerRef: O, tab: E } = e,
        v = (0, s.sp)(),
        S = null != (t = null == v ? void 0 : v.sessionId) ? t : '',
        { noCache: x, includeUnpublished: y } = (0, m.Z)(),
        j = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        { skus: T, currentPage: P, totalCount: L } = (0, f.a)(),
        k = (0, i.Wu)([c.Z], () => c.Z.getProductsBySkus(T)),
        I = l.useCallback(() => {
            var e;
            null == O || null == (e = O.current) || e.scrollToTop({ animate: !0 });
        }, [O]),
        B = (0, u.a)(),
        N = (0, d.l)(B(k));
    l.useEffect(() => {
        n ||
            (0, g.n)({
                sessionId: S,
                checkpoint: g.a.SHOP_RENDERED,
                tab: E,
                isFullScreen: C,
                unpublishedCategoriesShown: y,
                cacheDisabled: x
            });
    }, [S, C, y, x, n, E]);
    let A = l.useRef(null),
        { setQueryPageSize: R, setQueryPageOffset: w, queryPageSize: Z } = (0, p.S)();
    return (l.useEffect(() => {
        if (null != A.current) {
            let e = new ResizeObserver(() => {
                if (null == A.current) return;
                let { clientWidth: e } = A.current;
                R(Math.floor(5 * Math.max(1, Math.floor(e / 246))));
            });
            return (e.observe(A.current), () => e.disconnect());
        }
    }, [R]),
    n || null == j)
        ? (0, r.jsx)(h.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)('div', {
                      className: _.products,
                      ref: A,
                      children: N.map((e, t) => {
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
                                                user: j,
                                                category: n,
                                                tab: E
                                            },
                                            e.skuId
                                        )
                                    },
                                    e.skuId
                                );
                      })
                  }),
                  L > Z &&
                      (0, r.jsx)('div', {
                          className: _.paginationContainer,
                          children: (0, r.jsx)('div', {
                              children: (0, r.jsx)(o.DsT, {
                                  currentPage: P,
                                  totalCount: L,
                                  pageSize: Z,
                                  onPageChange: (e) => {
                                      (w((e - 1) * Z), I());
                                  },
                                  disablePaginationGap: !0
                              })
                          })
                      })
              ]
          });
}
