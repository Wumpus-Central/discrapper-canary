n.d(t, { CS: () => o, Um: () => a, qP: () => r });
var i = n(562465),
    s = n(73153),
    l = n(652215);
async function r(e, t) {
    let { body: n } = await i.Bo.post({
        url: l.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(e),
        body: t,
        rejectWithError: !1,
    });
    return s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n }), n;
}
async function a(e, t, n) {
    let { body: r } = await i.Bo.patch({
        url: l.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t),
        body: n,
        rejectWithError: !1,
    });
    return s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: r }), r;
}
async function o(e, t) {
    let { body: n } = await i.Bo.del({ url: l.Rsh.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(e, t), rejectWithError: !1 });
    s.h.dispatch({ type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: e, restrictedSchedule: n });
}
