t.d(n, { default: () => d });
var a = t(627968);
t(64700);
var o = t(87719),
    i = t(414345),
    l = t(377108),
    r = t(244975),
    c = t(652215),
    s = t(985018);
function d(e) {
    let {
            premiumUpsellType: n,
            title: t,
            body: d,
            glowUp: u,
            analyticsSource: p,
            onClose: h,
            onSecondaryClick: C,
            ...b
        } = e,
        y = (0, l.u)(n),
        g = (0, l.A)(n);
    return (0, i.g)({ location: "PremiumProfileDecorationUpsell" })
        ? (0, a.jsx)(r.F, {
              title: t,
              subtitle: d,
              graphic: g,
              onSecondaryClick: () => {
                  C(), (0, o.x)(h);
              },
              secondaryCTA: s.intl.string(s.t.PcTCB7),
              onClose: h,
              showEnhancedUpsell: !0,
          })
        : (0, a.jsx)(r.A, {
              artURL: y,
              type: n,
              title: t,
              body: d,
              glowUp: u,
              onSecondaryClick: () => {
                  C(), (0, o.x)(h);
              },
              secondaryCTA: s.intl.string(s.t.PcTCB7),
              onClose: h,
              enableArtBoxShadow: !1,
              analyticsSource: p,
              analyticsLocation: { section: c.JJy.USER_PROFILE, object: c.ZSU.BUTTON_CTA },
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              ...b,
          });
}
