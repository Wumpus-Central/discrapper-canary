e.d(t, { A: () => d });
var n = e(17928),
    o = e(561573),
    i = e(117218),
    u = e(871123),
    l = e(832163),
    c = e(681064),
    s = e(652215),
    a = e(818348);
function d(r) {
    let { applicationId: t } = r,
        e = (0, c.R)({ location: "game_shop_channel_row" }),
        d = (0, n.bG)([l.A], () => (null != t ? l.A.getStorefrontDataForApplicationId(t) : void 0)),
        p = (0, n.bG)([o.A], () => {
            if (!e) return !1;
            let r = d?.storefront != null ? (0, u.jd)(d.storefront) : [];
            if (0 === r.length) return !1;
            let t = r[0],
                n = o.A.getPricesForSkuId(t),
                l = (0, i.rW)(s.lid.DEFAULT);
            return n?.[l]?.userPrice?.find((r) => r.currency === a.Yr.DISCORD_ORB) != null;
        }, [e, d]);
    return e && p;
}
