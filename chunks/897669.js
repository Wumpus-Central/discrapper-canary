n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(665149),
    a = n(894017),
    o = n(79874),
    s = n(954313),
    c = n(390966),
    u = n(388032),
    d = n(719188);
function p(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        p = (0, o.ZP)(t, n),
        h = (0, a.Z)(n, t.id);
    if (null == t) return null;
    let f =
        (null == t ? void 0 : t.scheduled_start_time) != null
            ? (0, s.lh)(h, p.startTime, new Date(null == t ? void 0 : t.scheduled_start_time))
            : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.ZP.Divider, { className: d.divider }),
            (0, i.jsx)(c.z, {
                startTime: p.startTime.toISOString(),
                status: null != f ? f : t.status,
                liveText: u.intl.string(u.t.kM6e4G),
                className: d.eventSchedule,
                textVariant: "text-lg/semibold",
                eventType: t.entity_type,
                guildEventId: null == t ? void 0 : t.id,
                recurrenceId: n,
            }),
            (0, i.jsx)(r.Text, {
                color: "header-secondary",
                variant: "text-md/normal",
                className: d.eventName,
                children: t.name,
            }),
        ],
    });
}
