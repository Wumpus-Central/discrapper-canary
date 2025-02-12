n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(785717),
    o = n(510659),
    l = n(899007),
    u = n(287954),
    c = n(660579),
    d = n(64621),
    f = n(228168),
    _ = n(503981);
function p(e) {
    let { user: t, profileType: n, animateOnHover: r, onOpenProfile: p, ...h } = e,
        m = f.n_.AVATAR,
        { trackUserProfileAction: g } = (0, s.KZ)(),
        { interactionSource: E } = (0, o.Xo)(),
        v = a()(_.avatar, {
            [_.hoisted]: E === f.n_.AVATAR || E === f.n_.STATUS,
            [_.biteSize]: n === f.y0.BITE_SIZE,
            [_.fullSize]: n === f.y0.FULL_SIZE,
            [_.panel]: n === f.y0.PANEL
        });
    return (0, i.jsx)(d.Z, {
        sourceType: f.n_.AVATAR,
        user: t,
        children: (0, i.jsx)(u.Z, {
            user: t,
            className: v,
            profileType: n,
            sourceType: m,
            onAction: g,
            ...h,
            children: () =>
                (0, i.jsx)(c.Z, {
                    className: v,
                    user: t,
                    sourceType: m,
                    onAction: g,
                    children: (0, i.jsx)(l.Z, {
                        user: t,
                        animateOnHover: r,
                        onOpenProfile: p,
                        profileType: n,
                        className: _.withReactReply,
                        ...h
                    })
                })
        })
    });
}
