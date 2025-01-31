n.d(t, {
    Kq: () => u,
    ZP: () => o,
    zI: () => l
});
var i = n(442837),
    r = n(924301),
    a = n(894017),
    s = n(854698);
function o(e, t) {
    t = null != t ? t : (0, s.DK)(e);
    let n = (0, a.Z)(t, e.id);
    return c(e, n, t);
}
function l(e, t) {
    let n = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e));
    t = null != t ? t : (0, s.DK)(n);
    let o = (0, a.Z)(t, null == n ? void 0 : n.id);
    return null == n ? null : c(n, o, t);
}
function u(e, t) {
    let n = (0, a.c)(t, e.id);
    return c(e, n, t);
}
function c(e, t, n) {
    if (null == e.recurrence_rule || null == n)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
    let i = (0, s.iA)(n, e),
        { startDate: r, endDate: a } = (0, s.x6)(i, t);
    return {
        startTime: r.toDate(),
        endTime: null == a ? void 0 : a.toDate()
    };
}
