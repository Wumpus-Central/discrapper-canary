n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    l = n(473749),
    a = n(442837),
    s = n(481060),
    o = n(393903),
    i = n(448986),
    c = n(624968),
    u = n(381585),
    d = n(597688),
    f = n(763941),
    g = n(370039),
    b = n(937510),
    p = n(653126),
    m = n(786040),
    h = n(401975),
    C = n(934760),
    E = n(619899),
    v = n(215023),
    S = n(222194);
function _(e) {
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
        let { cardContainerRef: a, totalCards: c } = (() => {
            let [e, t] = l.useState(1),
                n = (0, s.dQu)(s.TVs.space.SPACE_XL),
                r = (0, i.Z)(() => {
                    (null == a ? void 0 : a.current) != null &&
                        t(Math.max(1, Math.floor((a.current.offsetWidth + n) / (246 + n))));
                }),
                a = (0, o.y)(r, [n], {
                    fireOnMount: !0,
                    fireOnDepsChange: !0,
                });
            return {
                cardContainerRef: l.useCallback(
                    (e) => {
                        (a.current = e), null != e && r();
                    },
                    [r, a],
                ),
                totalCards: e,
            };
        })();
        return (0, r.jsx)("div", {
            className: S.row,
            ref: a,
            children: (0, r.jsx)(
                k,
                ((t = _({}, e)),
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
            className: S.feed,
            children: (0, r.jsx)(k, _({}, e)),
        }),
    y = (e) =>
        (0, r.jsx)(c.Z, {
            gap: "xl",
            children: (0, r.jsx)(k, _({}, e)),
        }),
    k = (e) => {
        let { heroBlockRecord: t, isLoading: n, products: l, tab: a, totalCards: s } = e,
            o = (0, u.sp)(),
            i = (0, f.Pc)("HeroBlockCards") && t.categorySkuId === v.Hi,
            c = (0, f.IT)("HeroBlockCards");
        if (n)
            return (0, r.jsx)(r.Fragment, {
                children: [...Array(null != s ? s : 4)].map((e, t) => (0, r.jsx)(h.Z, {}, t)),
            });
        let g = null != s ? l.slice(0, s) : l;
        return (0, r.jsx)(m.zp.Provider, {
            value: {
                rentalDuration: i ? c : void 0,
                flattenProductVariants: i,
            },
            children: g.map((e, t) => {
                let n = d.Z.getCategoryForProduct(e.skuId);
                return null == e || null == n
                    ? null
                    : (0, r.jsx)(
                          u.k0,
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
                                      prioritizedCurrency: a === v.AW.ORBS ? m.tA.ORBS : void 0,
                                      onClickAnalytics: (0, m.wO)(e, a, o),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    T = (e) => {
        let { heroBlockRecord: t, layout: n, tab: s, isBlockLoading: o = !1 } = e,
            { products: i } = ((e, t) => {
                let n = (0, C.Z)(),
                    r = (0, a.e7)([d.Z], () => d.Z.products),
                    s = l.useMemo(() => (e ? [] : r.size > 0 ? n(t.rankedSkuIds) : []), [e, n, t.rankedSkuIds, r]),
                    o = (0, g.a)()(s),
                    i = (0, b.l)(o);
                return { products: (0, E.St)(i) };
            })(o, t),
            c = l.useMemo(
                () =>
                    !o &&
                    0 !== t.rankedSkuIds.length &&
                    !(i.length > 0) &&
                    t.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = d.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [o, t.rankedSkuIds, i.length],
            ),
            u = o || c;
        switch (n) {
            case "row":
                return (0, r.jsx)(x, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: i,
                    tab: s,
                });
            case "feed":
                return (0, r.jsx)(O, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: i,
                    tab: s,
                });
            case "hscroll":
                return (0, r.jsx)(y, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: i,
                    tab: s,
                });
        }
    };
