n.d(t, { Z: () => f }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(467721),
    o = n(49436),
    c = n(968843),
    d = n(217599),
    u = n(373322),
    m = n(167308),
    p = n(26275),
    h = n(945165),
    x = n(504350);
let f = r.forwardRef(function (e, t) {
    var n, i;
    let {
            className: f,
            expansionSpring: g,
            isExpanded: b,
            isExpansionAnimationComplete: v,
            quest: j,
            taskDetails: _,
            useReducedMotion: y,
            onCtxMenuOpen: C,
            onCtxMenuClose: S,
            onCtxMenuSelect: E,
            overlayRef: O,
        } = e,
        T = (null == (n = j.userStatus) ? void 0 : n.completedAt) != null,
        N = (0, c.Jf)(j),
        P = r.useRef(null),
        w = (null == (i = j.userStatus) ? void 0 : i.enrolledAt) != null,
        I = null != N ? N.percentComplete : _.percentComplete,
        [k, R] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            T &&
                (0, a.jsx)(u.Z, {
                    expansionSpring: g,
                    overlayRef: O,
                    progressBarRef: P,
                    quest: j,
                    isExpanded: b,
                    isHovered: k,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": b && v,
                className: l()(f, x.contentCollapsed, {
                    [x.contentCollapsedExpanded]: b,
                    [x.contentCollapsedAccepted]: w,
                }),
                style: {
                    opacity: g.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: T ? "linear-gradient(90deg, ".concat(h.cd, ", ").concat(h.v$, ")") : void 0,
                },
                onMouseEnter: () => R(!0),
                onMouseLeave: () => R(!1),
                children: (0, a.jsxs)("div", {
                    className: x.contentCollapsedWrapper,
                    children: [
                        T &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(p.Z, {
                                        quest: j,
                                        onCtxMenuOpen: C,
                                        onCtxMenuClose: S,
                                        onCtxMenuSelect: E,
                                    }),
                                    (0, a.jsx)("div", { className: x.divider }),
                                ],
                            }),
                        w
                            ? (0, a.jsx)(m.Z, {
                                  contentLocation: "collapsed",
                                  quest: j,
                                  progressBarRef: P,
                                  isExpanded: !1,
                                  percentComplete: I,
                              })
                            : null,
                        T &&
                            (0, a.jsx)(d.r, {
                                quest: j,
                                useReducedMotion: y,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: o.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: _,
                                sourceQuestContent: o.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
