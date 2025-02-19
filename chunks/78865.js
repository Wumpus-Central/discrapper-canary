r.d(t, { default: () => p });
var n = r(200651);
r(192379);
var a = r(174609),
    o = r(790527),
    c = r(703656),
    i = r(626135),
    l = r(981631),
    s = r(474936),
    u = r(388032),
    d = r(940360);
function p(e) {
    var { onClose: t, onCloseParent: r, analyticsSource: p } = e,
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
        })(e, ['onClose', 'onCloseParent', 'analyticsSource']);
    let O = (0, n.jsx)('img', {
            className: d.art,
            alt: 'HD Streaming Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png'
        }),
        f = u.NW.string(u.t.ewxv3N),
        y = u.NW.string(u.t.qlsCDA);
    return (0, n.jsx)(
        o.Z,
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
                type: s.cd.STREAM_QUALITY_UPSELL,
                analyticsLocation: {
                    section: l.jXE.STREAM_UPSELL_MODAL,
                    object: l.qAy.BUTTON_CTA
                },
                analyticsSource: p,
                onClose: t,
                onSubscribeClick: a.Z,
                secondaryCTA: u.NW.string(u.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, a.Z)(),
                        t(),
                        null == r || r(),
                        i.default.track(l.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_section: l.jXE.STREAM_UPSELL_MODAL,
                            location_object: l.qAy.NAVIGATION_LINK
                        }),
                        (0, c.uL)(l.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                enableArtBoxShadow: !1,
                headerClassName: d.header
            },
            b
        )
    );
}
