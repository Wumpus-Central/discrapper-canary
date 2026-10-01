a.d(t, { A: () => o });
var i = a(477900),
    n = a(582128),
    s = a(939249),
    d = a(97808),
    l = a(778712),
    r = a(342296),
    h = a(447177);
function o(e) {
    let { user: t, guildId: a, layerContext: o } = e,
        u = n.useRef(null);
    return (0, i.jsx)(r.A, {
        targetElementRef: u,
        shouldPreload: !0,
        user: t,
        guildId: a,
        position: "bottom",
        layerContext: o,
        children: (e) =>
            (0, i.jsx)(s.D, {
                ...e,
                innerRef: u,
                className: h.RB,
                onClick: (t) => {
                    (e.onClick(t), t.stopPropagation());
                },
                "aria-label": t.username,
                children: (0, i.jsx)(d.eu, { src: t.getAvatarURL(a, 24), size: l._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
