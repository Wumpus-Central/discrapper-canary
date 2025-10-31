n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(481060),
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
        f = (0, a.Z)(n, t.id);
    if (null == t) return null;
    let h =
        (null == t ? void 0 : t.scheduled_start_time) != null
            ? (0, s.lh)(f, p.startTime, new Date(null == t ? void 0 : t.scheduled_start_time))
            : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.ZP.Divider, { className: d.divider }),
            (0, r.jsx)(c.z, {
                startTime: p.startTime.toISOString(),
                status: null != h ? h : t.status,
                liveText: u.intl.string(u.t.kM6e4G),
                className: d.eventSchedule,
                textVariant: "text-lg/semibold",
                eventType: t.entity_type,
                guildEventId: null == t ? void 0 : t.id,
                recurrenceId: n,
            }),
            (0, r.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-md/normal",
                className: d.eventName,
                children: t.name,
            }),
        ],
    });
}
