n.d(t, { Z: () => p });
var r = n(442837),
    i = n(358221),
    l = n(430824),
    o = n(496675),
    a = n(431328),
    s = n(501655),
    c = n(146085),
    u = n(368442),
    d = n(981631);
function p(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        p = (0, a.Io)(e.id),
        h = (0, a.Rk)(e.id, s.pV.AUDIENCE),
        f = (0, u.PK)(e.id),
        m = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guild_id), [e.guild_id]),
        g = (0, r.e7)([o.Z], () => o.Z.can(c.yP, e), [e]),
        b = null != (t = null == m ? void 0 : m.maxStageVideoChannelUsers) ? t : 0,
        _ = !(null == m ? void 0 : m.isCommunity()) && b > d.RcX;
    return f && !n && g && !_ && p + h >= b;
}
