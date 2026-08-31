n.d(t, { I: () => c, z: () => i });
var a = n(582128),
    l = n(17928),
    s = n(12510),
    r = n(673125);
function i(e) {
    let t = (0, a.useRef)(!1),
        {
            challengesForOrbWallet: n,
            hasFetchedChallenges: i,
            isFetchingChallenges: c,
            fetchChallengesError: o,
        } = (0, l.cf)([r.A], () => ({
            challengesForOrbWallet: r.A.challengesForOrbWallet,
            hasFetchedChallenges: r.A.hasFetchedChallenges,
            isFetchingChallenges: r.A.isFetchingChallenges,
            fetchChallengesError: r.A.fetchChallengesError,
        })),
        u = null != e && e.shouldFetch;
    return (
        (0, a.useEffect)(() => {
            !(u && !t.current) ||
                i ||
                c ||
                null != o ||
                (0, s.Od)(function () {
                    t.current = !0;
                });
        }, [i, c, u, o]),
        { challengesForOrbWallet: n, hasFetchedChallenges: i, isFetchingChallenges: c, refetch: s.Od }
    );
}
function c(e) {
    let t = null == e || !1 !== e.enabled,
        n = (0, a.useRef)(!1),
        { hasUnreadUpdate: i } = (0, l.cf)([r.A], () => ({ hasUnreadUpdate: r.A.hasUnreadUpdate }));
    return (
        (0, a.useEffect)(() => {
            !t || n.current || r.A.hasFetchedChallenges || ((n.current = !0), (0, s.pu)());
        }, [t]),
        { hasUnreadUpdate: i, ackUnread: s.eX }
    );
}
