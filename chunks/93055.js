n.d(t, { Af: () => E, CJ: () => p, Fe: () => h, Rm: () => f, pe: () => A }), n(321073);
var i = n(64700),
    r = n(478437),
    l = n(311907);
n(734057);
var a = n(808728),
    o = n(967198);
n(661191);
var s = n(181079),
    d = n(616075),
    u = n(924703),
    c = n(652215);
function A(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, d.e)({ location: "useCanFavoriteChannel" }),
        i = (0, l.bG)([s.A], () => s.A.isFavorite(e.id)),
        r = e.isThread();
    return t && !__OVERLAY__ && !i && (!r || n);
}
function E(e) {
    return (0, l.bG)([s.A], () => s.A.getFavorite(e));
}
function f() {
    return (0, l.bG)([a.Ay], () => a.Ay.getChannels(c.YYv))[r.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function h() {
    return (0, l.bG)([o.A], () => o.A.getGuildId()) === c.YYv;
}
function p() {
    let e = (0, u.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return { favoriteAdded: e.favoriteAdded, notifyFavoriteAdded: t, clearFavoriteAdded: n };
}
