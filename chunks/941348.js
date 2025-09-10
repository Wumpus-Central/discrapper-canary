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
    var t, n;
    let {
            expandedContentRef: f,
            expansionSpring: _,
            isExpanded: p,
            isExpansionAnimationComplete: h,
            onCtxMenuOpened: m,
            onCtxMenuClosed: g,
            onCtxMenuSelection: E,
            quest: b,
            useReducedMotion: y,
            collapsedHeight: O,
            onGameSheetOpened: v,
            onGameSheetClosed: I,
        } = e,
        T = (null == (t = b.userStatus) ? void 0 : t.completedAt) != null,
        S = i.useRef(null),
        A = i.useRef(null),
        C = (null == (n = b.userStatus) ? void 0 : n.enrolledAt) != null,
        N = (0, a.Rf)(b);
    return (0, r.jsxs)(s.p, {
        expandedContentRef: f,
        collapsedContentRef: S,
        expansionSpring: _,
        children: [
            (0, r.jsx)(
                l.Z,
                {
                    ref: S,
                    className: d.content,
                    expansionSpring: _,
                    isExpanded: p,
                    isExpansionAnimationComplete: h,
                    quest: b,
                    useReducedMotion: y,
                    taskDetails: N,
                    onCtxMenuOpen: m,
                    onCtxMenuClose: g,
                    onCtxMenuSelect: E,
                    overlayRef: A,
                },
                T ? "collapsed-with-rewards" : "collapsed-without-rewards",
            ),
            (0, r.jsx)(c.Z, {
                expansionSpring: _,
                className: d.content,
                collapsedHeight: O,
                onCtxMenuOpen: m,
                onCtxMenuClose: g,
                onCtxMenuSelect: E,
                onGameSheetOpened: v,
                onGameSheetClosed: I,
                overlayRef: A,
                isExpanded: p,
                isExpansionAnimationComplete: h,
                quest: b,
                useReducedMotion: y,
                ref: f,
                taskDetails: N,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, {
                            expansionSpring: _,
                            isExpanded: p,
                        }),
                        !C &&
                            (0, r.jsx)(o.Z, {
                                quest: b,
                                expansionSpring: _,
                                useReducedMotion: y,
                                isExpanded: p,
                                isExpansionAnimationComplete: h,
                                onCtxMenuOpen: m,
                                onCtxMenuClose: g,
                                onCtxMenuSelect: E,
                            }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                ref: A,
                className: d.overlay,
            }),
        ],
    });
};
