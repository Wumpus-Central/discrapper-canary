n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(665149),
    r = n(894017),
    s = n(79874),
    o = n(854698),
    c = n(390966),
    d = n(388032),
    u = n(793313);
function h(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        h = (0, s.ZP)(t, n),
        p = (0, r.Z)(n, t.id);
    if (null == t) return null;
    let m = (null == t ? void 0 : t.scheduled_start_time) != null ? (0, o.lh)(p, h.startTime, new Date(null == t ? void 0 : t.scheduled_start_time)) : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.ZP.Divider, { className: u.divider }),
            (0, i.jsx)(c.z, {
                startTime: h.startTime.toISOString(),
                status: null != m ? m : t.status,
                liveText: d.intl.string(d.t.kM6e4O),
                className: u.eventSchedule,
                textVariant: 'text-lg/semibold',
                eventType: t.entity_type,
                guildEventId: null == t ? void 0 : t.id,
                recurrenceId: n
            }),
            (0, i.jsx)(l.Text, {
                color: 'header-secondary',
                variant: 'text-md/normal',
                className: u.eventName,
                children: t.name
            })
        ]
    });
}
