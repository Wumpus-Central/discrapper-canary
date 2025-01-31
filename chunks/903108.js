n.d(t, { Z: () => h });
var i = n(442837),
    l = n(358221),
    a = n(430824),
    r = n(496675),
    s = n(431328),
    o = n(501655),
    c = n(146085),
    d = n(368442),
    u = n(981631);
function h(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        h = (0, s.Io)(e.id),
        p = (0, s.Rk)(e.id, o.pV.AUDIENCE),
        m = (0, d.PK)(e.id),
        f = (0, i.e7)([a.Z], () => a.Z.getGuild(e.guild_id), [e.guild_id]),
        g = (0, i.e7)([r.Z], () => r.Z.can(c.yP, e), [e]),
        _ = null !== (t = null == f ? void 0 : f.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
        C = !(null == f ? void 0 : f.isCommunity()) && _ > u.RcX;
    return m && !n && g && !C && h + p >= _;
}
