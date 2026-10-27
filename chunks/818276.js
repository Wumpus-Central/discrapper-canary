n.d(t, { A: () => p });
var l = n(477900),
    r = n(582128),
    u = n(503698),
    a = n.n(u),
    o = n(399513),
    i = n(398025),
    s = n(568329),
    c = n(241762),
    d = n(331940);
let p = function (e) {
    let { children: t, layoutVariant: n, backgroundImage: u, onMouseEnter: p, onMouseLeave: f } = e,
        { expansionSpring: m, collapsedContentRef: x } = r.useContext(s.PW),
        { isExpanded: h } = (0, c.H)();
    return (0, l.jsx)(o.animated.div, {
        ref: x,
        "aria-hidden": h,
        className: a()(d.hR, { [d.Ag]: h, [d.MN]: "inset" === n }),
        style: { opacity: (0, i.a)(m.to({ range: [0, 1], output: [1, 0] })), backgroundImage: u },
        onMouseEnter: p,
        onMouseLeave: f,
        children: (0, l.jsx)("div", { className: d.o8, children: t }),
    });
};
