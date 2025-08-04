n.d(t, { Z: () => b });
var r = n(430198),
    i = n(897345),
    a = n(697379),
    o = n(241559),
    s = n(819553),
    l = n(931261),
    c = n(994592),
    u = n(953252),
    d = n(911560),
    f = n(592125),
    _ = n(485386),
    p = n(430824),
    h = n(823379),
    m = n(754688),
    g = n(981631),
    E = n(176505);
async function b(e) {
    let { guildId: t, channelId: n } = e,
        b = p.Z.getGuild(t),
        y = _.Z.getUnsafeMutableRoles(t);
    if (null == b && t !== g.ME) return !1;
    if (null == n) return !0;
    if ((0, E.AB)(n))
        switch (n) {
            case E.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(t, y);
            case E.oC.GUILD_SHOP:
                return (0, i.r)(b, y);
            case E.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case E.oC.GUILD_HOME:
                return (0, l.s)(t);
            case E.oC.CHANNEL_BROWSER:
                return null != b && b.features.has(g.oNc.COMMUNITY);
            case E.oC.GUILD_ONBOARDING:
                return s.ZP.shouldShowOnboarding(t);
            case E.oC.CUSTOMIZE_COMMUNITY:
                return null != b && b.features.has(g.oNc.COMMUNITY);
            case E.oC.MEMBER_SAFETY:
                return (0, o.lv)(t);
            case E.oC.GUILD_BOOSTS:
                return !0;
            case E.oC.REPORT_TO_MOD:
                return null != b && (0, u.Z)(b);
            default:
                (0, h.vE)(n);
        }
    let O = f.Z.getChannel(n);
    return (null != O || (await d.Z.loadThread(n), null != (O = f.Z.getChannel(n)))) && ((0, m.YO)(O) || r.Z.isChannelGatedAndVisible(t, n));
}
