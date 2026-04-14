n.d(t, { CS: () => d, Um: () => o, qP: () => a });
var i = n(562465),
    s = n(73153),
    l = n(287809),
    r = n(652215);
async function a(e, t) {
    let { body: n } = await i.Bo.post({
            url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(e),
            body: t,
            rejectWithError: !1,
        }),
        a = l.default.getUser(e),
        o = {
            rules: [
                ...(a?.restrictedSchedule?.rules ?? []).map((e) => ({
                    rule_id: e.ruleId,
                    label: e.label,
                    start_time: e.startTime,
                    end_time: e.endTime,
                    days: e.days,
                    enabled: e.enabled,
                })),
                n,
            ],
        };
    return s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: o }), n;
}
async function o(e, t, n) {
    let { body: a } = await i.Bo.patch({
            url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
            body: n,
            rejectWithError: !1,
        }),
        o = l.default.getUser(e),
        d = {
            rules: (o?.restrictedSchedule?.rules ?? []).map((e) =>
                e.ruleId === t
                    ? a
                    : {
                          rule_id: e.ruleId,
                          label: e.label,
                          start_time: e.startTime,
                          end_time: e.endTime,
                          days: e.days,
                          enabled: e.enabled,
                      },
            ),
        };
    return s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: d }), a;
}
async function d(e, t) {
    await i.Bo.del({ url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t), rejectWithError: !1 });
    let n = l.default.getUser(e),
        a = {
            rules: (n?.restrictedSchedule?.rules ?? [])
                .filter((e) => e.ruleId !== t)
                .map((e) => ({
                    rule_id: e.ruleId,
                    label: e.label,
                    start_time: e.startTime,
                    end_time: e.endTime,
                    days: e.days,
                    enabled: e.enabled,
                })),
        };
    s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: a });
}
