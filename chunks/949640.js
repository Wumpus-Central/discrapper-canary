n.d(t, {
    E6: () => m,
    f4: () => g,
    mw: () => u
});
var r = n(200651),
    i = n(481060),
    s = n(367907),
    a = n(48217),
    l = n(26323),
    o = n(267642),
    c = n(434404),
    d = n(981631);
function u(e) {
    let { uploadType: t, maxFileSizeBytes: s, onComplete: a, showUpsellHeader: l = !0, analyticsLocation: o, analyticsLocations: c } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e('91689'), n.e('55849'), n.e('36376')]).then(n.bind(n, 192277));
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
function m(e) {
    let { guild: t, analyticsLocations: n, analyticsSection: r, analyticsObject: i, perks: a, targetPremiumGuildTier: c } = e;
    (0, s.yw)(d.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
            section: r,
            object: d.qAy.LEARN_MORE,
            objectType: c ? (0, o.ge)(c) : void 0
        },
        guild_id: t.id,
        location_stack: n
    }),
        (0, l.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: {
                section: r,
                object: i,
                page: d.ZY5.GUILD_SETTINGS
            },
            guild: t,
            perks: a
        });
}
function g(e, t, n, r) {
    let i = null == r ? void 0 : r.type,
        s = {
            page: d.ZY5.GUILD_SETTINGS,
            section: d.jXE.ANIMATED_GUILD_BANNER_UPSELL,
            object: 'temp'
        };
    if (null != i && null != n)
        if ('image/gif' !== i || e.hasFeature(d.oNc.ANIMATED_BANNER)) {
            if (!e.hasFeature(d.oNc.BANNER)) {
                (s.object = d.qAy.IMAGE_CROPPING_MODAL),
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
            (s.object = d.qAy.GIF_CROPPING_MODAL),
                (0, a.c)({
                    guild: e,
                    analyticsLocations: t,
                    analyticsLocation: s,
                    banner: n,
                    isGIF: !0
                });
            return;
        }
    c.Z.updateGuild({ banner: n });
}
