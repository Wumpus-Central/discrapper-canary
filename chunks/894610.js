n.d(t, {
    Z: function () {
        return m;
    }
});
var i,
    r,
    l = n(200651),
    s = n(192379),
    a = n(755930),
    o = n(267101),
    c = n(388032),
    d = n(377871);
((i = r || (r = {})).LISTING_NAME = 'LISTING_NAME'), (i.PAYMENTS_COUNT = 'PAYMENTS_COUNT'), (i.PRICE = 'PRICE');
let u = (0, a.Yn)([
    (0, a.nn)({
        key: 'LISTING_NAME',
        cellClassName: d.listingNameColumn,
        renderHeader: () => (0, l.jsx)(a.qN, { children: c.intl.string(c.t.OGpGqK) }),
        sort: (0, a.Qg)((e) => e.listing.name.toLowerCase())
    }),
    (0, a.GW)({
        key: 'PAYMENTS_COUNT',
        cellClassName: d.paymentsCountColumn,
        renderHeader: () => (0, l.jsx)(a.qN, { children: c.intl.string(c.t.vpHXJy) }),
        getCount: (e) => e.paymentsCount,
        sort: (0, a.Qg)((e) => {
            var t;
            return null !== (t = e.paymentsCount) && void 0 !== t ? t : 0;
        })
    }),
    (0, a.i$)({
        key: 'PRICE',
        cellClassName: d.priceColumn,
        renderHeader: () => (0, l.jsx)(a.qN, { children: c.intl.string(c.t.VodAGR) }),
        getAmount(e) {
            let { listing: t } = e;
            return t.price_tier;
        },
        sort: (0, a.Qg)((e) => {
            var t;
            return null !== (t = e.listing.price_tier) && void 0 !== t ? t : 0;
        })
    })
]);
function m(e) {
    let { earningsData: t, guildId: n } = e,
        i = (0, o.ue)(n, { publishedOnly: !1 }),
        r = t.currentPeriod,
        c = s.useMemo(
            () =>
                i
                    .map((e) => {
                        var t;
                        let n = null == r ? void 0 : r.ppgs[e.id];
                        return {
                            ...(null != n ? n : {}),
                            key: e.id,
                            listing: e,
                            paymentsCount: null !== (t = null == n ? void 0 : n.purchase_count) && void 0 !== t ? t : 0
                        };
                    })
                    .filter((e) => e.listing.published || e.paymentsCount > 0),
            [i, null == r ? void 0 : r.ppgs]
        );
    return null == i || 0 === i.length
        ? null
        : (0, l.jsx)(a.ZP, {
              columns: u,
              data: c,
              initialSortKey: 'LISTING_NAME'
          });
}
