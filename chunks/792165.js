n.d(t, { o: () => v });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(993365),
    o = n(755721),
    s = n(481060),
    l = n(767714),
    c = n(504983),
    u = n(313789),
    d = n(526665),
    f = n(518596),
    p = n(594174),
    _ = n(74538),
    m = n(981631),
    h = n(921944),
    g = n(474936),
    E = n(526761),
    b = n(388032),
    y = n(424199);
function O(e) {
    return e === g.PremiumTypes.TIER_2
        ? b.intl.string(b.t.jqO5Qn)
        : null == e
          ? b.intl.string(b.t.f2qjw5)
          : b.intl.string(b.t.SblICW);
}
function v(e) {
    let { onClose: t, markAsDismissed: n } = e,
        v = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        S = O(null == v ? void 0 : v.premiumType),
        I = _.ZP.canUseCustomCallSounds(v);
    function T() {
        let e = (0, d.Ml)("CustomCallSoundUpsell") ? u.n.SOUNDBOARD_CATEGORY : u.n.VOICE_AND_VIDEO_PANEL;
        (0, f.openUserSettings)(e, {
            section: m.oAB.VOICE,
            subsection: E.GA,
        }),
            null == t || t(),
            null == n || n(h.L.PRIMARY);
    }
    return (0, r.jsxs)(c.Z, {
        isShown: !0,
        type: c.Y.PREMIUM,
        className: y.upsellOuter,
        backgroundClassName: y.upsellInner,
        children: [
            null != n
                ? (0, r.jsx)(s.P3F, {
                      className: y.close,
                      onClick: () => (null == n ? void 0 : n(h.L.DISMISS)),
                      "aria-label": b.intl.string(b.t.cpT0Cq),
                      children: (0, r.jsx)(s.Dio, {
                          size: "xs",
                          color: "currentColor",
                          className: y.closeIcon,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y.upsellTitle,
                children: [
                    (0, r.jsx)(s.SrA, {
                        size: "sm",
                        color: "currentColor",
                        className: y.nitroWheel,
                    }),
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/bold",
                        children: b.intl.string(b.t.dTbAxx),
                    }),
                ],
            }),
            (0, r.jsx)(a.x, {
                variant: "text-sm/normal",
                children: S,
            }),
            I
                ? (0, r.jsx)(s.Button, {
                      onClick: T,
                      text: b.intl.string(b.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(l.Z, {
                      textOptions: { textOverride: b.intl.string(b.t.pj0XBN) },
                      subscriptionTier: g.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: m.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: m.qAy.BUTTON_CTA,
                      },
                      color: o.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == n ? void 0 : n(h.L.PRIMARY)),
                  }),
        ],
    });
}
