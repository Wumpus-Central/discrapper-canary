n.d(t, { Af: () => f, CJ: () => _, Fe: () => g, Rm: () => E, pe: () => c }), n(321073);
var i = n(64700),
    l = n(478437),
    r = n(311907);
n(734057);
var a = n(808728),
    u = n(967198);
n(661191);
var d = n(181079),
    s = n(616075),
    o = n(924703),
    A = n(652215);
function c(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, s.l)("useCanFavoriteChannel"),
        i = (0, r.bG)([d.A], () => d.A.isFavorite(e.id)),
        l = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!l || n);
}
function f(e) {
    return (0, r.bG)([d.A], () => d.A.getFavorite(e));
}
function E() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(A.YYv))[l.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function g() {
    return (0, r.bG)([u.A], () => u.A.getGuildId()) === A.YYv;
}
function _() {
    let { isFavoritesPerk: e } = (0, s.l)("useFavoriteAdded"),
        t = (0, o.T)(),
        n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        l = i.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return { favoriteAdded: t.favoriteAdded, notifyFavoriteAdded: n, clearFavoriteAdded: l };
}
