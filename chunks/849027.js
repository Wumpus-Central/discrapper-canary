n.d(t, { Z: () => g });
var i = n(430198),
    r = n(897345),
    a = n(697379),
    s = n(241559),
    o = n(819553),
    l = n(931261),
    u = n(994592),
    c = n(911560),
    d = n(592125),
    f = n(430824),
    _ = n(823379),
    p = n(754688),
    h = n(981631),
    m = n(176505);
async function g(e) {
    let { guildId: t, channelId: n } = e,
        g = f.Z.getGuild(t),
        E = f.Z.getRoles(t);
    if (null == g && t !== h.ME) return !1;
    if (null == n) return !0;
    if ((0, m.AB)(n))
        switch (n) {
            case m.oC.ROLE_SUBSCRIPTIONS:
                return (0, u.on)(t, E);
            case m.oC.GUILD_SHOP:
                return (0, r.r)(g, E);
            case m.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case m.oC.GUILD_HOME:
                return (0, l.s)(t);
            case m.oC.CHANNEL_BROWSER:
                return null != g && g.hasFeature(h.oNc.COMMUNITY);
            case m.oC.GUILD_ONBOARDING:
                return o.ZP.shouldShowOnboarding(t);
            case m.oC.CUSTOMIZE_COMMUNITY:
                return null != g && g.hasFeature(h.oNc.COMMUNITY);
            case m.oC.MEMBER_SAFETY:
                return (0, s.lv)(t);
            default:
                (0, _.vE)(n);
        }
    let v = d.Z.getChannel(n);
    return (null != v || (await c.Z.loadThread(n), null != (v = d.Z.getChannel(n)))) && ((0, p.YO)(v) || i.Z.isChannelGatedAndVisible(t, n));
}
