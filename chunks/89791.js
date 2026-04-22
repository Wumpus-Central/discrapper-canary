n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(242564),
    r = n(250627),
    a = n(985018),
    o = n(21276);
let d = (0, s.IE)([
    (0, s.mP)({
        key: "LISTING_NAME",
        cellClassName: o.Qy,
        renderHeader: () => (0, i.jsx)(s.A3, { children: a.intl.string(a.t.OGpGqO) }),
        sort: (0, s.vc)((e) => e.listing.name.toLowerCase()),
    }),
    (0, s.b1)({
        key: "PAYMENTS_COUNT",
        cellClassName: o.bw,
        renderHeader: () => (0, i.jsx)(s.A3, { children: a.intl.string(a.t.vpHXJ0) }),
        getCount: (e) => e.paymentsCount,
        sort: (0, s.vc)((e) => e.paymentsCount ?? 0),
    }),
    (0, s.CU)({
        key: "PRICE",
        cellClassName: o.k1,
        renderHeader: () => (0, i.jsx)(s.A3, { children: a.intl.string(a.t.VodAGZ) }),
        getAmount(e) {
            let { listing: t } = e;
            return t.price_tier;
        },
        sort: (0, s.vc)((e) => e.listing.price_tier ?? 0),
    }),
]);
function c(e) {
    let { earningsData: t, guildId: n } = e,
        a = (0, r.fZ)(n, { publishedOnly: !1 }),
        o = t.currentPeriod,
        c = l.useMemo(
            () =>
                a
                    .map((e) => {
                        let t = o?.ppgs[e.id];
                        return { ...(t ?? {}), key: e.id, listing: e, paymentsCount: t?.purchase_count ?? 0 };
                    })
                    .filter((e) => e.listing.published || e.paymentsCount > 0),
            [a, o?.ppgs],
        );
    return null == a || 0 === a.length
        ? null
        : (0, i.jsx)(s.Ay, { columns: d, data: c, initialSortKey: "LISTING_NAME" });
}
