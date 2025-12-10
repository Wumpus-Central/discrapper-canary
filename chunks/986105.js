n.d(t, { Z: () => k }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    o = n(481060),
    s = n(393903),
    a = n(448986),
    c = n(624968),
    u = n(381585),
    d = n(597688),
    g = n(763941),
    f = n(370039),
    p = n(937510),
    m = n(653126),
    h = n(786040),
    C = n(401975),
    _ = n(934760),
    b = n(619899),
    v = n(215023),
    E = n(310582);
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
let O = (e) => {
        var t, n;
        let { cardContainerRef: i, totalCards: c } = (() => {
            let [e, t] = l.useState(1),
                n = (0, o.dQu)(o.TVs.space.SPACE_XL),
                r = (0, a.Z)(() => {
                    (null == i ? void 0 : i.current) != null &&
                        t(Math.max(1, Math.floor((i.current.offsetWidth + n) / (246 + n))));
                }),
                i = (0, s.y)(r, [n], {
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
            className: E.row,
            ref: i,
            children: (0, r.jsx)(
                j,
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
    x = (e) =>
        (0, r.jsx)("div", {
            className: E.feed,
            children: (0, r.jsx)(j, S({}, e)),
        }),
    y = (e) =>
        (0, r.jsx)(c.Z, {
            gap: "xl",
            children: (0, r.jsx)(j, S({}, e)),
        }),
    j = (e) => {
        let { heroBlockRecord: t, isLoading: n, products: l, tab: i, totalCards: o } = e,
            s = (0, u.sp)(),
            a = (0, g.Pc)("HeroBlockCards") && t.categorySkuId === v.Hi,
            c = (0, g.IT)("HeroBlockCards");
        if (n)
            return (0, r.jsx)(r.Fragment, {
                children: [...Array(null != o ? o : 4)].map((e, t) => (0, r.jsx)(C.Z, {}, t)),
            });
        let f = null != o ? l.slice(0, o) : l;
        return (0, r.jsx)(h.zp.Provider, {
            value: { rentalDuration: a ? c : void 0 },
            children: f.map((e, t) => {
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
                                  m.Z,
                                  {
                                      skuId: null == e ? void 0 : e.skuId,
                                      prioritizedCurrency: i === v.AW.ORBS ? h.tA.ORBS : void 0,
                                      onClickAnalytics: (0, h.wO)(e, i, s),
                                  },
                                  e.skuId,
                              ),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    k = (e) => {
        let { heroBlockRecord: t, layout: n, tab: o, isBlockLoading: s = !1 } = e,
            { products: a } = ((e, t) => {
                let n = (0, _.Z)(),
                    r = (0, i.e7)([d.Z], () => d.Z.products),
                    o = l.useMemo(() => (e ? [] : r.size > 0 ? n(t.rankedSkuIds) : []), [e, n, t.rankedSkuIds, r]),
                    s = (0, f.a)()(o),
                    a = (0, p.l)(s);
                return { products: (0, b.St)(a) };
            })(s, t),
            c = l.useMemo(
                () =>
                    !s &&
                    0 !== t.rankedSkuIds.length &&
                    !(a.length > 0) &&
                    t.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = d.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [s, t.rankedSkuIds, a.length],
            ),
            u = s || c;
        switch (n) {
            case "row":
                return (0, r.jsx)(O, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: a,
                    tab: o,
                });
            case "feed":
                return (0, r.jsx)(x, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: a,
                    tab: o,
                });
            case "hscroll":
                return (0, r.jsx)(y, {
                    heroBlockRecord: t,
                    isLoading: u,
                    products: a,
                    tab: o,
                });
        }
    };
