var t = a(477900),
    l = a(582128),
    i = a(866665),
    r = a(939249),
    d = a(97808),
    o = a(778712),
    u = a(342296),
    s = a(427262),
    c = a(447177);
a.d(
    n,
    {},
    {
        A: function (e) {
            let { user: n, guildId: a, layerContext: f } = e,
                g = l.useRef(null),
                m = (0, s.$3)(n);
            return (0, t.jsx)(u.A, {
                targetElementRef: g,
                shouldPreload: !0,
                user: n,
                guildId: a,
                position: "bottom",
                layerContext: f,
                children: (e) =>
                    (0, t.jsx)(i.m, {
                        text: m,
                        ariaHidden: !0,
                        children: (0, t.jsx)(r.D, {
                            ...e,
                            innerRef: g,
                            className: c.RB,
                            onClick: (n) => {
                                (e.onClick(n), n.stopPropagation());
                            },
                            "aria-label": m,
                            children: (0, t.jsx)(d.eu, {
                                src: n.getAvatarURL(a, 24),
                                size: o._3.SIZE_24,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
            });
        },
    },
);
