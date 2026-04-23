n.d(t, { A: () => h });
var i = n(73153),
    r = n(272355),
    a = n(688796),
    l = n(207803),
    s = n(84540),
    o = n(287809),
    d = n(927578),
    u = n(919395),
    c = n(339984);
class A extends r.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === c.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, l.e$)(t);
                  let A = o.default.getCurrentUser();
                  if (d.Ay.canUseAnimatedAvatar(A) || "image/gif" !== n.type) {
                      (0, s.p)({ guildId: i, avatar: t }), (0, u.WU)("set");
                      return;
                  }
                  null != A && (0, a.G)({ uploadType: c.HL.AVATAR });
              })(e)
            : e.uploadType === c.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, l.xe)(r);
                    let u = o.default.getCurrentUser(),
                        A = d.Ay.canUsePremiumProfileCustomization(u);
                    d.Ay.canUsePremiumProfileCustomization(u)
                        ? (0, s.p)({ guildId: n, banner: r })
                        : null == u || A || (0, a.G)({ uploadType: c.HL.BANNER });
                })(e)
              : void 0;
    }
}
let h = new A();
