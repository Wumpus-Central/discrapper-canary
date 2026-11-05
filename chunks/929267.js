var i,
    r = n(46653),
    a = n(698441),
    s = n(722260),
    l = n(563312),
    o = n(974930),
    d = n(988794),
    c = n(792996);
function u(e, t) {
    let n = r.default.getId();
    return a.Ay.getRsvp(e, t, n);
}
var _ = (((i = {})[(i.SERIES = 0)] = "SERIES"), (i[(i.RECURRENCE = 1)] = "RECURRENCE"), i);
n.d(
    t,
    {},
    {
        QC: function (e) {
            let { eventId: t, recurrenceId: n, guildId: i, updateRsvp: r, openRsvpPicker: c, onRsvp: _ } = e,
                E = a.Ay.getGuildScheduledEvent(t);
            if (null == E) return;
            let A = (0, s.m)(n, t),
                { startTime: f } = (0, l.YR)(E, n),
                h = E?.scheduled_start_time != null ? (0, o.j)(A, f, new Date(E?.scheduled_start_time)) : null,
                I = null != h && d.lV.has(h) ? null : (n ?? (0, o.G3)(E)),
                p = u(E.id),
                m = u(E.id, I);
            null == I
                ? (r(t, null, i, null != p ? d.Qi.UNINTERESTED : d.Qi.INTERESTED), _?.())
                : null != m
                  ? (r(t, I, i, null != p ? d.Qi.INTERESTED : d.Qi.UNINTERESTED), _?.())
                  : c(E, I);
        },
        TS: u,
        ko: function () {
            return [
                { name: c.intl.string(c.t.uoorxi), value: 0 },
                { name: c.intl.string(c.t.lwZCFT), value: 1 },
            ];
        },
        yS: _,
    },
);
