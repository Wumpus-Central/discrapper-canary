n.d(t, { A: () => _ });
var i = n(73153),
    a = n(272355),
    l = n(688796),
    r = n(101058),
    s = n(207803),
    o = n(84540),
    d = n(287809),
    c = n(927578),
    u = n(919395),
    A = n(339984);
class h extends a.A {
    _initialize() {
        i.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        i.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === A.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, analyticsSource: a, isTryItOut: h } = e;
                  if (h) return void (0, s.e$)(t);
                  let _ = d.default.getCurrentUser();
                  if (c.Ay.canUseAnimatedAvatar(_) || "image/gif" !== n.type) {
                      (0, o.p)({ guildId: i, avatar: t }), (0, u.WU)(t);
                      return;
                  }
                  if (null == _) return;
                  let m = (0, r.V7)({ userId: _.id, image: t });
                  (0, l.G)({ uploadType: A.HL.AVATAR, imageSrc: m, analyticsSource: a });
              })(e)
            : e.uploadType === A.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, analyticsSource: i, isTryItOut: a } = e,
                        r = t.imageUri;
                    if (a) return void (0, s.xe)(r);
                    let u = d.default.getCurrentUser(),
                        h = c.Ay.canUsePremiumProfileCustomization(u);
                    c.Ay.canUsePremiumProfileCustomization(u)
                        ? (0, o.p)({ guildId: n, banner: r })
                        : null == u || h || (0, l.G)({ uploadType: A.HL.BANNER, imageSrc: r, analyticsSource: i });
                })(e)
              : void 0;
    }
}
let _ = new h();
