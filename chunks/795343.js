(r.d(t, { Z: () => C }), r(388685), r(35282));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(399606),
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
    O = r(501638),
    v = r(538314);
function C(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: i, scrollerRef: C, tab: E } = e,
        S = (0, u.sp)(),
        y = null != (t = null == S ? void 0 : S.sessionId) ? t : '',
        { noCache: x, includeUnpublished: j } = (0, _.Z)(),
        P = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: T, currentPage: L, totalCount: I, isFetchingResults: k } = (0, g.a)(),
        N = (0, o.Wu)([d.Z], () => d.Z.getProductsBySkus(T)),
        A = l.useCallback(() => {
            var e;
            null == C || null == (e = C.current) || e.scrollToTop({ animate: !0 });
        }, [C]),
        w = null == T ? void 0 : T.join('');
    l.useEffect(() => {
        A();
    }, [w, A]);
    let B = (0, p.a)(),
        R = l.useMemo(() => B(N), [B, N]);
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
        V = r || k || null == P;
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
                    className: a()({ [v.productsEmpty]: U }),
                    children: [
                        U && (0, n.jsx)(O.Z, {}),
                        (0, n.jsxs)('div', {
                            className: a()(v.products, { [v.loadIn]: H }),
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
                                                              user: P,
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
                I > M &&
                    (0, n.jsx)('div', {
                        className: v.paginationContainer,
                        children: (0, n.jsx)('div', {
                            children: (0, n.jsx)(s.DsT, {
                                currentPage: L,
                                totalCount: I,
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
