var r = n(477900),
    a = n(582128),
    i = n(27232),
    l = n(505930),
    s = n(866665),
    o = n(408278),
    u = n(609174),
    c = n(489496),
    d = n(636107),
    m = n(792996);
n.d(
    t,
    {},
    {
        z: function () {
            let e = (0, u.Y_)(),
                t = a.useCallback(
                    (t) => {
                        (t.stopPropagation(), t.preventDefault(), (0, c.XK)(e));
                    },
                    [e],
                );
            return (0, r.jsx)(
                s.m,
                {
                    text: m.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
                    position: "top",
                    children: (0, r.jsx)(o.K, {
                        onClick: t,
                        icon: e.isFavorite ? i.StarIcon : l.StarOutlineIcon,
                        "aria-label": m.intl.string(m.t.k8fFjp),
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                },
                `${e.id}:favorite:${e.isFavorite}`,
            );
        },
    },
);
