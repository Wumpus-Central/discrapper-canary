n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    l = n(242564),
    s = n(250627),
    a = n(985018),
    c = n(276539);
let o = (0, l.IE)([
    (0, l.mP)({
        key: "LISTING_NAME",
        cellClassName: c.Qy,
        renderHeader: () => (0, r.jsx)(l.A3, { children: a.intl.string(a.t.OGpGqO) }),
        sort: (0, l.vc)((e) => e.listing.name.toLowerCase()),
    }),
    (0, l.b1)({
        key: "PAYMENTS_COUNT",
        cellClassName: c.bw,
        renderHeader: () => (0, r.jsx)(l.A3, { children: a.intl.string(a.t.vpHXJ0) }),
        getCount: (e) => e.paymentsCount,
        sort: (0, l.vc)((e) => {
            var t;
            return null != (t = e.paymentsCount) ? t : 0;
        }),
    }),
    (0, l.CU)({
        key: "PRICE",
        cellClassName: c.k1,
        renderHeader: () => (0, r.jsx)(l.A3, { children: a.intl.string(a.t.VodAGZ) }),
        getAmount(e) {
            let { listing: t } = e;
            return t.price_tier;
        },
        sort: (0, l.vc)((e) => {
            var t;
            return null != (t = e.listing.price_tier) ? t : 0;
        }),
    }),
]);
function d(e) {
    let { earningsData: t, guildId: n } = e,
        a = (0, s.fZ)(n, { publishedOnly: !1 }),
        c = t.currentPeriod,
        d = i.useMemo(
            () =>
                a
                    .map((e) => {
                        var t, n, r;
                        let i = null == c ? void 0 : c.ppgs[e.id];
                        return (
                            (n = (function (e) {
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
                            })({}, null != i ? i : {})),
                            (r = r =
                                {
                                    key: e.id,
                                    listing: e,
                                    paymentsCount: null != (t = null == i ? void 0 : i.purchase_count) ? t : 0,
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
            [a, null == c ? void 0 : c.ppgs],
        );
    return null == a || 0 === a.length
        ? null
        : (0, r.jsx)(l.Ay, {
              columns: o,
              data: d,
              initialSortKey: "LISTING_NAME",
          });
}
