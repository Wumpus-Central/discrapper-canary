var i = n(811091);
n.d(
    t,
    {},
    {
        S: function (e) {
            let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
            return null != t && i.default.isProbablyAValidSnowflake(t) ? i.default.extractTimestamp(t) : e.created_at;
        },
    },
);
