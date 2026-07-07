n.d(t, { z: () => p });
var a = n(627968),
    r = n(64700),
    l = n(408278),
    i = n(27232),
    s = n(505930),
    u = n(990078),
    c = n(609174),
    o = n(430795),
    d = n(16590),
    f = n(375708);
function p() {
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
            text: f.intl.string(e.isFavorite ? d.default.IZsalP : d.default.ihBfyA),
            position: "top",
            children: (0, a.jsx)(l.K, {
                onClick: t,
                icon: e.isFavorite ? i.G : s.y,
                "aria-label": f.intl.string(f.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
}
