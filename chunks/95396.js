var l = n(620632),
    i = n(73153),
    r = n(652215);
n.d(
    t,
    {},
    {
        CS: async function (e, t) {
            let { body: n } = await l.Bo.del({
                url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
                rejectWithError: (0, l.fT)(),
            });
            i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n });
        },
        Um: async function (e, t, n) {
            let { body: s } = await l.Bo.patch({
                url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
                body: n,
                rejectWithError: (0, l.fT)(),
            });
            return (i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: s }), s);
        },
        qP: async function (e, t) {
            let { body: n } = await l.Bo.post({
                url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(e),
                body: t,
                rejectWithError: (0, l.fT)(),
            });
            return (i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n }), n);
        },
    },
);
