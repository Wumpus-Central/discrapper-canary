n.d(t, { Z: () => p });
var i = n(54381),
    s = n(793030),
    r = n(442837),
    l = n(99690),
    o = n(5888),
    a = n(198358),
    c = n(612776),
    u = n(268685),
    d = n(140939),
    m = n(388032);
function p(e) {
    let { step: t } = e,
        { users: n = [], sidekick: p } = (0, r.e7)([o.Z], () => o.Z.getCheckpointData());
    if (null != p)
        return (0, i.jsxs)(a.Z, {
            children: [
                t === c.ij.FRIENDS_INTRO &&
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(s.xvT, {
                                variant: "display-md",
                                color: "text-strong",
                                children: m.intl.string(d.default["4xZpq4"]),
                            }),
                            n.map((e) =>
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, i.jsx)(l.Z, {
                                                user: e,
                                                size: u.EF.SIZE_120,
                                            }),
                                            (0, i.jsx)(s.xvT, {
                                                variant: "display-lg",
                                                color: "text-strong",
                                                children: e.username,
                                            }),
                                        ],
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                t === c.ij.FRIENDS_BEST &&
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(s.xvT, {
                                variant: "display-md",
                                color: "text-strong",
                                children: m.intl.string(d.default.d5HUsD),
                            }),
                            (0, i.jsx)(l.Z, {
                                user: p.user,
                                size: u.EF.SIZE_120,
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-md",
                                color: "text-strong",
                                children: m.intl.format(d.default.wz2JuF, {
                                    user: null == p ? void 0 : p.user.username,
                                    userHook: (e, t) =>
                                        (0, i.jsx)(
                                            s.xvT,
                                            {
                                                variant: "display-lg",
                                                color: "text-strong",
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-sm",
                                color: "text-strong",
                                children: m.intl.string(d.default.wWKySP),
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-sm",
                                color: "text-strong",
                                children: p.numMessagesSent,
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-sm",
                                color: "text-strong",
                                children: m.intl.string(d.default.lXT6ns),
                            }),
                            (0, i.jsx)(s.xvT, {
                                variant: "display-sm",
                                color: "text-strong",
                                children: p.numVoiceMinutes,
                            }),
                        ],
                    }),
            ],
        });
}
