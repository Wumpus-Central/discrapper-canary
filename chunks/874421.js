var e = l(661191);
l.d(
    n,
    {},
    {
        S: function (t) {
            let n = t.turn_id ?? t.steps.find((t) => null != t.turn_id)?.turn_id;
            return null != n && e.default.isProbablyAValidSnowflake(n) ? e.default.extractTimestamp(n) : t.created_at;
        },
    },
);
