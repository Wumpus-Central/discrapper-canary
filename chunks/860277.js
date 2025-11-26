i.d(e, { Z: () => p });
var n = i(54381),
    r = i(793030),
    l = i(442837),
    a = i(99690),
    s = i(5888),
    d = i(198358),
    c = i(612776),
    o = i(268685),
    u = i(140939),
    x = i(388032);
function p(t) {
    let { step: e } = t,
        { users: i = [], sidekick: p } = (0, l.e7)([s.Z], () => s.Z.getCheckpointData());
    if (null != p)
        return (0, n.jsxs)(d.Z, {
            children: [
                e === c.ij.FRIENDS_INTRO &&
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(r.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: x.intl.string(u.default["4xZpq4"]),
                            }),
                            i.map((t) =>
                                (0, n.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, n.jsx)(a.Z, {
                                                user: t,
                                                size: o.EF.SIZE_120,
                                            }),
                                            (0, n.jsx)(r.xvT, {
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
                e === c.ij.FRIENDS_BEST &&
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(r.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: x.intl.string(u.default.d5HUsD),
                            }),
                            (0, n.jsx)(a.Z, {
                                user: p.user,
                                size: o.EF.SIZE_120,
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-md",
                                color: "text-primary",
                                children: x.intl.format(u.default.wz2JuF, {
                                    user: null == p ? void 0 : p.user.username,
                                    userHook: (t, e) =>
                                        (0, n.jsx)(
                                            r.xvT,
                                            {
                                                variant: "display-lg",
                                                color: "text-primary",
                                                children: t,
                                            },
                                            e,
                                        ),
                                }),
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-sm",
                                color: "text-primary",
                                children: x.intl.string(u.default.wWKySP),
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-sm",
                                color: "text-primary",
                                children: p.numMessagesSent,
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-sm",
                                color: "text-primary",
                                children: x.intl.string(u.default.lXT6ns),
                            }),
                            (0, n.jsx)(r.xvT, {
                                variant: "display-sm",
                                color: "text-primary",
                                children: p.numVoiceMinutes,
                            }),
                        ],
                    }),
            ],
        });
}
