"use strict";
n.d(t, { A: () => S });
var s = n(627968),
    l = n(64700),
    r = n(172218),
    a = n(417597),
    i = n(397927),
    o = n(287809),
    c = n(440938),
    d = n(511265),
    u = n(206077),
    g = n(100057),
    _ = n(903403),
    m = n(392183),
    h = n(751304),
    p = n(561769),
    f = n(159439),
    x = n(998694),
    E = n(758836),
    C = n(892766);
function A(e) {
    let { category: t } = e,
        n = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        l = (0, u.X)(t.products),
        r = (0, d.p)()(l),
        i = (0, c.uM)();
    return null == n || 0 === r.length
        ? null
        : (0, s.jsx)("div", {
              className: C.vY,
              children: r.map((e, t) =>
                  (0, s.jsx)(
                      c.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, s.jsx)(
                              h.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, p.UU)(e, E.G2.CATALOG, i),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function b(e) {
    let { category: t } = e,
        [n, a] = l.useState(!1),
        i = (0, r.K)((e) => {
            a(e);
        }, 0.15);
    return (0, s.jsxs)("div", {
        className: C.EF,
        ref: i,
        children: [(0, s.jsx)(_.A, { category: t }), (0, s.jsx)(A, { category: t })],
    });
}
function S(e) {
    let { categories: t, setCategoryRef: n, currentPage: r, handlePageChange: a, initialCategoryId: o } = e,
        d = (0, c.uM)(),
        u = (0, f.U)(),
        _ = d?.sessionId ?? "",
        { noCache: h, includeUnpublished: p } = (0, x.A)(),
        A = l.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        S = l.useRef(void 0);
    l.useEffect(() => {
        if (null == o || 0 === A.length) {
            S.current = void 0;
            return;
        }
        if (o === S.current) return;
        let e = A.findIndex((e) => e.skuId === o);
        if (-1 === e) return;
        let t = Math.floor(e / E.l5) + 1;
        t !== r && a(t), (S.current = o);
    }, [o, A, a, r]);
    let v = l.useMemo(() => {
        let e = (r - 1) * E.l5;
        return A.slice(e, e + E.l5);
    }, [A, r]);
    return (l.useEffect(() => {
        (0, g.z)({
            sessionId: _,
            checkpoint: g.t.SHOP_MOUNTED,
            tab: E.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: h,
        });
    }, []),
    l.useEffect(() => {
        u ||
            0 === v.length ||
            (0, g.z)({
                sessionId: _,
                checkpoint: g.t.SHOP_RENDERED,
                tab: E.G2.CATALOG,
                unpublishedCategoriesShown: p,
                cacheDisabled: h,
            });
    }, [_, p, h, u, v.length]),
    u)
        ? (0, s.jsx)(m.A, {})
        : (0, s.jsxs)("div", {
              className: C.LZ,
              children: [
                  v.map((e, t) =>
                      (0, s.jsx)(
                          "div",
                          {
                              ref: (t) => n(e.skuId, t),
                              children: (0, s.jsx)(c.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, s.jsx)(b, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, s.jsx)("div", {
                      className: C.Ej,
                      children: (0, s.jsx)(i.mgR, {
                          currentPage: r,
                          totalCount: A.length,
                          pageSize: E.l5,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
