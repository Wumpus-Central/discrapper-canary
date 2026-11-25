var a = n(477900),
    i = n(582128),
    r = n(866665),
    l = n(939249),
    s = n(97808),
    o = n(778712),
    d = n(342296),
    u = n(427262),
    c = n(447177);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, guildId: n, layerContext: f } = e,
                b = i.useRef(null),
                g = (0, u.$3)(t);
            return (0, a.jsx)(d.A, {
                targetElementRef: b,
                shouldPreload: !0,
                user: t,
                guildId: n,
                position: "bottom",
                layerContext: f,
                children: (e) =>
                    (0, a.jsx)(r.m, {
                        text: g,
                        ariaHidden: !0,
                        children: (0, a.jsx)(l.D, {
                            ...e,
                            innerRef: b,
                            className: c.RB,
                            onClick: (t) => {
                                (e.onClick(t), t.stopPropagation());
                            },
                            "aria-label": g,
                            children: (0, a.jsx)(s.eu, {
                                src: t.getAvatarURL(n, 24),
                                size: o._3.SIZE_24,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
            });
        },
    },
);
