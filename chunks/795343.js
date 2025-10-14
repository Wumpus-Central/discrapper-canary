n.d(t, { Z: () => j }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    s = n(399606),
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
    v = n(786040),
    O = n(401975),
    x = n(81136),
    S = n(440617),
    y = n(981631),
    k = n(891131);
function j(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: j } = e,
        T = (0, d.sp)(),
        L = null != (t = null == T ? void 0 : T.sessionId) ? t : "",
        { noCache: I, includeUnpublished: B } = (0, x.Z)(),
        A = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: N, currentPage: P, totalCount: R, isFetchingResults: Z } = (0, h.a)(),
        w = (0, s.Wu)([g.Z], () => g.Z.getProductsBySkus(N)),
        H = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        D = null == N ? void 0 : N.join("");
    l.useEffect(() => {
        H();
    }, [D, H]);
    let M = (0, p.a)(),
        F = l.useMemo(() => M(w), [M, w]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: L,
                checkpoint: _.a.SHOP_RENDERED,
                tab: j,
                unpublishedCategoriesShown: B,
                cacheDisabled: I,
            });
    }, [L, B, I, n, j]);
    let W = l.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: V, queryPageSize: z } = (0, C.S)(),
        [G, K] = l.useState(!1),
        Y = n || Z || null == A;
    l.useEffect(() => {
        if (Y) return void K(!1);
        F.length > 0 && K(!0);
    }, [Y, F.length]);
    let q = z > 0 && !Y && 0 === F.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != W.current && U(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != W.current) return e.observe(W.current), () => e.disconnect();
    }, [U]);
    let Q = l.useCallback(
            (e) => {
                u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                    page_section: null == T ? void 0 : T.pageSection,
                    page_category: null == T ? void 0 : T.pageCategory,
                    page_index: e,
                    page_size: z,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    V((e - 1) * z);
            },
            [T, z, V],
        ),
        J = f.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()({ [k.productsEmpty]: q }),
                children: [
                    q && (0, r.jsx)(S.Z, {}),
                    (0, r.jsxs)("div", {
                        className: o()(k.products, { [k.loadIn]: G }),
                        ref: W,
                        children: [
                            Y && [...Array(z)].map((e, t) => (J ? (0, r.jsx)(O.Z, {}, t) : (0, r.jsx)(m.K, {}, t))),
                            !Y &&
                                F.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: J
                                                      ? (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                skuId: e.skuId,
                                                                onClickAnalytics: (0, v.wO)(e, j, T),
                                                            },
                                                            e.skuId,
                                                        )
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: A,
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
                    className: k.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: P,
                            totalCount: R,
                            pageSize: z,
                            onPageChange: Q,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
