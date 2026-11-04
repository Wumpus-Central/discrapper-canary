var i = n(626584),
    r = n(256787);
let a = new i.A("DismissibleContentScope");
n.d(
    t,
    {},
    {
        JK: function (e) {
            switch (e.kind) {
                case "single_use":
                case "time_recurring":
                    return {};
                case "single_use_guild":
                case "time_recurring_guild":
                    return { guildId: e.scope.guildId };
                case "versioned":
                    return { version: e.scope.version };
                case "snowflake_bound":
                case "time_recurring_snowflake_bound":
                    return { snowflakeId: e.scope.snowflakeId };
                case "snowflake_bound_guild":
                    return { snowflakeId: e.scope.snowflakeId, guildId: e.scope.guildId };
            }
        },
        hM: function (e) {
            return (
                "versioned" === e.kind ||
                "time_recurring" === e.kind ||
                "snowflake_bound" === e.kind ||
                "time_recurring_snowflake_bound" === e.kind
            );
        },
        qd: function (e) {
            try {
                return (function (e) {
                    let { content: t, scope: n = {} } = e;
                    function i(e) {
                        var i = n[e],
                            r = e,
                            a = t;
                        if (null == i) throw Error(`Dismissible content ${a} is missing scope.${r}`);
                        return i;
                    }
                    let a = (0, r.PN)(t)
                        ? { kind: "snowflake_bound_guild", content: t }
                        : (0, r.XQ)(t)
                          ? { kind: "time_recurring_guild", content: t }
                          : (0, r.ef)(t)
                            ? { kind: "single_use_guild", content: t }
                            : (0, r.IL)(t) && (0, r.ki)(t)
                              ? { kind: "time_recurring_snowflake_bound", content: t }
                              : (0, r.L0)(t)
                                ? { kind: "versioned", content: t }
                                : (0, r.ki)(t)
                                  ? { kind: "time_recurring", content: t }
                                  : (0, r.IL)(t)
                                    ? { kind: "snowflake_bound", content: t }
                                    : { kind: "single_use", content: t };
                    switch (a.kind) {
                        case "single_use":
                            return { ...a, scope: {} };
                        case "single_use_guild":
                            return { ...a, scope: { guildId: i("guildId") } };
                        case "versioned":
                            return { ...a, scope: { version: i("version") } };
                        case "time_recurring":
                            return { ...a, scope: { timeRecurringConfig: i("timeRecurringConfig") } };
                        case "time_recurring_guild":
                            return {
                                ...a,
                                scope: { timeRecurringConfig: i("timeRecurringConfig"), guildId: i("guildId") },
                            };
                        case "snowflake_bound":
                            return { ...a, scope: { snowflakeId: i("snowflakeId") } };
                        case "snowflake_bound_guild":
                            return { ...a, scope: { snowflakeId: i("snowflakeId"), guildId: i("guildId") } };
                        case "time_recurring_snowflake_bound":
                            return {
                                ...a,
                                scope: { snowflakeId: i("snowflakeId"), timeRecurringConfig: i("timeRecurringConfig") },
                            };
                    }
                })("object" == typeof e ? e : { content: e });
            } catch (e) {
                return (a.error("Dropped a dismissible content entry", e), null);
            }
        },
        vv: function (e) {
            return (
                "single_use_guild" === e.kind || "time_recurring_guild" === e.kind || "snowflake_bound_guild" === e.kind
            );
        },
    },
);
