t.d(n, { Z: () => _ });
var i = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    a = t(481060),
    c = t(709054),
    s = t(7697),
    o = t(421032),
    u = t(388032),
    d = t(393181);
function _(e) {
    let {
            guildId: n,
            recurrenceRule: t,
            guildEventId: l,
            onRecurrenceClick: _,
            hideScroller: h = !1,
            activeRecurrenceId: g,
        } = e,
        { recurrenceStartTimes: v, canViewMoreRecurrences: f, updateRecurrenceStartTimes: p } = (0, s.Z)(l, n, t),
        m = h ? "div" : a.Ttm;
    return (0, i.jsxs)("div", {
        className: d.recurrences,
        children: [
            (0, i.jsx)(a.Heading, {
                variant: "heading-sm/medium",
                className: d.heading,
                children: u.intl.string(u.t["D/jjoa"]),
            }),
            (0, i.jsxs)(m, {
                className: r()(d.scroller, { [d.showScroller]: !h }),
                children: [
                    v.map((e) => {
                        let n = c.default.fromTimestamp(e.getTime());
                        return (0, i.jsx)(
                            o.Z,
                            {
                                recurrenceId: n,
                                originalScheduledStartTime: e,
                                guildEventId: l,
                                onClick: _,
                                isActive: n === g,
                            },
                            n,
                        );
                    }),
                    f &&
                        (0, i.jsx)("div", {
                            className: d.buttonContainer,
                            children: (0, i.jsx)(a.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), p();
                                },
                                text: u.intl.string(u.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
