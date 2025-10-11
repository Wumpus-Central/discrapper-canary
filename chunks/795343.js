n.d(t, { Z: () => k }), n(388685), n(35282);
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
    v = n(786040),
    S = n(401975),
    O = n(81136),
    x = n(440617),
    y = n(981631),
    j = n(891131);
function k(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: i, scrollerRef: k, tab: T } = e,
        L = (0, d.sp)(),
        I = null != (t = null == L ? void 0 : L.sessionId) ? t : "",
        { noCache: B, includeUnpublished: A } = (0, O.Z)(),
        N = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: P, currentPage: R, totalCount: Z, isFetchingResults: w } = (0, h.a)(),
        H = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(P)),
        F = l.useCallback(() => {
            var e;
            null == k || null == (e = k.current) || e.scrollToTop({ animate: !0 });
        }, [k]),
        D = null == P ? void 0 : P.join("");
    l.useEffect(() => {
        F();
    }, [D, F]);
    let M = (0, p.a)(),
        W = l.useMemo(() => M(H), [M, H]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: I,
                checkpoint: _.a.SHOP_RENDERED,
                tab: T,
                isFullScreen: i,
                unpublishedCategoriesShown: A,
                cacheDisabled: B,
            });
    }, [I, i, A, B, n, T]);
    let U = l.useRef(null),
        { setQueryPageSize: V, setQueryPageOffset: z, queryPageSize: G } = (0, C.S)(),
        [K, Y] = l.useState(!1),
        q = n || w || null == N;
    l.useEffect(() => {
        if (q) return void Y(!1);
        W.length > 0 && Y(!0);
    }, [q, W.length]);
    let Q = G > 0 && !q && 0 === W.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != U.current && V(Math.floor(5 * getComputedStyle(U.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != U.current) return e.observe(U.current), () => e.disconnect();
    }, [V]);
    let J = l.useCallback(
            (e) => {
                u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: G,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    z((e - 1) * G);
            },
            [L, G, z],
        ),
        X = f.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [j.productsEmpty]: Q }),
                children: [
                    Q && (0, r.jsx)(x.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(j.products, { [j.loadIn]: K }),
                        ref: U,
                        children: [
                            q && [...Array(G)].map((e, t) => (X ? (0, r.jsx)(S.Z, {}, t) : (0, r.jsx)(m.K, {}, t))),
                            !q &&
                                W.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: X
                                                      ? (0, r.jsx)(
                                                            E.Z,
                                                            {
                                                                skuId: e.skuId,
                                                                onClickAnalytics: (0, v.wO)(e, T, L),
                                                            },
                                                            e.skuId,
                                                        )
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: N,
                                                                category: n,
                                                                tab: T,
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
                        children: (0, r.jsx)(a.DsT, {
                            currentPage: R,
                            totalCount: Z,
                            pageSize: G,
                            onPageChange: J,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
