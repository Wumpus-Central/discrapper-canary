n.d(t, { o: () => _ });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(993365),
    a = n(755721),
    s = n(481060),
    o = n(230711),
    c = n(767714),
    d = n(504983),
    u = n(594174),
    m = n(74538),
    p = n(981631),
    f = n(921944),
    h = n(474936),
    g = n(526761),
    v = n(388032),
    C = n(262381);
function _(e) {
    var t;
    let { onClose: n, markAsDismissed: _ } = e,
        b = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        j =
            (t = null == b ? void 0 : b.premiumType) === h.p9.TIER_2
                ? v.intl.string(v.t.jqO5Qk)
                : null == t
                  ? v.intl.string(v.t.f2qjw8)
                  : v.intl.string(v.t.SblICQ),
        y = m.ZP.canUseCustomCallSounds(b);
    return (0, r.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: C.upsellOuter,
        backgroundClassName: C.upsellInner,
        children: [
            null != _
                ? (0, r.jsx)(s.P3F, {
                      className: C.close,
                      onClick: () => (null == _ ? void 0 : _(f.L.DISMISS)),
                      "aria-label": v.intl.string(v.t.cpT0Cg),
                      children: (0, r.jsx)(s.Dio, {
                          size: "xs",
                          color: "currentColor",
                          className: C.closeIcon,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: C.upsellTitle,
                children: [
                    (0, r.jsx)(s.SrA, {
                        size: "sm",
                        color: "currentColor",
                        className: C.nitroWheel,
                    }),
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/bold",
                        children: v.intl.string(v.t.dTbAx8),
                    }),
                ],
            }),
            (0, r.jsx)(l.x, {
                variant: "text-sm/normal",
                children: j,
            }),
            y
                ? (0, r.jsx)(s.zxk, {
                      onClick: function () {
                          o.Z.open(p.oAB.VOICE, g.GA), null == n || n(), null == _ || _(f.L.PRIMARY);
                      },
                      text: v.intl.string(v.t.RzWDqa),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: v.intl.string(v.t.pj0XBA) },
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: p.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: p.qAy.BUTTON_CTA,
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == _ ? void 0 : _(f.L.PRIMARY)),
                  }),
        ],
    });
}
