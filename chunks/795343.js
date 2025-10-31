n.d(t, { Z: () => k }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(399606),
    o = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    p = n(597688),
    g = n(128922),
    f = n(370039),
    h = n(501431),
    C = n(149705),
    m = n(303952),
    _ = n(38900),
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
        I = (0, d.sp)(),
        T = null != (t = null == I ? void 0 : I.sessionId) ? t : "",
        { noCache: L, includeUnpublished: B } = (0, O.Z)(),
        P = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: A, currentPage: N, totalCount: R, isFetchingResults: Z } = (0, C.a)(),
        w = (0, a.Wu)([p.Z], () => p.Z.getProductsBySkus(A)),
        H = l.useCallback(() => {
            var e;
            null == i || null == (e = i.current) || e.scrollToTop({ animate: !0 });
        }, [i]),
        D = null == A ? void 0 : A.join("");
    l.useEffect(() => {
        H();
    }, [D, H]);
    let M = (0, f.a)(),
        F = l.useMemo(() => M(w), [M, w]);
    l.useEffect(() => {
        n ||
            (0, m.n)({
                sessionId: T,
                checkpoint: m.a.SHOP_RENDERED,
                tab: k,
                unpublishedCategoriesShown: B,
                cacheDisabled: L,
            });
    }, [T, B, L, n, k]);
    let W = l.useRef(null),
        { setQueryPageSize: V, setQueryPageOffset: U, queryPageSize: z } = (0, h.S)(),
        [G, K] = l.useState(!1),
        Y = n || Z || null == P;
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
    let J = l.useCallback(
            (e) => {
                u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == I ? void 0 : I.sessionId,
                    page_section: null == I ? void 0 : I.pageSection,
                    page_category: null == I ? void 0 : I.pageCategory,
                    page_index: e,
                    page_size: z,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    U((e - 1) * z);
            },
            [I, z, U],
        ),
        Q = g.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [j.productsEmpty]: q }),
                children: [
                    q && (0, r.jsx)(S.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(j.products, { [j.loadIn]: G }),
                        ref: W,
                        children: [
                            Y && [...Array(z)].map((e, t) => (Q ? (0, r.jsx)(x.Z, {}, t) : (0, r.jsx)(_.K, {}, t))),
                            !Y &&
                                F.map((e, t) => {
                                    let n = p.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: Q
                                                      ? (0, r.jsx)(
                                                            v.Z,
                                                            {
                                                                skuId: e.skuId,
                                                                onClickAnalytics: (0, E.wO)(e, k, I),
                                                            },
                                                            e.skuId,
                                                        )
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: P,
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
                        children: (0, r.jsx)(o.DsT, {
                            currentPage: N,
                            totalCount: R,
                            pageSize: z,
                            onPageChange: J,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
