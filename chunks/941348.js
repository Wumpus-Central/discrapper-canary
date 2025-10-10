n.d(t, { Z: () => p });
var r = n(951288),
    s = n(647438),
    o = n(113434),
    a = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(495722),
    d = n(321025),
    u = n(975888);
let p = function (e) {
    var t, n;
    let {
            expandedContentRef: p,
            expansionSpring: m,
            isExpanded: g,
            isExpansionAnimationComplete: f,
            onCtxMenuOpened: h,
            onCtxMenuClosed: x,
            onCtxMenuSelection: _,
            quest: b,
            useReducedMotion: v,
            collapsedHeight: j,
            onGameSheetOpened: C,
            onGameSheetClosed: y,
        } = e,
        E = (null == (t = b.userStatus) ? void 0 : t.completedAt) != null,
        O = s.useRef(null),
        S = s.useRef(null),
        T = (null == (n = b.userStatus) ? void 0 : n.enrolledAt) != null,
        w = (0, o.Rf)(b);
    return (0, r.jsxs)(i.p, {
        expandedContentRef: p,
        collapsedContentRef: O,
        expansionSpring: m,
        children: [
            (0, r.jsx)(
                l.Z,
                {
                    ref: O,
                    className: u.content,
                    expansionSpring: m,
                    isExpanded: g,
                    isExpansionAnimationComplete: f,
                    quest: b,
                    useReducedMotion: v,
                    taskDetails: w,
                    onCtxMenuOpen: h,
                    onCtxMenuClose: x,
                    onCtxMenuSelect: _,
                    overlayRef: S,
                },
                E ? "collapsed-with-rewards" : "collapsed-without-rewards",
            ),
            (0, r.jsx)(c.Z, {
                expansionSpring: m,
                className: u.content,
                collapsedHeight: j,
                onCtxMenuOpen: h,
                onCtxMenuClose: x,
                onCtxMenuSelect: _,
                onGameSheetOpened: C,
                onGameSheetClosed: y,
                overlayRef: S,
                isExpanded: g,
                isExpansionAnimationComplete: f,
                quest: b,
                useReducedMotion: v,
                ref: p,
                taskDetails: w,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Z, {
                            expansionSpring: m,
                            isExpanded: g,
                        }),
                        !T &&
                            (0, r.jsx)(a.Z, {
                                quest: b,
                                expansionSpring: m,
                                useReducedMotion: v,
                                isExpanded: g,
                                isExpansionAnimationComplete: f,
                                onCtxMenuOpen: h,
                                onCtxMenuClose: x,
                                onCtxMenuSelect: _,
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                ref: S,
                className: u.overlay,
            }),
        ],
    });
};
