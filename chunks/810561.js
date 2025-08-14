n.d(e, { Z: () => h });
var l = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    s = n(481060),
    a = n(709054),
    u = n(7697),
    c = n(421032),
    o = n(388032),
    d = n(393181);
function h(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: i,
            onRecurrenceClick: h,
            hideScroller: g = !1,
            activeRecurrenceId: m,
        } = t,
        { recurrenceStartTimes: p, canViewMoreRecurrences: v, updateRecurrenceStartTimes: f } = (0, u.Z)(i, e, n),
        b = g ? "div" : s.Ttm;
    return (0, l.jsxs)("div", {
        className: d.recurrences,
        children: [
            (0, l.jsx)(s.X6q, {
                variant: "heading-sm/medium",
                className: d.heading,
                children: o.intl.string(o.t["D/jjoa"]),
            }),
            (0, l.jsxs)(b, {
                className: r()(d.scroller, { [d.showScroller]: !g }),
                children: [
                    p.map((t) => {
                        let e = a.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            c.Z,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: i,
                                onClick: h,
                                isActive: e === m,
                            },
                            e,
                        );
                    }),
                    v &&
                        (0, l.jsx)("div", {
                            className: d.buttonContainer,
                            children: (0, l.jsx)(s.Avr, {
                                onClick: (t) => {
                                    t.stopPropagation(), f();
                                },
                                text: o.intl.string(o.t["8O7Hp6"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
