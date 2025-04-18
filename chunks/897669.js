n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(665149),
    o = n(894017),
    a = n(79874),
    s = n(854698),
    c = n(390966),
    u = n(388032),
    d = n(146511);
function p(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        p = (0, a.ZP)(t, n),
        h = (0, o.Z)(n, t.id);
    if (null == t) return null;
    let f = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, s.lh)(h, p.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.ZP.Divider, { className: d.divider }),
            (0, r.jsx)(c.z, {
                startTime: p.startTime.toISOString(),
                status: null != f ? f : t.status,
                liveText: u.NW.string(u.t.kM6e4O),
                className: d.eventSchedule,
                textVariant: 'text-lg/semibold',
                eventType: t.entity_type,
                guildEventId: null == t ? void 0 : t.id,
                recurrenceId: n
            }),
            (0, r.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                className: d.eventName,
                children: t.name
            })
        ]
    });
}
