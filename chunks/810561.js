t.d(n, { Z: () => b });
var a = t(54381);
t(473749);
var i = t(120356),
    r = t.n(i),
    l = t(481060),
    o = t(709054),
    c = t(7697),
    d = t(421032),
    s = t(388032),
    u = t(437989);
function b(e) {
    let {
            guildId: n,
            recurrenceRule: t,
            guildEventId: i,
            onRecurrenceClick: b,
            hideScroller: f = !1,
            activeRecurrenceId: h,
        } = e,
        { recurrenceStartTimes: p, canViewMoreRecurrences: m, updateRecurrenceStartTimes: g } = (0, c.Z)(i, n, t),
        v = f ? "div" : l.Ttm;
    return (0, a.jsxs)("div", {
        className: u.recurrences,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: "heading-sm/medium",
                className: u.heading,
                children: s.intl.string(s.t["D/jjoa"]),
            }),
            (0, a.jsxs)(v, {
                className: r()(u.scroller, { [u.showScroller]: !f }),
                children: [
                    p.map((e) => {
                        let n = o.default.fromTimestamp(e.getTime());
                        return (0, a.jsx)(
                            d.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: i,
                                onClick: b,
                                isActive: n === h,
                            },
                            n,
                        );
                    }),
                    m &&
                        (0, a.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, a.jsx)(l.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), g();
                                },
                                text: s.intl.string(s.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
