n.d(e, { W: () => _, default: () => x });
var s,
    i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(235986),
    o = n(278941),
    T = n(665909),
    c = n(758601),
    d = n(407058),
    S = n(772194),
    A = n(985018),
    u = n(53483),
    _ =
        (((s = {}).ACTIONS = "ACTIONS"),
        (s.SAFETY_TIPS = "SAFETY_TIPS"),
        (s.ABOUT_SAFETY_ALERTS = "ABOUT_SAFETY_ALERTS"),
        s);
let x = (t) => {
    let { onClose: e, channelId: n, warningId: s, warningType: _, otherUserId: x, transitionState: E } = t,
        m = null != (0, o.e)(n),
        [O, g] = l.useState("ACTIONS"),
        h = l.useCallback(
            (t) => {
                (0, T._$)({ channelId: n, warningId: s, warningType: _, senderId: x, cta: t, isNudgeWarning: m });
            },
            [n, s, _, x, m],
        ),
        j = l.useCallback((t) => {
            let { text: e, onClick: n } = t;
            return (0, i.jsx)(r.QWc, { onClick: n, text: e, variant: "secondary", textVariant: "text-sm/normal" });
        }, []),
        C = l.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                case "ABOUT_SAFETY_ALERTS":
                    return (0, i.jsx)(j, { text: A.intl.string(A.t["13/7kX"]), onClick: () => g("ACTIONS") });
                default:
                    return null;
            }
        }, [O, j]),
        b = l.useCallback(() => {
            switch (O) {
                case "SAFETY_TIPS":
                    return A.intl.string(A.t.EtNxi6);
                case "ABOUT_SAFETY_ALERTS":
                    return A.intl.string(A.t.qI14KM);
                default:
                    return A.intl.string(A.t.MAhAp6);
            }
        }, [O]),
        L = l.useCallback(
            (t) => {
                g(t);
            },
            [g],
        );
    return (0, i.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: E,
        "aria-label": A.intl.string(A.t.eXlt01),
        size: r.rIJ.SMALL,
        parentComponent: "SafetyToolsModal",
        children: [
            (0, i.jsx)(r.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: u.H,
                justify: a.A.Justify.CENTER,
                children: (0, i.jsx)(r.Heading, { variant: "heading-xl/semibold", children: b() }),
            }),
            (0, i.jsx)(r.HOs, {
                children: (0, i.jsxs)(r.tN_, {
                    activeSlide: O,
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
                            children: (0, i.jsx)(c.A, {
                                channelId: n,
                                onClose: () => {
                                    e(), h(T.Wm.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS);
                                },
                            }),
                        }),
                        (0, i.jsx)(r.q7S, { id: "SAFETY_TIPS", children: (0, i.jsx)(S.A, {}) }),
                    ],
                }),
            }),
            (0, i.jsxs)(r.jlY, {
                "data-migration-pending": !0,
                justify: a.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(j, {
                        text: A.intl.string(A.t.cpT0Cq),
                        onClick: () => {
                            e(), h(T.Wm.USER_SAFETY_TOOLS_DISMISS);
                        },
                    }),
                    C(),
                ],
            }),
        ],
    });
};
