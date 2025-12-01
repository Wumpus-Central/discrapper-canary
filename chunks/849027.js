n.d(t, { Z: () => v });
var r = n(430198),
    i = n(897345),
    a = n(697379),
    o = n(241559),
    s = n(819553),
    l = n(931261),
    c = n(994592),
    u = n(444230),
    d = n(755458),
    f = n(953252),
    p = n(164670),
    _ = n(911560),
    m = n(592125),
    h = n(485386),
    g = n(430824),
    E = n(823379),
    b = n(754688),
    y = n(981631),
    O = n(176505);
async function v(e) {
    let { guildId: t, channelId: n } = e,
        v = g.Z.getGuild(t),
        S = h.Z.getUnsafeMutableRoles(t);
    if (null == v && t !== y.ME && n !== O.oC.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, O.AB)(n))
        switch (n) {
            case O.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(t, S);
            case O.oC.SERVER_MONETIZATION_ONBOARDING:
                return null != v && (0, u.U)(v);
            case O.oC.GAME_SHOP:
                return (0, p.wK)(null != v ? v : { id: t });
            case O.oC.GUILD_SHOP:
                return (0, i.r)(v, S);
            case O.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case O.oC.GUILD_HOME:
                return (0, l.s)(t);
            case O.oC.CHANNEL_BROWSER:
                return null != v && v.features.has(y.GuildFeatures.COMMUNITY);
            case O.oC.GUILD_ONBOARDING:
                return s.ZP.shouldShowOnboarding(t);
            case O.oC.CUSTOMIZE_COMMUNITY:
                return null != v && v.features.has(y.GuildFeatures.COMMUNITY);
            case O.oC.MEMBER_SAFETY:
                return (0, o.lv)(t);
            case O.oC.GUILD_BOOSTS:
                return !0;
            case O.oC.REPORT_TO_MOD:
                return null != v && (0, f.Z)(v);
            case O.oC.GAME_SERVERS:
                return (
                    (0, d.v$)(t, "isAccessibleChannelOrThreadPath") &&
                    null != v &&
                    v.features.has(y.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, E.vE)(n);
        }
    let I = m.Z.getChannel(n);
    return (
        (null != I || (await _.Z.loadThread(n), null != (I = m.Z.getChannel(n)))) &&
        ((0, b.YO)(I) || r.Z.isChannelGatedAndVisible(t, n))
    );
}
