n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(481060),
    s = n(393903),
    i = n(448986),
    o = n(624968),
    c = n(381585),
    u = n(597688),
    d = n(763941),
    f = n(370039),
    g = n(155066),
    b = n(937510),
    p = n(653126),
    m = n(786040),
    h = n(401975),
    C = n(619899),
    E = n(215023),
    v = n(222194);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let x = (e) => {
        var t, n;
        let { cardContainerRef: o, totalCards: c } = (() => {
            let [e, t] = l.useState(1),
                n = (0, a.dQu)(a.TVs.space.SPACE_XL),
                r = (0, i.Z)(() => {
                    (null == o ? void 0 : o.current) != null &&
                        t(Math.max(1, Math.floor((o.current.offsetWidth + n) / (246 + n))));
                }),
                o = (0, s.y)(r, [n], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                cardContainerRef: l.useCallback(
                    (e) => {
                        (o.current = e), null != e && r();
                    },
                    [r, o],
                ),
                totalCards: e,
            };
        })();
        return (0, r.jsx)("div", {
            className: v.row,
            ref: o,
            children: (0, r.jsx)(
                y,
                ((t = S({}, e)),
                (n = n = { totalCards: c }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    },
    O = (e) =>
        (0, r.jsx)("div", {
            className: v.feed,
            children: (0, r.jsx)(y, S({}, e)),
        }),
    _ = (e) =>
        (0, r.jsx)(o.Z, {
            gap: "xl",
            children: (0, r.jsx)(y, S({}, e)),
        }),
    y = (e) => {
        let { heroBlockRecord: t, isLoading: n, products: l, tab: a, totalCards: s } = e,
            i = (0, c.sp)(),
            o = (0, d.Pc)("HeroBlockCards") && t.categorySkuId === E.Hi,
            f = (0, d.IT)("HeroBlockCards");
        if (n)
            return (0, r.jsx)(r.Fragment, {
                children: [...Array(null != s ? s : 4)].map((e, t) => (0, r.jsx)(h.Z, {}, t)),
            });
        let g = null != s ? l.slice(0, s) : l;
        return (0, r.jsx)(m.zp.Provider, {
            value: {
                rentalDuration: o ? f : void 0,
                flattenProductVariants: o,
            },
            children: g.map((e, t) => {
                let n = u.Z.getCategoryForProduct(e.skuId);
                return null == e || null == n
                    ? null
                    : (0, r.jsx)(
                          c.k0,
                          {
                              newValue: {
                                  tilePosition: t,
                                  pageSection: "top 4",
                                  categoryPosition: 0,
                              },
                              children: (0, r.jsx)(
                                  p.Z,
                                  {
                                      skuId: null == e ? void 0 : e.skuId,
                                      prioritizedCurrency: a === E.AW.ORBS ? m.tA.ORBS : void 0,
                                      onClickAnalytics: (0, m.wO)(e, a, i),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    j = (e) => {
        let { heroBlockRecord: t, layout: n, tab: a, isBlockLoading: s = !1 } = e,
            { products: i } = ((e, t) => {
                let n = (0, g.Z)(),
                    r = l.useMemo(() => (e ? [] : n(t.rankedSkuIds)), [e, n, t.rankedSkuIds]),
                    a = (0, f.a)()(r),
                    s = (0, b.l)(a);
                return { products: (0, C.St)(s) };
            })(s, t),
            o = l.useMemo(
                () =>
                    !s &&
                    0 !== t.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    t.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = u.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [s, t.rankedSkuIds, i.length],
            ),
            c = s || o;
        switch (n) {
            case "row":
                return (0, r.jsx)(x, {
                    heroBlockRecord: t,
                    isLoading: c,
                    products: i,
                    tab: a,
                });
            case "feed":
                return (0, r.jsx)(O, {
                    heroBlockRecord: t,
                    isLoading: c,
                    products: i,
                    tab: a,
                });
            case "hscroll":
                return (0, r.jsx)(_, {
                    heroBlockRecord: t,
                    isLoading: c,
                    products: i,
                    tab: a,
                });
        }
    };
