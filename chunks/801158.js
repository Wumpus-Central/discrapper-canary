n.d(r, { A: () => c });
var t = n(17928),
    a = n(561573),
    i = n(117218),
    l = n(871123),
    o = n(832163),
    d = n(681064),
    u = n(652215),
    s = n(818348);
function c(e) {
    let { applicationId: r, location: n } = e,
        c = (0, d.R)({ location: n }),
        f = (0, t.bG)([o.A], () => (null != r ? o.A.getStorefrontDataForApplicationId(r) : void 0)),
        b = (0, t.bG)([a.A], () => {
            if (!c || Date.now() > d.V.getTime()) return !1;
            let e = f?.storefront != null ? (0, l.jd)(f.storefront) : [];
            if (0 === e.length) return !1;
            let r = e[0],
                n = a.A.getPricesForSkuId(r),
                t = (0, i.rW)(u.lid.DEFAULT);
            return n?.[t]?.userPrice?.find((e) => e.currency === s.Yr.DISCORD_ORB) != null;
        }, [c, f]);
    return c && b;
}
