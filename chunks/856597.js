n.d(t, { Z: () => h });
var a = n(951288);
n(647438);
var r = n(481060),
    i = n(819557),
    l = n(132392),
    o = n(118589),
    s = n(210825),
    c = n(345262),
    d = n(213360),
    u = n(388032),
    m = n(133023);
let p = {
        [o.UA.EMAIL_VERIFICATION]: u.intl.string(d.default.HC4IiR),
        [o.UA.REFRESH_APP]: u.intl.string(d.default.SzfxQ3),
        [o.UA.AGE_VERIFICATION]: u.intl.string(d.default["dSkE/A"]),
    },
    h = function () {
        let { task: e } = (0, l.T)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, a.jsxs)(r.Kqy, {
            direction: "vertical",
            justify: "space-between",
            padding: c.h,
            className: m.container,
            children: [
                (0, a.jsxs)(r.Kqy, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, a.jsx)(r.Heading, {
                            variant: "display-md",
                            className: m.title,
                            children: u.intl.string(d.default["/OpRAP"]),
                        }),
                        (0, a.jsx)(r.Kqy, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) => {
                                var r;
                                return (0, a.jsx)(
                                    i.q,
                                    {
                                        title: null != (r = p[e.task_type]) ? r : "",
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
                (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: u.intl.format(d.default["0DHxym"], {
                        handleLogOut: () => (0, s.R)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
