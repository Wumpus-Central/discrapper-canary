n.d(e, { default: () => C });
var a = n(627968);
n(64700);
var i = n(311907),
    r = n(385612),
    o = n(287809),
    s = n(927578),
    c = n(87719),
    l = n(414345),
    d = n(244975),
    u = n(788868),
    p = n(652215),
    f = n(339984),
    m = n(985018),
    A = n(626072);
function C(t) {
    let { onClose: e, source: n, ...C } = t,
        L = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        y = s.Ay.isPremium(L) ? m.t.E0sNsc : m.t.UBcuto,
        T = m.intl.format(y, {
            onLearnMore: function () {
                e(), (0, c.e)();
            },
        });
    return (0, l.g1)({ location: "PremiumProfileUpsell" })
        ? (0, a.jsx)(d.F, {
              title: m.intl.string(m.t.BbsMm4),
              subtitle: T,
              graphic: { src: A.A, type: "image" },
              secondaryCTA: m.intl.string(m.t.SpAQib),
              onSecondaryClick: () => {
                  e(), (0, r.XD)({ uploadType: f.HL.BANNER, analyticsSource: n });
              },
              onClose: e,
              ...C,
          })
        : (0, a.jsx)(d.A, {
              artURL: A.A,
              type: u.e.CUSTOM_PROFILE_UPSELL,
              title: m.intl.string(m.t.BbsMm4),
              body: T,
              glowUp: T,
              onSecondaryClick: () => {
                  e(), (0, r.XD)({ uploadType: f.HL.BANNER, analyticsSource: n });
              },
              secondaryCTA: m.intl.string(m.t.SpAQib),
              analyticsSource: n,
              analyticsLocation: { section: p.JJy.USER_PROFILE, object: p.ZSU.BUTTON_CTA },
              onClose: e,
              ...C,
          });
}
