l.d(n, { Z: () => x });
var e = l(200651);
l(192379);
var i = l(120356),
    s = l.n(i),
    r = l(481060),
    o = l(709054),
    a = l(7697),
    u = l(421032),
    c = l(388032),
    d = l(431911);
function x(t) {
    let { guildId: n, recurrenceRule: l, guildEventId: i, onRecurrenceClick: x, hideScroller: k = !1, activeRecurrenceId: h } = t,
        { recurrenceStartTimes: m, canViewMoreRecurrences: z, updateRecurrenceStartTimes: g } = (0, a.Z)(i, n, l);
    return (0, e.jsxs)('div', {
        className: d.recurrences,
        children: [
            (0, e.jsx)(r.X6q, {
                variant: 'heading-sm/medium',
                className: d.heading,
                children: c.intl.string(c.t['D/jjoa'])
            }),
            (0, e.jsxs)(r.Ttm, {
                className: s()(d.scroller, { [d.showScroller]: !k }),
                children: [
                    m.map((t) => {
                        let n = o.default.fromTimestamp(t.getTime());
                        return (0, e.jsx)(
                            u.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: t,
                                guildEventId: i,
                                onClick: x,
                                isActive: n === h
                            },
                            n
                        );
                    }),
                    z &&
                        (0, e.jsx)(r.zxk, {
                            grow: !1,
                            onClick: (t) => {
                                t.stopPropagation(), g();
                            },
                            look: r.zxk.Looks.LINK,
                            size: r.zxk.Sizes.MIN,
                            color: r.zxk.Colors.LINK,
                            className: d.button,
                            children: c.intl.string(c.t['8O7Hp6'])
                        })
                ]
            })
        ]
    });
}
