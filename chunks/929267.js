n.d(t, { QC: () => A, TS: () => u, ko: () => E, yS: () => _ });
var i,
    r = n(280450),
    a = n(698441),
    s = n(722260),
    l = n(563312),
    o = n(974930),
    d = n(988794),
    c = n(375708);
function u(e, t) {
    let n = r.default.getId();
    return a.Ay.getRsvp(e, t, n);
}
var _ = (((i = {})[(i.SERIES = 0)] = "SERIES"), (i[(i.RECURRENCE = 1)] = "RECURRENCE"), i);
function E() {
    return [
        { name: c.intl.string(c.t.uoorxi), value: 0 },
        { name: c.intl.string(c.t.lwZCFT), value: 1 },
    ];
}
function A(e) {
    let { eventId: t, recurrenceId: n, guildId: i, updateRsvp: r, openRsvpPicker: c, onRsvp: _ } = e,
        E = a.Ay.getGuildScheduledEvent(t);
    if (null == E) return;
    let A = (0, s.m)(n, t),
        { startTime: h } = (0, l.YR)(E, n),
        I = E?.scheduled_start_time != null ? (0, o.j)(A, h, new Date(E?.scheduled_start_time)) : null,
        f = null != I && d.lV.has(I) ? null : (n ?? (0, o.G3)(E)),
        p = u(E.id),
        T = u(E.id, f);
    null == f
        ? (r(t, null, i, null != p ? d.Qi.UNINTERESTED : d.Qi.INTERESTED), _?.())
        : null != T
          ? (r(t, f, i, null != p ? d.Qi.INTERESTED : d.Qi.UNINTERESTED), _?.())
          : c(E, f);
}
