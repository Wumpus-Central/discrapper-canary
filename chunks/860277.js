r.d(t, { Z: () => p });
var n = r(951288),
    e = r(793030),
    a = r(442837),
    s = r(99690),
    l = r(5888),
    d = r(198358),
    c = r(612776),
    o = r(268685),
    x = r(506945),
    u = r(388032);
function p(i) {
    let { step: t } = i,
        { users: r, sidekick: p } = (0, a.e7)([l.Z], () => l.Z.getCheckpointData());
    return (0, n.jsxs)(d.Z, {
        children: [
            t === c.ij.FRIENDS_INTRO &&
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(e.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: u.intl.string(x.default["4xZpq4"]),
                        }),
                        r.map((i) =>
                            (0, n.jsxs)(
                                "div",
                                {
                                    children: [
                                        (0, n.jsx)(s.Z, {
                                            user: i,
                                            size: o.EF.SIZE_120,
                                        }),
                                        (0, n.jsx)(e.xvT, {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: i.username,
                                        }),
                                    ],
                                },
                                i.id,
                            ),
                        ),
                    ],
                }),
            t === c.ij.FRIENDS_BEST &&
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(e.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: u.intl.string(x.default.d5HUsD),
                        }),
                        (0, n.jsx)(s.Z, {
                            user: p.user,
                            size: o.EF.SIZE_120,
                        }),
                        (0, n.jsx)(e.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: u.intl.format(x.default.wz2JuF, {
                                user: p.user.username,
                                userHook: (i, t) =>
                                    (0, n.jsx)(
                                        e.xvT,
                                        {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: i,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(e.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: u.intl.string(x.default.wWKySP),
                        }),
                        (0, n.jsx)(e.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.numMessagesSent,
                        }),
                        (0, n.jsx)(e.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: u.intl.string(x.default.lXT6ns),
                        }),
                        (0, n.jsx)(e.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.numVoiceMinutes,
                        }),
                    ],
                }),
        ],
    });
}
