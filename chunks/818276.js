n.d(t, { A: () => v });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(563495),
    o = n(341915),
    d = n(890687),
    c = n(398025),
    u = n(568329),
    m = n(207869),
    h = n(158265),
    x = n(963713),
    p = n(277928),
    g = n(783602),
    _ = n(272111),
    f = n(596850);
let v = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: i } = e,
        { expansionSpring: v } = s.useContext(u.PW),
        { quest: b, taskDetails: j, isExpanded: A, isExpansionAnimationComplete: C } = s.useContext(x.T),
        S = b.userStatus?.completedAt != null,
        T = (0, d.I3)(b),
        y = s.useRef(null),
        N = b.userStatus?.enrolledAt != null,
        E = null != T ? T.percentComplete : j.percentComplete,
        [I, k] = s.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            S && (0, a.jsx)(h.A, { overlayRef: i, progressBarRef: y, isHovered: I }),
            (0, a.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": A && C,
                className: l()(n, f.hR, { [f.Ag]: A, [f.s]: N }),
                style: {
                    opacity: (0, c.a)(v.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: S ? `linear-gradient(90deg, ${_.V}, ${_.u})` : void 0,
                },
                onMouseEnter: () => k(!0),
                onMouseLeave: () => k(!1),
                children: (0, a.jsxs)("div", {
                    className: f.o8,
                    children: [
                        S &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.A, {}), (0, a.jsx)("div", { className: f.yF })],
                            }),
                        N
                            ? (0, a.jsx)(p.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: y,
                                  isExpanded: !1,
                                  percentComplete: E,
                              })
                            : null,
                        S &&
                            (0, a.jsx)(m.f, {
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
