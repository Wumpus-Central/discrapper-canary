n.d(t, {
    E6: () => g,
    f4: () => f,
    mw: () => u,
});
var r = n(54381),
    i = n(481060),
    l = n(367907),
    a = n(48217),
    s = n(26323),
    o = n(267642),
    c = n(434404),
    d = n(981631);
function u(e) {
    let {
        uploadType: t,
        maxFileSizeBytes: l,
        onComplete: a,
        showUpsellHeader: s = !0,
        analyticsLocation: o,
        analyticsLocations: c,
    } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e("91689"), n.e("89289"), n.e("81564")]).then(n.bind(n, 28130));
        return (n) =>
            (0, r.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        maxFileSizeBytes: l,
                        onComplete: a,
                        uploadType: t,
                        showUpsellHeader: s,
                        analyticsLocation: o,
                        analyticsLocations: c,
                    },
                    n,
                ),
            );
    });
}
function g(e) {
    let {
        guild: t,
        analyticsLocations: n,
        analyticsSection: r,
        analyticsObject: i,
        perks: a,
        targetPremiumGuildTier: c,
    } = e;
    (0, l.yw)(d.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
            section: r,
            object: d.qAy.LEARN_MORE,
            objectType: c ? (0, o.ge)(c) : void 0,
        },
        guild_id: t.id,
        location_stack: n,
    }),
        (0, s.Z)({
            analyticsLocations: n,
            analyticsSourceLocation: {
                section: r,
                object: i,
                page: d.ZY5.GUILD_SETTINGS,
            },
            guild: t,
            perks: a,
        });
}
function f(e, t, n, r) {
    let i = null == r ? void 0 : r.type,
        l = {
            page: d.ZY5.GUILD_SETTINGS,
            section: d.jXE.ANIMATED_GUILD_BANNER_UPSELL,
            object: "temp",
        };
    if (null != i && null != n)
        if ("image/gif" !== i || e.features.has(d.GuildFeatures.ANIMATED_BANNER)) {
            if (!e.features.has(d.GuildFeatures.BANNER)) {
                (l.object = d.qAy.IMAGE_CROPPING_MODAL),
                    (0, a.c)({
                        guild: e,
                        analyticsLocations: t,
                        analyticsLocation: l,
                        banner: n,
                        isGIF: !1,
                    });
                return;
            }
        } else {
            (l.object = d.qAy.GIF_CROPPING_MODAL),
                (0, a.c)({
                    guild: e,
                    analyticsLocations: t,
                    analyticsLocation: l,
                    banner: n,
                    isGIF: !0,
                });
            return;
        }
    c.Z.updateGuild({ banner: n });
}
