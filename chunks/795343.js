n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    s = n(399606),
    a = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    f = n(370039),
    p = n(501431),
    m = n(149705),
    h = n(303952),
    C = n(653126),
    _ = n(786040),
    b = n(401975),
    v = n(81136),
    E = n(440617),
    S = n(981631),
    O = n(891131);
let x = { flattenProductVariants: !0 };
function y(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: y } = e,
        j = (0, d.sp)(),
        k = null != (t = null == j ? void 0 : j.sessionId) ? t : "",
        { noCache: T, includeUnpublished: I } = (0, v.Z)(),
        L = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: B, currentPage: A, totalCount: N, isFetchingResults: P } = (0, m.a)(),
        R = (0, s.Wu)([g.Z], () => g.Z.getProductsBySkus(B)),
        Z = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        w = null == B ? void 0 : B.join("");
    l.useEffect(() => {
        Z();
    }, [w, Z]);
    let H = (0, f.a)(),
        D = l.useMemo(() => H(R), [H, R]);
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: k,
                checkpoint: h.a.SHOP_RENDERED,
                tab: y,
                unpublishedCategoriesShown: I,
                cacheDisabled: T,
            });
    }, [k, I, T, n, y]);
    let M = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: W, queryPageSize: U } = (0, p.S)(),
        [V, z] = l.useState(!1),
        G = n || P || null == L;
    l.useEffect(() => {
        if (G) return void z(!1);
        D.length > 0 && z(!0);
    }, [G, D.length]);
    let K = U > 0 && !G && 0 === D.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != M.current) return e.observe(M.current), () => e.disconnect();
    }, [F]);
    let Y = l.useCallback(
        (e) => {
            u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                page_section: null == j ? void 0 : j.pageSection,
                page_category: null == j ? void 0 : j.pageCategory,
                page_index: e,
                page_size: U,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                W((e - 1) * U);
        },
        [j, U, W],
    );
    return (0, r.jsxs)(_.zp.Provider, {
        value: x,
        children: [
            (0, r.jsxs)("div", {
                className: o()({ [O.productsEmpty]: K }),
                children: [
                    K && (0, r.jsx)(E.Z, {}),
                    (0, r.jsxs)("div", {
                        className: o()(O.products, { [O.loadIn]: V }),
                        ref: M,
                        children: [
                            G && [...Array(U)].map((e, t) => (0, r.jsx)(b.Z, {}, t)),
                            !G &&
                                D.map((e, t) =>
                                    null == g.Z.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, r.jsx)(
                                                      C.Z,
                                                      {
                                                          skuId: e.skuId,
                                                          onClickAnalytics: (0, _.wO)(e, y, j),
                                                      },
                                                      e.skuId,
                                                  ),
                                              },
                                              e.skuId,
                                          ),
                                ),
                        ],
                    }),
                ],
            }),
            N > U &&
                (0, r.jsx)("div", {
                    className: O.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: A,
                            totalCount: N,
                            pageSize: U,
                            onPageChange: Y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
