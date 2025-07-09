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
        { skus: P, currentPage: L, totalCount: I, isFetchingResults: k } = (0, f.a)(),
        N = (0, i.Wu)([d.Z], () => d.Z.getProductsBySkus(P)),
        B = l.useCallback(() => {
            var e;
            null == v || null == (e = v.current) || e.scrollToTop({ animate: !0 });
        }, [v]),
        A = (0, p.a)(),
        R = l.useMemo(() => A(N), [A, N]);
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
    let w = l.useRef(null),
        { setQueryPageSize: Z, setQueryPageOffset: F, queryPageSize: D } = (0, g.S)();
    l.useEffect(() => {
        if (null != w.current) {
            let e = new ResizeObserver(() => {
                null != w.current && Z(Math.floor(5 * getComputedStyle(w.current).gridTemplateColumns.split(/\s+/).length));
            });
            return (e.observe(w.current), () => e.disconnect());
        }
    }, [Z]);
    let M = n || k || null == T,
        H = !M && 0 === R.length;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: a()(O.products, { [O.productsEmpty]: H }),
                ref: w,
                children: [
                    M && [...Array(D)].map((e, t) => (0, r.jsx)(b.K, {}, t)),
                    H && (0, r.jsx)(C.Z, {}),
                    !M &&
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
            I > D &&
                (0, r.jsx)('div', {
                    className: O.paginationContainer,
                    children: (0, r.jsx)('div', {
                        children: (0, r.jsx)(s.DsT, {
                            currentPage: L,
                            totalCount: I,
                            pageSize: D,
                            onPageChange: (e) => {
                                (F((e - 1) * D), B());
                            },
                            disablePaginationGap: !0
                        })
                    })
                })
        ]
    });
}
