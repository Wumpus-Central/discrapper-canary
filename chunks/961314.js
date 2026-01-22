n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(58736),
    a = n(722260),
    s = n(563312),
    o = n(974930),
    c = n(103355),
    u = n(985018),
    d = n(234944);
function f(e) {
    let { guildEvent: t, recurrenceId: n } = e,
        f = (0, s.Ay)(t, n),
        p = (0, a.A)(n, t.id);
    if (null == t) return null;
    let h =
        (null == t ? void 0 : t.scheduled_start_time) != null
            ? (0, o.j)(p, f.startTime, new Date(null == t ? void 0 : t.scheduled_start_time))
            : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Ay.Divider, { className: d.yF }),
            (0, r.jsx)(c.L, {
                startTime: f.startTime.toISOString(),
                status: null != h ? h : t.status,
                liveText: u.intl.string(u.t.kM6e4G),
                className: d.aF,
                textVariant: "text-lg/semibold",
                eventType: t.entity_type,
                guildEventId: null == t ? void 0 : t.id,
                recurrenceId: n,
            }),
            (0, r.jsx)(l.Text, {
                color: "text-default",
                variant: "text-md/normal",
                className: d.eq,
                children: t.name,
            }),
        ],
    });
}
