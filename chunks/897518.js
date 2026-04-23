n.d(t, { A: () => m });
var i = n(284009),
    l = n.n(i),
    a = n(417597),
    s = n(71393),
    r = n(250627),
    o = n(871109),
    d = n(935453),
    c = n(179499),
    u = n(985018);
function m(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: i } = e,
        m = (0, a.bG)([o.A], () => o.A.getGuildProduct(n)),
        _ = (0, a.bG)([s.A], () => s.A.getGuild(t), [t]),
        h = (0, c.A)({ guildId: t, productId: n });
    return (l()(null != _, "guild cannot be null"), l()(null != m, "guildProductListing cannot be null"), (0, r.BB)(_))
        ? { variant: "primary", text: u.intl.string(u.t.xUi3BL), disabled: !0 }
        : m.has_entitlement
          ? null != m.attachments
              ? h
              : { variant: "secondary", text: u.intl.string(u.t.RcTOGF), disabled: !0 }
          : {
                variant: "primary",
                text: u.intl.string(u.t.xUi3BL),
                onClick: () => (0, d.N)({ guildProductListing: m, guildId: _.id, sourceAnalyticsLocations: i }),
            };
}
