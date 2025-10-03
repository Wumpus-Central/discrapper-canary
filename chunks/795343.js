n.d(t, { Z: () => y }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(399606),
    o = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(128922),
    f = n(370039),
    C = n(501431),
    _ = n(149705),
    h = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(401975),
    v = n(81136),
    x = n(440617),
    O = n(981631),
    T = n(891131);
function y(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: a, scrollerRef: y, tab: j } = e,
        L = (0, d.sp)(),
        k = null != (t = null == L ? void 0 : L.sessionId) ? t : "",
        { noCache: I, includeUnpublished: P } = (0, v.Z)(),
        N = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: B, currentPage: A, totalCount: R, isFetchingResults: Z } = (0, _.a)(),
        w = (0, i.Wu)([g.Z], () => g.Z.getProductsBySkus(B)),
        F = l.useCallback(() => {
            var e;
            null == y || null == (e = y.current) || e.scrollToTop({ animate: !0 });
        }, [y]),
        H = null == B ? void 0 : B.join("");
    l.useEffect(() => {
        F();
    }, [H, F]);
    let D = (0, f.a)(),
        M = l.useMemo(() => D(w), [D, w]);
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: k,
                checkpoint: h.a.SHOP_RENDERED,
                tab: j,
                isFullScreen: a,
                unpublishedCategoriesShown: P,
                cacheDisabled: I,
            });
    }, [k, a, P, I, n, j]);
    let W = l.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: V, queryPageSize: z } = (0, C.S)(),
        [G, K] = l.useState(!1),
        q = n || Z || null == N;
    l.useEffect(() => {
        if (q) return void K(!1);
        M.length > 0 && K(!0);
    }, [q, M.length]);
    let Y = z > 0 && !q && 0 === M.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != W.current && U(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != W.current) return e.observe(W.current), () => e.disconnect();
    }, [U]);
    let X = l.useCallback(
            (e) => {
                u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: z,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    V((e - 1) * z);
            },
            [L, z, V],
        ),
        Q = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [T.productsEmpty]: Y }),
                children: [
                    Y && (0, r.jsx)(x.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(T.products, { [T.loadIn]: G }),
                        ref: W,
                        children: [
                            q && [...Array(z)].map((e, t) => (Q ? (0, r.jsx)(S.Z, {}, t) : (0, r.jsx)(m.K, {}, t))),
                            !q &&
                                M.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: Q
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
            R > z &&
                (0, r.jsx)("div", {
                    className: T.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(o.DsT, {
                            currentPage: A,
                            totalCount: R,
                            pageSize: z,
                            onPageChange: X,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
