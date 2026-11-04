n.d(
    t,
    {},
    {
        A: function () {
            return { audioModelDataPerUser: {}, gameEventData: [] };
        },
        p: function (e, t, n) {
            return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
        },
    },
);
