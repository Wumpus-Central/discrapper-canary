n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(399606),
    a = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    f = n(370039),
    p = n(501431),
    m = n(149705),
    C = n(303952),
    h = n(653126),
    _ = n(786040),
    b = n(401975),
    E = n(81136),
    v = n(440617),
    S = n(981631),
    x = n(891131);
let O = { flattenProductVariants: !0 };
function y(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: y } = e,
        k = (0, d.sp)(),
        T = null != (t = null == k ? void 0 : k.sessionId) ? t : "",
        { noCache: j, includeUnpublished: I } = (0, E.Z)(),
        L = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: B, currentPage: N, totalCount: A, isFetchingResults: P } = (0, m.a)(),
        R = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(B)),
        Z = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        w = null == B ? void 0 : B.join("");
    l.useEffect(() => {
        Z();
    }, [w, Z]);
    let D = (0, f.a)(),
        H = l.useMemo(() => D(R), [D, R]);
    l.useEffect(() => {
        n ||
            (0, C.n)({
                sessionId: T,
                checkpoint: C.a.SHOP_RENDERED,
                tab: y,
                unpublishedCategoriesShown: I,
                cacheDisabled: j,
            });
    }, [T, I, j, n, y]);
    let M = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: W, queryPageSize: U } = (0, p.S)(),
        [V, z] = l.useState(!1),
        G = n || P || null == L;
    l.useEffect(() => {
        if (G) return void z(!1);
        H.length > 0 && z(!0);
    }, [G, H.length]);
    let K = U > 0 && !G && 0 === H.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != M.current) return e.observe(M.current), () => e.disconnect();
    }, [F]);
    let Y = l.useCallback(
        (e) => {
            u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                page_section: null == k ? void 0 : k.pageSection,
                page_category: null == k ? void 0 : k.pageCategory,
                page_index: e,
                page_size: U,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                W((e - 1) * U);
        },
        [k, U, W],
    );
    return (0, r.jsxs)(_.zp.Provider, {
        value: O,
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [x.productsEmpty]: K }),
                children: [
                    K && (0, r.jsx)(v.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(x.products, { [x.loadIn]: V }),
                        ref: M,
                        children: [
                            G && [...Array(U)].map((e, t) => (0, r.jsx)(b.Z, {}, t)),
                            !G &&
                                H.map((e, t) =>
                                    null == g.Z.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, r.jsx)(
                                                      h.Z,
                                                      {
                                                          skuId: e.skuId,
                                                          onClickAnalytics: (0, _.wO)(e, y, k),
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
            A > U &&
                (0, r.jsx)("div", {
                    className: x.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: N,
                            totalCount: A,
                            pageSize: U,
                            onPageChange: Y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
