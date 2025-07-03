n.d(t, { Z: () => y });
var r = n(430198),
    i = n(897345),
    a = n(697379),
    o = n(241559),
    s = n(819553),
    l = n(931261),
    c = n(994592),
    u = n(50101),
    d = n(953252),
    f = n(911560),
    _ = n(592125),
    p = n(485386),
    h = n(430824),
    m = n(823379),
    g = n(754688),
    E = n(981631),
    b = n(176505);
async function y(e) {
    let { guildId: t, channelId: n } = e,
        y = h.Z.getGuild(t),
        O = p.Z.getRoles(t);
    if (null == y && t !== E.ME) return !1;
    if (null == n) return !0;
    if ((0, b.AB)(n))
        switch (n) {
            case b.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(t, O);
            case b.oC.GUILD_SHOP:
                return (0, i.r)(y, O);
            case b.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case b.oC.GUILD_HOME:
                return (0, l.s)(t);
            case b.oC.CHANNEL_BROWSER:
                return null != y && y.features.has(E.oNc.COMMUNITY);
            case b.oC.GUILD_ONBOARDING:
                return s.ZP.shouldShowOnboarding(t);
            case b.oC.CUSTOMIZE_COMMUNITY:
                return null != y && y.features.has(E.oNc.COMMUNITY);
            case b.oC.MEMBER_SAFETY:
                return (0, o.lv)(t);
            case b.oC.GUILD_BOOSTS:
                return (0, u.gV)(t, 'isAccessibleChannelOrThread');
            case b.oC.REPORT_TO_MOD:
                return null != y && (0, d.Z)(y);
            default:
                (0, m.vE)(n);
        }
    let v = _.Z.getChannel(n);
    return (null != v || (await f.Z.loadThread(n), null != (v = _.Z.getChannel(n)))) && ((0, g.YO)(v) || r.Z.isChannelGatedAndVisible(t, n));
}
