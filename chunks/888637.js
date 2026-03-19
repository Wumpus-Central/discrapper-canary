n.d(e, { A: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(397927),
    a = n(661191),
    u = n(555407),
    c = n(349112),
    d = n(985018),
    o = n(89651);
function h(t) {
    let {
            guildId: e,
            recurrenceRule: n,
            guildEventId: i,
            onRecurrenceClick: h,
            hideScroller: m = !1,
            activeRecurrenceId: g,
        } = t,
        { recurrenceStartTimes: x, canViewMoreRecurrences: v, updateRecurrenceStartTimes: f } = (0, u.A)(i, e, n),
        p = m ? "div" : s.HOs;
    return (0, l.jsxs)("div", {
        className: o.w5,
        children: [
            (0, l.jsx)(s.Heading, {
                variant: "heading-sm/medium",
                className: o.R_,
                children: d.intl.string(d.t["D/jjoa"]),
            }),
            (0, l.jsxs)(p, {
                className: r()(o.XG, { [o.cq]: !m }),
                children: [
                    x.map((t) => {
                        let e = a.default.fromTimestamp(t.getTime());
                        return (0, l.jsx)(
                            c.A,
                            {
                                recurrenceId: e,
                                originalScheduledStartTime: t,
                                guildEventId: i,
                                onClick: h,
                                isActive: e === g,
                            },
                            e,
                        );
                    }),
                    v &&
                        (0, l.jsx)("div", {
                            className: o.UD,
                            children: (0, l.jsx)(s.QWc, {
                                onClick: (t) => {
                                    t.stopPropagation(), f();
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
