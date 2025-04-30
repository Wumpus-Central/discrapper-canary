n.d(t, {
    E6: () => m,
    f4: () => g,
    mw: () => d
});
var r = n(200651),
    i = n(481060),
    l = n(367907),
    s = n(48217),
    a = n(26323),
    o = n(267642),
    c = n(434404),
    u = n(981631);
function d(e) {
    let { uploadType: t, maxFileSizeBytes: l, onComplete: s, showUpsellHeader: a = !0, analyticsLocation: o, analyticsLocations: c } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('91689'), n.e('89289'), n.e('63993')]).then(n.bind(n, 28130));
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
                        maxFileSizeBytes: l,
                        onComplete: s,
                        uploadType: t,
                        showUpsellHeader: a,
                        analyticsLocation: o,
                        analyticsLocations: c
                    },
                    n
                )
            );
    });
}
function m(e) {
    let { guild: t, analyticsLocations: n, analyticsSection: r, analyticsObject: i, perks: s, targetPremiumGuildTier: c } = e;
    (0, l.yw)(u.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
            section: r,
            object: u.qAy.LEARN_MORE,
            objectType: c ? (0, o.ge)(c) : void 0
        },
        guild_id: t.id,
        location_stack: n
    }),
        (0, a.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: {
                section: r,
                object: i,
                page: u.ZY5.GUILD_SETTINGS
            },
            guild: t,
            perks: s
        });
}
function g(e, t, n, r) {
    let i = null == r ? void 0 : r.type,
        l = {
            page: u.ZY5.GUILD_SETTINGS,
            section: u.jXE.ANIMATED_GUILD_BANNER_UPSELL,
            object: 'temp'
        };
    if (null != i && null != n)
        if ('image/gif' !== i || e.hasFeature(u.oNc.ANIMATED_BANNER)) {
            if (!e.hasFeature(u.oNc.BANNER)) {
                (l.object = u.qAy.IMAGE_CROPPING_MODAL),
                    (0, s.c)({
                        guild: e,
                        analyticsLocations: t,
                        analyticsLocation: l,
                        banner: n,
                        isGIF: !1
                    });
                return;
            }
        } else {
            (l.object = u.qAy.GIF_CROPPING_MODAL),
                (0, s.c)({
                    guild: e,
                    analyticsLocations: t,
                    analyticsLocation: l,
                    banner: n,
                    isGIF: !0
                });
            return;
        }
    c.Z.updateGuild({ banner: n });
}
