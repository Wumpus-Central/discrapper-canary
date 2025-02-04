n.d(t, { Z: () => E });
var i = n(430198),
    r = n(897345),
    a = n(697379),
    s = n(241559),
    o = n(819553),
    l = n(931261),
    u = n(994592),
    c = n(50101),
    d = n(911560),
    f = n(592125),
    _ = n(430824),
    p = n(823379),
    h = n(754688),
    m = n(981631),
    g = n(176505);
async function E(e) {
    let { guildId: t, channelId: n } = e,
        E = _.Z.getGuild(t),
        v = _.Z.getRoles(t);
    if (null == E && t !== m.ME) return !1;
    if (null == n) return !0;
    if ((0, g.AB)(n))
        switch (n) {
            case g.oC.ROLE_SUBSCRIPTIONS:
                return (0, u.on)(t, v);
            case g.oC.GUILD_SHOP:
                return (0, r.r)(E, v);
            case g.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case g.oC.GUILD_HOME:
                return (0, l.s)(t);
            case g.oC.CHANNEL_BROWSER:
                return null != E && E.hasFeature(m.oNc.COMMUNITY);
            case g.oC.GUILD_ONBOARDING:
                return o.ZP.shouldShowOnboarding(t);
            case g.oC.CUSTOMIZE_COMMUNITY:
                return null != E && E.hasFeature(m.oNc.COMMUNITY);
            case g.oC.MEMBER_SAFETY:
                return (0, s.lv)(t);
            case g.oC.GUILD_BOOSTS:
                return (0, c.gV)(E, 'isAccessibleChannelOrThread');
            default:
                (0, p.vE)(n);
        }
    let y = f.Z.getChannel(n);
    return (null != y || (await d.Z.loadThread(n), null != (y = f.Z.getChannel(n)))) && ((0, h.YO)(y) || i.Z.isChannelGatedAndVisible(t, n));
}
