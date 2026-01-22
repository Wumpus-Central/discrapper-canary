n.d(t, {
    A: () => g,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(108531),
    o = n(341915),
    c = n(890687),
    d = n(568329),
    u = n(207869),
    m = n(158265),
    p = n(963713),
    h = n(277928),
    f = n(783602),
    x = n(272111),
    b = n(596850);
let g = l.forwardRef(function (e, t) {
    var n, i;
    let { className: g, overlayRef: v } = e,
        { expansionSpring: j } = l.useContext(d.PW),
        { quest: y, taskDetails: _, isExpanded: A, isExpansionAnimationComplete: C } = l.useContext(p.T),
        S = (null == (n = y.userStatus) ? void 0 : n.completedAt) != null,
        O = (0, c.I3)(y),
        E = l.useRef(null),
        N = (null == (i = y.userStatus) ? void 0 : i.enrolledAt) != null,
        T = null != O ? O.percentComplete : _.percentComplete,
        [I, w] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            S &&
                (0, a.jsx)(m.A, {
                    overlayRef: v,
                    progressBarRef: E,
                    isHovered: I,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": A && C,
                className: r()(g, b.hR, {
                    [b.Ag]: A,
                    [b.s]: N,
                }),
                style: {
                    opacity: j.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: S ? "linear-gradient(90deg, ".concat(x.V, ", ").concat(x.u, ")") : void 0,
                },
                onMouseEnter: () => w(!0),
                onMouseLeave: () => w(!1),
                children: (0, a.jsxs)("div", {
                    className: b.o8,
                    children: [
                        S &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(f.A, {}),
                                    (0, a.jsx)("div", {
                                        className: b.yF,
                                    }),
                                ],
                            }),
                        N
                            ? (0, a.jsx)(h.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: E,
                                  isExpanded: !1,
                                  percentComplete: T,
                              })
                            : null,
                        S &&
                            (0, a.jsx)(u.f, {
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
