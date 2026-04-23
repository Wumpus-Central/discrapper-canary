n.d(e, { W: () => g, default: () => h });
var s,
    i = n(627968),
    l = n(64700),
    r = n(123292),
    a = n(935462),
    o = n(534514),
    c = n(573613),
    d = n(430690),
    T = n(235986),
    S = n(278941),
    u = n(665909),
    A = n(758601),
    _ = n(407058),
    x = n(772194),
    E = n(985018),
    m = n(837248),
    g =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s);
let h = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: g, otherUserId: h, transitionState: O } = t,
        j = null != (0, S.e)(n),
        [b, C] = l.useState("ACTIONS"),
        L = l.useCallback(
            (t) => {
                (0, u._$)({ channelId: n, warningId: s, warningType: g, senderId: h, cta: t, isNudgeWarning: j });
            },
            [n, s, g, h, j],
        ),
        p = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(r.Q, { onClick: n, text: e, variant: "secondary", textVariant: "text-sm/normal" });
        }, []),
        R = l.useCallback(() => {
            switch (b) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, i.jsx)(p, { text: E.intl.string(E.t["13/7kX"]), onClick: () => C("ACTIONS") });
                default:
                    return null;
            }
        }, [b, p]),
        N = l.useCallback(() => {
            switch (b) {
                case "SAFETY_TIPS":
                    return E.intl.string(E.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return E.intl.string(E.t.qI14KM);
                default:
                    return E.intl.string(E.t.MAhAp6);
            }
        }, [b]),
        I = l.useCallback(
            (t) => {
                C(t);
            },
            [C],
        );
    return (0, i.jsxs)(a.EO, {
        "data-migration-pending": !0,
        transitionState: O,
        "aria-label": E.intl.string(E.t.eXlt01),
        size: a.rI.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(a.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: m.H,
                justify: T.A.Justify.CENTER,
                children: (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: N() }),
            }),
            (0, i.jsx)(c.Ip, {
                children: (0, i.jsxs)(d.t, {
                    activeSlide: b,
                    width: 440,
                    children: [
                        (0, i.jsx)(d.q, {
                            id: "ACTIONS",
                            children: (0, i.jsx)(_.A, {
                                otherUserId: h,
                                channelId: n,
                                warningId: s,
                                warningType: g,
                                transitionToSlide: I,
                            }),
                        }),
                        (0, i.jsx)(d.q, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, i.jsx)(A.A, {
                                channelId: n,
                                onClose: () => {
                                    e(), L(u.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, i.jsx)(d.q, { id: "SAFETY_TIPS", children: (0, i.jsx)(x.A, {}) }),
                    ],
                }),
            }),
            (0, i.jsxs)(a.jl, {
                "data-migration-pending": !0,
                justify: T.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(p, {
                        text: E.intl.string(E.t.cpT0Cq),
                        onClick: () => {
                            e(), L(u.Wm.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    R(),
                ],
            }),
        ],
    });
};
