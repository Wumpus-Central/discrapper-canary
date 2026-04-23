n.d(t, { q: () => r });
var i = n(873263),
    l = n(394953),
    s = n(366811),
    a = n(652215);
function r() {
    let e = (0, s.A)((e) => e.guildId),
        { pathname: t } = (0, i.zy)(),
        n = t.startsWith(a.BVt.GUILD_DISCOVERY) || t.startsWith(a.BVt.GLOBAL_DISCOVERY),
        r = t.startsWith(a.BVt.GUILD_MEMBER_VERIFICATION("")),
        o = (0, l.lI)();
    return null == e && !(n || r || o);
}
