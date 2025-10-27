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
        _ = (0, a.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        p = (0, u.Z)({
            guildId: t,
            productId: n,
        });
    if ((i()(null != _, "guild cannot be null"), i()(null != f, "guildProductListing cannot be null"), (0, s.SO)(_)))
        return {
            variant: "primary",
            text: d.intl.string(d.t.xUi3BL),
            disabled: !0,
        };
    if (f.has_entitlement)
        return null != f.attachments
            ? p
            : {
                  variant: "secondary",
                  text: d.intl.string(d.t.RcTOGF),
                  disabled: !0,
              };
    {
        let e = () =>
            (0, c.z)({
                guildProductListing: f,
                guildId: _.id,
                sourceAnalyticsLocations: r,
            });
        return {
            variant: "primary",
            text: d.intl.string(d.t.xUi3BL),
            onClick: e,
        };
    }
}
