var d = u(477900);
u(582128);
var i = u(192308),
    a = u(362280),
    s = u(71393),
    r = u(871109),
    c = u(652215);
u.d(
    e,
    {},
    {
        openGuildProductLink: function (t, e) {
            let l = s.A.getGuild(t);
            r.A.getGuildProductFetchState(e) === r.e.FETCHED && r.A.getGuildProduct(e)?.published !== !0 && null != l
                ? (0, i.mM)(async () => {
                      let { default: t } = await u.e(257968).then(u.bind(u, 558067));
                      return (e) => (0, d.jsx)(t, { ...e });
                  })
                : l?.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                  ? (0, a.A)(c.BVt.GUILD_PRODUCT(t, e))
                  : (0, a.A)(c.BVt.CHANNEL(t));
        },
    },
);
