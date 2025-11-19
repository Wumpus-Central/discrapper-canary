n.d(t, { Z: () => h });
var a = n(54381);
n(473749);
var l = n(481060),
    r = n(819557),
    i = n(132392),
    s = n(118589),
    o = n(210825),
    c = n(345262),
    d = n(240581),
    u = n(388032),
    m = n(567666);
let p = {
        [s.UA.EMAIL_VERIFICATION]: u.intl.string(d.default.HC4IiR),
        [s.UA.REFRESH_APP]: u.intl.string(d.default.SzfxQ3),
        [s.UA.AGE_VERIFICATION]: u.intl.string(d.default["dSkE/A"]),
    },
    h = function () {
        let { task: e } = (0, i.T)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(l.Kqy, {
            direction: "vertical",
            justify: "space-between",
            padding: c.h,
            className: m.container,
            children: [
                (0, a.jsxs)(l.Kqy, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "display-md",
                            className: m.title,
                            children: u.intl.string(d.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(l.Kqy, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) => {
                                var l;
                                return (0, a.jsx)(
                                    r.q,
                                    {
                                        title: null != (l = p[e.task_type]) ? l : "",
                                        listType: "numbered",
                                        index: n,
                                        color: n === t ? "text-primary" : n < t ? "feedback-positive" : "text-muted",
                                        completed: n < t,
                                    },
                                    e.task_type,
                                );
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: u.intl.format(d.default["0DHxym"], {
                        handleLogOut: () => (0, o.R)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
