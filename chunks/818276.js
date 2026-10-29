n.d(t, { A: () => m });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    i = n(941143),
    o = n(398025),
    u = n(568329),
    c = n(241762),
    d = n(331940);
let m = function (e) {
    let { children: t, layoutVariant: n, backgroundImage: a, onMouseEnter: m, onMouseLeave: p } = e,
        { expansionSpring: x, collapsedContentRef: h } = s.useContext(u.PW),
        { isExpanded: f } = (0, c.H)();
    return (0, l.jsx)(i.animated.div, {
        ref: h,
        "aria-hidden": f,
        className: r()(d.hR, { [d.Ag]: f, [d.MN]: "inset" === n }),
        style: { opacity: (0, o.a)(x.to({ range: [0, 1], output: [1, 0] })), backgroundImage: a },
        onMouseEnter: m,
        onMouseLeave: p,
        children: (0, l.jsx)("div", { className: d.o8, children: t }),
    });
};
