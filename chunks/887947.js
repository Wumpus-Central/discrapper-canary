var i = n(73153);
n.d(
    t,
    {},
    {
        F: function (e, t) {
            i.h.dispatch({
                type: "QUESTS_CLEAR_EXPIRED_QUEST_TO_DELIVER",
                placement: e,
                fetchedAt: Date.now(),
                responseTtlSeconds: t / 1e3,
            });
        },
    },
);
