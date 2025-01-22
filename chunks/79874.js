r.d(n, {
    Kq: function () {
        return c;
    },
    ZP: function () {
        return l;
    },
    zI: function () {
        return u;
    }
});
var i = r(442837),
    a = r(924301),
    o = r(894017),
    s = r(854698);
function l(e, n) {
    n = null != n ? n : (0, s.DK)(e);
    let r = (0, o.Z)(n, e.id);
    return d(e, r, n);
}
function u(e, n) {
    let r = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e));
    n = null != n ? n : (0, s.DK)(r);
    let l = (0, o.Z)(n, null == r ? void 0 : r.id);
    return null == r ? null : d(r, l, n);
}
function c(e, n) {
    let r = (0, o.c)(n, e.id);
    return d(e, r, n);
}
function d(e, n, r) {
    if (null == e.recurrence_rule || null == r)
        return {
            startTime: new Date(e.scheduled_start_time),
            endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
        };
    let i = (0, s.iA)(r, e),
        { startDate: a, endDate: o } = (0, s.x6)(i, n);
    return {
        startTime: a.toDate(),
        endTime: null == o ? void 0 : o.toDate()
    };
}
