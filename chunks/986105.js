n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(481060),
    o = n(393903),
    a = n(448986),
    c = n(381585),
    u = n(597688),
    d = n(763941),
    g = n(370039),
    f = n(937510),
    p = n(653126),
    m = n(786040),
    C = n(401975),
    h = n(934760),
    _ = n(619899),
    b = n(215023),
    v = n(310582);
function E(e) {
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
let O = (e) => {
        var t, n;
        let { cardContainerRef: i, totalCards: c } = (() => {
            let [e, t] = l.useState(1),
                n = (0, s.dQu)(s.TVs.space.SPACE_XL),
                r = (0, a.Z)(() => {
                    (null == i ? void 0 : i.current) != null &&
                        t(Math.max(1, Math.floor((i.current.offsetWidth + n) / (246 + n))));
                }),
                i = (0, o.y)(r, [n], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                cardContainerRef: l.useCallback(
                    (e) => {
                        (i.current = e), null != e && r();
                    },
                    [r, i],
                ),
                totalCards: e,
            };
        })();
        return (0, r.jsx)("div", {
            className: v.row,
            ref: i,
            children: (0, r.jsx)(
                x,
                ((t = E({}, e)),
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
    S = (e) =>
        (0, r.jsx)("div", {
            className: v.feed,
            children: (0, r.jsx)(x, E({}, e)),
        }),
    x = (e) => {
        let { heroBlockRecord: t, isLoading: n, products: l, tab: i, totalCards: s } = e,
            o = (0, c.sp)(),
            a = (0, d.Pc)("HeroBlockCards") && t.categorySkuId === b.Hi,
            g = (0, d.IT)("HeroBlockCards");
        if (n)
            return (0, r.jsx)(r.Fragment, {
                children: [...Array(null != s ? s : 4)].map((e, t) => (0, r.jsx)(C.Z, {}, t)),
            });
        let f = null != s ? l.slice(0, s) : l;
        return (0, r.jsx)(m.zp.Provider, {
            value: { rentalDuration: a ? g : void 0 },
            children: f.map((e, t) => {
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
                                      prioritizedCurrency: i === b.AW.ORBS ? m.tA.ORBS : void 0,
                                      onClickAnalytics: (0, m.wO)(e, i, o),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    y = (e) => {
        let { heroBlockRecord: t, layout: n, tab: s, isBlockLoading: o = !1 } = e,
            { products: a } = ((e, t) => {
                let n = (0, h.Z)(),
                    r = (0, i.e7)([u.Z], () => u.Z.products),
                    s = l.useMemo(() => (e ? [] : r.size > 0 ? n(t.rankedSkuIds) : []), [e, n, t.rankedSkuIds, r]),
                    o = (0, g.a)()(s),
                    a = (0, f.l)(o);
                return { products: (0, _.St)(a) };
            })(o, t),
            c = l.useMemo(
                () =>
                    !o &&
                    0 !== t.rankedSkuIds.length &&
                    !(a.length > 0) &&
                    t.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = u.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [o, t.rankedSkuIds, a.length],
            ),
            d = o || c;
        return "row" === n
            ? (0, r.jsx)(O, {
                  heroBlockRecord: t,
                  isLoading: d,
                  products: a,
                  tab: s,
              })
            : (0, r.jsx)(S, {
                  heroBlockRecord: t,
                  isLoading: d,
                  products: a,
                  tab: s,
              });
    };
