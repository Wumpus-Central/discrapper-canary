var i = n(73153);
n.d(
    t,
    {},
    {
        F: function (e, t, n) {
            i.h.dispatch({
                type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
                placement: e,
                responseTtlSeconds: t / 1e3,
                fetchedAt: Date.now(),
                refetchOnFocus: n,
            });
        },
    },
);
