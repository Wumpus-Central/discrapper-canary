var n = l(582128),
    i = l(855986),
    s = l(253932),
    a = l(417869),
    r = l(287809),
    d = l(606072),
    o = l(652215);
function c(e) {
    return e.type === o.fg2.SPOTIFY && !e.revoked;
}
function u() {
    return (0, i.bG)([a.A], () => a.A.getAccounts().filter(c).length > 0);
}
function m() {
    return (0, i.bG)([a.A], () =>
        a.A.getAccounts()
            .filter(c)
            .some((e) => e.showActivity),
    );
}
function h(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: l, hasPersonalizationConsent: n } = (0, d.T4)(e);
    return { isSpotifyConnected: u(), hasFetchedConsents: l, isContributing: m() && t && n };
}
l.d(
    t,
    {},
    {
        B6: u,
        MX: h,
        WK: m,
        XG: function () {
            return a.A.getAccounts().filter(c);
        },
        qL: function (e, t) {
            let l = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.id),
                { isContributing: a, hasFetchedConsents: d } = h(e),
                c = s.jP.useSetting(),
                u = !a || c === o.clD.OFFLINE || c === o.clD.INVISIBLE;
            return {
                data: n.useMemo(() => {
                    if (!d) return;
                    if (null == t || !u || null == l) return t;
                    let e = t.top_listeners.filter((e) => e.user_id !== l),
                        n = t.ranked_songs.map((e) => {
                            let t = e.facepile_user_ids;
                            return null != t && t.includes(l)
                                ? { ...e, facepile_user_ids: t.filter((e) => e !== l) }
                                : e;
                        });
                    return { ...t, top_listeners: e, ranked_songs: n };
                }, [t, u, l, d]),
                shouldHideCurrentUser: u,
            };
        },
    },
);
