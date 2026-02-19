"use strict";
n.d(t, { q: () => a });
var i = n(873263),
    s = n(394953),
    l = n(366811),
    r = n(652215);
function a() {
    let e = (0, l.A)((e) => e.guildId),
        { pathname: t } = (0, i.zy)(),
        n = t.startsWith(r.BVt.GUILD_DISCOVERY) || t.startsWith(r.BVt.GLOBAL_DISCOVERY),
        a = t.startsWith(r.BVt.GUILD_MEMBER_VERIFICATION("")),
        o = (0, s.lI)();
    return null == e && !(n || a || o);
}
