e.d(a, { default: () => p });
var n = e(200651);
e(192379);
var r = e(174609),
    o = e(790527),
    c = e(703656),
    s = e(626135),
    i = e(981631),
    l = e(474936),
    d = e(388032),
    _ = e(595394);
function p(t) {
    let { onClose: a, onCloseParent: e, analyticsSource: p, ...u } = t,
        A = (0, n.jsx)('img', {
            className: _.art,
            alt: 'HD Streaming Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png'
        }),
        C = d.intl.string(d.t.ewxv3N),
        h = d.intl.string(d.t.qlsCDA);
    return (0, n.jsx)(o.Z, {
        title: C,
        glowUp: h,
        body: h,
        artElement: A,
        artContainerClassName: _.artContainer,
        type: l.cd.STREAM_QUALITY_UPSELL,
        analyticsLocation: {
            section: i.jXE.STREAM_UPSELL_MODAL,
            object: i.qAy.BUTTON_CTA
        },
        analyticsSource: p,
        onClose: a,
        onSubscribeClick: r.Z,
        secondaryCTA: d.intl.string(d.t.ZnqyZ2),
        onSecondaryClick: function () {
            (0, r.Z)(),
                a(),
                null == e || e(),
                s.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: i.jXE.STREAM_UPSELL_MODAL,
                    location_object: i.qAy.NAVIGATION_LINK
                }),
                (0, c.uL)(i.Z5c.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        enableArtBoxShadow: !1,
        headerClassName: _.header,
        ...u
    });
}
