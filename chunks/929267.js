n.d(t, {
    QC: () => p,
    TS: () => u,
    ko: () => f,
    yS: () => d,
});
var r = n(961350),
    i = n(698441),
    a = n(722260),
    s = n(563312),
    o = n(974930),
    l = n(988794),
    c = n(985018);

function u(e, t) {
    let n = r.default.getId();
    return i.Ay.getRsvp(e, t, n);
}
var d = (function (e) {
    return (e[(e.SERIES = 0)] = "SERIES"), (e[(e.RECURRENCE = 1)] = "RECURRENCE"), e;
})({});

function f() {
    return [
        {
            name: c.intl.string(c.t.uoorxi),
            value: 0,
        },
        {
            name: c.intl.string(c.t.lwZCFT),
            value: 1,
        },
    ];
}

function p(e) {
    let { eventId: t, recurrenceId: n, guildId: r, updateRsvp: c, openRsvpPicker: d, onRsvp: f } = e,
        p = i.Ay.getGuildScheduledEvent(t);
    if (null == p) return;
    let _ = (0, a.m)(n, t),
        { startTime: h } = (0, s.YR)(p, n),
        m =
            (null == p ? void 0 : p.scheduled_start_time) != null
                ? (0, o.j)(_, h, new Date(null == p ? void 0 : p.scheduled_start_time))
                : null,
        g = null != m && l.lV.has(m) ? null : null != n ? n : (0, o.G3)(p),
        E = u(p.id),
        b = u(p.id, g);
    null == g
        ? (c(t, null, r, null != E ? l.Qi.UNINTERESTED : l.Qi.INTERESTED), null == f || f())
        : null != b
          ? (c(t, g, r, null != E ? l.Qi.INTERESTED : l.Qi.UNINTERESTED), null == f || f())
          : d(p, g);
}
