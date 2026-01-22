n.d(t, {
    Af: () => A,
    CJ: () => p,
    Fe: () => v,
    Rm: () => _,
    pe: () => c,
}),
    n(896048),
    n(321073);
var i = n(64700),
    a = n(478437),
    r = n(311907);
n(734057);
var l = n(808728),
    d = n(967198);
n(661191);
var u = n(181079),
    o = n(616075),
    s = n(924703),
    f = n(652215);

function c(e) {
    let { favoritesEnabled: t, hasStaffPrivileges: n } = (0, o.l)("useCanFavoriteChannel"),
        i = (0, r.bG)([u.A], () => u.A.isFavorite(e.id)),
        a = e.isDM() || e.isThread();
    return t && !__OVERLAY__ && !i && (!a || n);
}

function A(e) {
    return (0, r.bG)([u.A], () => u.A.getFavorite(e));
}

function _() {
    return (0, r.bG)([l.Ay], () => l.Ay.getChannels(f.YYv))[a.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}

function v() {
    return (0, r.bG)([d.A], () => d.A.getGuildId()) === f.YYv;
}

function p() {
    let { isFavoritesPerk: e } = (0, o.l)("useFavoriteAdded"),
        t = (0, s.T)(),
        n = i.useCallback(() => {
            e && t.notifyFavoriteAdded();
        }, [t, e]),
        a = i.useCallback(() => {
            e && t.clearFavoriteAdded();
        }, [t, e]);
    return {
        favoriteAdded: t.favoriteAdded,
        notifyFavoriteAdded: n,
        clearFavoriteAdded: a,
    };
}
