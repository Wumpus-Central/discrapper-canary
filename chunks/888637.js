n.d(e, { A: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(573613),
    a = n(534514),
    u = n(123292),
    c = n(661191),
    d = n(555407),
    o = n(349112),
    h = n(985018),
    g = n(231842);
function m(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: i,
            onRecurrenceClick: m,
            hideScroller: v = !1,
            activeRecurrenceId: x,
        } = t,
        { recurrenceStartTimes: f, canViewMoreRecurrences: p, updateRecurrenceStartTimes: A } = (0, d.A)(i, e, n),
        j = v ? "div" : s.Ip;
    return (0, l.jsxs)("div", {
        className: g.w5,
        children: [
            (0, l.jsx)(a.D, { variant: "heading-sm/medium", className: g.R_, children: h.intl.string(h.t["D/jjoa"]) }),
            (0, l.jsxs)(j, {
                className: r()(g.XG, { [g.cq]: !v }),
                children: [
                    f.map((t) => {
                        let e = c.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            o.A,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: i,
                                onClick: m,
                                isActive: e === x,
                            },
                            e,
                        );
                    }),
                    p &&
                        (0, l.jsx)("div", {
                            className: g.UD,
                            children: (0, l.jsx)(u.Q, {
                                onClick: (t) => {
                                    t.stopPropagation(), A();
                                },
                                text: h.intl.string(h.t["8O7Hpy"]),
                                size: "sm",
                            }),
                        }),
                ],
            }),
        ],
    });
}
