t.d(e, { Z: () => h });
var n = t(951288),
    r = t(647438),
    s = t(793030),
    l = t(442837),
    a = t(99690),
    d = t(594174),
    c = t(5888),
    o = t(198358),
    x = t(612776),
    u = t(268685),
    m = t(509950),
    p = t(388032);
function h(i) {
    let { slide: e } = i,
        { sidekicks: t } = (0, l.e7)([c.Z], () => c.Z.getCheckpointData()),
        h = (0, r.useMemo)(
            () =>
                t
                    .map((i) => {
                        let { userId: e } = i;
                        return d.default.getUser(e);
                    })
                    .filter((i) => null != i),
            [t],
        );
    return (0, n.jsxs)(o.Z, {
        children: [
            e === x.W.FRIENDS &&
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: p.intl.string(m.default["4xZpq6"]),
                        }),
                        h.slice(1).map((i) =>
                            (0, n.jsxs)(
                                "div",
                                {
                                    children: [
                                        (0, n.jsx)(a.Z, {
                                            user: i,
                                            size: u.EF.SIZE_120,
                                        }),
                                        (0, n.jsx)(s.xvT, {
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
            e === x.W.BEST_FRIEND &&
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(s.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: p.intl.string(m.default.d5HUsL),
                        }),
                        (0, n.jsx)(a.Z, {
                            user: h[0],
                            size: u.EF.SIZE_120,
                        }),
                        (0, n.jsx)(s.xvT, {
                            variant: "display-md",
                            color: "text-primary",
                            children: p.intl.format(m.default.wz2JuL, {
                                user: h[0].username,
                                userHook: (i, e) =>
                                    (0, n.jsx)(
                                        s.xvT,
                                        {
                                            variant: "display-lg",
                                            color: "text-primary",
                                            children: i,
                                        },
                                        e,
                                    ),
                            }),
                        }),
                        (0, n.jsx)(s.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.intl.string(m.default.fQGHXl),
                        }),
                        (0, n.jsx)(s.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: t[0].numMessagesSent,
                        }),
                        (0, n.jsx)(s.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: p.intl.string(m.default.Vrdyam),
                        }),
                        (0, n.jsx)(s.xvT, {
                            variant: "display-sm",
                            color: "text-primary",
                            children: t[0].numMinutesInVoice,
                        }),
                    ],
                }),
        ],
    });
}
