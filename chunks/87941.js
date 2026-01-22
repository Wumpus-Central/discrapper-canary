n.d(t, {
    q: () => s,
});
var r = n(960488),
    l = n(394953),
    i = n(366811),
    a = n(652215);

function s() {
    let e = (0, i.A)((e) => e.guildId),
        { pathname: t } = (0, r.zy)(),
        n = t.startsWith(a.BVt.GUILD_DISCOVERY) || t.startsWith(a.BVt.GLOBAL_DISCOVERY),
        s = t.startsWith(a.BVt.GUILD_MEMBER_VERIFICATION("")),
        o = (0, l.lI)();
    return null == e && !(n || s || o);
}
