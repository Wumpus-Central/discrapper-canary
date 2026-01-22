n.d(t, {
    A: () => f,
});
var r = n(284009),
    i = n.n(r),
    a = n(417597),
    s = n(71393),
    o = n(250627),
    l = n(871109),
    c = n(935453),
    u = n(179499),
    d = n(985018);

function f(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: r } = e,
        f = (0, a.bG)([l.A], () => l.A.getGuildProduct(n)),
        p = (0, a.bG)([s.A], () => s.A.getGuild(t), [t]),
        _ = (0, u.A)({
            guildId: t,
            productId: n,
        });
    if ((i()(null != p, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, o.BB)(p)))
        return {
            variant: "primary",
            text: d.intl.string(d.t.xUi3BL),
            disabled: !0,
        };
    if (f.has_entitlement)
        return null != f.attachments
            ? _
            : {
                  variant: "secondary",
                  text: d.intl.string(d.t.RcTOGF),
                  disabled: !0,
              };
    {
        let e = () =>
            (0, c.N)({
                guildProductListing: f,
                guildId: p.id,
                sourceAnalyticsLocations: r,
            });
        return {
            variant: "primary",
            text: d.intl.string(d.t.xUi3BL),
            onClick: e,
        };
    }
}
