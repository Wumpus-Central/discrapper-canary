n.d(t, {
    Af: () => A,
    CJ: () => g,
    Fe: () => y,
    Rm: () => E,
    pe: () => f,
}),
    n(896048),
    n(321073);
var r = n(64700),
    l = n(478437),
    i = n(311907);
n(734057);
var u = n(808728),
    a = n(967198);
n(661191);
var o = n(181079),
    c = n(616075),
    d = n(924703),
    s = n(652215);
function f(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, c.l)("useCanFavoriteChannel"),
        r = (0, i.bG)([o.A], () => o.A.isFavorite(e.id)),
        l = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !r && (!l || n);
}
function A(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e));
}
function E() {
    return (0, i.bG)([u.Ay], () => u.Ay.getChannels(s.YYv))[l.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function y() {
    return (0, i.bG)([a.A], () => a.A.getGuildId()) === s.YYv;
}
function g() {
    let { isFavoritesPerk: e } = (0, c.l)("useFavoriteAdded"),
        t = (0, d.T)(),
        n = r.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        l = r.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: l,
    };
}
