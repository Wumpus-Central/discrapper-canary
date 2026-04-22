n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var a = n(834730),
    l = n(58736),
    s = n(722260),
    r = n(563312),
    o = n(974930),
    c = n(103355),
    d = n(985018),
    u = n(861267);
function p(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        p = (0, r.Ay)(t, n),
        h = (0, s.A)(n, t.id);
    if (null == t) return null;
    let _ = t?.scheduled_start_time != null ? (0, o.j)(h, p.startTime, new Date(t?.scheduled_start_time)) : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.Ay.Divider, { className: u.yF }),
            (0, i.jsx)(c.L, {
                startTime: p.startTime.toISOString(),
                status: _ ?? t.status,
                liveText: d.intl.string(d.t.kM6e4G),
                className: u.aF,
                textVariant: "text-md/semibold",
                eventType: t.entity_type,
                guildEventId: t?.id,
                recurrenceId: n,
            }),
            (0, i.jsx)(a.E, { color: "text-default", variant: "text-md/normal", className: u.eq, children: t.name }),
        ],
    });
}
