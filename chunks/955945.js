var i = n(136857),
    r = n(158317),
    a = n(740286),
    s = n(652215);
n(758836);
var l = n(792996);
function o(e) {
    return (0, a.f$)(e, l.intl.string(l.t.fqJZ11));
}
n.d(
    t,
    {},
    {
        $9: function (e, t) {
            return null == e
                ? null
                : e.code === i.tG.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION
                  ? e.message
                  : e instanceof r.FY && null != t
                    ? o(t)
                    : e instanceof r.j2
                      ? l.intl.string(l.t["2BmwgV"])
                      : e.code === i.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
                        ? l.intl.string(l.t.keFvXM)
                        : e.code === i.tG.ALREADY_PURCHASED
                          ? l.intl.string(l.t.m371Mx)
                          : e.code === i.tG.BILLING_ORDER_NOT_SIGNABLE
                            ? l.intl.string(l.t.ZHgEG7)
                            : l.intl.string(l.t.fqJZ11);
        },
        O5: o,
        dR: function (e, t) {
            let n = t && null != e[s.lid.PREMIUM_TIER_2] ? e[s.lid.PREMIUM_TIER_2] : e[s.lid.DEFAULT];
            return (n?.countryPrices?.prices ?? []).find((e) => e.currency === s.Yri.DISCORD_ORB) ?? null;
        },
    },
);
