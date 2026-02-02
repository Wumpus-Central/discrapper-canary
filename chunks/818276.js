n.d(t, {
    A: () => v,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(341915),
    c = n(890687),
    d = n(398025),
    u = n(568329),
    m = n(207869),
    p = n(158265),
    h = n(963713),
    x = n(277928),
    g = n(783602),
    f = n(272111),
    b = n(596850);
let v = l.forwardRef(function (e, t) {
    var n, r;
    let { className: v, overlayRef: j } = e,
        { expansionSpring: _ } = l.useContext(u.PW),
        { quest: y, taskDetails: A, isExpanded: C, isExpansionAnimationComplete: S } = l.useContext(h.T),
        O = (null == (n = y.userStatus) ? void 0 : n.completedAt) != null,
        T = (0, c.I3)(y),
        E = l.useRef(null),
        N = (null == (r = y.userStatus) ? void 0 : r.enrolledAt) != null,
        w = null != T ? T.percentComplete : A.percentComplete,
        [I, k] = l.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            O &&
                (0, a.jsx)(p.A, {
                    overlayRef: j,
                    progressBarRef: E,
                    isHovered: I,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": C && S,
                className: i()(v, b.hR, {
                    [b.Ag]: C,
                    [b.s]: N,
                }),
                style: {
                    opacity: (0, d.a)(
                        _.to({
                            range: [0, 1],
                            output: [1, 0],
                        }),
                    ),
                    backgroundImage: O ? "linear-gradient(90deg, ".concat(f.V, ", ").concat(f.u, ")") : void 0,
                },
                onMouseEnter: () => k(!0),
                onMouseLeave: () => k(!1),
                children: (0, a.jsxs)("div", {
                    className: b.o8,
                    children: [
                        O &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(g.A, {}),
                                    (0, a.jsx)("div", {
                                        className: b.yF,
                                    }),
                                ],
                            }),
                        N
                            ? (0, a.jsx)(x.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: E,
                                  isExpanded: !1,
                                  percentComplete: w,
                              })
                            : null,
                        O &&
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
