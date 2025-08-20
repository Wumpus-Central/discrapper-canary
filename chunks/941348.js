n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(113434),
    o = n(308069),
    s = n(613087),
    l = n(457153),
    c = n(495722),
    u = n(321025),
    d = n(975888);
let f = function (e) {
    var t;
    let {
            expandedContentRef: n,
            expansionSpring: f,
            isExpanded: _,
            isExpansionAnimationComplete: p,
            onCtxMenuOpened: h,
            onCtxMenuClosed: m,
            onCtxMenuSelection: g,
            quest: E,
            useReducedMotion: b,
            collapsedHeight: y,
            shouldShowRewardsCTAWhenCollapsed: O,
        } = e,
        v = i.useRef(null),
        I = i.useRef(null),
        T = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null,
        S = (0, a.Rf)(E);
    return (0, r.jsxs)(s.p, {
        expandedContentRef: n,
        collapsedContentRef: v,
        expansionSpring: f,
        children: [
            (0, r.jsx)(
                l.Z,
                {
                    ref: v,
                    className: d.content,
                    expansionSpring: f,
                    isExpanded: _,
                    isExpansionAnimationComplete: p,
                    quest: E,
                    useReducedMotion: b,
                    taskDetails: S,
                    onCtxMenuOpen: h,
                    onCtxMenuClose: m,
                    onCtxMenuSelect: g,
                    overlayRef: I,
                    shouldShowRewardsCTAWhenCollapsed: O,
                },
                O ? "collapsed-with-rewards" : "collapsed-without-rewards",
            ),
            (0, r.jsx)(c.Z, {
                expansionSpring: f,
                className: d.content,
                collapsedHeight: y,
                onCtxMenuOpen: h,
                onCtxMenuClose: m,
                onCtxMenuSelect: g,
                overlayRef: I,
                isExpanded: _,
                isExpansionAnimationComplete: p,
                quest: E,
                useReducedMotion: b,
                ref: n,
                taskDetails: S,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, {
                            expansionSpring: f,
                            isExpanded: _,
                        }),
                        !T &&
                            (0, r.jsx)(o.Z, {
                                quest: E,
                                expansionSpring: f,
                                useReducedMotion: b,
                                isExpanded: _,
                                isExpansionAnimationComplete: p,
                                onCtxMenuOpen: h,
                                onCtxMenuClose: m,
                                onCtxMenuSelect: g,
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                ref: I,
                className: d.overlay,
            }),
        ],
    });
};
