n.d(t, { CS: () => d, Um: () => a, qP: () => s });
var l = n(636537),
    i = n(228366),
    r = n(652215);
async function s(e, t) {
    let { body: n } = await l.Bo.post({
        url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(e),
        body: t,
        rejectWithError: (0, l.fT)(),
    });
    return i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n }), n;
}
async function a(e, t, n) {
    let { body: s } = await l.Bo.patch({
        url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
        body: n,
        rejectWithError: (0, l.fT)(),
    });
    return i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: s }), s;
}
async function d(e, t) {
    let { body: n } = await l.Bo.del({
        url: r.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
        rejectWithError: (0, l.fT)(),
    });
    i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n });
}
