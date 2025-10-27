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
            activeRecurrenceId: g,
        } = e,
        { recurrenceStartTimes: m, canViewMoreRecurrences: h, updateRecurrenceStartTimes: b } = (0, c.Z)(a, n, t),
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
                className: r()(u.scroller, { [u.showScroller]: !p }),
                children: [
                    m.map((e) => {
                        let n = o.default.fromTimestamp(e.getTime());
                        return (0, i.jsx)(
                            s.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: a,
                                onClick: _,
                                isActive: n === g,
                            },
                            n,
                        );
                    }),
                    h &&
                        (0, i.jsx)("div", {
                            className: u.buttonContainer,
                            children: (0, i.jsx)(l.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), b();
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
