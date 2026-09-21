l.d(t, { I: () => c, z: () => r });
var a = l(582128),
    n = l(17928),
    s = l(12510),
    i = l(673125);
function r(e) {
    let t = (0, a.useRef)(!1),
        {
            challengesForOrbWallet: l,
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
        (0, a.useEffect)(() => {
            !(h && !t.current) ||
                r ||
                c ||
                null != o ||
                (0, s.Od)(function () {
                    t.current = !0;
                });
        }, [r, c, h, o]),
        { challengesForOrbWallet: l, hasFetchedChallenges: r, isFetchingChallenges: c, refetch: s.Od }
    );
}
function c(e) {
    let t = null == e || !1 !== e.enabled,
        l = (0, a.useRef)(!1),
        { hasUnreadUpdate: r } = (0, n.cf)([i.Ay], () => ({ hasUnreadUpdate: i.Ay.hasUnreadUpdate }));
    return (
        (0, a.useEffect)(() => {
            !t || l.current || i.Ay.hasFetchedChallenges || ((l.current = !0), (0, s.pu)());
        }, [t]),
        { hasUnreadUpdate: r, ackUnread: s.eX }
    );
}
