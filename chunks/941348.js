n.d(t, { Z: () => p });
var r = n(54381),
    s = n(473749),
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
            onCtxMenuSelection: b,
            quest: _,
            useReducedMotion: j,
            collapsedHeight: v,
            onGameSheetOpened: C,
            onGameSheetClosed: y,
        } = e,
        E = (null == (t = _.userStatus) ? void 0 : t.completedAt) != null,
        O = s.useRef(null),
        S = s.useRef(null),
        T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        w = (0, o.Rf)(_);
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
                    quest: _,
                    useReducedMotion: j,
                    taskDetails: w,
                    onCtxMenuOpen: h,
                    onCtxMenuClose: x,
                    onCtxMenuSelect: b,
                    overlayRef: S,
                },
                E ? "collapsed-with-rewards" : "collapsed-without-rewards",
            ),
            (0, r.jsx)(c.Z, {
                expansionSpring: m,
                className: u.content,
                collapsedHeight: v,
                onCtxMenuOpen: h,
                onCtxMenuClose: x,
                onCtxMenuSelect: b,
                onGameSheetOpened: C,
                onGameSheetClosed: y,
                overlayRef: S,
                isExpanded: g,
                isExpansionAnimationComplete: f,
                quest: _,
                useReducedMotion: j,
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
                                quest: _,
                                expansionSpring: m,
                                useReducedMotion: j,
                                isExpanded: g,
                                isExpansionAnimationComplete: f,
                                onCtxMenuOpen: h,
                                onCtxMenuClose: x,
                                onCtxMenuSelect: b,
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
