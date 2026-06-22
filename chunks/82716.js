l.d(t, { z: () => m });
var a = l(627968),
    r = l(64700),
    n = l(408278),
    i = l(27232),
    s = l(505930),
    u = l(990078),
    c = l(609174),
    o = l(430795),
    d = l(16590),
    p = l(375708);
let m = () => {
    let e = (0, c.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, o.XK)(e);
            },
            [e],
        );
    return (0, a.jsx)(
        u.m,
        {
            text: p.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, a.jsx)(n.K, {
                onClick: t,
                icon: e.isFavorite ? i.G : s.y,
                "aria-label": p.intl.string(p.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
