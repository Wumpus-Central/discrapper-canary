n.d(t, { Z: () => I }), n(388685), n(35282);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    f = n(597688),
    g = n(128922),
    p = n(370039),
    m = n(501431),
    h = n(149705),
    C = n(303952),
    _ = n(38900),
    b = n(709999),
    v = n(653126),
    x = n(786040),
    E = n(401975),
    O = n(81136),
    S = n(440617),
    y = n(981631),
    j = n(891131);
let k = { flattenProductVariants: !0 };
function I(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: I } = e,
        T = (0, d.sp)(),
        L = null != (t = null == T ? void 0 : T.sessionId) ? t : "",
        { noCache: B, includeUnpublished: P } = (0, O.Z)(),
        N = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: A, currentPage: R, totalCount: Z, isFetchingResults: w } = (0, h.a)(),
        H = (0, s.Wu)([f.Z], () => f.Z.getProductsBySkus(A)),
        D = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        M = null == A ? void 0 : A.join("");
    l.useEffect(() => {
        D();
    }, [M, D]);
    let F = (0, p.a)(),
        W = l.useMemo(() => F(H), [F, H]);
    l.useEffect(() => {
        n ||
            (0, C.n)({
                sessionId: L,
                checkpoint: C.a.SHOP_RENDERED,
                tab: I,
                unpublishedCategoriesShown: P,
                cacheDisabled: B,
            });
    }, [L, P, B, n, I]);
    let V = l.useRef(null),
        { setQueryPageSize: U, setQueryPageOffset: z, queryPageSize: G } = (0, m.S)(),
        [K, Y] = l.useState(!1),
        q = n || w || null == N;
    l.useEffect(() => {
        if (q) return void Y(!1);
        W.length > 0 && Y(!0);
    }, [q, W.length]);
    let J = G > 0 && !q && 0 === W.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != V.current && U(Math.floor(5 * getComputedStyle(V.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != V.current) return e.observe(V.current), () => e.disconnect();
    }, [U]);
    let Q = l.useCallback(
            (e) => {
                u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == T ? void 0 : T.sessionId,
                    page_section: null == T ? void 0 : T.pageSection,
                    page_category: null == T ? void 0 : T.pageCategory,
                    page_index: e,
                    page_size: G,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    z((e - 1) * G);
            },
            [T, G, z],
        ),
        X = g.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(x.zp.Provider, {
        value: k,
        children: [
            (0, r.jsxs)("div", {
                className: a()({ [j.productsEmpty]: J }),
                children: [
                    J && (0, r.jsx)(S.Z, {}),
                    (0, r.jsxs)("div", {
                        className: a()(j.products, { [j.loadIn]: K }),
                        ref: V,
                        children: [
                            q && [...Array(G)].map((e, t) => (X ? (0, r.jsx)(E.Z, {}, t) : (0, r.jsx)(_.K, {}, t))),
                            !q &&
                                W.map((e, t) => {
                                    let n = f.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: X
                                                      ? (0, r.jsx)(
                                                            v.Z,
                                                            {
                                                                skuId: e.skuId,
                                                                onClickAnalytics: (0, x.wO)(e, I, T),
                                                            },
                                                            e.skuId,
                                                        )
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: N,
                                                                category: n,
                                                                tab: I,
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
            Z > G &&
                (0, r.jsx)("div", {
                    className: j.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(o.DsT, {
                            currentPage: R,
                            totalCount: Z,
                            pageSize: G,
                            onPageChange: Q,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
