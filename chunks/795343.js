n.d(t, { Z: () => T }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    o = n(399606),
    a = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    f = n(128922),
    p = n(370039),
    C = n(501431),
    h = n(149705),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    v = n(401975),
    S = n(81136),
    O = n(440617),
    x = n(981631),
    y = n(891131);
function T(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: i, scrollerRef: T, tab: j } = e,
        L = (0, d.sp)(),
        k = null != (t = null == L ? void 0 : L.sessionId) ? t : "",
        { noCache: I, includeUnpublished: B } = (0, S.Z)(),
        N = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: P, currentPage: A, totalCount: R, isFetchingResults: Z } = (0, h.a)(),
        w = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(P)),
        H = l.useCallback(() => {
            var e;
            null == T || null == (e = T.current) || e.scrollToTop({ animate: !0 });
        }, [T]),
        F = null == P ? void 0 : P.join("");
    l.useEffect(() => {
        H();
    }, [F, H]);
    let D = (0, p.a)(),
        M = l.useMemo(() => D(w), [D, w]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: k,
                checkpoint: _.a.SHOP_RENDERED,
                tab: j,
                isFullScreen: i,
                unpublishedCategoriesShown: B,
                cacheDisabled: I,
            });
    }, [k, i, B, I, n, j]);
    let W = l.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: V, queryPageSize: G } = (0, C.S)(),
        [z, K] = l.useState(!1),
        Y = n || Z || null == N;
    l.useEffect(() => {
        if (Y) return void K(!1);
        M.length > 0 && K(!0);
    }, [Y, M.length]);
    let q = G > 0 && !Y && 0 === M.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != W.current && U(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != W.current) return e.observe(W.current), () => e.disconnect();
    }, [U]);
    let Q = l.useCallback(
            (e) => {
                u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: G,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    V((e - 1) * G);
            },
            [L, G, V],
        ),
        J = f.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [y.productsEmpty]: q }),
                children: [
                    q && (0, r.jsx)(O.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(y.products, { [y.loadIn]: z }),
                        ref: W,
                        children: [
                            Y && [...Array(G)].map((e, t) => (J ? (0, r.jsx)(v.Z, {}, t) : (0, r.jsx)(m.K, {}, t))),
                            !Y &&
                                M.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: J
                                                      ? (0, r.jsx)(E.Z, { skuId: e.skuId }, e.skuId)
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: N,
                                                                category: n,
                                                                tab: j,
                                                            },
                                                            e.skuId,
                                                        ),
                                              },
                                              e.skuId,
                                          );
                                }),
                        ],
                    }),
                ],
            }),
            R > G &&
                (0, r.jsx)("div", {
                    className: y.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: A,
                            totalCount: R,
                            pageSize: G,
                            onPageChange: Q,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
