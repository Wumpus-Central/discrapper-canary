l.d(t, { B6: () => m, MX: () => f, WK: () => x, XG: () => u, qL: () => g });
var n = l(582128),
    i = l(17928),
    s = l(885386),
    a = l(30370),
    r = l(287809),
    d = l(606072),
    c = l(652215);
function o(e) {
    return e.type === c.fg2.SPOTIFY && !e.revoked;
}
function u() {
    return a.A.getAccounts().filter(o);
}
function m() {
    return (0, i.bG)([a.A], () => a.A.getAccounts().filter(o).length > 0);
}
function x() {
    return (0, i.bG)([a.A], () =>
        a.A.getAccounts()
            .filter(o)
            .some((e) => e.showActivity),
    );
}
function f(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: l, hasPersonalizationConsent: n } = (0, d.T4)(e);
    return { isSpotifyConnected: m(), hasFetchedConsents: l, isContributing: x() && t && n };
}
function g(e, t) {
    let l = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id),
        { isContributing: a, hasFetchedConsents: d } = f(e),
        o = s.jP.useSetting(),
        u = !a || o === c.clD.OFFLINE || o === c.clD.INVISIBLE;
    return {
        data: n.useMemo(() => {
            if (!d) return;
            if (null == t || !u || null == l) return t;
            let e = t.top_listeners.filter((e) => e.user_id !== l),
                n = t.ranked_songs.map((e) => {
                    let t = e.facepile_user_ids;
                    return null != t && t.includes(l) ? { ...e, facepile_user_ids: t.filter((e) => e !== l) } : e;
                });
            return { ...t, top_listeners: e, ranked_songs: n };
        }, [t, u, l, d]),
        shouldHideCurrentUser: u,
    };
}
