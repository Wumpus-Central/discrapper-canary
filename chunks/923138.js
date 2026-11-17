var n = l(582128),
    a = l(855986),
    i = l(12510),
    s = l(673125);
l.d(
    t,
    {},
    {
        I: function (e) {
            let t = null == e || !1 !== e.enabled,
                l = (0, n.useRef)(!1),
                { hasUnreadUpdate: r, notificationType: o } = (0, a.cf)([s.Ay], () => ({
                    hasUnreadUpdate: s.Ay.hasUnreadUpdate,
                    notificationType: s.Ay.clientUnreadNotificationType,
                }));
            return (
                (0, n.useEffect)(() => {
                    !t || l.current || s.Ay.hasFetchedChallenges || ((l.current = !0), (0, i.pu)());
                }, [t]),
                { hasUnreadUpdate: r, notificationType: o, ackUnread: i.eX }
            );
        },
        z: function (e) {
            let t = (0, n.useRef)(!1),
                {
                    challengesForOrbWallet: l,
                    hasFetchedChallenges: r,
                    isFetchingChallenges: o,
                    fetchChallengesError: c,
                } = (0, a.cf)([s.Ay], () => ({
                    challengesForOrbWallet: s.Ay.challengesForOrbWallet,
                    hasFetchedChallenges: s.Ay.hasFetchedChallenges,
                    isFetchingChallenges: s.Ay.isFetchingChallenges,
                    fetchChallengesError: s.Ay.fetchChallengesError,
                })),
                d = null != e && e.shouldFetch;
            return (
                (0, n.useEffect)(() => {
                    !(d && !t.current) ||
                        r ||
                        o ||
                        null != c ||
                        (0, i.Od)(function () {
                            t.current = !0;
                        });
                }, [r, o, d, c]),
                { challengesForOrbWallet: l, hasFetchedChallenges: r, isFetchingChallenges: o, refetch: i.Od }
            );
        },
    },
);
