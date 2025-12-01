n.d(t, { Z: () => f });
var r = n(512722),
    i = n.n(r),
    a = n(399606),
    o = n(430824),
    s = n(267101),
    l = n(240864),
    c = n(57949),
    u = n(298243),
    d = n(388032);
function f(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: r } = e,
        f = (0, a.e7)([l.Z], () => l.Z.getGuildProduct(n)),
        p = (0, a.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        _ = (0, u.Z)({
            guildId: t,
            productId: n,
        });
    if ((i()(null != p, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, s.SO)(p)))
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
            (0, c.z)({
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
