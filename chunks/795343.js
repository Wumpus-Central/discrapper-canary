n.d(t, { Z: () => k }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(128922),
    f = n(370039),
    C = n(501431),
    h = n(149705),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    v = n(653126),
    E = n(786040),
    x = n(401975),
    O = n(81136),
    S = n(440617),
    y = n(981631),
    j = n(891131);
function k(e) {
    var t;
    let { isFetchingCategories: n, scrollerRef: i, tab: k } = e,
        T = (0, d.sp)(),
        L = null != (t = null == T ? void 0 : T.sessionId) ? t : "",
        { noCache: I, includeUnpublished: B } = (0, O.Z)(),
        A = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: N, currentPage: P, totalCount: R, isFetchingResults: Z } = (0, h.a)(),
        w = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(N)),
        H = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        D = null == N ? void 0 : N.join("");
    l.useEffect(() => {
        H();
    }, [D, H]);
    let M = (0, f.a)(),
        F = l.useMemo(() => M(w), [M, w]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: L,
                checkpoint: _.a.SHOP_RENDERED,
                tab: k,
                unpublishedCategoriesShown: B,
                cacheDisabled: I,
            });
    }, [L, B, I, n, k]);
    let W = l.useRef(null),
        { setQueryPageSize: V, setQueryPageOffset: U, queryPageSize: z } = (0, C.S)(),
        [G, K] = l.useState(!1),
        Y = n || Z || null == A;
    l.useEffect(() => {
        if (Y) return void K(!1);
        F.length > 0 && K(!0);
    }, [Y, F.length]);
    let q = z > 0 && !Y && 0 === F.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != W.current && V(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != W.current) return e.observe(W.current), () => e.disconnect();
    }, [V]);
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
                    U((e - 1) * z);
            },
            [T, z, U],
        ),
        J = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()({ [j.productsEmpty]: q }),
                children: [
                    q && (0, r.jsx)(S.Z, {}),
                    (0, r.jsxs)("div", {
                        className: a()(j.products, { [j.loadIn]: G }),
                        ref: W,
                        children: [
                            Y && [...Array(z)].map((e, t) => (J ? (0, r.jsx)(x.Z, {}, t) : (0, r.jsx)(m.K, {}, t))),
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
                                                            v.Z,
                                                            {
                                                                skuId: e.skuId,
                                                                onClickAnalytics: (0, E.wO)(e, k, T),
                                                            },
                                                            e.skuId,
                                                        )
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: A,
                                                                category: n,
                                                                tab: k,
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
                    className: j.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(s.DsT, {
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
