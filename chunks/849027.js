n.d(t, { Z: () => v });
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
    g = n(594174),
    E = n(823379),
    b = n(754688),
    y = n(981631),
    O = n(176505);
async function v(e) {
    let { guildId: t, channelId: n } = e,
        v = m.Z.getGuild(t),
        I = h.Z.getUnsafeMutableRoles(t);
    if (null == v && t !== y.ME) return !1;
    if (null == n) return !0;
    if ((0, O.AB)(n))
        switch (n) {
            case O.oC.ROLE_SUBSCRIPTIONS:
                return (0, c.on)(t, I);
            case O.oC.SERVER_MONETIZATION_ONBOARDING:
                return null != v && (0, u.U)(v);
            case O.oC.GUILD_SHOP:
                return (0, i.r)(v, I);
            case O.oC.MEMBER_APPLICATIONS:
                return (0, a.v)(t);
            case O.oC.GUILD_HOME:
                return (0, l.s)(t);
            case O.oC.CHANNEL_BROWSER:
                return null != v && v.features.has(y.oNc.COMMUNITY);
            case O.oC.GUILD_ONBOARDING:
                return s.ZP.shouldShowOnboarding(t);
            case O.oC.CUSTOMIZE_COMMUNITY:
                return null != v && v.features.has(y.oNc.COMMUNITY);
            case O.oC.MEMBER_SAFETY:
                return (0, o.lv)(t);
            case O.oC.GUILD_BOOSTS:
                return !0;
            case O.oC.REPORT_TO_MOD:
                return null != v && (0, f.Z)(v);
            case O.oC.PORTKEY:
                var T, S;
                return (
                    (0, d.ZO)(t, "isAccessibleChannelOrThreadPath") &&
                    ((null != v && v.features.has(y.oNc.GAME_SERVER_HOSTING)) ||
                        (null != (S = null == (T = g.default.getCurrentUser()) ? void 0 : T.isStaff()) && S))
                );
            default:
                (0, E.vE)(n);
        }
    let A = p.Z.getChannel(n);
    return (
        (null != A || (await _.Z.loadThread(n), null != (A = p.Z.getChannel(n)))) &&
        ((0, b.YO)(A) || r.Z.isChannelGatedAndVisible(t, n))
    );
}
