"use strict";
n.d(t, { z: () => h });
var i = n(627968),
    r = n(64700),
    s = n(408278),
    a = n(27232),
    o = n(505930),
    l = n(990078),
    u = n(609174),
    c = n(430795),
    d = n(788077),
    _ = n(375708);
function h() {
    let e = (0, u.Y_)(),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, c.XK)(e);
            },
            [e],
        );
    return (0, i.jsx)(
        l.m,
        {
            text: _.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, i.jsx)(s.K, {
                onClick: t,
                icon: e.isFavorite ? a.G : o.y,
                "aria-label": _.intl.string(_.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
}
