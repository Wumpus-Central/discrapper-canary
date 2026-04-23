l.d(t, { CS: () => d, Um: () => r, qP: () => a });
var n = l(636537),
    i = l(228366),
    s = l(652215);
async function a(e, t) {
    let { body: l } = await n.Bo.post({
        url: s.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(e),
        body: t,
        rejectWithError: !1,
    });
    return i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: l }), l;
}
async function r(e, t, l) {
    let { body: a } = await n.Bo.patch({
        url: s.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
        body: l,
        rejectWithError: !1,
    });
    return i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: a }), a;
}
async function d(e, t) {
    let { body: l } = await n.Bo.del({ url: s.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t), rejectWithError: !1 });
    i.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: l });
}
