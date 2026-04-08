n.d(t, { A: () => h });
var i = n(73153),
    r = n(272355),
    a = n(688796),
    l = n(207803),
    s = n(84540),
    o = n(287809),
    d = n(927578),
    c = n(919395),
    u = n(339984);
class A extends r.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === u.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, l.e$)(t);
                  let A = o.default.getCurrentUser();
                  if (d.Ay.canUseAnimatedAvatar(A) || "image/gif" !== n.type) {
                      (0, s.p)({ guildId: i, avatar: t }), (0, c.WU)(t);
                      return;
                  }
                  null != A && (0, a.G)({ uploadType: u.HL.AVATAR });
              })(e)
            : e.uploadType === u.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, l.xe)(r);
                    let c = o.default.getCurrentUser(),
                        A = d.Ay.canUsePremiumProfileCustomization(c);
                    d.Ay.canUsePremiumProfileCustomization(c)
                        ? (0, s.p)({ guildId: n, banner: r })
                        : null == c || A || (0, a.G)({ uploadType: u.HL.BANNER });
                })(e)
              : void 0;
    }
}
let h = new A();
