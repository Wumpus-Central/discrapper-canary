r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(430198),
    a = r(897345),
    o = r(697379),
    s = r(241559),
    l = r(819553),
    u = r(931261),
    c = r(994592),
    d = r(911560),
    f = r(592125),
    p = r(430824),
    h = r(823379),
    _ = r(754688),
    m = r(981631),
    g = r(176505);
async function E(e) {
    let { guildId: n, channelId: r } = e,
        E = p.Z.getGuild(n),
        v = p.Z.getRoles(n);
    if (null == E && n !== m.ME) return !1;
    if (null == r) return !0;
    if ((0, g.AB)(r))
        switch (r) {
            case g.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(n, v);
            case g.oC.GUILD_SHOP:
                return (0, a.r)(E, v);
            case g.oC.MEMBER_APPLICATIONS:
                return (0, o.v)(n);
            case g.oC.GUILD_HOME:
                return (0, u.s)(n);
            case g.oC.CHANNEL_BROWSER:
                return null != E && E.hasFeature(m.oNc.COMMUNITY);
            case g.oC.GUILD_ONBOARDING:
                return l.ZP.shouldShowOnboarding(n);
            case g.oC.CUSTOMIZE_COMMUNITY:
                return null != E && E.hasFeature(m.oNc.COMMUNITY);
            case g.oC.MEMBER_SAFETY:
                return (0, s.lv)(n);
            default:
                (0, h.vE)(r);
        }
    let y = f.Z.getChannel(r);
    return (null != y || (await d.Z.loadThread(r), null != (y = f.Z.getChannel(r)))) && ((0, _.YO)(y) || i.Z.isChannelGatedAndVisible(n, r));
}
