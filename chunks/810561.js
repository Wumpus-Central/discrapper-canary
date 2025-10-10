t.d(n, { Z: () => _ });
var i = t(951288);
t(647438);
var a = t(120356),
    r = t.n(a),
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
            guildEventId: a,
            onRecurrenceClick: _,
            hideScroller: p = !1,
            activeRecurrenceId: b,
        } = e,
        { recurrenceStartTimes: g, canViewMoreRecurrences: h, updateRecurrenceStartTimes: m } = (0, c.Z)(a, n, t),
        f = p ? "div" : l.Ttm;
    return (0, i.jsxs)("div", {
        className: u.recurrences,
        children: [
            (0, i.jsx)(l.X6q, {
                variant: "heading-sm/medium",
                className: u.heading,
                children: d.intl.string(d.t["D/jjoa"]),
            }),
            (0, i.jsxs)(f, {
                className: r()(u.scroller, { [u.showScroller]: !p }),
                children: [
                    g.map((e) => {
                        let n = o.default.fromTimestamp(e.getTime());
                        return (0, i.jsx)(
                            s.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: a,
                                onClick: _,
                                isActive: n === b,
                            },
                            n,
                        );
                    }),
                    h &&
                        (0, i.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, i.jsx)(l.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), m();
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
