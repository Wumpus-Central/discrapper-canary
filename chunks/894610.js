n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    l = n(755930),
    s = n(267101),
    a = n(388032),
    o = n(377871);
let c = (0, l.Yn)([
    (0, l.nn)({
        key: 'LISTING_NAME',
        cellClassName: o.listingNameColumn,
        renderHeader: () => (0, i.jsx)(l.qN, { children: a.intl.string(a.t.OGpGqK) }),
        sort: (0, l.Qg)((e) => e.listing.name.toLowerCase())
    }),
    (0, l.GW)({
        key: 'PAYMENTS_COUNT',
        cellClassName: o.paymentsCountColumn,
        renderHeader: () => (0, i.jsx)(l.qN, { children: a.intl.string(a.t.vpHXJy) }),
        getCount: (e) => e.paymentsCount,
        sort: (0, l.Qg)((e) => {
            var t;
            return null !== (t = e.paymentsCount) && void 0 !== t ? t : 0;
        })
    }),
    (0, l.i$)({
        key: 'PRICE',
        cellClassName: o.priceColumn,
        renderHeader: () => (0, i.jsx)(l.qN, { children: a.intl.string(a.t.VodAGR) }),
        getAmount(e) {
            let { listing: t } = e;
            return t.price_tier;
        },
        sort: (0, l.Qg)((e) => {
            var t;
            return null !== (t = e.listing.price_tier) && void 0 !== t ? t : 0;
        })
    })
]);
function d(e) {
    let { earningsData: t, guildId: n } = e,
        a = (0, s.ue)(n, { publishedOnly: !1 }),
        o = t.currentPeriod,
        d = r.useMemo(
            () =>
                a
                    .map((e) => {
                        var t;
                        let n = null == o ? void 0 : o.ppgs[e.id];
                        return {
                            ...(null != n ? n : {}),
                            key: e.id,
                            listing: e,
                            paymentsCount: null !== (t = null == n ? void 0 : n.purchase_count) && void 0 !== t ? t : 0
                        };
                    })
                    .filter((e) => e.listing.published || e.paymentsCount > 0),
            [a, null == o ? void 0 : o.ppgs]
        );
    return null == a || 0 === a.length
        ? null
        : (0, i.jsx)(l.ZP, {
              columns: c,
              data: d,
              initialSortKey: 'LISTING_NAME'
          });
}
