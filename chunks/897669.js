n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(665149),
    a = n(894017),
    s = n(79874),
    l = n(854698),
    c = n(390966),
    u = n(388032),
    d = n(719188);
function f(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        f = (0, s.ZP)(t, n),
        _ = (0, a.Z)(n, t.id);
    if (null == t) return null;
    let p =
        (null == t ? void 0 : t.scheduled_start_time) != null
            ? (0, l.lh)(_, f.startTime, new Date(null == t ? void 0 : t.scheduled_start_time))
            : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.ZP.Divider, { className: d.divider }),
            (0, r.jsx)(c.z, {
                startTime: f.startTime.toISOString(),
                status: null != p ? p : t.status,
                liveText: u.intl.string(u.t.kM6e4O),
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
