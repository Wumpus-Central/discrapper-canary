a.d(t, { A: () => c });
var i = a(477900),
    n = a(582128),
    d = a(866665),
    s = a(939249),
    l = a(97808),
    r = a(778712),
    h = a(342296),
    o = a(427262),
    u = a(447177);
function c(e) {
    let { user: t, guildId: a, layerContext: c } = e,
        p = n.useRef(null),
        C = (0, o.$3)(t);
    return (0, i.jsx)(h.A, {
        targetElementRef: p,
        shouldPreload: !0,
        user: t,
        guildId: a,
        position: "bottom",
        layerContext: c,
        children: (e) =>
            (0, i.jsx)(d.m, {
                text: C,
                ariaHidden: !0,
                children: (0, i.jsx)(s.D, {
                    ...e,
                    innerRef: p,
                    className: u.RB,
                    onClick: (t) => {
                        (e.onClick(t), t.stopPropagation());
                    },
                    "aria-label": C,
                    children: (0, i.jsx)(l.eu, { src: t.getAvatarURL(a, 24), size: r._3.SIZE_24, "aria-hidden": !0 }),
                }),
            }),
    });
}
