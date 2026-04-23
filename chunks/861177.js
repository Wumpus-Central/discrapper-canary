t.d(n, { default: () => A });
var a = t(627968);
t(64700);
var s = t(311907),
    i = t(385612),
    r = t(287809),
    l = t(927578),
    c = t(87719),
    o = t(244975),
    d = t(788868),
    _ = t(652215),
    u = t(339984),
    m = t(985018),
    p = t(626072);
function A(e) {
    let { onClose: n, source: t, ...A } = e,
        L = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        E = l.Ay.isPremium(L) ? m.t.E0sNsc : m.t.UBcuto,
        x = m.intl.format(E, {
            onLearnMore: function () {
                n(), (0, c.e)();
            },
        });
    return (0, a.jsx)(o.A, {
        artURL: p.A,
        type: d.e.CUSTOM_PROFILE_UPSELL,
        title: m.intl.string(m.t.BbsMm4),
        body: x,
        glowUp: x,
        onSecondaryClick: () => {
            n(), (0, i.XD)({ uploadType: u.HL.BANNER, analyticsSource: t });
        },
        secondaryCTA: m.intl.string(m.t.SpAQib),
        analyticsSource: t,
        analyticsLocation: { section: _.JJy.USER_PROFILE, object: _.ZSU.BUTTON_CTA },
        onClose: n,
        ...A,
    });
}
