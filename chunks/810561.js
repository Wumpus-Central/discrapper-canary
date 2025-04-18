n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(709054),
    c = n(7697),
    u = n(421032),
    a = n(388032),
    d = n(862173);
function p(e) {
    let { guildId: t, recurrenceRule: n, guildEventId: l, onRecurrenceClick: p, hideScroller: b = !1, activeRecurrenceId: g } = e,
        { recurrenceStartTimes: x, canViewMoreRecurrences: f, updateRecurrenceStartTimes: j } = (0, c.Z)(l, t, n);
    return (0, r.jsxs)('div', {
        className: d.recurrences,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-sm/medium',
                className: d.heading,
                children: a.NW.string(a.t['D/jjoa'])
            }),
            (0, r.jsxs)(s.Ttm, {
                className: i()(d.scroller, { [d.showScroller]: !b }),
                children: [
                    x.map((e) => {
                        let t = o.default.fromTimestamp(e.getTime());
                        return (0, r.jsx)(
                            u.Z,
                            {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: l,
                                onClick: p,
                                isActive: t === g
                            },
                            t
                        );
                    }),
                    f &&
                        (0, r.jsx)(s.zxk, {
                            grow: !1,
                            onClick: (e) => {
                                e.stopPropagation(), j();
                            },
                            look: s.zxk.Looks.LINK,
                            size: s.zxk.Sizes.MIN,
                            color: s.zxk.Colors.LINK,
                            className: d.button,
                            children: a.NW.string(a.t['8O7Hp6'])
                        })
                ]
            })
        ]
    });
}
