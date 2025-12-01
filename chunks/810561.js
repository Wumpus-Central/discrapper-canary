t.d(n, { Z: () => _ });
var i = t(54381);
t(473749);
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
            hideScroller: p = !1,
            activeRecurrenceId: f,
        } = e,
        { recurrenceStartTimes: h, canViewMoreRecurrences: g, updateRecurrenceStartTimes: m } = (0, c.Z)(r, n, t),
        v = p ? "div" : l.Ttm;
    return (0, i.jsxs)("div", {
        className: u.recurrences,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: "heading-sm/medium",
                className: u.heading,
                children: d.intl.string(d.t["D/jjoa"]),
            }),
            (0, i.jsxs)(v, {
                className: a()(u.scroller, { [u.showScroller]: !p }),
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
                                isActive: n === f,
                            },
                            n,
                        );
                    }),
                    g &&
                        (0, i.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, i.jsx)(l.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), m();
                                },
                                text: d.intl.string(d.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
