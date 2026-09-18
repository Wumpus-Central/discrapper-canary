a.d(t, { I: () => c, z: () => r });
var l = a(582128),
    n = a(17928),
    s = a(12510),
    i = a(673125);
function r(e) {
    let t = (0, l.useRef)(!1),
        {
            challengesForOrbWallet: a,
            hasFetchedChallenges: r,
            isFetchingChallenges: c,
            fetchChallengesError: o,
        } = (0, n.cf)([i.Ay], () => ({
            challengesForOrbWallet: i.Ay.challengesForOrbWallet,
            hasFetchedChallenges: i.Ay.hasFetchedChallenges,
            isFetchingChallenges: i.Ay.isFetchingChallenges,
            fetchChallengesError: i.Ay.fetchChallengesError,
        })),
        h = null != e && e.shouldFetch;
    return (
        (0, l.useEffect)(() => {
            !(h && !t.current) ||
                r ||
                c ||
                null != o ||
                (0, s.Od)(function () {
                    t.current = !0;
                });
        }, [r, c, h, o]),
        { challengesForOrbWallet: a, hasFetchedChallenges: r, isFetchingChallenges: c, refetch: s.Od }
    );
}
function c(e) {
    let t = null == e || !1 !== e.enabled,
        a = (0, l.useRef)(!1),
        { hasUnreadUpdate: r } = (0, n.cf)([i.Ay], () => ({ hasUnreadUpdate: i.Ay.hasUnreadUpdate }));
    return (
        (0, l.useEffect)(() => {
            !t || a.current || i.Ay.hasFetchedChallenges || ((a.current = !0), (0, s.pu)());
        }, [t]),
        { hasUnreadUpdate: r, ackUnread: s.eX }
    );
}
