e.d(n, {
    Z: function () {
        return h;
    }
});
var l = e(200651);
e(192379);
var i = e(120356),
    o = e.n(i),
    s = e(481060),
    r = e(709054),
    u = e(7697),
    c = e(421032),
    a = e(388032),
    d = e(671933);
function h(t) {
    let { guildId: n, recurrenceRule: e, guildEventId: i, onRecurrenceClick: h, hideScroller: m = !1, activeRecurrenceId: C } = t,
        { recurrenceStartTimes: g, canViewMoreRecurrences: x, updateRecurrenceStartTimes: v } = (0, u.Z)(i, n, e);
    return (0, l.jsxs)('div', {
        className: d.recurrences,
        children: [
            (0, l.jsx)(s.Heading, {
                variant: 'heading-sm/medium',
                className: d.heading,
                children: a.intl.string(a.t['D/jjoa'])
            }),
            (0, l.jsxs)(s.Scroller, {
                className: o()(d.scroller, { [d.showScroller]: !m }),
                children: [
                    g.map((t) => {
                        let n = r.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            c.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: t,
                                guildEventId: i,
                                onClick: h,
                                isActive: n === C
                            },
                            n
                        );
                    }),
                    x &&
                        (0, l.jsx)(s.Button, {
                            grow: !1,
                            onClick: (t) => {
                                t.stopPropagation(), v();
                            },
                            look: s.Button.Looks.LINK,
                            size: s.Button.Sizes.MIN,
                            color: s.Button.Colors.LINK,
                            className: d.button,
                            children: a.intl.string(a.t['8O7Hp6'])
                        })
                ]
            })
        ]
    });
}
