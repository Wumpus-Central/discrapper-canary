n.d(t, {
    A: () => p,
});
var r = n(284009),
    i = n.n(r),
    l = n(417597),
    a = n(71393),
    s = n(250627),
    o = n(871109),
    c = n(935453),
    u = n(179499),
    d = n(985018);

function p(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: r } = e,
        p = (0, l.bG)([o.A], () => o.A.getGuildProduct(n)),
        m = (0, l.bG)([a.A], () => a.A.getGuild(t), [t]),
        f = (0, u.A)({
            guildId: t,
            productId: n,
        });
    return (i()(null != m, "guild cannot be null"), i()(null != p, "guildProductListing cannot be null"), (0, s.BB)(m))
        ? {
              variant: "primary",
              text: d.intl.string(d.t.xUi3BL),
              disabled: !0,
          }
        : p.has_entitlement
          ? null != p.attachments
              ? f
              : {
                    variant: "secondary",
                    text: d.intl.string(d.t.RcTOGF),
                    disabled: !0,
                }
          : {
                variant: "primary",
                text: d.intl.string(d.t.xUi3BL),
                onClick: () =>
                    (0, c.N)({
                        guildProductListing: p,
                        guildId: m.id,
                        sourceAnalyticsLocations: r,
                    }),
            };
}
