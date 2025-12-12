n.d(t, { Z: () => g }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(49436),
    c = n(968843),
    d = n(444134),
    u = n(217599),
    m = n(373322),
    p = n(526188),
    h = n(167308),
    f = n(26275),
    x = n(945165),
    b = n(50683);
let g = r.forwardRef(function (e, t) {
    var n, i;
    let { className: g, overlayRef: v } = e,
        { expansionSpring: j } = r.useContext(d.xo),
        { quest: y, taskDetails: C, isExpanded: _, isExpansionAnimationComplete: S } = r.useContext(p.A),
        E = (null == (n = y.userStatus) ? void 0 : n.completedAt) != null,
        T = (0, c.Jf)(y),
        O = r.useRef(null),
        N = (null == (i = y.userStatus) ? void 0 : i.enrolledAt) != null,
        P = null != T ? T.percentComplete : C.percentComplete,
        [w, I] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            E &&
                (0, a.jsx)(m.Z, {
                    overlayRef: v,
                    progressBarRef: O,
                    isHovered: w,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": _ && S,
                className: l()(g, b.contentCollapsed, {
                    [b.contentCollapsedExpanded]: _,
                    [b.contentCollapsedAccepted]: N,
                }),
                style: {
                    opacity: j.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: E ? "linear-gradient(90deg, ".concat(x.cd, ", ").concat(x.v$, ")") : void 0,
                },
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, a.jsxs)("div", {
                    className: b.contentCollapsedWrapper,
                    children: [
                        E &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(f.Z, {}), (0, a.jsx)("div", { className: b.divider })],
                            }),
                        N
                            ? (0, a.jsx)(h.Z, {
                                  contentLocation: "collapsed",
                                  progressBarRef: O,
                                  isExpanded: !1,
                                  percentComplete: P,
                              })
                            : null,
                        E &&
                            (0, a.jsx)(u.r, {
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: o.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                sourceQuestContent: o.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
