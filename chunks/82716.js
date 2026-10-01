n.d(t, { z: () => p });
var a = n(477900),
    l = n(582128),
    r = n(27232),
    i = n(505930),
    s = n(866665),
    u = n(408278),
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
        s.m,
        {
            text: f.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, a.jsx)(u.K, {
                onClick: t,
                icon: e.isFavorite ? r.StarIcon : i.y,
                "aria-label": f.intl.string(f.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
}
