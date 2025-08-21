n.d(t, { Z: () => _ });
var i = n(951288);
n(647438);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    c = n(709054),
    o = n(7697),
    s = n(421032),
    u = n(388032),
    d = n(393181);
function _(e) {
    let {
            guildId: t,
            recurrenceRule: n,
            guildEventId: l,
            onRecurrenceClick: _,
            hideScroller: g = !1,
            activeRecurrenceId: h,
        } = e,
        { recurrenceStartTimes: p, canViewMoreRecurrences: v, updateRecurrenceStartTimes: f } = (0, o.Z)(l, t, n),
        b = g ? "div" : a.Ttm;
    return (0, i.jsxs)("div", {
        className: d.recurrences,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: "heading-sm/medium",
                className: d.heading,
                children: u.intl.string(u.t["D/jjoa"]),
            }),
            (0, i.jsxs)(b, {
                className: r()(d.scroller, { [d.showScroller]: !g }),
                children: [
                    p.map((e) => {
                        let t = c.default.fromTimestamp(e.getTime());
                        return (0, i.jsx)(
                            s.Z,
                            {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: l,
                                onClick: _,
                                isActive: t === h,
                            },
                            t,
                        );
                    }),
                    v &&
                        (0, i.jsx)("div", {
                            className: d.buttonContainer,
                            children: (0, i.jsx)(a.Avr, {
                                onClick: (e) => {
                                    e.stopPropagation(), f();
                                },
                                text: u.intl.string(u.t["8O7Hp6"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
