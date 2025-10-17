r.d(t, { Z: () => v });
var e = r(951288),
    n = r(647438),
    a = r(793030),
    l = r(442837),
    s = r(99690),
    d = r(594174),
    c = r(5888),
    o = r(198358),
    x = r(612776),
    u = r(268685),
    p = r(484718),
    m = r(388032);
function v(i) {
    let { slide: t } = i,
        { users: r } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()),
        v = (0, n.useMemo)(
            () =>
                r
                    .map((i) => {
                        let { userId: t } = i;
                        return d.default.getUser(t);
                    })
                    .filter((i) => null != i),
            [r],
        );
    return (0, e.jsxs)(o.Z, {
        children: [
            t === x.Ww.FRIENDS &&
                (0, e.jsxs)("div", {
                    children: [
                        (0, e.jsx)(a.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: m.intl.string(p.default["4xZpq6"]),
                        }),
                        v.slice(1).map((i) =>
                            (0, e.jsxs)(
                                "div",
                                {
                                    children: [
                                        (0, e.jsx)(s.Z, {
                                            user: i,
                                            size: u.EF.SIZE_120,
                                        }),
                                        (0, e.jsx)(a.xvT, {
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
            t === x.Ww.BEST_FRIEND &&
                (0, e.jsxs)("div", {
                    children: [
                        (0, e.jsx)(a.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: m.intl.string(p.default.d5HUsL),
                        }),
                        (0, e.jsx)(s.Z, {
                            user: v[0],
                            size: u.EF.SIZE_120,
                        }),
                        (0, e.jsx)(a.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: m.intl.format(p.default.wz2JuL, {
                                user: v[0].username,
                                userHook: (i, t) =>
                                    (0, e.jsx)(
                                        a.xvT,
                                        {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: i,
                                        },
                                        t,
                                    ),
                            }),
                        }),
                        (0, e.jsx)(a.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: m.intl.string(p.default.wWKySE),
                        }),
                        (0, e.jsx)(a.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: r[0].numMessagesSent,
                        }),
                        (0, e.jsx)(a.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: m.intl.string(p.default.lXT6np),
                        }),
                        (0, e.jsx)(a.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: r[0].numMinutesInVoice,
                        }),
                    ],
                }),
        ],
    });
}
