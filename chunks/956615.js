n.d(t, { q: () => N });
var i = n(181079),
    r = n(5180),
    a = n(713125),
    s = n(473529),
    l = n(313627),
    o = n(871123),
    d = n(683180),
    c = n(17928),
    u = n(73153),
    _ = n(746080);
let E = { lastProjectIdByGuildId: {} },
    A = null,
    h = E;
class I extends c.Ay.PersistedStore {
    static displayName = "VibegrationsBuilderRouteStore";
    static persistKey = "VibegrationsBuilderRoute";
    initialize(e) {
        h = e ?? E;
    }
    getState() {
        return h;
    }
    getRoutedProjectId(e) {
        return A?.guildId === e ? A.projectId : null;
    }
    getLastProjectId(e) {
        return h.lastProjectIdByGuildId[e] ?? null;
    }
}
function f(e, t) {
    if ((h.lastProjectIdByGuildId[e] ?? null) === t) return !1;
    let n = { ...h.lastProjectIdByGuildId };
    return (null == t ? delete n[e] : (n[e] = t), (h = { lastProjectIdByGuildId: n }), !0);
}
let p = new I(u.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e,
            r = n === _.VV.VIBEGRATIONS && null != t && null != i ? { guildId: t, projectId: i } : null,
            a = r?.guildId !== A?.guildId || r?.projectId !== A?.projectId;
        return ((A = r), null == t) ? a : f(t, r?.projectId ?? null) || a;
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        return null == n && f(t, null);
    },
    LOGOUT: function () {
        ((A = null), (h = E));
    },
});
var T = n(734057),
    g = n(808728),
    m = n(71393),
    S = n(309010);
function N(e) {
    let t = p.getLastProjectId(e);
    if (null != t && C(e)) return [_.VV.VIBEGRATIONS, t];
    let n = S.Ay.getChannelId(e),
        d = g.Ay.getDefaultChannel(e)?.id ?? void 0;
    if ((n === _.VV.GUILD_ONBOARDING && !a.Ay.shouldShowOnboarding(e)) || (n === _.VV.GUILD_HOME && !(0, s.K)(e)))
        return [d, null];
    if (n === _.VV.GUILD_SPACE)
        return (0, l.tT)(m.A.getGuild(e), "getChannelIdForGuildTransition") ? [n, null] : [d, null];
    if (n === _.VV.GAME_SHOP && (0, o.Ye)(e)) return [n, null];
    if (n === _.VV.VIBEGRATIONS) return C(e) ? [n, null] : [d, null];
    let c = T.A.getChannel(n);
    return null == c || ((0, r.ai)(e) && !i.A.isChannelOrParentFavorited(c)) ? [d, null] : [n, null];
}
function C(e) {
    let t = m.A.getGuild(e);
    return null != t && (0, d.G2)(t, "getChannelIdForGuildTransition");
}
(n(645959), n(652215));
