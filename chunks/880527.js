"use strict";
n.d(t, { c: () => c }), n(938796);
var i = n(665260),
    r = n(734057),
    s = n(696451),
    a = n(71393),
    o = n(701785),
    l = n(65995),
    _ = n(707167),
    d = n(652215),
    u = n(340837);
function c(e, t) {
    let n = a.A.getGuild(e),
        c = r.A.getChannel(t);
    return (
        null != n &&
        null != c &&
        (0, _.A)(n) &&
        n.features.has(d.GuildFeatures.GUILD_SERVER_GUIDE) &&
        !i.Lt(s.Ay.getSelfMember(n.id)?.flags ?? 0, u.D.COMPLETED_HOME_ACTIONS) &&
        o.h.hasMemberAction(n.id, c.id) &&
        !l.A.hasCompletedActionForChannel(n.id, c.id)
    );
}
