n.d(t, { Z: () => p });
var r = n(442837),
    i = n(358221),
    l = n(430824),
    a = n(496675),
    s = n(431328),
    o = n(501655),
    c = n(146085),
    d = n(368442),
    u = n(981631);
function p(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        p = (0, s.Io)(e.id),
        h = (0, s.Rk)(e.id, o.pV.AUDIENCE),
        f = (0, d.PK)(e.id),
        g = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guild_id), [e.guild_id]),
        m = (0, r.e7)([a.Z], () => a.Z.can(c.yP, e), [e]),
        b = null != (t = null == g ? void 0 : g.maxStageVideoChannelUsers) ? t : 0,
        y = !(null != g && g.features.has(u.GuildFeatures.COMMUNITY)) && b > u.RcX;
    return f && !n && m && !y && p + h >= b;
}
