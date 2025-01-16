r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(785717),
    l = r(510659),
    u = r(899007),
    c = r(287954),
    d = r(660579),
    f = r(64621),
    _ = r(228168),
    h = r(882636);
function p(e) {
    let { user: n, profileType: r, animateOnHover: a, onOpenProfile: p, ...m } = e,
        g = _.n_.AVATAR,
        { trackUserProfileAction: E } = (0, o.KZ)(),
        { interactionSource: v } = (0, l.Xo)(),
        I = s()(h.avatar, {
            [h.hoisted]: v === _.n_.AVATAR || v === _.n_.STATUS,
            [h.biteSize]: r === _.y0.BITE_SIZE,
            [h.fullSize]: r === _.y0.FULL_SIZE,
            [h.panel]: r === _.y0.PANEL
        });
    return (0, i.jsx)(f.Z, {
        sourceType: _.n_.AVATAR,
        user: n,
        children: (0, i.jsx)(c.Z, {
            user: n,
            className: I,
            profileType: r,
            sourceType: g,
            onAction: E,
            ...m,
            children: () =>
                (0, i.jsx)(d.Z, {
                    className: I,
                    user: n,
                    sourceType: g,
                    onAction: E,
                    children: (0, i.jsx)(u.Z, {
                        user: n,
                        animateOnHover: a,
                        onOpenProfile: p,
                        profileType: r,
                        className: h.withReactReply,
                        ...m
                    })
                })
        })
    });
}
