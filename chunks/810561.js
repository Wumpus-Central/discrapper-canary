n.d(e, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    c = n(709054),
    o = n(7697),
    a = n(421032),
    u = n(388032),
    d = n(862173);
function p(t) {
    let { guildId: e, recurrenceRule: n, guildEventId: l, onRecurrenceClick: p, hideScroller: g = !1, activeRecurrenceId: b } = t,
        { recurrenceStartTimes: f, canViewMoreRecurrences: m, updateRecurrenceStartTimes: j } = (0, o.Z)(l, e, n),
        v = g ? 'div' : s.Ttm;
    return (0, r.jsxs)('div', {
        className: d.recurrences,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-sm/medium',
                className: d.heading,
                children: u.intl.string(u.t['D/jjoa'])
            }),
            (0, r.jsxs)(v, {
                className: i()(d.scroller, { [d.showScroller]: !g }),
                children: [
                    f.map((t) => {
                        let e = c.default.fromTimestamp(t.getTime());
                        return (0, r.jsx)(
                            a.Z,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: l,
                                onClick: p,
                                isActive: e === b
                            },
                            e
                        );
                    }),
                    m &&
                        (0, r.jsx)('div', {
                            className: d.buttonContainer,
                            children: (0, r.jsx)(s.Avr, {
                                onClick: (t) => {
                                    (t.stopPropagation(), j());
                                },
                                text: u.intl.string(u.t['8O7Hp6']),
                                size: 'sm'
                            })
                        })
                ]
            })
        ]
    });
}
