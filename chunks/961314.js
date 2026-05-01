n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(834730),
    a = n(58736),
    s = n(722260),
    r = n(563312),
    o = n(647090),
    c = n(103355),
    d = n(375708),
    u = n(861267);
function h(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        h = (0, r.Ay)(t, n),
        p = (0, s.A)(n, t.id);
    if (null == t) return null;
    let m = t?.scheduled_start_time != null ? (0, o.j)(p, h.startTime, new Date(t?.scheduled_start_time)) : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Ay.Divider, { className: u.yF }),
            (0, i.jsx)(c.L, {
                startTime: h.startTime.toISOString(),
                status: m ?? t.status,
                liveText: d.intl.string(d.t.kM6e4G),
                className: u.aF,
                textVariant: "text-md/semibold",
                eventType: t.entity_type,
                guildEventId: t?.id,
                recurrenceId: n,
            }),
            (0, i.jsx)(l.E, { color: "text-default", variant: "text-md/normal", className: u.eq, children: t.name }),
        ],
    });
}
