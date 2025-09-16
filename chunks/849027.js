n.d(t, { Z: () => O });
var r = n(430198),
    i = n(897345),
    a = n(697379),
    o = n(241559),
    s = n(819553),
    l = n(931261),
    c = n(994592),
    u = n(653521),
    d = n(634952),
    f = n(953252),
    _ = n(911560),
    p = n(592125),
    h = n(485386),
    m = n(430824),
    g = n(823379),
    E = n(754688),
    b = n(981631),
    y = n(176505);
async function O(e) {
    let { guildId: t, channelId: n } = e,
        O = m.Z.getGuild(t),
        v = h.Z.getUnsafeMutableRoles(t);
    if (null == O && t !== b.ME) return !1;
    if (null == n) return !0;
    if ((0, y.AB)(n))
        switch (n) {
            case y.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(t, v);
            case y.oC.SERVER_MONETIZATION_ONBOARDING:
                return null != O && (0, u.U)(O);
            case y.oC.GUILD_SHOP:
                return (0, i.r)(O, v);
            case y.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case y.oC.GUILD_HOME:
                return (0, l.s)(t);
            case y.oC.CHANNEL_BROWSER:
                return null != O && O.features.has(b.oNc.COMMUNITY);
            case y.oC.GUILD_ONBOARDING:
                return s.ZP.shouldShowOnboarding(t);
            case y.oC.CUSTOMIZE_COMMUNITY:
                return null != O && O.features.has(b.oNc.COMMUNITY);
            case y.oC.MEMBER_SAFETY:
                return (0, o.lv)(t);
            case y.oC.GUILD_BOOSTS:
                return !0;
            case y.oC.REPORT_TO_MOD:
                return null != O && (0, f.Z)(O);
            case y.oC.PORTKEY:
                return (
                    (0, d.ZO)(t, "isAccessibleChannelOrThreadPath") &&
                    null != O &&
                    O.features.has(b.oNc.GAME_SERVER_HOSTING)
                );
            default:
                (0, g.vE)(n);
        }
    let I = p.Z.getChannel(n);
    return (
        (null != I || (await _.Z.loadThread(n), null != (I = p.Z.getChannel(n)))) &&
        ((0, E.YO)(I) || r.Z.isChannelGatedAndVisible(t, n))
    );
}
