"use strict";
s.d(t, { A: () => v });
var n = s(627968),
    r = s(64700),
    l = s(172218),
    a = s(417597),
    i = s(397927),
    o = s(287809),
    c = s(440938),
    d = s(511265),
    u = s(206077),
    g = s(100057),
    _ = s(903403),
    m = s(392183),
    h = s(751304),
    p = s(561769),
    f = s(159439),
    x = s(998694),
    E = s(940622),
    C = s(758836),
    A = s(157884);
function b(e) {
    let { category: t } = e,
        s = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, u.X)(t.products),
        l = (0, d.p)()(r),
        i = (0, E.od)(l),
        g = (0, c.uM)();
    return null == s || 0 === i.length
        ? null
        : (0, n.jsx)("div", {
              className: A.vY,
              children: i.map((e, t) =>
                  (0, n.jsx)(
                      c.R9,
                      {
                          newValue: { tilePosition: t },
                          children: (0, n.jsx)(
                              h.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, p.UU)(e, C.G2.CATALOG, g),
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
        [s, a] = r.useState(!1),
        i = (0, l.K)((e) => {
            a(e);
        }, 0.15);
    return (0, n.jsxs)("div", {
        className: A.EF,
        ref: i,
        children: [(0, n.jsx)(_.A, { category: t }), (0, n.jsx)(b, { category: t })],
    });
}
function v(e) {
    let { categories: t, setCategoryRef: s, currentPage: l, handlePageChange: a, initialCategoryId: o } = e,
        d = (0, c.uM)(),
        u = (0, f.U)(),
        _ = d?.sessionId ?? "",
        { noCache: h, includeUnpublished: p } = (0, x.A)(),
        E = r.useMemo(
            () =>
                t
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [t],
        ),
        b = r.useRef(void 0);
    r.useEffect(() => {
        if (null == o || 0 === E.length) {
            b.current = void 0;
            return;
        }
        if (o === b.current) return;
        let e = E.findIndex((e) => e.skuId === o);
        if (-1 === e) return;
        let t = Math.floor(e / C.l5) + 1;
        t !== l && a(t), (b.current = o);
    }, [o, E, a, l]);
    let v = r.useMemo(() => {
        let e = (l - 1) * C.l5;
        return E.slice(e, e + C.l5);
    }, [E, l]);
    return (r.useEffect(() => {
        (0, g.z)({
            sessionId: _,
            checkpoint: g.t.SHOP_MOUNTED,
            tab: C.G2.CATALOG,
            unpublishedCategoriesShown: p,
            cacheDisabled: h,
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
                cacheDisabled: h,
            });
    }, [_, p, h, u, v.length]),
    u)
        ? (0, n.jsx)(m.A, {})
        : (0, n.jsxs)("div", {
              className: A.LZ,
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
                      className: A.Ej,
                      children: (0, n.jsx)(i.mgR, {
                          currentPage: l,
                          totalCount: E.length,
                          pageSize: C.l5,
                          onPageChange: a,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
