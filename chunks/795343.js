n.d(t, { Z: () => v }), n(388685), n(35282);
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
    p = n(370039),
    f = n(501431),
    m = n(149705),
    _ = n(303952),
    h = n(38900),
    b = n(709999),
    C = n(81136),
    E = n(440617),
    S = n(981631),
    O = n(891131);
function v(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: a, scrollerRef: v, tab: x } = e,
        y = (0, d.sp)(),
        T = null != (t = null == y ? void 0 : y.sessionId) ? t : "",
        { noCache: L, includeUnpublished: j } = (0, C.Z)(),
        k = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: I, currentPage: B, totalCount: N, isFetchingResults: P } = (0, m.a)(),
        A = (0, i.Wu)([g.Z], () => g.Z.getProductsBySkus(I)),
        R = l.useCallback(() => {
            var e;
            null == v || null == (e = v.current) || e.scrollToTop({ animate: !0 });
        }, [v]),
        Z = null == I ? void 0 : I.join("");
    l.useEffect(() => {
        R();
    }, [Z, R]);
    let w = (0, p.a)(),
        F = l.useMemo(() => w(A), [w, A]);
    l.useEffect(() => {
        n ||
            (0, _.n)({
                sessionId: T,
                checkpoint: _.a.SHOP_RENDERED,
                tab: x,
                isFullScreen: a,
                unpublishedCategoriesShown: j,
                cacheDisabled: L,
            });
    }, [T, a, j, L, n, x]);
    let D = l.useRef(null),
        { setQueryPageSize: M, setQueryPageOffset: H, queryPageSize: W } = (0, f.S)(),
        [U, V] = l.useState(!1),
        z = n || P || null == k;
    l.useEffect(() => {
        if (z) return void V(!1);
        F.length > 0 && V(!0);
    }, [z, F.length]);
    let G = W > 0 && !z && 0 === F.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != D.current && M(Math.floor(5 * getComputedStyle(D.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != D.current) return e.observe(D.current), () => e.disconnect();
    }, [M]);
    let q = l.useCallback(
        (e) => {
            u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                page_section: null == y ? void 0 : y.pageSection,
                page_category: null == y ? void 0 : y.pageCategory,
                page_index: e,
                page_size: W,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                H((e - 1) * W);
        },
        [y, W, H],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()({ [O.productsEmpty]: G }),
                children: [
                    G && (0, r.jsx)(E.Z, {}),
                    (0, r.jsxs)("div", {
                        className: s()(O.products, { [O.loadIn]: U }),
                        ref: D,
                        children: [
                            z && [...Array(W)].map((e, t) => (0, r.jsx)(h.K, {}, t)),
                            !z &&
                                F.map((e, t) => {
                                    let n = g.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, r.jsx)(
                                                      b.Z,
                                                      {
                                                          product: e,
                                                          user: k,
                                                          category: n,
                                                          tab: x,
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
            N > W &&
                (0, r.jsx)("div", {
                    className: O.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(o.DsT, {
                            currentPage: B,
                            totalCount: N,
                            pageSize: W,
                            onPageChange: q,
                            disablePaginationGap: !0,
                        }),
                    }),
                }),
        ],
    });
}
