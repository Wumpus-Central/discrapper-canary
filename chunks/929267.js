"use strict";
n.d(t, { QC: () => f, TS: () => c, ko: () => _, yS: () => d });
var r = n(961350),
    i = n(698441),
    a = n(722260),
    s = n(563312),
    o = n(974930),
    l = n(988794),
    u = n(985018);
function c(e, t) {
    let n = r.default.getId();
    return i.Ay.getRsvp(e, t, n);
}
var d = (function (e) {
    return (e[(e.SERIES = 0)] = "SERIES"), (e[(e.RECURRENCE = 1)] = "RECURRENCE"), e;
})({});
function _() {
    return [
        { name: u.intl.string(u.t.uoorxi), value: 0 },
        { name: u.intl.string(u.t.lwZCFT), value: 1 },
    ];
}
function f(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: u, openRsvpPicker: d, onRsvp: _ } = e,
        f = i.Ay.getGuildScheduledEvent(t);
    if (null == f) return;
    let p = (0, a.m)(n, t),
        { startTime: h } = (0, s.YR)(f, n),
        m = f?.scheduled_start_time != null ? (0, o.j)(p, h, new Date(f?.scheduled_start_time)) : null,
        g = null != m && l.lV.has(m) ? null : (n ?? (0, o.G3)(f)),
        E = c(f.id),
        A = c(f.id, g);
    null == g
        ? (u(t, null, r, null != E ? l.Qi.UNINTERESTED : l.Qi.INTERESTED), _?.())
        : null != A
          ? (u(t, g, r, null != E ? l.Qi.INTERESTED : l.Qi.UNINTERESTED), _?.())
          : d(f, g);
}
