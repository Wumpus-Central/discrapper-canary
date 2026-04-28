"use strict";
n.d(t, { z: () => E });
var i = n(627968),
    r = n(64700),
    s = n(408278),
    a = n(27232),
    o = n(505930),
    l = n(990078),
    _ = n(609174),
    d = n(399925),
    u = n(16590),
    c = n(985018);
let E = () => {
    let e = (0, _.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, d.XK)(e);
            },
            [e],
        );
    return (0, i.jsx)(
        l.m,
        {
            text: c.intl.string(e.isFavorite ? u.default.IZsalP : u.default.ihBfyA),
            position: "top",
            children: (0, i.jsx)(s.K, {
                onClick: t,
                icon: e.isFavorite ? a.G : o.y,
                "aria-label": c.intl.string(c.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
