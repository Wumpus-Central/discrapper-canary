a.d(n, { A: () => m });
var t = a(477900),
    l = a(582128),
    i = a(866665),
    r = a(939249),
    d = a(97808),
    o = a(778712),
    u = a(342296),
    s = a(427262),
    c = a(447177);
function m(e) {
    let { user: n, guildId: a, layerContext: m } = e,
        f = l.useRef(null),
        g = (0, s.$3)(n);
    return (0, t.jsx)(u.A, {
        targetElementRef: f,
        shouldPreload: !0,
        user: n,
        guildId: a,
        position: "bottom",
        layerContext: m,
        children: (e) =>
            (0, t.jsx)(i.m, {
                text: g,
                ariaHidden: !0,
                children: (0, t.jsx)(r.D, {
                    ...e,
                    innerRef: f,
                    className: c.RB,
                    onClick: (n) => {
                        (e.onClick(n), n.stopPropagation());
                    },
                    "aria-label": g,
                    children: (0, t.jsx)(d.eu, { src: n.getAvatarURL(a, 24), size: o._3.SIZE_24, "aria-hidden": !0 }),
                }),
            }),
    });
}
