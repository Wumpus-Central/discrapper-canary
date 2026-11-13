n.d(t, { q: () => D });
var i = n(855986),
    r = n(73153),
    a = n(746080);
let s = { lastProjectIdByGuildId: {} },
    l = null,
    o = s;
class d extends i.Ay.PersistedStore {
    static displayName = "ConjureBuilderRouteStore";
    static persistKey = "ConjureBuilderRoute";
    initialize(e) {
        o = e ?? s;
    }
    getState() {
        return o;
    }
    getRoutedProjectId(e) {
        return l?.guildId === e ? l.projectId : null;
    }
    getLastProjectId(e) {
        return null;
    }
}
function c(e, t) {
    if ((o.lastProjectIdByGuildId[e] ?? null) === t) return !1;
    let n = { ...o.lastProjectIdByGuildId };
    return (null == t ? delete n[e] : (n[e] = t), (o = { lastProjectIdByGuildId: n }), !0);
}
let u = new d(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e,
            r = n === a.VV.CONJURE && null != t && null != i ? { guildId: t, projectId: i } : null,
            s = r?.guildId !== l?.guildId || r?.projectId !== l?.projectId;
        return ((l = r), null == t) ? s : c(t, r?.projectId ?? null) || s;
    },
    CONJURE_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        return null == n && c(t, null);
    },
    LOGOUT: function () {
        ((l = null), (o = s));
    },
});
var _ = n(260498),
    E = n(313537);
let A = new Map();
class f extends i.Ay.Store {
    static displayName = "ConjureServerProjectRouteStore";
    initialize() {
        this.waitFor(_.Ay);
    }
    getReturnProjectId(e) {
        let t = A.get(e);
        return null == t ? null : (0, E.KV)(_.Ay.getProject(t), e) ? t : null;
    }
}
let h = new f(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        return (
            null != t && (n === a.VV.CONJURE_PROJECT && null != i ? A.get(t) !== i && (A.set(t, i), !0) : A.delete(t))
        );
    },
    LOGOUT: function () {
        A = new Map();
    },
});
var I = n(246338),
    p = n(181079),
    m = n(5180),
    T = n(713125),
    g = n(473529),
    S = n(313627),
    N = n(871123),
    C = n(734057),
    O = n(808728),
    R = n(71393),
    L = n(309010);
n(645959);
var y = n(652215);
function D(e) {
    if (e === y.GAA) return [null, null];
    let t = u.getLastProjectId(e);
    if (null != t && b(e)) return [a.VV.CONJURE, t];
    let n = L.Ay.getChannelId(e),
        i = O.A.getDefaultChannel(e)?.id ?? void 0;
    if ((n === a.VV.GUILD_ONBOARDING && !T.Ay.shouldShowOnboarding(e)) || (n === a.VV.GUILD_HOME && !(0, g.K)(e)))
        return [i, null];
    if (n === a.VV.GUILD_SPACE)
        return (0, S.tT)(R.A.getGuild(e), "getChannelIdForGuildTransition") ? [n, null] : [i, null];
    if (n === a.VV.GAME_SHOP && (0, N.Ye)(e)) return [n, null];
    if (n === a.VV.CONJURE || n === a.VV.CONJURE_PROJECT) {
        if (!b(e)) return [i, null];
        let t = n === a.VV.CONJURE_PROJECT ? h.getReturnProjectId(e) : null;
        return null != t ? [a.VV.CONJURE_PROJECT, t] : [a.VV.CONJURE, null];
    }
    let r = C.A.getChannel(n);
    return null == r || ((0, m.ai)(e) && !p.A.isChannelOrParentFavorited(r)) ? [i, null] : [n, null];
}
function b(e) {
    let t = R.A.getGuild(e);
    return null != t && (0, I.N)(t, "getChannelIdForGuildTransition");
}
