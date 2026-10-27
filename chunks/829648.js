l.d(a, { A: () => h });
var n = l(477900),
    t = l(582128),
    i = l(866665),
    r = l(939249),
    s = l(97808),
    d = l(778712),
    o = l(342296),
    c = l(427262),
    u = l(447177);
function h(e) {
    let { user: a, guildId: l, layerContext: h } = e,
        x = t.useRef(null),
        p = (0, c.$3)(a);
    return (0, n.jsx)(o.A, {
        targetElementRef: x,
        shouldPreload: !0,
        user: a,
        guildId: l,
        position: "bottom",
        layerContext: h,
        children: (e) =>
            (0, n.jsx)(i.m, {
                text: p,
                ariaHidden: !0,
                children: (0, n.jsx)(r.D, {
                    ...e,
                    innerRef: x,
                    className: u.RB,
                    onClick: (a) => {
                        (e.onClick(a), a.stopPropagation());
                    },
                    "aria-label": p,
                    children: (0, n.jsx)(s.eu, { src: a.getAvatarURL(l, 24), size: d._3.SIZE_24, "aria-hidden": !0 }),
                }),
            }),
    });
}
