n.d(t, { z: () => p });
var a = n(477900),
    l = n(582128),
    r = n(408278),
    i = n(27232),
    s = n(505930),
    u = n(866665),
    c = n(609174),
    o = n(614584),
    d = n(268378),
    f = n(375708);
function p() {
    let e = (0, c.Y_)(),
        t = l.useCallback(
            (t) => {
                (t.stopPropagation(), t.preventDefault(), (0, o.XK)(e));
            },
            [e],
        );
    return (0, a.jsx)(
        u.m,
        {
            text: f.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, a.jsx)(r.K, {
                onClick: t,
                icon: e.isFavorite ? i.StarIcon : s.y,
                "aria-label": f.intl.string(f.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
}
