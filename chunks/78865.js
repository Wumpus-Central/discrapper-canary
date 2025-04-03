r.d(t, { default: () => b });
var n = r(200651);
r(192379);
var a = r(952265),
    o = r(174609),
    c = r(790527),
    i = r(703656),
    s = r(626135),
    l = r(981631),
    u = r(474936),
    p = r(388032),
    d = r(309368);
function b(e) {
    var { onClose: t, analyticsSource: r } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['onClose', 'analyticsSource']);
    let O = (0, n.jsx)('img', {
            className: d.art,
            alt: 'HD Streaming Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png'
        }),
        f = p.NW.string(p.t.ewxv3N),
        y = p.NW.string(p.t.qlsCDA);
    return (0, n.jsx)(
        c.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                title: f,
                glowUp: y,
                body: y,
                artElement: O,
                artContainerClassName: d.artContainer,
                type: u.cd.STREAM_QUALITY_UPSELL,
                analyticsLocation: {
                    section: l.jXE.STREAM_UPSELL_MODAL,
                    object: l.qAy.BUTTON_CTA
                },
                analyticsSource: r,
                onClose: t,
                onSubscribeClick: o.Z,
                secondaryCTA: p.NW.string(p.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, o.Z)(),
                        (0, a.pT)(),
                        s.default.track(l.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_section: l.jXE.STREAM_UPSELL_MODAL,
                            location_object: l.qAy.NAVIGATION_LINK
                        }),
                        (0, i.uL)(l.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                enableArtBoxShadow: !1,
                headerClassName: d.header
            },
            b
        )
    );
}
