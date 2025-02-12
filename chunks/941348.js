n.d(t, { Z: () => p });
var r = n(200651),
    o = n(192379),
    s = n(113434),
    a = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(495722),
    d = n(321025),
    u = n(236130);
let p = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: x, onCtxMenuOpened: h, onCtxMenuClosed: g, onCtxMenuSelection: f, quest: _, useReducedMotion: C, collapsedHeight: v } = e,
        j = o.useRef(null),
        b = o.useRef(null),
        T = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        E = (0, s.Rf)(_);
    return (0, r.jsxs)(i.p, {
        expandedContentRef: n,
        collapsedContentRef: j,
        expansionSpring: p,
        children: [
            (0, r.jsx)(l.Z, {
                ref: j,
                className: u.content,
                expansionSpring: p,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: _,
                useReducedMotion: C,
                taskDetails: E
            }),
            (0, r.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: v,
                onCtxMenuOpen: h,
                onCtxMenuClose: g,
                onCtxMenuSelect: f,
                overlayRef: b,
                isExpanded: m,
                isExpansionAnimationComplete: x,
                quest: _,
                useReducedMotion: C,
                ref: n,
                taskDetails: E,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !T &&
                            (0, r.jsx)(a.Z, {
                                quest: _,
                                expansionSpring: p,
                                useReducedMotion: C,
                                isExpanded: m,
                                isExpansionAnimationComplete: x,
                                onCtxMenuOpen: h,
                                onCtxMenuClose: g,
                                onCtxMenuSelect: f
                            })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                ref: b,
                className: u.overlay
            })
        ]
    });
};
