(r.d(t, { Z: () => v }), r(388685), r(35282));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(399606),
    s = r(481060),
    c = r(594174),
    u = r(381585),
    d = r(597688),
    p = r(370039),
    f = r(501431),
    g = r(149705),
    h = r(303952),
    b = r(38900),
    m = r(709999),
    _ = r(81136),
    C = r(501638),
    O = r(538314);
function v(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: i, scrollerRef: v, tab: E } = e,
        S = (0, u.sp)(),
        y = null != (t = null == S ? void 0 : S.sessionId) ? t : '',
        { noCache: x, includeUnpublished: j } = (0, _.Z)(),
        T = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: P, currentPage: L, totalCount: k, isFetchingResults: I } = (0, g.a)(),
        N = (0, a.Wu)([d.Z], () => d.Z.getProductsBySkus(P)),
        A = l.useCallback(() => {
            var e;
            null == v || null == (e = v.current) || e.scrollToTop({ animate: !0 });
        }, [v]),
        B = null == P ? void 0 : P.join('');
    l.useEffect(() => {
        A();
    }, [B, A]);
    let w = (0, p.a)(),
        R = l.useMemo(() => w(N), [w, N]);
    l.useEffect(() => {
        r ||
            (0, h.n)({
                sessionId: y,
                checkpoint: h.a.SHOP_RENDERED,
                tab: E,
                isFullScreen: i,
                unpublishedCategoriesShown: j,
                cacheDisabled: x
            });
    }, [y, i, j, x, r, E]);
    let Z = l.useRef(null),
        { setQueryPageSize: D, setQueryPageOffset: F, queryPageSize: M } = (0, f.S)(),
        [H, W] = l.useState(!1),
        V = r || I || null == T;
    l.useEffect(() => {
        if (V) return void W(!1);
        R.length > 0 && W(!0);
    }, [V, R.length]);
    let U = M > 0 && !V && 0 === R.length;
    return (
        l.useEffect(() => {
            let e = new ResizeObserver(() => {
                null != Z.current && D(Math.floor(5 * getComputedStyle(Z.current).gridTemplateColumns.split(/\s+/).length));
            });
            if (null != Z.current) return (e.observe(Z.current), () => e.disconnect());
        }, [D]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: o()({ [O.productsEmpty]: U }),
                    children: [
                        U && (0, n.jsx)(C.Z, {}),
                        (0, n.jsxs)('div', {
                            className: o()(O.products, { [O.loadIn]: H }),
                            ref: Z,
                            children: [
                                V && [...Array(M)].map((e, t) => (0, n.jsx)(b.K, {}, t)),
                                !V &&
                                    R.map((e, t) => {
                                        let r = d.Z.getCategory(e.categorySkuId);
                                        return null == r
                                            ? null
                                            : (0, n.jsx)(
                                                  u.k0,
                                                  {
                                                      newValue: { tilePosition: t },
                                                      children: (0, n.jsx)(
                                                          m.Z,
                                                          {
                                                              product: e,
                                                              user: T,
                                                              category: r,
                                                              tab: E
                                                          },
                                                          e.skuId
                                                      )
                                                  },
                                                  e.skuId
                                              );
                                    })
                            ]
                        })
                    ]
                }),
                k > M &&
                    (0, n.jsx)('div', {
                        className: O.paginationContainer,
                        children: (0, n.jsx)('div', {
                            children: (0, n.jsx)(s.DsT, {
                                currentPage: L,
                                totalCount: k,
                                pageSize: M,
                                onPageChange: (e) => {
                                    F((e - 1) * M);
                                },
                                disablePaginationGap: !0
                            })
                        })
                    })
            ]
        })
    );
}
