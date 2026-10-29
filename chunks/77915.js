l.d(t, { B6: () => m, MX: () => x, WK: () => f, XG: () => o, qL: () => g });
var n = l(582128),
    i = l(17928),
    s = l(253932),
    a = l(30370),
    r = l(287809),
    d = l(606072),
    c = l(652215);
function u(e) {
    return e.type === c.fg2.SPOTIFY && !e.revoked;
}
function o() {
    return a.A.getAccounts().filter(u);
}
function m() {
    return (0, i.bG)([a.A], () => a.A.getAccounts().filter(u).length > 0);
}
function f() {
    return (0, i.bG)([a.A], () =>
        a.A.getAccounts()
            .filter(u)
            .some((e) => e.showActivity),
    );
}
function x(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: l, hasPersonalizationConsent: n } = (0, d.T4)(e);
    return { isSpotifyConnected: m(), hasFetchedConsents: l, isContributing: f() && t && n };
}
function g(e, t) {
    let l = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id),
        { isContributing: a, hasFetchedConsents: d } = x(e),
        u = s.jP.useSetting(),
        o = !a || u === c.clD.OFFLINE || u === c.clD.INVISIBLE;
    return {
        data: n.useMemo(() => {
            if (!d) return;
            if (null == t || !o || null == l) return t;
            let e = t.top_listeners.filter((e) => e.user_id !== l),
                n = t.ranked_songs.map((e) => {
                    let t = e.facepile_user_ids;
                    return null != t && t.includes(l) ? { ...e, facepile_user_ids: t.filter((e) => e !== l) } : e;
                });
            return { ...t, top_listeners: e, ranked_songs: n };
        }, [t, o, l, d]),
        shouldHideCurrentUser: o,
    };
}
