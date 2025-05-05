n.d(t, {
    Kq: () => c,
    ZP: () => s,
    zI: () => l
});
var r = n(442837),
    i = n(924301),
    o = n(894017),
    a = n(854698);
function s(e, t) {
    t = null != t ? t : (0, a.DK)(e);
    let n = (0, o.Z)(t, e.id);
    return u(e, n, t);
}
function l(e, t) {
    let n = (0, r.e7)([i.ZP], () => i.ZP.getGuildScheduledEvent(e));
    t = null != t ? t : (0, a.DK)(n);
    let s = (0, o.Z)(t, null == n ? void 0 : n.id);
    return null == n ? null : u(n, s, t);
}
function c(e, t) {
    let n = (0, o.c)(t, e.id);
    return u(e, n, t);
}
function u(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
    let r = (0, a.iA)(n, e),
        { startDate: i, endDate: o } = (0, a.x6)(r, t);
    return {
        startTime: i.toDate(),
        endTime: null == o ? void 0 : o.toDate()
    };
}
