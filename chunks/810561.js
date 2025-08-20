t.d(n, { Z: () => _ });
var r = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
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
            guildEventId: i,
            onRecurrenceClick: _,
            hideScroller: p = !1,
            activeRecurrenceId: b,
        } = e,
        { recurrenceStartTimes: h, canViewMoreRecurrences: m, updateRecurrenceStartTimes: g } = (0, c.Z)(i, n, t),
        f = p ? "div" : l.Ttm;
    return (0, r.jsxs)("div", {
        className: u.recurrences,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "heading-sm/medium",
                className: u.heading,
                children: d.intl.string(d.t["D/jjoa"]),
            }),
            (0, r.jsxs)(f, {
                className: a()(u.scroller, { [u.showScroller]: !p }),
                children: [
                    h.map((e) => {
                        let n = o.default.fromTimestamp(e.getTime());
                        return (0, r.jsx)(
                            s.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: i,
                                onClick: _,
                                isActive: n === b,
                            },
                            n,
                        );
                    }),
                    m &&
                        (0, r.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, r.jsx)(l.Avr, {
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
