n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(419354),
    o = n(341915),
    d = n(890687),
    c = n(398025),
    u = n(568329),
    p = n(207869),
    h = n(158265),
    m = n(963713),
    _ = n(277928),
    A = n(783602),
    f = n(272111),
    g = n(249309);
let x = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: x } = s.useContext(u.PW),
        { quest: E, taskDetails: C, isExpanded: T, isExpansionAnimationComplete: v } = s.useContext(m.T),
        S = E.userStatus?.completedAt != null,
        b = (0, d.I3)(E),
        j = s.useRef(null),
        I = E.userStatus?.enrolledAt != null,
        R = null != b ? b.percentComplete : C.percentComplete,
        [N, y] = s.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            S && (0, i.jsx)(h.A, { overlayRef: l, progressBarRef: j, isHovered: N }),
            (0, i.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": T && v,
                className: a()(n, g.hR, { [g.Ag]: T, [g.s]: I }),
                style: {
                    opacity: (0, c.a)(x.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: S ? `linear-gradient(90deg, ${f.V1}, ${f.us})` : void 0,
                },
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                children: (0, i.jsxs)("div", {
                    className: g.o8,
                    children: [
                        S &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(A.A, {}), (0, i.jsx)("div", { className: g.yF })],
                            }),
                        I
                            ? (0, i.jsx)(_.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: j,
                                  isExpanded: !1,
                                  percentComplete: R,
                              })
                            : null,
                        S &&
                            (0, i.jsx)(p.f, {
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: o.X0.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                sourceQuestContent: o.uF.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
