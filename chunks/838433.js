u.r(e), u.d(e, { openGuildProductLink: () => o });
var i = u(200651);
u(192379);
var l = u(481060),
    n = u(336197),
    d = u(430824),
    r = u(240864),
    c = u(981631);
function o(t, e) {
    var o;
    let a = d.Z.getGuild(t);
    r.Z.getGuildProductFetchState(e) === r.M.FETCHED && (null === (o = r.Z.getGuildProduct(e)) || void 0 === o ? void 0 : o.published) !== !0 && null != a
        ? (0, l.ZDy)(async () => {
              let { default: t } = await u.e('29396').then(u.bind(u, 513239));
              return (e) => (0, i.jsx)(t, { ...e });
          })
        : (null == a ? void 0 : a.hasFeature(c.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0
          ? (0, n.Z)(c.Z5c.GUILD_PRODUCT(t, e))
          : (0, n.Z)(c.Z5c.CHANNEL(t));
}
