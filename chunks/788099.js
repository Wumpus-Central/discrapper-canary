n.d(e, {
    W: () => _,
    default: () => x,
}),
    n(896048);
var s,
    i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(235986),
    o = n(278941),
    c = n(665909),
    T = n(758601),
    d = n(407058),
    S = n(772194),
    u = n(985018),
    A = n(53483),
    _ =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s);
let x = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: _, otherUserId: x, transitionState: E } = t,
        O = null != (0, o.e)(n),
        [m, g] = l.useState("ACTIONS"),
        b = l.useCallback(
            (t) => {
                (0, c._$)({
                    channelId: n,
                    warningId: s,
                    warningType: _,
                    senderId: x,
                    cta: t,
                    isNudgeWarning: O,
                });
            },
            [n, s, _, x, O],
        ),
        h = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(r.QWc, {
                onClick: n,
                text: e,
                variant: "secondary",
                textVariant: "text-sm/normal",
            });
        }, []),
        j = l.useCallback(() => {
            switch (m) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, i.jsx)(h, {
                        text: u.intl.string(u.t["13/7kX"]),
                        onClick: () => g("ACTIONS"),
                    });
                default:
                    return null;
            }
        }, [m, h]),
        C = l.useCallback(() => {
            switch (m) {
                case "SAFETY_TIPS":
                    return u.intl.string(u.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return u.intl.string(u.t.qI14KM);
                default:
                    return u.intl.string(u.t.MAhAp6);
            }
        }, [m]),
        L = l.useCallback(
            (t) => {
                g(t);
            },
            [g],
        );
    return (0, i.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: E,
        "aria-label": u.intl.string(u.t.eXlt01),
        size: r.rIJ.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: A.H,
                justify: a.A.Justify.CENTER,
                children: (0, i.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    children: C(),
                }),
            }),
            (0, i.jsx)(r.HOs, {
                children: (0, i.jsxs)(r.tN_, {
                    activeSlide: m,
                    width: 440,
                    children: [
                        (0, i.jsx)(r.q7S, {
                            id: "ACTIONS",
                            children: (0, i.jsx)(d.A, {
                                otherUserId: x,
                                channelId: n,
                                warningId: s,
                                warningType: _,
                                transitionToSlide: L,
                            }),
                        }),
                        (0, i.jsx)(r.q7S, {
                            id: "ABOUT_SAFETY_ALERTS",
                            children: (0, i.jsx)(T.A, {
                                channelId: n,
                                onClose: () => {
                                    e(), b(c.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, i.jsx)(r.q7S, {
                            id: "SAFETY_TIPS",
                            children: (0, i.jsx)(S.A, {}),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                justify: a.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(h, {
                        text: u.intl.string(u.t.cpT0Cq),
                        onClick: () => {
                            e(), b(c.Wm.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    j(),
                ],
            }),
        ],
    });
};
