var a = l(582128),
    n = l(855986),
    s = l(12510),
    i = l(673125);
l.d(
    t,
    {},
    {
        I: function (e) {
            let t = null == e || !1 !== e.enabled,
                l = (0, a.useRef)(!1),
                { hasUnreadUpdate: r, notificationType: o } = (0, n.cf)([i.Ay], () => ({
                    hasUnreadUpdate: i.Ay.hasUnreadUpdate,
                    notificationType: i.Ay.clientUnreadNotificationType,
                }));
            return (
                (0, a.useEffect)(() => {
                    !t || l.current || i.Ay.hasFetchedChallenges || ((l.current = !0), (0, s.pu)());
                }, [t]),
                { hasUnreadUpdate: r, notificationType: o, ackUnread: s.eX }
            );
        },
        z: function (e) {
            let t = (0, a.useRef)(!1),
                {
                    challengesForOrbWallet: l,
                    hasFetchedChallenges: r,
                    isFetchingChallenges: o,
                    fetchChallengesError: c,
                } = (0, n.cf)([i.Ay], () => ({
                    challengesForOrbWallet: i.Ay.challengesForOrbWallet,
                    hasFetchedChallenges: i.Ay.hasFetchedChallenges,
                    isFetchingChallenges: i.Ay.isFetchingChallenges,
                    fetchChallengesError: i.Ay.fetchChallengesError,
                })),
                d = null != e && e.shouldFetch;
            return (
                (0, a.useEffect)(() => {
                    !(d && !t.current) ||
                        r ||
                        o ||
                        null != c ||
                        (0, s.Od)(function () {
                            t.current = !0;
                        });
                }, [r, o, d, c]),
                { challengesForOrbWallet: l, hasFetchedChallenges: r, isFetchingChallenges: o, refetch: s.Od }
            );
        },
    },
);
