n.d(t, {
    c: () => f,
}),
    n(938796);
var r = n(665260),
    i = n(734057),
    a = n(696451),
    s = n(71393),
    o = n(701785),
    l = n(65995),
    c = n(707167),
    u = n(652215),
    d = n(340837);

function f(e, t) {
    var n, f;
    let p = s.A.getGuild(e),
        _ = i.A.getChannel(t);
    return (
        null != p &&
        null != _ &&
        (0, c.A)(p) &&
        p.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) &&
        !r.Lt(
            null != (n = null == (f = a.Ay.getSelfMember(p.id)) ? void 0 : f.flags) ? n : 0,
            d.D.COMPLETED_HOME_ACTIONS,
        ) &&
        o.h.hasMemberAction(p.id, _.id) &&
        !l.A.hasCompletedActionForChannel(p.id, _.id)
    );
}
