r.d(t, { Z: () => S }), r(388685), r(35282);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(399606),
    s = r(481060),
    c = r(594174),
    u = r(626135),
    d = r(381585),
    p = r(597688),
    g = r(370039),
    f = r(501431),
    b = r(149705),
    h = r(303952),
    m = r(38900),
    _ = r(709999),
    v = r(81136),
    O = r(501638),
    C = r(981631),
    E = r(538314);
function S(e) {
    var t;
    let { isFetchingCategories: r, isFullScreen: a, scrollerRef: S, tab: y } = e,
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
        r ||
            (0, h.n)({
                sessionId: j,
                checkpoint: h.a.SHOP_RENDERED,
                tab: y,
                isFullScreen: a,
                unpublishedCategoriesShown: P,
                cacheDisabled: T,
            });
    }, [j, a, P, T, r, y]);
    let M = l.useRef(null),
        { setQueryPageSize: F, setQueryPageOffset: H, queryPageSize: W } = (0, f.S)(),
        [V, U] = l.useState(!1),
        z = r || A || null == L;
    l.useEffect(() => {
        if (z) return void U(!1);
        D.length > 0 && U(!0);
    }, [z, D.length]);
    let G = W > 0 && !z && 0 === D.length;
    l.useEffect(() => {
        let e = new ResizeObserver(() => {
            null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length));
        });
        if (null != M.current) return e.observe(M.current), () => e.disconnect();
    }, [F]);
    let q = l.useCallback(
        (e) => {
            u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: i()({ [E.productsEmpty]: G }),
                children: [
                    G && (0, n.jsx)(O.Z, {}),
                    (0, n.jsxs)("div", {
                        className: i()(E.products, { [E.loadIn]: V }),
                        ref: M,
                        children: [
                            z && [...Array(W)].map((e, t) => (0, n.jsx)(m.K, {}, t)),
                            !z &&
                                D.map((e, t) => {
                                    let r = p.Z.getCategory(e.categorySkuId);
                                    return null == r
                                        ? null
                                        : (0, n.jsx)(
                                              d.k0,
                                              {
                                                  newValue: { tilePosition: t },
                                                  children: (0, n.jsx)(
                                                      _.Z,
                                                      {
                                                          product: e,
                                                          user: L,
                                                          category: r,
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
                (0, n.jsx)("div", {
                    className: E.paginationContainer,
                    children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(s.DsT, {
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
