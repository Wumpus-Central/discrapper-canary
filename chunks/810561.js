t.d(n, { Z: () => _ });
var i = t(951288);
t(647438);
var r = t(120356),
    a = t.n(r),
    l = t(481060),
    o = t(709054),
    c = t(7697),
    s = t(421032),
    d = t(388032),
    u = t(393181);
function _(e) {
    let {
            guildId: n,
            recurrenceRule: t,
            guildEventId: r,
            onRecurrenceClick: _,
            hideScroller: b = !1,
            activeRecurrenceId: p,
        } = e,
        { recurrenceStartTimes: h, canViewMoreRecurrences: f, updateRecurrenceStartTimes: g } = (0, c.Z)(r, n, t),
        m = b ? "div" : l.Ttm;
    return (0, i.jsxs)("div", {
        className: u.recurrences,
        children: [
            (0, i.jsx)(l.X6q, {
                variant: "heading-sm/medium",
                className: u.heading,
                children: d.intl.string(d.t["D/jjoa"]),
            }),
            (0, i.jsxs)(m, {
                className: a()(u.scroller, { [u.showScroller]: !b }),
                children: [
                    h.map((e) => {
                        let n = o.default.fromTimestamp(e.getTime());
                        return (0, i.jsx)(
                            s.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: r,
                                onClick: _,
                                isActive: n === p,
                            },
                            n,
                        );
                    }),
                    f &&
                        (0, i.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, i.jsx)(l.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), g();
                                },
                                text: d.intl.string(d.t["8O7Hp6"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
