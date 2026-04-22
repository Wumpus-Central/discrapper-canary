u.d(e, { openGuildProductLink: () => s });
var i = u(627968);
u(64700);
var d = u(192308),
    l = u(22007),
    n = u(71393),
    r = u(871109),
    c = u(652215);
function s(t, e) {
    let s = n.A.getGuild(t);
    r.A.getGuildProductFetchState(e) === r.e.FETCHED && r.A.getGuildProduct(e)?.published !== !0 && null != s
        ? (0, d.openModalLazy)(async () => {
              let { default: t } = await u.e("57968").then(u.bind(u, 558067));
              return (e) => (0, i.jsx)(t, { ...e });
          })
        : s?.features.has(c.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
          ? (0, l.A)(c.BVt.GUILD_PRODUCT(t, e))
          : (0, l.A)(c.BVt.CHANNEL(t));
}
