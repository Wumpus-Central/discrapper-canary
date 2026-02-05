"use strict";
n.d(t, { c: () => _ }), n(938796);
var r = n(665260),
    i = n(734057),
    a = n(696451),
    s = n(71393),
    o = n(701785),
    l = n(65995),
    u = n(707167),
    c = n(652215),
    d = n(340837);
function _(e, t) {
    let n = s.A.getGuild(e),
        _ = i.A.getChannel(t);
    return (
        null != n &&
        null != _ &&
        (0, u.A)(n) &&
        n.features.has(c.GuildFeatures.GUILD_SERVER_GUIDE) &&
        !r.Lt(a.Ay.getSelfMember(n.id)?.flags ?? 0, d.D.COMPLETED_HOME_ACTIONS) &&
        o.h.hasMemberAction(n.id, _.id) &&
        !l.A.hasCompletedActionForChannel(n.id, _.id)
    );
}
