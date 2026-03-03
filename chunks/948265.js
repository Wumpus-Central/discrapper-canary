n.d(e, { default: () => d });
var a = n(627968);
n(64700);
var o = n(87719),
    r = n(414345),
    i = n(377108),
    c = n(244975),
    s = n(652215),
    l = n(985018);
function d(t) {
    let {
            premiumUpsellType: e,
            title: n,
            body: d,
            glowUp: u,
            analyticsSource: C,
            onClose: T,
            onSecondaryClick: p,
            ...h
        } = t,
        A = (0, i.u)(e),
        L = (0, i.A)(e);
    return (0, r.g1)({ location: "PremiumProfileDecorationUpsell" })
        ? (0, a.jsx)(c.F, {
              title: n,
              subtitle: d,
              graphic: L,
              onSecondaryClick: () => {
                  p(), (0, o.x)(T);
              },
              secondaryCTA: l.intl.string(l.t.PcTCB7),
              onClose: T,
              ...h,
          })
        : (0, a.jsx)(c.A, {
              artURL: A,
              type: e,
              title: n,
              body: d,
              glowUp: u,
              onSecondaryClick: () => {
                  p(), (0, o.x)(T);
              },
              secondaryCTA: l.intl.string(l.t.PcTCB7),
              onClose: T,
              enableArtBoxShadow: !1,
              analyticsSource: C,
              analyticsLocation: { section: s.JJy.USER_PROFILE, object: s.ZSU.BUTTON_CTA },
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...h,
          });
}
