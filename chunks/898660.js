var i = n(661191),
    r = n(460288),
    a = n(825272),
    s = n(543862),
    l = n(68656);
function o(e, t, n) {
    return null == e ? n : 1 === i.default.compare(t, e);
}
function d(e, t, n, i) {
    let r = null != e ? (Number.isNaN(Number(e)) ? void 0 : Number(e)) : void 0,
        a = void 0 === r ? 0 : r + n.cooldownDurationMs,
        s = Date.now(),
        l = null == n.showAfterTimestamp || (s >= n.showAfterTimestamp && (r ?? 0) <= n.showAfterTimestamp),
        o = null == n.numTimesToRecur || 0 === n.numTimesToRecur || null == t || t < n.numTimesToRecur;
    return (i || (null != r && null != t)) && l && (null == r || s >= a) && o;
}
n.d(
    t,
    {},
    {
        z: function (e, t, n) {
            var i, c, u, _;
            let { dismissedContents: E, recurringStates: A, guildStates: f } = t,
                h = A?.[e.content],
                I = (0, a.vv)(e) ? f?.get(e.scope.guildId) : void 0;
            switch (e.kind) {
                case "single_use":
                    return ((i = e.content), null == E ? n : !(0, r.c0)(E, i));
                case "single_use_guild":
                    return ((c = e.content), null == I ? n : null == I[c] || !1 === I[c].dismissed);
                case "versioned":
                    return (
                        !(0, l.P3)(e.content) &&
                        ((u = h?.lastDismissedVersion), (_ = e.scope.version), null == u ? n : u < _)
                    );
                case "time_recurring":
                    return (
                        !(0, l.P3)(e.content) &&
                        d(h?.lastDismissedAtMs, h?.numTimesDismissed, e.scope.timeRecurringConfig, n)
                    );
                case "time_recurring_guild": {
                    let t = I?.[e.content];
                    return (
                        !(0, l.P3)(e.content) &&
                        d(t?.lastDismissedAtMs, t?.numTimesDismissed, e.scope.timeRecurringConfig, n)
                    );
                }
                case "snowflake_bound":
                    return !(0, l.P3)(e.content) && o(h?.lastDismissedObjectId, e.scope.snowflakeId, n);
                case "snowflake_bound_guild":
                    return !(0, l.P3)(e.content) && o(I?.[e.content]?.lastDismissedObjectId, e.scope.snowflakeId, n);
                case "time_recurring_snowflake_bound":
                    return !(0, s.j6)(e.content, e.scope.snowflakeId, e.scope.timeRecurringConfig);
            }
        },
    },
);
