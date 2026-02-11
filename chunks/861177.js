n.d(t, { default: () => g });
var a = n(627968);
n(64700);
var i = n(311907),
    o = n(385612),
    r = n(287809),
    s = n(927578),
    c = n(87719),
    l = n(414345),
    d = n(244975),
    u = n(788868),
    p = n(652215),
    f = n(339984),
    b = n(985018),
    y = n(626072);
function g(e) {
    let { onClose: t, source: n, ...g } = e,
        A = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        C = s.Ay.isPremium(A) ? b.t.E0sNsc : b.t.UBcuto,
        m = b.intl.format(C, {
            onLearnMore: function () {
                t(), (0, c.e)();
            },
        });
    return (0, l.g)({ location: "PremiumProfileUpsell" })
        ? (0, a.jsx)(d.F, {
              title: b.intl.string(b.t.BbsMm4),
              subtitle: m,
              graphic: { src: y.A, type: "image" },
              secondaryCTA: b.intl.string(b.t.SpAQib),
              onSecondaryClick: () => {
                  t(), (0, o.XD)({ uploadType: f.HL.BANNER, analyticsSource: n });
              },
              onClose: t,
              ...g,
          })
        : (0, a.jsx)(d.A, {
              artURL: y.A,
              type: u.e.CUSTOM_PROFILE_UPSELL,
              title: b.intl.string(b.t.BbsMm4),
              body: m,
              glowUp: m,
              onSecondaryClick: () => {
                  t(), (0, o.XD)({ uploadType: f.HL.BANNER, analyticsSource: n });
              },
              secondaryCTA: b.intl.string(b.t.SpAQib),
              analyticsSource: n,
              analyticsLocation: { section: p.JJy.USER_PROFILE, object: p.ZSU.BUTTON_CTA },
              onClose: t,
              ...g,
          });
}
