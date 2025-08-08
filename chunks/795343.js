n.d(t, { Z: () => S }), n(388685), n(35282);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    c = n(594174),
    u = n(626135),
    d = n(381585),
    p = n(597688),
    g = n(370039),
    f = n(501431),
    b = n(149705),
    h = n(303952),
    m = n(38900),
    _ = n(709999),
    v = n(81136),
    C = n(501638),
    O = n(981631),
    E = n(538314);
function S(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: a, scrollerRef: S, tab: y } = e,
        x = (0, d.sp)(),
        j = null != (t = null == x ? void 0 : x.sessionId) ? t : "",
        { noCache: T, includeUnpublished: P } = (0, v.Z)(),
        L = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        { skus: k, currentPage: I, totalCount: N, isFetchingResults: A } = (0, b.a)(),
        w = (0, o.Wu)([p.Z], () => p.Z.getProductsBySkus(k)),
        B = l.useCallback(() => {
            var e;
            null == S || null == (e = S.current) || e.scrollToTop({ animate: !0 });
        }, [S]),
        R = null == k ? void 0 : k.join("");
    l.useEffect(() => {
        B();
    }, [R, B]);
    let Z = (0, g.a)(),
        D = l.useMemo(() => Z(w), [Z, w]);
    l.useEffect(() => {
        n ||
            (0, h.n)({
                sessionId: j,
                checkpoint: h.a.SHOP_RENDERED,
                tab: y,
                isFullScreen: a,
                unpublishedCategoriesShown: P,
                cacheDisabled: T,
            });
    }, [j, a, P, T, n, y]);
    let F = l.useRef(null),
        { setQueryPageSize: M, setQueryPageOffset: H, queryPageSize: W } = (0, f.S)(),
        [V, U] = l.useState(!1),
        z = n || A || null == L;
    l.useEffect(() => {
        if (z) return void U(!1);
        D.length > 0 && U(!0);
    }, [z, D.length]);
    let G = W > 0 && !z && 0 === D.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != F.current && M(Math.floor(5 * getComputedStyle(F.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != F.current) return e.observe(F.current), () => e.disconnect();
    }, [M]);
    let q = l.useCallback(
        (e) => {
            u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == x ? void 0 : x.sessionId,
                page_section: null == x ? void 0 : x.pageSection,
                page_category: null == x ? void 0 : x.pageCategory,
                page_index: e,
                page_size: W,
                cta_name: "filter results page ".concat(e),
                page_type: "catalog",
            }),
                H((e - 1) * W);
        },
        [x, W, H],
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: i()({ [E.productsEmpty]: G }),
                children: [
                    G && (0, r.jsx)(C.Z, {}),
                    (0, r.jsxs)("div", {
                        className: i()(E.products, { [E.loadIn]: V }),
                        ref: F,
                        children: [
                            z && [...Array(W)].map((e, t) => (0, r.jsx)(m.K, {}, t)),
                            !z &&
                                D.map((e, t) => {
                                    let n = p.Z.getCategory(e.categorySkuId);
                                    return null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, r.jsx)(
                                                      _.Z,
                                                      {
                                                          product: e,
                                                          user: L,
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
            N > W &&
                (0, r.jsx)("div", {
                    className: E.paginationContainer,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(s.DsT, {
                            currentPage: I,
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
