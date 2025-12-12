n.d(t, { Z: () => x }), n(388685);
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
    f = n(50683);
let x = r.forwardRef(function (e, t) {
    var n, i;
    let {
            className: x,
            expansionSpring: b,
            isExpanded: g,
            isExpansionAnimationComplete: v,
            quest: j,
            taskDetails: y,
            useReducedMotion: C,
            onCtxMenuOpen: _,
            onCtxMenuClose: S,
            onCtxMenuSelect: E,
            overlayRef: O,
        } = e,
        T = (null == (n = j.userStatus) ? void 0 : n.completedAt) != null,
        N = (0, c.Jf)(j),
        P = r.useRef(null),
        w = (null == (i = j.userStatus) ? void 0 : i.enrolledAt) != null,
        I = null != N ? N.percentComplete : y.percentComplete,
        [k, R] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            T &&
                (0, a.jsx)(u.Z, {
                    expansionSpring: b,
                    overlayRef: O,
                    progressBarRef: P,
                    quest: j,
                    isExpanded: g,
                    isHovered: k,
                }),
            (0, a.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": g && v,
                className: l()(x, f.contentCollapsed, {
                    [f.contentCollapsedExpanded]: g,
                    [f.contentCollapsedAccepted]: w,
                }),
                style: {
                    opacity: b.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: T ? "linear-gradient(90deg, ".concat(h.cd, ", ").concat(h.v$, ")") : void 0,
                },
                onMouseEnter: () => R(!0),
                onMouseLeave: () => R(!1),
                children: (0, a.jsxs)("div", {
                    className: f.contentCollapsedWrapper,
                    children: [
                        T &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(p.Z, {
                                        quest: j,
                                        onCtxMenuOpen: _,
                                        onCtxMenuClose: S,
                                        onCtxMenuSelect: E,
                                    }),
                                    (0, a.jsx)("div", { className: f.divider }),
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
                                useReducedMotion: C,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: o.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: y,
                                sourceQuestContent: o.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
