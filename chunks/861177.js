a.d(e, { default: () => U });
var c = a(627968);
a(64700);
var n = a(311907),
    s = a(385612),
    o = a(287809),
    i = a(927578),
    r = a(87719),
    d = a(244975),
    l = a(788868),
    p = a(652215),
    u = a(339984),
    f = a(985018),
    y = a(626072);
function U(t) {
    let { onClose: e, source: a, ...U } = t,
        b = (0, n.bG)([o.default], () => o.default.getCurrentUser()),
        A = i.Ay.isPremium(b) ? f.t.E0sNsc : f.t.UBcuto,
        C = f.intl.format(A, {
            onLearnMore: function () {
                e(), (0, r.e)();
            },
        });
    return (0, c.jsx)(d.A, {
        artURL: y.A,
        type: l.e.CUSTOM_PROFILE_UPSELL,
        title: f.intl.string(f.t.BbsMm4),
        body: C,
        glowUp: C,
        onSecondaryClick: () => {
            e(), (0, s.XD)({ uploadType: u.HL.BANNER, analyticsSource: a });
        },
        secondaryCTA: f.intl.string(f.t.SpAQib),
        analyticsSource: a,
        analyticsLocation: { section: p.JJy.USER_PROFILE, object: p.ZSU.BUTTON_CTA },
        onClose: e,
        ...U,
    });
}
