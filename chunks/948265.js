d.d(c, { default: () => p });
var a = d(627968);
d(64700);
var t = d(87719),
    s = d(377108),
    n = d(244975),
    A = d(652215),
    f = d(985018);
function p(e) {
    let {
            premiumUpsellType: c,
            title: d,
            body: p,
            glowUp: b,
            analyticsSource: o,
            onClose: r,
            onSecondaryClick: i,
            ...l
        } = e,
        L = (0, s.A)(c);
    return (0, a.jsx)(n.A, {
        artURL: L,
        type: c,
        title: d,
        body: p,
        glowUp: b,
        onSecondaryClick: () => {
            i(), (0, t.x)(r);
        },
        secondaryCTA: f.intl.string(f.t.PcTCB7),
        onClose: r,
        enableArtBoxShadow: !1,
        analyticsSource: o,
        analyticsLocation: { section: A.JJy.USER_PROFILE, object: A.ZSU.BUTTON_CTA },
        hideBackButton: !0,
        showEnhancedUpsell: !0,
        ...l,
    });
}
