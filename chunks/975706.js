n.d(t, { Z: () => s });
var r = n(442837),
    i = n(430824),
    o = n(981631),
    l = n(556970),
    a = n(388032);
function s(e) {
    return (0, r.e7)([i.Z], () => {
        var t;
        return (
            (null == (t = i.Z.getGuild(e)) ? void 0 : t.features.has(o.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
        );
    })
        ? {
              shouldShow: !0,
              text: a.intl.string(l.default.l9n4QZ),
          }
        : {
              shouldShow: !1,
              text: "",
          };
}
