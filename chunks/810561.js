n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(755721),
    o = n(481060),
    c = n(709054),
    u = n(7697),
    a = n(421032),
    d = n(388032),
    p = n(862173);
function b(e) {
    let { guildId: t, recurrenceRule: n, guildEventId: l, onRecurrenceClick: b, hideScroller: g = !1, activeRecurrenceId: x } = e,
        { recurrenceStartTimes: j, canViewMoreRecurrences: f, updateRecurrenceStartTimes: m } = (0, u.Z)(l, t, n),
        h = g ? 'div' : o.Ttm;
    return (0, r.jsxs)('div', {
        className: p.recurrences,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/medium',
                className: p.heading,
                children: d.intl.string(d.t['D/jjoa'])
            }),
            (0, r.jsxs)(h, {
                className: i()(p.scroller, { [p.showScroller]: !g }),
                children: [
                    j.map((e) => {
                        let t = c.default.fromTimestamp(e.getTime());
                        return (0, r.jsx)(
                            a.Z,
                            {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: l,
                                onClick: b,
                                isActive: t === x
                            },
                            t
                        );
                    }),
                    f &&
                        (0, r.jsx)(s.zx, {
                            grow: !1,
                            onClick: (e) => {
                                (e.stopPropagation(), m());
                            },
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.MIN,
                            color: s.zx.Colors.LINK,
                            className: p.button,
                            children: d.intl.string(d.t['8O7Hp6'])
                        })
                ]
            })
        ]
    });
}
