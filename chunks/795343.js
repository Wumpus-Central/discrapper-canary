n.d(t, { Z: () => T }), n(388685), n(35282);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(128922),
    f = n(370039),
    h = n(501431),
    C = n(149705),
    _ = n(303952),
    m = n(38900),
    b = n(709999),
    E = n(653126),
    S = n(81136),
    v = n(440617),
    x = n(981631),
    O = n(891131);
function T(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: i, scrollerRef: T, tab: y } = e,
        L = (0, d.sp)(),
        j = null != (t = null == L ? void 0 : L.sessionId) ? t : "",
        { noCache: k, includeUnpublished: I } = (0, S.Z)(),
        P = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: N, currentPage: A, totalCount: B, isFetchingResults: R } = (0, C.a)(),
        Z = (0, s.Wu)([g.Z], () => g.Z.getProductsBySkus(N)),
        w = l.useCallback(() => {
            var e;
            null == T || null == (e = T.current) || e.scrollToTop({ animate: !0 });
        }, [T]),
        F = null == N ? void 0 : N.join("");
    l.useEffect(() => {
        w();
    }, [F, w]);
    let M = (0, f.a)(),
        H = l.useMemo(() => M(Z), [M, Z]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: j,
                checkpoint: _.a.SHOP_RENDERED,
                tab: y,
                isFullScreen: i,
                unpublishedCategoriesShown: I,
                cacheDisabled: k,
            });
    }, [j, i, I, k, n, y]);
    let D = l.useRef(null),
        { setQueryPageSize: W, setQueryPageOffset: U, queryPageSize: V } = (0, h.S)(),
        [z, G] = l.useState(!1),
        q = n || R || null == P;
    l.useEffect(() => {
        if (q) return void G(!1);
        H.length > 0 && G(!0);
    }, [q, H.length]);
    let K = V > 0 && !q && 0 === H.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != D.current && W(Math.floor(5 * getComputedStyle(D.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != D.current) return e.observe(D.current), () => e.disconnect();
    }, [W]);
    let Y = l.useCallback(
            (e) => {
                u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: null == L ? void 0 : L.sessionId,
                    page_section: null == L ? void 0 : L.pageSection,
                    page_category: null == L ? void 0 : L.pageCategory,
                    page_index: e,
                    page_size: V,
                    cta_name: "filter results page ".concat(e),
                    page_type: "catalog",
                }),
                    U((e - 1) * V);
            },
            [L, V, U],
        ),
        X = p.Z.useConfig({ location: "CollectiblesFilterableShop" }).showCardsV2;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: a()({ [O.productsEmpty]: K }),
                children: [
                    K && (0, r.jsx)(v.Z, {}),
                    (0, r.jsxs)("div", {
                        className: a()(O.products, { [O.loadIn]: z }),
                        ref: D,
                        children: [
                            q && [...Array(V)].map((e, t) => (0, r.jsx)(m.K, {}, t)),
                            !q &&
                                H.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: X
                                                      ? (0, r.jsx)(E.Z, { skuId: e.skuId }, e.skuId)
                                                      : (0, r.jsx)(
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                user: P,
                                                                category: n,
                                                                tab: y,
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
            B > V &&
                (0, r.jsx)("div", {
                    className: O.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(o.DsT, {
                            currentPage: A,
                            totalCount: B,
                            pageSize: V,
                            onPageChange: Y,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
