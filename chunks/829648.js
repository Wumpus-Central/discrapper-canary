var a = t(477900),
    i = t(582128),
    l = t(866665),
    r = t(939249),
    o = t(97808),
    u = t(778712),
    d = t(342296),
    s = t(427262),
    c = t(447177);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { user: n, guildId: t, layerContext: g } = e,
                f = i.useRef(null),
                m = (0, s.$3)(n);
            return (0, a.jsx)(d.A, {
                targetElementRef: f,
                shouldPreload: !0,
                user: n,
                guildId: t,
                position: "bottom",
                layerContext: g,
                children: (e) =>
                    (0, a.jsx)(l.m, {
                        text: m,
                        ariaHidden: !0,
                        children: (0, a.jsx)(r.D, {
                            ...e,
                            innerRef: f,
                            className: c.RB,
                            onClick: (n) => {
                                (e.onClick(n), n.stopPropagation());
                            },
                            "aria-label": m,
                            children: (0, a.jsx)(o.eu, {
                                src: n.getAvatarURL(t, 24),
                                size: u._3.SIZE_24,
                                "aria-hidden": !0,
                            }),
                        }),
                    }),
            });
        },
    },
);
