n.d(t, { A: () => p });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    s = n(399513),
    i = n(398025),
    u = n(568329),
    c = n(241762),
    d = n(331940);
let p = function (e) {
    let { children: t, layoutVariant: n, backgroundImage: a, onMouseEnter: p, onMouseLeave: m } = e,
        { expansionSpring: x, collapsedContentRef: h } = r.useContext(u.PW),
        { isExpanded: C } = (0, c.H)();
    return (0, l.jsx)(s.animated.div, {
        ref: h,
        "aria-hidden": C,
        className: o()(d.hR, { [d.Ag]: C, [d.MN]: "inset" === n }),
        style: { opacity: (0, i.a)(x.to({ range: [0, 1], output: [1, 0] })), backgroundImage: a },
        onMouseEnter: p,
        onMouseLeave: m,
        children: (0, l.jsx)("div", { className: d.o8, children: t }),
    });
};
