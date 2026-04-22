"use strict";
n.d(t, { QC: () => E, TS: () => c, ko: () => f, yS: () => _ });
var r,
    i = n(961350),
    s = n(698441),
    a = n(722260),
    o = n(563312),
    l = n(974930),
    u = n(988794),
    d = n(985018);
function c(e, t) {
    let n = i.default.getId();
    return s.Ay.getRsvp(e, t, n);
}
var _ = (((r = {})[(r.SERIES = 0)] = "SERIES"), (r[(r.RECURRENCE = 1)] = "RECURRENCE"), r);
function f() {
    return [
        { name: d.intl.string(d.t.uoorxi), value: 0 },
        { name: d.intl.string(d.t.lwZCFT), value: 1 },
    ];
}
function E(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: i, openRsvpPicker: d, onRsvp: _ } = e,
        f = s.Ay.getGuildScheduledEvent(t);
    if (null == f) return;
    let E = (0, a.m)(n, t),
        { startTime: h } = (0, o.YR)(f, n),
        p = f?.scheduled_start_time != null ? (0, l.j)(E, h, new Date(f?.scheduled_start_time)) : null,
        m = null != p && u.lV.has(p) ? null : (n ?? (0, l.G3)(f)),
        g = c(f.id),
        A = c(f.id, m);
    null == m
        ? (i(t, null, r, null != g ? u.Qi.UNINTERESTED : u.Qi.INTERESTED), _?.())
        : null != A
          ? (i(t, m, r, null != g ? u.Qi.INTERESTED : u.Qi.UNINTERESTED), _?.())
          : d(f, m);
}
