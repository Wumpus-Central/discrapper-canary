n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(880013),
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
    f = n(537536);
let v = i.forwardRef(function (e, t) {
    let { className: n, overlayRef: s } = e,
        { expansionSpring: v } = i.useContext(u.PW),
        { quest: b, taskDetails: j, isExpanded: A, isExpansionAnimationComplete: C } = i.useContext(x.T),
        y = b.userStatus?.completedAt != null,
        T = (0, d.I3)(b),
        S = i.useRef(null),
        E = b.userStatus?.enrolledAt != null,
        N = null != T ? T.percentComplete : j.percentComplete,
        [I, k] = i.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            y && (0, a.jsx)(h.A, { overlayRef: s, progressBarRef: S, isHovered: I }),
            (0, a.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": A && C,
                className: l()(n, f.hR, { [f.Ag]: A, [f.s]: E }),
                style: {
                    opacity: (0, c.a)(v.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: y ? `linear-gradient(90deg, ${_.V1}, ${_.us})` : void 0,
                },
                onMouseEnter: () => k(!0),
                onMouseLeave: () => k(!1),
                children: (0, a.jsxs)("div", {
                    className: f.o8,
                    children: [
                        y &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(g.A, {}), (0, a.jsx)("div", { className: f.yF })],
                            }),
                        E
                            ? (0, a.jsx)(p.A, {
                                  contentLocation: "collapsed",
                                  progressBarRef: S,
                                  isExpanded: !1,
                                  percentComplete: N,
                              })
                            : null,
                        y &&
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
