n.d(t, { Af: () => f, CJ: () => g, Fe: () => v, Rm: () => E, pe: () => A }), n(321073);
var i = n(64700),
    l = n(478437),
    r = n(311907);
n(734057);
var a = n(808728),
    u = n(967198);
n(661191);
var s = n(181079),
    d = n(924703),
    o = n(781489),
    c = n(652215);
function A(e) {
    let { isEnabled: t, hasStaffPrivileges: n } = (0, o.e)("useCanFavoriteChannel"),
        i = (0, r.bG)([s.A], () => s.A.isFavorite(e.id)),
        l = e.isThread();
    return t && !__OVERLAY__ && !i && (!l || n);
}
function f(e) {
    return (0, r.bG)([s.A], () => s.A.getFavorite(e));
}
function E() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(c.YYv))[l.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function v() {
    return (0, r.bG)([u.A], () => u.A.getGuildId()) === c.YYv;
}
function g() {
    let e = (0, d.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return { favoriteAdded: e.favoriteAdded, notifyFavoriteAdded: t, clearFavoriteAdded: n };
}
