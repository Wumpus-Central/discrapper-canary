n.d(t, { Z: () => p });
var r = n(951288),
    s = n(647438),
    o = n(113434),
    a = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(495722),
    u = n(321025),
    d = n(975888);
let p = function (e) {
    var t;
    let {
            expandedContentRef: n,
            expansionSpring: p,
            isExpanded: m,
            isExpansionAnimationComplete: g,
            onCtxMenuOpened: f,
            onCtxMenuClosed: x,
            onCtxMenuSelection: h,
            quest: b,
            useReducedMotion: _,
            collapsedHeight: j,
            shouldShowRewardsCTAWhenCollapsed: v,
        } = e,
        C = s.useRef(null),
        y = s.useRef(null),
        E = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null,
        O = (0, o.Rf)(b);
    return (0, r.jsxs)(i.p, {
        expandedContentRef: n,
        collapsedContentRef: C,
        expansionSpring: p,
        children: [
            (0, r.jsx)(
                l.Z,
                {
                    ref: C,
                    className: d.content,
                    expansionSpring: p,
                    isExpanded: m,
                    isExpansionAnimationComplete: g,
                    quest: b,
                    useReducedMotion: _,
                    taskDetails: O,
                    onCtxMenuOpen: f,
                    onCtxMenuClose: x,
                    onCtxMenuSelect: h,
                    overlayRef: y,
                    shouldShowRewardsCTAWhenCollapsed: v,
                },
                v ? "collapsed-with-rewards" : "collapsed-without-rewards",
            ),
            (0, r.jsx)(c.Z, {
                expansionSpring: p,
                className: d.content,
                collapsedHeight: j,
                onCtxMenuOpen: f,
                onCtxMenuClose: x,
                onCtxMenuSelect: h,
                overlayRef: y,
                isExpanded: m,
                isExpansionAnimationComplete: g,
                quest: b,
                useReducedMotion: _,
                ref: n,
                taskDetails: O,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, {
                            expansionSpring: p,
                            isExpanded: m,
                        }),
                        !E &&
                            (0, r.jsx)(a.Z, {
                                quest: b,
                                expansionSpring: p,
                                useReducedMotion: _,
                                isExpanded: m,
                                isExpansionAnimationComplete: g,
                                onCtxMenuOpen: f,
                                onCtxMenuClose: x,
                                onCtxMenuSelect: h,
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                ref: y,
                className: d.overlay,
            }),
        ],
    });
};
