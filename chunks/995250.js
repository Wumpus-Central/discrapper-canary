r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(785717),
    l = r(510659),
    u = r(899007),
    c = r(287954),
    d = r(660579),
    f = r(64621),
    p = r(228168),
    h = r(882636);
function _(e) {
    let { user: n, profileType: r, animateOnHover: a, onOpenProfile: _, ...m } = e,
        g = p.n_.AVATAR,
        { trackUserProfileAction: E } = (0, s.KZ)(),
        { interactionSource: v } = (0, l.Xo)(),
        y = o()(h.avatar, {
            [h.hoisted]: v === p.n_.AVATAR || v === p.n_.STATUS,
            [h.biteSize]: r === p.y0.BITE_SIZE,
            [h.fullSize]: r === p.y0.FULL_SIZE,
            [h.panel]: r === p.y0.PANEL
        });
    return (0, i.jsx)(f.Z, {
        sourceType: p.n_.AVATAR,
        user: n,
        children: (0, i.jsx)(c.Z, {
            user: n,
            className: y,
            profileType: r,
            sourceType: g,
            onAction: E,
            ...m,
            children: () =>
                (0, i.jsx)(d.Z, {
                    className: y,
                    user: n,
                    sourceType: g,
                    onAction: E,
                    children: (0, i.jsx)(u.Z, {
                        user: n,
                        animateOnHover: a,
                        onOpenProfile: _,
                        profileType: r,
                        className: h.withReactReply,
                        ...m
                    })
                })
        })
    });
}
