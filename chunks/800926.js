n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(49436),
    c = n(968843),
    d = n(217599),
    u = n(373322),
    p = n(167308),
    m = n(26275),
    g = n(945165),
    f = n(504350);
let h = s.forwardRef(function (e, t) {
    var n, o;
    let {
            className: h,
            expansionSpring: x,
            isExpanded: _,
            isExpansionAnimationComplete: b,
            quest: j,
            taskDetails: v,
            useReducedMotion: C,
            onCtxMenuOpen: y,
            onCtxMenuClose: E,
            onCtxMenuSelect: O,
            overlayRef: S,
        } = e,
        T = (null == (n = j.userStatus) ? void 0 : n.completedAt) != null,
        w = (0, c.Jf)(j),
        P = s.useRef(null),
        N = (null == (o = j.userStatus) ? void 0 : o.enrolledAt) != null,
        R = null != w ? w.percentComplete : v.percentComplete,
        [A, B] = s.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            T &&
                (0, r.jsx)(u.Z, {
                    expansionSpring: x,
                    overlayRef: S,
                    progressBarRef: P,
                    quest: j,
                    isExpanded: _,
                    isHovered: A,
                }),
            (0, r.jsx)(i.animated.div, {
                ref: t,
                "aria-hidden": _ && b,
                className: a()(h, f.contentCollapsed, {
                    [f.contentCollapsedExpanded]: _,
                    [f.contentCollapsedAccepted]: N,
                }),
                style: {
                    opacity: x.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: T ? "linear-gradient(90deg, ".concat(g.cd, ", ").concat(g.v$, ")") : void 0,
                },
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1),
                children: (0, r.jsxs)("div", {
                    className: f.contentCollapsedWrapper,
                    children: [
                        T &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        quest: j,
                                        onCtxMenuOpen: y,
                                        onCtxMenuClose: E,
                                        onCtxMenuSelect: O,
                                    }),
                                    (0, r.jsx)("div", { className: f.divider }),
                                ],
                            }),
                        N
                            ? (0, r.jsx)(p.Z, {
                                  contentLocation: "collapsed",
                                  quest: j,
                                  progressBarRef: P,
                                  isExpanded: !1,
                                  percentComplete: R,
                              })
                            : null,
                        T &&
                            (0, r.jsx)(d.r, {
                                quest: j,
                                useReducedMotion: C,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: l.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: v,
                                sourceQuestContent: l.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
