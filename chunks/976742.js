"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(172218),
    i = s(417597),
    a = s(397927),
    o = s(287809),
    c = s(440938),
    d = s(940980),
    u = s(511265),
    _ = s(206077),
    g = s(100057),
    m = s(903403),
    h = s(392183),
    p = s(751304),
    f = s(561769),
    x = s(159439),
    E = s(998694),
    C = s(758836),
    b = s(157884);
function A(e) {
    let { category: t } = e,
        s = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, _.X)(t.products),
        l = (0, u.p)()(r),
        a = (0, d.W)("CollectiblesCatalogContent"),
        g = (0, c.uM)();
    return null == s || 0 === l.length
        ? null
        : (0, n.jsx)("div", {
              className: b.vY,
              children: l.map((e, t) =>
                  (0, n.jsx)(
                      c.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, n.jsx)(
                              p.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: a ? f.Hi.FIAT : void 0,
                                  onClickAnalytics: (0, f.UU)(e, C.G2.CATALOG, g),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}
function S(e) {
    let { category: t } = e,
        [s, i] = r.useState(!1),
        a = (0, l.K)((e) => {
            i(e);
        }, 0.15);
    return (0, n.jsxs)("div", {
        className: b.EF,
        ref: a,
        children: [(0, n.jsx)(m.A, { category: t }), (0, n.jsx)(A, { category: t })],
    });
}
function v(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: i, initialCategoryId: o } = e,
        d = (0, c.uM)(),
        u = (0, x.U)(),
        _ = d?.sessionId ?? "",
        { noCache: m, includeUnpublished: p } = (0, E.A)(),
        f = r.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        A = r.useRef(void 0);
    r.useEffect(() => {
        if (null == o || 0 === f.length) {
            A.current = void 0;
            return;
        }
        if (o === A.current) return;
        let e = f.findIndex((e) => e.skuId === o);
        if (-1 === e) return;
        let t = Math.floor(e / C.l5) + 1;
        t !== l && i(t), (A.current = o);
    }, [o, f, i, l]);
    let v = r.useMemo(() => {
        let e = (l - 1) * C.l5;
        return f.slice(e, e + C.l5);
    }, [f, l]);
    return (r.useEffect(() => {
        (0, g.z)({
            sessionId: _,
            checkpoint: g.t.SHOP_MOUNTED,
            tab: C.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: m,
        });
    }, []),
    r.useEffect(() => {
        u ||
            0 === v.length ||
            (0, g.z)({
                sessionId: _,
                checkpoint: g.t.SHOP_RENDERED,
                tab: C.G2.CATALOG,
                unpublishedCategoriesShown: p,
                cacheDisabled: m,
            });
    }, [_, p, m, u, v.length]),
    u)
        ? (0, n.jsx)(h.A, {})
        : (0, n.jsxs)("div", {
              className: b.LZ,
              children: [
                  v.map((e, t) =>
                      (0, n.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, n.jsx)(c.R9, {
                                  newValue: { categoryPosition: t },
                                  children: (0, n.jsx)(S, { category: e }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, n.jsx)("div", {
                      className: b.Ej,
                      children: (0, n.jsx)(a.mgR, {
                          currentPage: l,
                          totalCount: f.length,
                          pageSize: C.l5,
                          onPageChange: i,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
