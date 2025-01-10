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
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: f, onCtxMenuClosed: g, onCtxMenuSelection: h, quest: C, useReducedMotion: v, collapsedHeight: j } = e,
        _ = r.useRef(null),
        b = r.useRef(null),
        E = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        N = (0, s.Rf)(C);
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
                quest: C,
                useReducedMotion: v,
                taskDetails: N
            }),
            (0, o.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: j,
                onCtxMenuOpen: f,
                onCtxMenuClose: g,
                onCtxMenuSelect: h,
                overlayRef: b,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: C,
                useReducedMotion: v,
                ref: n,
                taskDetails: N,
                children: (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !E &&
                            (0, o.jsx)(a.Z, {
                                quest: C,
                                expansionSpring: p,
                                useReducedMotion: v,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: f,
                                onCtxMenuClose: g,
                                onCtxMenuSelect: h
                            })
                    ]
                })
            }),
            (0, o.jsx)('div', {
                ref: b,
                className: u.overlay
            })
        ]
    });
};
