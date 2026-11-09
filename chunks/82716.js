var l = n(477900),
    a = n(582128),
    r = n(27232),
    i = n(505930),
    u = n(866665),
    s = n(408278),
    c = n(609174),
    o = n(489496),
    d = n(683825),
    f = n(792996);
n.d(
    t,
    {},
    {
        z: function () {
            let e = (0, c.Y_)(),
                t = a.useCallback(
                    (t) => {
                        (t.stopPropagation(), t.preventDefault(), (0, o.XK)(e));
                    },
                    [e],
                );
            return (0, l.jsx)(
                u.m,
                {
                    text: f.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
                    position: "top",
                    children: (0, l.jsx)(s.K, {
                        onClick: t,
                        icon: e.isFavorite ? r.StarIcon : i.StarOutlineIcon,
                        "aria-label": f.intl.string(f.t.k8fFjp),
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                },
                `${e.id}:favorite:${e.isFavorite}`,
            );
        },
    },
);
