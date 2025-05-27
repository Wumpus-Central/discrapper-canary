n.d(t, { Z: () => p });
var r = n(255367),
    o = n(73800),
    s = n(113434),
    a = n(308069),
    i = n(613087),
    l = n(457153),
    c = n(495722),
    u = n(321025),
    d = n(62753);
let p = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: m, isExpansionAnimationComplete: f, onCtxMenuOpened: g, onCtxMenuClosed: x, onCtxMenuSelection: h, quest: b, useReducedMotion: j, collapsedHeight: v } = e,
        y = o.useRef(null),
        _ = o.useRef(null),
        O = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null,
        C = (0, s.Rf)(b);
    return (0, r.jsxs)(i.p, {
        expandedContentRef: n,
        collapsedContentRef: y,
        expansionSpring: p,
        children: [
            (0, r.jsx)(l.Z, {
                ref: y,
                className: d.content,
                expansionSpring: p,
                isExpanded: m,
                isExpansionAnimationComplete: f,
                quest: b,
                useReducedMotion: j,
                taskDetails: C
            }),
            (0, r.jsx)(c.Z, {
                expansionSpring: p,
                className: d.content,
                collapsedHeight: v,
                onCtxMenuOpen: g,
                onCtxMenuClose: x,
                onCtxMenuSelect: h,
                overlayRef: _,
                isExpanded: m,
                isExpansionAnimationComplete: f,
                quest: b,
                useReducedMotion: j,
                ref: n,
                taskDetails: C,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, {
                            expansionSpring: p,
                            isExpanded: m
                        }),
                        !O &&
                            (0, r.jsx)(a.Z, {
                                quest: b,
                                expansionSpring: p,
                                useReducedMotion: j,
                                isExpanded: m,
                                isExpansionAnimationComplete: f,
                                onCtxMenuOpen: g,
                                onCtxMenuClose: x,
                                onCtxMenuSelect: h
                            })
                    ]
                })
            }),
            (0, r.jsx)('div', {
                ref: _,
                className: d.overlay
            })
        ]
    });
};
