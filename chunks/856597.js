n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(893776),
    l = n(819557),
    c = n(132392),
    o = n(118589),
    s = n(345262),
    u = n(241945),
    d = n(388032),
    f = n(133023);
let p = {
        [o.UA.EMAIL_VERIFICATION]: d.intl.string(u.default.HC4IiY),
        [o.UA.REFRESH_APP]: d.intl.string(u.default.SzfxQ0),
        [o.UA.AGE_VERIFICATION]: d.intl.string(u.default["dSkE/P"]),
    },
    m = function () {
        let { task: e } = (0, c.T)(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, r.jsxs)(i.Kqy, {
            direction: "vertical",
            justify: "space-between",
            padding: s.h,
            className: f.container,
            children: [
                (0, r.jsxs)(i.Kqy, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: "display-md",
                            className: f.title,
                            children: d.intl.string(u.default["/OpRAA"]),
                        }),
                        (0, r.jsx)(i.Kqy, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) => {
                                var i;
                                return (0, r.jsx)(
                                    l.q,
                                    {
                                        title: null != (i = p[e.task_type]) ? i : "",
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
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-secondary",
                    children: d.intl.format(u.default["0DHxys"], {
                        handleLogOut: () => a.Z.logout("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
