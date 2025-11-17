n.d(t, { o: () => O });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(993365),
    o = n(755721),
    s = n(481060),
    l = n(767714),
    c = n(504983),
    u = n(313789),
    d = n(518596),
    f = n(594174),
    _ = n(74538),
    p = n(981631),
    h = n(921944),
    m = n(474936),
    g = n(526761),
    E = n(388032),
    b = n(262381);
function y(e) {
    return e === m.PremiumTypes.TIER_2
        ? E.intl.string(E.t.jqO5Qn)
        : null == e
          ? E.intl.string(E.t.f2qjw5)
          : E.intl.string(E.t.SblICW);
}
function O(e) {
    let { onClose: t, markAsDismissed: n } = e,
        O = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        v = y(null == O ? void 0 : O.premiumType),
        I = _.ZP.canUseCustomCallSounds(O);
    function T() {
        (0, d.openUserSettings)(u.n.VOICE_AND_VIDEO_PANEL, {
            section: p.oAB.VOICE,
            subsection: g.GA,
        }),
            null == t || t(),
            null == n || n(h.L.PRIMARY);
    }
    return (0, r.jsxs)(c.Z, {
        isShown: !0,
        type: c.Y.PREMIUM,
        className: b.upsellOuter,
        backgroundClassName: b.upsellInner,
        children: [
            null != n
                ? (0, r.jsx)(s.P3F, {
                      className: b.close,
                      onClick: () => (null == n ? void 0 : n(h.L.DISMISS)),
                      "aria-label": E.intl.string(E.t.cpT0Cq),
                      children: (0, r.jsx)(s.Dio, {
                          size: "xs",
                          color: "currentColor",
                          className: b.closeIcon,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: b.upsellTitle,
                children: [
                    (0, r.jsx)(s.SrA, {
                        size: "sm",
                        color: "currentColor",
                        className: b.nitroWheel,
                    }),
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/bold",
                        children: E.intl.string(E.t.dTbAxx),
                    }),
                ],
            }),
            (0, r.jsx)(a.x, {
                variant: "text-sm/normal",
                children: v,
            }),
            I
                ? (0, r.jsx)(s.Button, {
                      onClick: T,
                      text: E.intl.string(E.t.RzWDqY),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(l.Z, {
                      textOptions: { textOverride: E.intl.string(E.t.pj0XBN) },
                      subscriptionTier: m.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: p.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: p.qAy.BUTTON_CTA,
                      },
                      color: o.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == n ? void 0 : n(h.L.PRIMARY)),
                  }),
        ],
    });
}
