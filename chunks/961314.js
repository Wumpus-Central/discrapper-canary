var i = n(477900);
n(582128);
var l = n(834730),
    a = n(58736),
    s = n(722260),
    r = n(563312),
    o = n(974930),
    d = n(103355),
    c = n(792996),
    u = n(856598);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildEvent: t, recurrenceId: n } = e,
                h = (0, r.Ay)(t, n),
                p = (0, s.A)(n, t.id);
            if (null == t) return null;
            let m =
                t?.scheduled_start_time != null ? (0, o.j)(p, h.startTime, new Date(t?.scheduled_start_time)) : null;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.Ay.Divider, { className: u.yF }),
                    (0, i.jsx)(d.L, {
                        startTime: h.startTime.toISOString(),
                        status: m ?? t.status,
                        liveText: c.intl.string(c.t.kM6e4G),
                        className: u.aF,
                        textVariant: "body-md/semibold",
                        eventType: t.entity_type,
                        guildEventId: t?.id,
                        recurrenceId: n,
                    }),
                    (0, i.jsx)(l.E, {
                        color: "text-default",
                        variant: "body-md/normal",
                        className: u.eq,
                        children: t.name,
                    }),
                ],
            });
        },
    },
);
