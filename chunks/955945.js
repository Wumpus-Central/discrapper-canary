var i = n(136857),
    r = n(158317),
    a = n(652215);
n(758836);
var s = n(679677),
    l = n(792996);
n.d(
    t,
    {},
    {
        $9: function (e, t) {
            if (null == e) return null;
            if (e instanceof r.FY && null != t)
                switch (t) {
                    case s.j.INSUFFICIENT_ORB_BALANCE:
                        return l.intl.string(l.t.keFvXM);
                    case s.j.SKU_ALREADY_OWNED:
                        return l.intl.string(l.t.m371Mx);
                    case s.j.BUNDLE_PARTIALLY_OWNED:
                        return l.intl.string(l.t.v9oC0p);
                    default:
                        return l.intl.string(l.t.fqJZ11);
                }
            return e instanceof r.j2
                ? l.intl.string(l.t["2BmwgV"])
                : e.code === i.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                  ? l.intl.string(l.t.keFvXM)
                  : e.code === i.tG.ALREADY_PURCHASED
                    ? l.intl.string(l.t.m371Mx)
                    : e.code === i.tG.BILLING_ORDER_NOT_SIGNABLE
                      ? l.intl.string(l.t.ZHgEG7)
                      : l.intl.string(l.t.fqJZ11);
        },
        dR: function (e, t) {
            let n = t && null != e[a.lid.PREMIUM_TIER_2] ? e[a.lid.PREMIUM_TIER_2] : e[a.lid.DEFAULT];
            return (n?.countryPrices?.prices ?? []).find((e) => e.currency === a.Yri.DISCORD_ORB) ?? null;
        },
    },
);
