n.d(t, { qP: () => a });
var s = n(562465),
    i = n(73153),
    l = n(287809),
    r = n(652215);
async function a(e, t) {
    let { body: n } = await s.Bo.post({
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
                })),
                n,
            ],
        };
    return i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: o }), n;
}
