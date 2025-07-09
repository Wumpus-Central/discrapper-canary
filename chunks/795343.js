(n.d(t, { Z: () => _ }), n(35282), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(399606),
    a = n(481060),
    i = n(381585),
    s = n(597688),
    c = n(370039),
    u = n(82892),
    d = n(501431),
    p = n(149705),
    g = n(303952),
    f = n(38900),
    h = n(709999),
    b = n(81136),
    m = n(484920);
function _(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: _, scrollerRef: C, tab: O } = e,
        v = (0, i.sp)(),
        E = null != (t = null == v ? void 0 : v.sessionId) ? t : '',
        { noCache: S, includeUnpublished: x } = (0, b.Z)(),
        y = (0, u.x)(),
        { skus: j, currentPage: T, totalCount: P, isFetchingResults: L } = (0, p.a)(),
        I = (0, o.Wu)([s.Z], () => s.Z.getProductsBySkus(j)),
        k = l.useCallback(() => {
            var e;
            null == C || null == (e = C.current) || e.scrollToTop({ animate: !0 });
        }, [C]),
        B = (0, c.a)(),
        N = l.useMemo(() => B(I), [B, I]);
    l.useEffect(() => {
        n ||
            (0, g.n)({
                sessionId: E,
                checkpoint: g.a.SHOP_RENDERED,
                tab: O,
                isFullScreen: _,
                unpublishedCategoriesShown: x,
                cacheDisabled: S
            });
    }, [E, _, x, S, n, O]);
    let A = l.useRef(null),
        { setQueryPageSize: R, setQueryPageOffset: w, queryPageSize: Z } = (0, d.S)();
    l.useEffect(() => {
        if (null != A.current) {
            let e = new ResizeObserver(() => {
                null != A.current && R(Math.floor(5 * getComputedStyle(A.current).gridTemplateColumns.split(/\s+/).length));
            });
            return (e.observe(A.current), () => e.disconnect());
        }
    }, [R]);
    let F = n || L || null == y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: m.products,
                ref: A,
                children: [
                    F && [...Array(Z)].map((e, t) => (0, r.jsx)(f.K, {}, t)),
                    N.map((e, t) => {
                        let n = s.Z.getCategory(e.categorySkuId);
                        return null == n
                            ? null
                            : (0, r.jsx)(
                                  i.k0,
                                  {
                                      newValue: { tilePosition: t },
                                      children: (0, r.jsx)(
                                          h.Z,
                                          {
                                              product: e,
                                              user: y,
                                              category: n,
                                              tab: O
                                          },
                                          e.skuId
                                      )
                                  },
                                  e.skuId
                              );
                    })
                ]
            }),
            P > Z &&
                (0, r.jsx)('div', {
                    className: m.paginationContainer,
                    children: (0, r.jsx)('div', {
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: T,
                            totalCount: P,
                            pageSize: Z,
                            onPageChange: (e) => {
                                (w((e - 1) * Z), k());
                            },
                            disablePaginationGap: !0
                        })
                    })
                })
        ]
    });
}
