(n.d(t, { Z: () => v }), n(35282), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(399606),
    s = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    p = n(370039),
    g = n(501431),
    f = n(149705),
    h = n(303952),
    b = n(38900),
    m = n(709999),
    _ = n(81136),
    C = n(501638),
    O = n(484920);
function v(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: o, scrollerRef: v, tab: E } = e,
        S = (0, u.sp)(),
        x = null != (t = null == S ? void 0 : S.sessionId) ? t : '',
        { noCache: y, includeUnpublished: j } = (0, _.Z)(),
        T = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: P, currentPage: L, totalCount: k, isFetchingResults: I } = (0, f.a)(),
        B = (0, i.Wu)([d.Z], () => d.Z.getProductsBySkus(P)),
        N = l.useCallback(() => {
            var e;
            null == v || null == (e = v.current) || e.scrollToTop({ animate: !0 });
        }, [v]),
        A = null == P ? void 0 : P.join('');
    l.useEffect(() => {
        N();
    }, [A, N]);
    let w = (0, p.a)(),
        R = l.useMemo(() => w(B), [w, B]);
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: x,
                checkpoint: h.a.SHOP_RENDERED,
                tab: E,
                isFullScreen: o,
                unpublishedCategoriesShown: j,
                cacheDisabled: y
            });
    }, [x, o, j, y, n, E]);
    let Z = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: D, queryPageSize: M } = (0, g.S)(),
        H = n || I || null == T,
        W = !H && 0 === R.length;
    return (
        l.useEffect(() => {
            if (null != Z.current && !W) {
                let e = new ResizeObserver(() => {
                    null != Z.current && F(Math.floor(5 * getComputedStyle(Z.current).gridTemplateColumns.split(/\s+/).length));
                });
                return (e.observe(Z.current), () => e.disconnect());
            }
        }, [F, W]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: a()(O.products, { [O.productsEmpty]: W }),
                    ref: Z,
                    children: [
                        H && [...Array(M)].map((e, t) => (0, r.jsx)(b.K, {}, t)),
                        W && (0, r.jsx)(C.Z, {}),
                        !H &&
                            R.map((e, t) => {
                                let n = d.Z.getCategory(e.categorySkuId);
                                return null == n
                                    ? null
                                    : (0, r.jsx)(
                                          u.k0,
                                          {
                                              newValue: { tilePosition: t },
                                              children: (0, r.jsx)(
                                                  m.Z,
                                                  {
                                                      product: e,
                                                      user: T,
                                                      category: n,
                                                      tab: E
                                                  },
                                                  e.skuId
                                              )
                                          },
                                          e.skuId
                                      );
                            })
                    ]
                }),
                k > M &&
                    (0, r.jsx)('div', {
                        className: O.paginationContainer,
                        children: (0, r.jsx)('div', {
                            children: (0, r.jsx)(s.DsT, {
                                currentPage: L,
                                totalCount: k,
                                pageSize: M,
                                onPageChange: (e) => {
                                    D((e - 1) * M);
                                },
                                disablePaginationGap: !0
                            })
                        })
                    })
            ]
        })
    );
}
