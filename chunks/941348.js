var o = n(200651),
    r = n(192379),
    s = n(113434),
    a = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(254197),
    d = n(321025),
    u = n(277636);
t.Z = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: g, onCtxMenuClosed: h, onCtxMenuSelection: f, quest: v, useReducedMotion: C, collapsedHeight: j } = e,
        _ = r.useRef(null),
        T = r.useRef(null),
        E = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        S = (0, s.Rf)(v);
    return (0, o.jsxs)(i.p, {
        expandedContentRef: n,
        collapsedContentRef: _,
        expansionSpring: p,
        children: [
            (0, o.jsx)(l.Z, {
                ref: _,
                className: u.content,
                expansionSpring: p,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: v,
                useReducedMotion: C,
                taskDetails: S
            }),
            (0, o.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: j,
                onCtxMenuOpen: g,
                onCtxMenuClose: h,
                onCtxMenuSelect: f,
                overlayRef: T,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: v,
                useReducedMotion: C,
                ref: n,
                taskDetails: S,
                children: (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !E &&
                            (0, o.jsx)(a.Z, {
                                quest: v,
                                expansionSpring: p,
                                useReducedMotion: C,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: g,
                                onCtxMenuClose: h,
                                onCtxMenuSelect: f
                            })
                    ]
                })
            }),
            (0, o.jsx)('div', {
                ref: T,
                className: u.overlay
            })
        ]
    });
};
