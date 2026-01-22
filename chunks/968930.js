n.d(t, {
    A: () => h,
});
var r = n(73153),
    i = n(631670),
    l = n(272355),
    a = n(159001),
    s = n(688796),
    o = n(101058),
    c = n(207803),
    u = n(287809),
    d = n(927578),
    p = n(339984);
class f extends l.A {
    _initialize() {
        r.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        r.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: r, analyticsSource: l, isTryItOut: f } = e;
                  if (f) return void (0, c.e$)(t);
                  let h = u.default.getCurrentUser(),
                      A = null != r ? a.zq : i.zq,
                      g = d.Ay.canUseAnimatedAvatar(h);
                  if (g || "image/gif" !== n.type) return void A(t);
                  if (null == h) return;
                  let m = (0, o.V7)({
                      userId: h.id,
                      image: t,
                  });
                  if (!g)
                      return void (0, s.G)({
                          uploadType: p.HL.AVATAR,
                          imageSrc: m,
                          analyticsSource: l,
                      });
              })(e)
            : e.uploadType === p.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, analyticsSource: r, isTryItOut: i } = e,
                        l = t.imageUri;
                    if (i) return void (0, c.xe)(l);
                    let o = u.default.getCurrentUser(),
                        f = null != n ? a.Iz : c.Iz,
                        h = d.Ay.canUsePremiumProfileCustomization(o);
                    d.Ay.canUsePremiumProfileCustomization(o)
                        ? f(l)
                        : null == o ||
                          h ||
                          (0, s.G)({
                              uploadType: p.HL.BANNER,
                              imageSrc: l,
                              analyticsSource: r,
                          });
                })(e)
              : void 0;
    }
}
let h = new f();
