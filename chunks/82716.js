n.d(t, { z: () => p });
var l = n(477900),
    r = n(582128),
    a = n(408278),
    i = n(27232),
    s = n(505930),
    u = n(866665),
    c = n(609174),
    o = n(539572),
    d = n(711918),
    f = n(375708);
function p() {
    let e = (0, c.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, o.XK)(e);
            },
            [e],
        );
    return (0, l.jsx)(
        u.m,
        {
            text: f.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, l.jsx)(a.K, {
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
