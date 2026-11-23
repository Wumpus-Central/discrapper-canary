var l = u(855986),
    n = u(705912),
    i = u(386649);
(u(163839),
    u.d(
        t,
        {},
        {
            H: function (e, t) {
                let { source: u } = t,
                    r = (0, n.fu)(e?.guildId, u);
                return {
                    suggestedSearches: (0, l.yK)([i.A], () => (null != e && r ? i.A.getNextSuggestions(e, 3) : i.v), [
                        e,
                        r,
                    ]),
                    isLoadingSuggestedSearches: (0, l.bG)(
                        [i.A],
                        () => null != e && !!r && i.A.isLoadingSuggestedSearches(e),
                        [e, r],
                    ),
                };
            },
        },
    ));
