u.d(e, { openGuildProductLink: () => r });
var d = u(627968);
u(64700);
var a = u(192308),
    i = u(741231),
    s = u(71393),
    l = u(871109),
    n = u(652215);
function r(t, e) {
    let r = s.A.getGuild(t);
    l.A.getGuildProductFetchState(e) === l.e.FETCHED && l.A.getGuildProduct(e)?.published !== !0 && null != r
        ? (0, a.openModalLazy)(async () => {
              let { default: t } = await u.e("57968").then(u.bind(u, 558067));
              return (e) => (0, d.jsx)(t, { ...e });
          })
        : r?.features.has(n.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
          ? (0, i.A)(n.BVt.GUILD_PRODUCT(t, e))
          : (0, i.A)(n.BVt.CHANNEL(t));
}
