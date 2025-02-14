n.d(t, { Z: () => p });
var s = n(200651),
    r = n(192379),
    a = n(113434),
    o = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(495722),
    d = n(321025),
    u = n(236130);
let p = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: h, onCtxMenuClosed: g, onCtxMenuSelection: f, quest: v, useReducedMotion: _, collapsedHeight: C } = e,
        j = r.useRef(null),
        b = r.useRef(null),
        T = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        E = (0, a.Rf)(v);
    return (0, s.jsxs)(i.p, {
        expandedContentRef: n,
        collapsedContentRef: j,
        expansionSpring: p,
        children: [
            (0, s.jsx)(l.Z, {
                ref: j,
                className: u.content,
                expansionSpring: p,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: v,
                useReducedMotion: _,
                taskDetails: E
            }),
            (0, s.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: C,
                onCtxMenuOpen: h,
                onCtxMenuClose: g,
                onCtxMenuSelect: f,
                overlayRef: b,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: v,
                useReducedMotion: _,
                ref: n,
                taskDetails: E,
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !T &&
                            (0, s.jsx)(o.Z, {
                                quest: v,
                                expansionSpring: p,
                                useReducedMotion: _,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: h,
                                onCtxMenuClose: g,
                                onCtxMenuSelect: f
                            })
                    ]
                })
            }),
            (0, s.jsx)('div', {
                ref: b,
                className: u.overlay
            })
        ]
    });
};
