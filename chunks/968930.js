n.d(t, { A: () => h });
var i = n(73153),
    a = n(272355),
    l = n(688796),
    r = n(207803),
    s = n(84540),
    o = n(287809),
    d = n(927578),
    c = n(919395),
    u = n(339984);
class A extends a.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === u.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: a } = e;
                  if (a) return void (0, r.e$)(t);
                  let A = o.default.getCurrentUser();
                  if (d.Ay.canUseAnimatedAvatar(A) || "image/gif" !== n.type) {
                      (0, s.p)({ guildId: i, avatar: t }), (0, c.WU)("set");
                      return;
                  }
                  null != A && (0, l.G)({ uploadType: u.HL.AVATAR });
              })(e)
            : e.uploadType === u.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        a = t.imageUri;
                    if (i) return void (0, r.xe)(a);
                    let c = o.default.getCurrentUser(),
                        A = d.Ay.canUsePremiumProfileCustomization(c);
                    d.Ay.canUsePremiumProfileCustomization(c)
                        ? (0, s.p)({ guildId: n, banner: a })
                        : null == c || A || (0, l.G)({ uploadType: u.HL.BANNER });
                })(e)
              : void 0;
    }
}
let h = new A();
