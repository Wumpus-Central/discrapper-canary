n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(755930),
    l = n(267101),
    a = n(388032),
    o = n(697495);
let c = (0, s.Yn)([
    (0, s.nn)({
        key: 'LISTING_NAME',
        cellClassName: o.listingNameColumn,
        renderHeader: () => (0, r.jsx)(s.qN, { children: a.NW.string(a.t.OGpGqK) }),
        sort: (0, s.Qg)((e) => e.listing.name.toLowerCase())
    }),
    (0, s.GW)({
        key: 'PAYMENTS_COUNT',
        cellClassName: o.paymentsCountColumn,
        renderHeader: () => (0, r.jsx)(s.qN, { children: a.NW.string(a.t.vpHXJy) }),
        getCount: (e) => e.paymentsCount,
        sort: (0, s.Qg)((e) => {
            var t;
            return null != (t = e.paymentsCount) ? t : 0;
        })
    }),
    (0, s.i$)({
        key: 'PRICE',
        cellClassName: o.priceColumn,
        renderHeader: () => (0, r.jsx)(s.qN, { children: a.NW.string(a.t.VodAGR) }),
        getAmount(e) {
            let { listing: t } = e;
            return t.price_tier;
        },
        sort: (0, s.Qg)((e) => {
            var t;
            return null != (t = e.listing.price_tier) ? t : 0;
        })
    })
]);
function d(e) {
    let { earningsData: t, guildId: n } = e,
        a = (0, l.ue)(n, { publishedOnly: !1 }),
        o = t.currentPeriod,
        d = i.useMemo(
            () =>
                a
                    .map((e) => {
                        var t, n, r;
                        let i = null == o ? void 0 : o.ppgs[e.id];
                        return (
                            (n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, null != i ? i : {})),
                            (r = r =
                                {
                                    key: e.id,
                                    listing: e,
                                    paymentsCount: null != (t = null == i ? void 0 : i.purchase_count) ? t : 0
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n
                        );
                    })
                    .filter((e) => e.listing.published || e.paymentsCount > 0),
            [a, null == o ? void 0 : o.ppgs]
        );
    return null == a || 0 === a.length
        ? null
        : (0, r.jsx)(s.ZP, {
              columns: c,
              data: d,
              initialSortKey: 'LISTING_NAME'
          });
}
