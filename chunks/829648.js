a.d(t, { A: () => o });
var i = a(477900),
    n = a(582128),
    d = a(866665),
    l = a(939249),
    s = a(97808),
    r = a(778712),
    h = a(342296),
    u = a(427262),
    c = a(447177);
function o(e) {
    let { user: t, guildId: a, layerContext: o } = e,
        p = n.useRef(null),
        C = (0, u.$3)(t);
    return (0, i.jsx)(h.A, {
        targetElementRef: p,
        shouldPreload: !0,
        user: t,
        guildId: a,
        position: "bottom",
        layerContext: o,
        children: (e) =>
            (0, i.jsx)(d.m, {
                text: C,
                ariaHidden: !0,
                children: (0, i.jsx)(l.D, {
                    ...e,
                    innerRef: p,
                    className: c.RB,
                    onClick: (t) => {
                        (e.onClick(t), t.stopPropagation());
                    },
                    "aria-label": C,
                    children: (0, i.jsx)(s.eu, { src: t.getAvatarURL(a, 24), size: r._3.SIZE_24, "aria-hidden": !0 }),
                }),
            }),
    });
}
