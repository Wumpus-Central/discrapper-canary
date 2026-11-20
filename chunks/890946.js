n.d(t, { q: () => C });
var i = n(855986),
    r = n(73153),
    a = n(260498),
    s = n(313537),
    l = n(746080);
let o = new Map();
class d extends i.Ay.Store {
    static displayName = "ConjureServerProjectRouteStore";
    initialize() {
        this.waitFor(a.Ay);
    }
    getReturnProjectId(e) {
        let t = o.get(e);
        return null == t ? null : (0, s.fL)(a.Ay.getProject(t)) === e ? t : null;
    }
}
let c = new d(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        return (
            null != t && (n === l.VV.CONJURE_PROJECT && null != i ? o.get(t) !== i && (o.set(t, i), !0) : o.delete(t))
        );
    },
    LOGOUT: function () {
        o = new Map();
    },
});
var u = n(246338),
    _ = n(181079),
    E = n(5180),
    A = n(713125),
    f = n(473529),
    h = n(313627),
    I = n(871123),
    p = n(734057),
    m = n(808728),
    g = n(71393),
    T = n(309010);
n(645959);
var S = n(652215);
let N = l.VV.CONJURE;
function C(e) {
    if (e === S.GAA) return [null, null];
    let t = T.Ay.getChannelId(e),
        n = m.A.getDefaultChannel(e)?.id ?? void 0;
    if ((t === l.VV.GUILD_ONBOARDING && !A.Ay.shouldShowOnboarding(e)) || (t === l.VV.GUILD_HOME && !(0, f.K)(e)))
        return [n, null];
    if (t === l.VV.GUILD_SPACE)
        return (0, h.tT)(g.A.getGuild(e), "getChannelIdForGuildTransition") ? [t, null] : [n, null];
    if (t === l.VV.GAME_SHOP && (0, I.Ye)(e)) return [t, null];
    if (t === l.VV.CONJURE || t === l.VV.CONJURE_PROJECT) {
        var i;
        let r;
        if (((i = e), !(null != (r = g.A.getGuild(i)) && (0, u.N)(r, "getChannelIdForGuildTransition"))))
            return [n, null];
        let a = t === l.VV.CONJURE_PROJECT ? c.getReturnProjectId(e) : null;
        return null != a ? [l.VV.CONJURE_PROJECT, a] : [N, null];
    }
    let r = p.A.getChannel(t);
    return null == r || ((0, E.ai)(e) && !_.A.isChannelOrParentFavorited(r)) ? [n, null] : [t, null];
}
