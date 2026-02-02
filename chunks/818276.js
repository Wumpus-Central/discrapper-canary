n.d(t, {
    A: () => b,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(341915),
    c = n(890687),
    d = n(568329),
    u = n(207869),
    m = n(158265),
    p = n(963713),
    h = n(277928),
    x = n(783602),
    g = n(272111),
    f = n(596850);
let b = l.forwardRef(function (e, t) {
    var n, r;
    let { className: b, overlayRef: v } = e,
        { expansionSpring: j } = l.useContext(d.PW),
        { quest: _, taskDetails: y, isExpanded: A, isExpansionAnimationComplete: C } = l.useContext(p.T),
        S = (null == (n = _.userStatus) ? void 0 : n.completedAt) != null,
        O = (0, c.I3)(_),
        T = l.useRef(null),
        E = (null == (r = _.userStatus) ? void 0 : r.enrolledAt) != null,
        N = null != O ? O.percentComplete : y.percentComplete,
        [w, I] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            S &&
                (0, a.jsx)(m.A, {
                    overlayRef: v,
                    progressBarRef: T,
                    isHovered: w,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": A && C,
                className: i()(b, f.hR, {
                    [f.Ag]: A,
                    [f.s]: E,
                }),
                style: {
                    opacity: j.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: S ? "linear-gradient(90deg, ".concat(g.V, ", ").concat(g.u, ")") : void 0,
                },
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, a.jsxs)("div", {
                    className: f.o8,
                    children: [
                        S &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(x.A, {}),
                                    (0, a.jsx)("div", {
                                        className: f.yF,
                                    }),
                                ],
                            }),
                        E
                            ? (0, a.jsx)(h.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: T,
                                  isExpanded: !1,
                                  percentComplete: N,
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
