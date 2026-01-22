l.d(t, {
    A: () => O,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(172218),
    a = l(417597),
    i = l(397927),
    o = l(287809),
    c = l(440938),
    u = l(511265),
    d = l(206077),
    f = l(100057),
    b = l(903403),
    g = l(392183),
    p = l(751304),
    m = l(561769),
    h = l(159439),
    E = l(998694),
    v = l(940622),
    A = l(758836),
    x = l(157884);

function S(e) {
    let { category: t } = e,
        l = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        r = (0, d.X)(t.products),
        s = (0, u.p)()(r),
        i = (0, v.od)(s),
        f = (0, c.uM)();
    return null == l || 0 === i.length
        ? null
        : (0, n.jsx)("div", {
              className: x.vY,
              children: i.map((e, t) =>
                  (0, n.jsx)(
                      c.R9,
                      {
                          newValue: {
                              tilePosition: t,
                          },
                          children: (0, n.jsx)(
                              p.A,
                              {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  onClickAnalytics: (0, m.UU)(e, A.G2.CATALOG, f),
                              },
                              e.skuId,
                          ),
                      },
                      e.skuId,
                  ),
              ),
          });
}

function C(e) {
    let { category: t } = e,
        [l, a] = r.useState(!1),
        i = (0, s.K)((e) => {
            a(e);
        }, 0.15);
    return (0, n.jsxs)("div", {
        className: x.EF,
        ref: i,
        children: [
            (0, n.jsx)(b.A, {
                category: t,
            }),
            (0, n.jsx)(S, {
                category: t,
            }),
        ],
    });
}

function O(e) {
    var t;
    let { sortedCategories: l, setCategoryRef: s, currentPage: a, handlePageChange: o, initialCategoryId: u } = e,
        d = (0, c.uM)(),
        b = (0, h.U)(),
        p = null != (t = null == d ? void 0 : d.sessionId) ? t : "",
        { noCache: m, includeUnpublished: v } = (0, E.A)(),
        S = r.useMemo(
            () =>
                l
                    .filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
                    .filter((e) => {
                        let { products: t } = e;
                        return t.length > 0;
                    }),
            [l],
        ),
        O = r.useRef(void 0);
    r.useEffect(() => {
        if (null == u || 0 === S.length) {
            O.current = void 0;
            return;
        }
        if (u === O.current) return;
        let e = S.findIndex((e) => e.skuId === u);
        if (-1 === e) return;
        let t = Math.floor(e / A.l5) + 1;
        t !== a && o(t), (O.current = u);
    }, [u, S, o, a]);
    let _ = r.useMemo(() => {
        let e = (a - 1) * A.l5;
        return S.slice(e, e + A.l5);
    }, [S, a]);
    return (r.useEffect(() => {
        (0, f.z)({
            sessionId: p,
            checkpoint: f.t.SHOP_MOUNTED,
            tab: A.G2.CATALOG,
            unpublishedCategoriesShown: v,
            cacheDisabled: m,
        });
    }, []),
    r.useEffect(() => {
        b ||
            0 === _.length ||
            (0, f.z)({
                sessionId: p,
                checkpoint: f.t.SHOP_RENDERED,
                tab: A.G2.CATALOG,
                unpublishedCategoriesShown: v,
                cacheDisabled: m,
            });
    }, [p, v, m, b, _.length]),
    b)
        ? (0, n.jsx)(g.A, {})
        : (0, n.jsxs)("div", {
              className: x.LZ,
              children: [
                  _.map((e, t) =>
                      (0, n.jsx)(
                          "div",
                          {
                              ref: (t) => s(e.skuId, t),
                              children: (0, n.jsx)(c.R9, {
                                  newValue: {
                                      categoryPosition: t,
                                  },
                                  children: (0, n.jsx)(C, {
                                      category: e,
                                  }),
                              }),
                          },
                          e.skuId,
                      ),
                  ),
                  (0, n.jsx)("div", {
                      className: x.Ej,
                      children: (0, n.jsx)(i.mgR, {
                          currentPage: a,
                          totalCount: S.length,
                          pageSize: A.l5,
                          onPageChange: o,
                          disablePaginationGap: !0,
                      }),
                  }),
              ],
          });
}
