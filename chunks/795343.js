n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    i = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    f = n(597688),
    g = n(370039),
    b = n(501431),
    p = n(149705),
    m = n(303952),
    h = n(653126),
    C = n(786040),
    E = n(401975),
    v = n(81136),
    S = n(440617),
    _ = n(981631),
    x = n(466875);
let O = { flattenProductVariants: !0 };
function y(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: a, tab: y } = e,
        k = (0, d.sp)(),
        T = null != (t = null == k ? void 0 : k.sessionId) ? t : "",
        { noCache: j, includeUnpublished: L } = (0, v.Z)(),
        I = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: A, currentPage: B, totalCount: N, isFetchingResults: R } = (0, p.a)(),
        P = (0, o.Wu)([f.Z], () => f.Z.getProductsBySkus(A)),
        Z = l.useCallback(() => {
            var e;
            null == a || null == (e = a.current) || e.scrollToTop({ animate: !0 });
        }, [a]),
        w = null == A ? void 0 : A.join("");
    l.useEffect(() => {
        Z();
    }, [w, Z]);
    let D = (0, g.a)(),
        H = l.useMemo(() => D(P), [D, P]);
    l.useEffect(() => {
        n ||
            (0, m.n)({
                sessionId: T,
                checkpoint: m.a.SHOP_RENDERED,
                tab: y,
                unpublishedCategoriesShown: L,
                cacheDisabled: j,
            });
    }, [T, L, j, n, y]);
    let M = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: W, queryPageSize: U } = (0, b.S)(),
        [z, V] = l.useState(!1),
        G = n || R || null == I;
    l.useEffect(() => {
        if (G) return void V(!1);
        H.length > 0 && V(!0);
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
            u.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, r.jsxs)(C.zp.Provider, {
        value: O,
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [x.productsEmpty]: K }),
                children: [
                    K && (0, r.jsx)(S.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(x.products, { [x.loadIn]: z }),
                        ref: M,
                        children: [
                            G && [...Array(U)].map((e, t) => (0, r.jsx)(E.Z, {}, t)),
                            !G &&
                                H.map((e, t) =>
                                    null == f.Z.getCategory(e.categorySkuId)
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, r.jsx)(
                                                      h.Z,
                                                      {
                                                          skuId: e.skuId,
                                                          onClickAnalytics: (0, C.wO)(e, y, k),
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
                    className: x.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(i.DsT, {
                            currentPage: B,
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
