e.d(r, { Z: () => p });
var i = e(951288),
    n = e(793030),
    l = e(442837),
    a = e(99690),
    s = e(5888),
    d = e(198358),
    c = e(612776),
    o = e(268685),
    u = e(892694),
    x = e(388032);
function p(t) {
    let { step: r } = t,
        { users: e, sidekick: p } = (0, l.e7)([s.Z], () => s.Z.getCheckpointData());
    return (0, i.jsxs)(d.Z, {
        children: [
            r === c.ij.FRIENDS_INTRO &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(n.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: x.intl.string(u.default["4xZpq4"]),
                        }),
                        e.map((t) =>
                            (0, i.jsxs)(
                                "div",
                                {
                                    children: [
                                        (0, i.jsx)(a.Z, {
                                            user: t,
                                            size: o.EF.SIZE_120,
                                        }),
                                        (0, i.jsx)(n.xvT, {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: t.username,
                                        }),
                                    ],
                                },
                                t.id,
                            ),
                        ),
                    ],
                }),
            r === c.ij.FRIENDS_BEST &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(n.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: x.intl.string(u.default.d5HUsD),
                        }),
                        (0, i.jsx)(a.Z, {
                            user: p.user,
                            size: o.EF.SIZE_120,
                        }),
                        (0, i.jsx)(n.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: x.intl.format(u.default.wz2JuF, {
                                user: p.user.username,
                                userHook: (t, r) =>
                                    (0, i.jsx)(
                                        n.xvT,
                                        {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: t,
                                        },
                                        r,
                                    ),
                            }),
                        }),
                        (0, i.jsx)(n.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: x.intl.string(u.default.wWKySP),
                        }),
                        (0, i.jsx)(n.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.numMessagesSent,
                        }),
                        (0, i.jsx)(n.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: x.intl.string(u.default.lXT6ns),
                        }),
                        (0, i.jsx)(n.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.numVoiceMinutes,
                        }),
                    ],
                }),
        ],
    });
}
