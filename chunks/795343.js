n.d(t, { Z: () => _ });
var r = n(255367),
    l = n(73800),
    o = n(399606),
    i = n(481060),
    a = n(594174),
    s = n(381585),
    c = n(597688),
    u = n(370039),
    d = n(501431),
    p = n(149705),
    g = n(303952),
    f = n(38900),
    h = n(709999),
    b = n(81136),
    m = n(484920);
function _(e) {
    var t;
    let { isFetchingCategories: n, isFullScreen: _, scrollerRef: C, tab: O } = e,
        E = (0, s.sp)(),
        v = null != (t = null == E ? void 0 : E.sessionId) ? t : '',
        { noCache: S, includeUnpublished: x } = (0, b.Z)(),
        y = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
        { skus: j, currentPage: T, totalCount: P, isFetchingResults: L } = (0, p.a)(),
        I = (0, o.Wu)([c.Z], () => c.Z.getProductsBySkus(j)),
        k = l.useCallback(() => {
            var e;
            null == C || null == (e = C.current) || e.scrollToTop({ animate: !0 });
        }, [C]),
        B = (0, u.a)(),
        N = l.useMemo(() => B(I), [B, I]);
    l.useEffect(() => {
        n ||
            (0, g.n)({
                sessionId: v,
                checkpoint: g.a.SHOP_RENDERED,
                tab: O,
                isFullScreen: _,
                unpublishedCategoriesShown: x,
                cacheDisabled: S
            });
    }, [v, _, x, S, n, O]);
    let A = l.useRef(null),
        { setQueryPageSize: R, setQueryPageOffset: w, queryPageSize: Z } = (0, d.S)();
    l.useEffect(() => {
        if (null != A.current) {
            let e = new ResizeObserver(() => {
                if (null == A.current) return;
                let { clientWidth: e } = A.current;
                R(Math.floor(5 * Math.max(1, Math.floor(e / 246))));
            });
            return (e.observe(A.current), () => e.disconnect());
        }
    }, [R]);
    let F = n || L || null == y;
    return (0, r.jsx)('div', {
        ref: A,
        children: F
            ? (0, r.jsx)(f.Z, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: m.products,
                          children: N.map((e, t) => {
                              let n = c.Z.getCategory(e.categorySkuId);
                              return null == n
                                  ? null
                                  : (0, r.jsx)(
                                        s.k0,
                                        {
                                            newValue: { tilePosition: t },
                                            children: (0, r.jsx)(
                                                h.Z,
                                                {
                                                    product: e,
                                                    user: y,
                                                    category: n,
                                                    tab: O
                                                },
                                                e.skuId
                                            )
                                        },
                                        e.skuId
                                    );
                          })
                      }),
                      P > Z &&
                          (0, r.jsx)('div', {
                              className: m.paginationContainer,
                              children: (0, r.jsx)('div', {
                                  children: (0, r.jsx)(i.DsT, {
                                      currentPage: T,
                                      totalCount: P,
                                      pageSize: Z,
                                      onPageChange: (e) => {
                                          (w((e - 1) * Z), k());
                                      },
                                      disablePaginationGap: !0
                                  })
                              })
                          })
                  ]
              })
    });
}
