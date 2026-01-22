n.d(t, {
    A: () => f,
});
var l = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    c = n(397927),
    r = n(661191),
    s = n(555407),
    d = n(349112),
    u = n(985018),
    o = n(150837);

function f(e) {
    let {
            guildId: t,
            recurrenceRule: n,
            guildEventId: a,
            onRecurrenceClick: f,
            hideScroller: b = !1,
            activeRecurrenceId: h,
        } = e,
        { recurrenceStartTimes: _, canViewMoreRecurrences: m, updateRecurrenceStartTimes: x } = (0, s.A)(a, t, n),
        v = b ? "div" : c.HOs;
    return (0, l.jsxs)("div", {
        className: o.w5,
        children: [
            (0, l.jsx)(c.Heading, {
                variant: "heading-sm/medium",
                className: o.R_,
                children: u.intl.string(u.t["D/jjoa"]),
            }),
            (0, l.jsxs)(v, {
                className: i()(o.XG, {
                    [o.cq]: !b,
                }),
                children: [
                    _.map((e) => {
                        let t = r.default.fromTimestamp(e.getTime());
                        return (0, l.jsx)(
                            d.A,
                            {
                                recurrenceId: t,
                                originalScheduledStartTime: e,
                                guildEventId: a,
                                onClick: f,
                                isActive: t === h,
                            },
                            t,
                        );
                    }),
                    m &&
                        (0, l.jsx)("div", {
                            className: o.UD,
                            children: (0, l.jsx)(c.QWc, {
                                onClick: (e) => {
                                    e.stopPropagation(), x();
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
