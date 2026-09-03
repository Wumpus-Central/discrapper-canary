n.d(t, { A: () => c });
var l = n(477900),
    i = n(582128),
    s = n(939249),
    r = n(97808),
    a = n(778712),
    o = n(342296),
    u = n(447177);
function c(e) {
    let { user: t, guildId: n, layerContext: c } = e,
        d = i.useRef(null);
    return (0, l.jsx)(o.A, {
        targetElementRef: d,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        layerContext: c,
        children: (e) =>
            (0, l.jsx)(s.D, {
                ...e,
                innerRef: d,
                className: u.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, l.jsx)(r.eu, { src: t.getAvatarURL(n, 24), size: a._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
