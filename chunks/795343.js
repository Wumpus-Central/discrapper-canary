n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(399606),
    s = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    f = n(597688),
    g = n(370039),
    p = n(501431),
    m = n(149705),
    h = n(303952),
    C = n(653126),
    _ = n(786040),
    b = n(401975),
    v = n(81136),
    x = n(440617),
    E = n(981631),
    O = n(891131);
let S = { flattenProductVariants: !0 };
function y(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: y } = e,
        j = (0, d.sp)(),
        I = null != (t = null == j ? void 0 : j.sessionId) ? t : "",
        { noCache: k, includeUnpublished: T } = (0, v.Z)(),
        L = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: P, currentPage: B, totalCount: N, isFetchingResults: A } = (0, m.a)(),
        R = (0, a.Wu)([f.Z], () => f.Z.getProductsBySkus(P)),
        Z = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        w = null == P ? void 0 : P.join("");
    l.useEffect(() => {
        Z();
    }, [w, Z]);
    let H = (0, g.a)(),
        D = l.useMemo(() => H(R), [H, R]);
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: I,
                checkpoint: h.a.SHOP_RENDERED,
                tab: y,
                unpublishedCategoriesShown: T,
                cacheDisabled: k,
            });
    }, [I, T, k, n, y]);
    let M = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: W, queryPageSize: V } = (0, p.S)(),
        [U, z] = l.useState(!1),
        G = n || A || null == L;
    l.useEffect(() => {
        if (G) return void z(!1);
        D.length > 0 && z(!0);
    }, [G, D.length]);
    let K = V > 0 && !G && 0 === D.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != M.current) return e.observe(M.current), () => e.disconnect();
    }, [F]);
    let Y = l.useCallback(
        (e) => {
            u.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                page_section: null == j ? void 0 : j.pageSection,
                page_category: null == j ? void 0 : j.pageCategory,
                page_index: e,
                page_size: V,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                W((e - 1) * V);
        },
        [j, V, W],
    );
    return (0, r.jsxs)(_.zp.Provider, {
        value: S,
        children: [
            (0, r.jsxs)("div", {
                className: o()({ [O.productsEmpty]: K }),
                children: [
                    K && (0, r.jsx)(x.Z, {}),
                    (0, r.jsxs)("div", {
                        className: o()(O.products, { [O.loadIn]: U }),
                        ref: M,
                        children: [
                            G && [...Array(V)].map((e, t) => (0, r.jsx)(b.Z, {}, t)),
                            !G &&
                                D.map((e, t) =>
                                    null == f.Z.getCategory(e.categorySkuId)
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
            N > V &&
                (0, r.jsx)("div", {
                    className: O.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(s.DsT, {
                            currentPage: B,
                            totalCount: N,
                            pageSize: V,
                            onPageChange: Y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
