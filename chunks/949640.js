n.d(t, {
    E6: () => u,
    f4: () => m,
    mw: () => d
});
var r = n(200651),
    i = n(481060),
    s = n(367907),
    a = n(48217),
    l = n(26323),
    o = n(434404),
    c = n(981631);
function d(e) {
    let { uploadType: t, maxFileSizeBytes: s, onComplete: a, showUpsellHeader: l = !0, analyticsLocation: o, analyticsLocations: c } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('91689'), n.e('55849'), n.e('87074')]).then(n.bind(n, 192277));
        return (n) =>
            (0, r.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        maxFileSizeBytes: s,
                        onComplete: a,
                        uploadType: t,
                        showUpsellHeader: l,
                        analyticsLocation: o,
                        analyticsLocations: c
                    },
                    n
                )
            );
    });
}
function u(e, t, n, r, i) {
    (0, s.yw)(c.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
            section: n,
            object: c.qAy.LEARN_MORE
        },
        guild_id: e.id,
        location_stack: t
    }),
        (0, l.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: {
                section: n,
                object: r,
                page: c.ZY5.GUILD_SETTINGS
            },
            guild: e,
            perks: i
        });
}
function m(e, t, n, r) {
    let i = null == r ? void 0 : r.type,
        s = {
            page: c.ZY5.GUILD_SETTINGS,
            section: c.jXE.ANIMATED_GUILD_BANNER_UPSELL,
            object: 'temp'
        };
    if (null != i && null != n) {
        if ('image/gif' !== i || e.hasFeature(c.oNc.ANIMATED_BANNER)) {
            if (!e.hasFeature(c.oNc.BANNER)) {
                (s.object = c.qAy.IMAGE_CROPPING_MODAL),
                    (0, a.c)({
                        guild: e,
                        analyticsLocations: t,
                        analyticsLocation: s,
                        banner: n,
                        isGIF: !1
                    });
                return;
            }
        } else {
            (s.object = c.qAy.GIF_CROPPING_MODAL),
                (0, a.c)({
                    guild: e,
                    analyticsLocations: t,
                    analyticsLocation: s,
                    banner: n,
                    isGIF: !0
                });
            return;
        }
    }
    o.Z.updateGuild({ banner: n });
}
