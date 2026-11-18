var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(120692),
    o = n(398025),
    u = n(568329),
    c = n(241762),
    d = n(331940);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, layoutVariant: n, backgroundImage: a, onMouseEnter: p, onMouseLeave: m } = e,
                { expansionSpring: x, collapsedContentRef: f } = s.useContext(u.PW),
                { isExpanded: h } = (0, c.H)();
            return (0, l.jsx)(r.animated.div, {
                ref: f,
                "aria-hidden": h,
                className: i()(d.hR, { [d.Ag]: h, [d.MN]: "inset" === n }),
                style: { opacity: (0, o.a)(x.to({ range: [0, 1], output: [1, 0] })), backgroundImage: a },
                onMouseEnter: p,
                onMouseLeave: m,
                children: (0, l.jsx)("div", { className: d.o8, children: t }),
            });
        },
    },
);
