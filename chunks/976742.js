"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    l = s(64700),
    r = s(172218),
    a = s(417597),
    i = s(158142),
    o = s(287809),
    c = s(440938),
    d = s(940980),
    u = s(511265),
    g = s(206077),
    h = s(100057),
    _ = s(903403),
    m = s(392183),
    p = s(751304),
    f = s(561769),
    E = s(159439),
    x = s(998694),
    A = s(758836),
    C = s(647685);
function S(e) {
    let { category: t } = e,
        s = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        l = (0, g.X)(t.products),
        r = (0, u.p)()(l),
        i = (0, d.W)("CollectiblesCatalogContent");
    return null == s || 0 === r.length
        ? null
        : (0, n.jsx)("div", {
              className: C.vY,
              children: r.map((e, t) =>
                  (0, n.jsx)(
                      c.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, n.jsx)(
                              p.A,
                              { skuId: e.skuId, skipLimitedTimeCheck: !0, prioritizedCurrency: i ? f.Hi.FIAT : void 0 },
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
        [s, a] = l.useState(!1),
        i = (0, r.K)((e) => {
            a(e);
        }, 0.15);
    return (0, n.jsxs)("div", {
        className: C.EF,
        ref: i,
        children: [(0, n.jsx)(_.A, { category: t }), (0, n.jsx)(S, { category: t })],
    });
}
function v(e) {
    let { categories: t, setCategoryRef: s, currentPage: r, handlePageChange: a, initialCategoryId: o } = e,
        d = (0, c.uM)(),
        u = (0, E.U)(),
        g = d?.sessionId ?? "",
        { noCache: _, includeUnpublished: p } = (0, x.A)(),
        f = l.useMemo(
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
        if (null == o || 0 === f.length) {
            S.current = void 0;
            return;
        }
        if (o === S.current) return;
        let e = f.findIndex((e) => e.skuId === o);
        if (-1 === e) return;
        let t = Math.floor(e / A.l5) + 1;
        t !== r && a(t), (S.current = o);
    }, [o, f, a, r]);
    let v = l.useMemo(() => {
        let e = (r - 1) * A.l5;
        return f.slice(e, e + A.l5);
    }, [f, r]);
    return (l.useEffect(() => {
        (0, h.z)({
            sessionId: g,
            checkpoint: h.t.SHOP_MOUNTED,
            tab: A.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: _,
        });
    }, []),
    l.useEffect(() => {
        u ||
            0 === v.length ||
            (0, h.z)({
                sessionId: g,
                checkpoint: h.t.SHOP_RENDERED,
                tab: A.G2.CATALOG,
                unpublishedCategoriesShown: p,
                cacheDisabled: _,
            });
    }, [g, p, _, u, v.length]),
    u)
        ? (0, n.jsx)(m.A, {})
        : (0, n.jsxs)("div", {
              className: C.LZ,
              children: [
                  v.map((e, t) =>
                      (0, n.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, n.jsx)(c.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, n.jsx)(b, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, n.jsx)("div", {
                      className: C.Ej,
                      children: (0, n.jsx)(i.m, {
                          currentPage: r,
                          totalCount: f.length,
                          pageSize: A.l5,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
