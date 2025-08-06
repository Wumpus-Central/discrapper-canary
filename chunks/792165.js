n.d(t, { o: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(993365),
    a = n(755721),
    s = n(481060),
    l = n(230711),
    c = n(767714),
    u = n(504983),
    d = n(594174),
    f = n(74538),
    _ = n(981631),
    p = n(921944),
    h = n(474936),
    m = n(526761),
    g = n(388032),
    E = n(435803);
function b(e) {
    return e === h.p9.TIER_2
        ? g.intl.string(g.t.jqO5Qk)
        : null == e
          ? g.intl.string(g.t.f2qjw8)
          : g.intl.string(g.t.SblICQ);
}
function y(e) {
    let { onClose: t, markAsDismissed: n } = e,
        y = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        O = b(null == y ? void 0 : y.premiumType),
        v = f.ZP.canUseCustomCallSounds(y);
    function I() {
        l.Z.open(_.oAB.VOICE, m.GA), null == t || t(), null == n || n(p.L.PRIMARY);
    }
    return (0, r.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: E.upsellOuter,
        backgroundClassName: E.upsellInner,
        children: [
            null != n
                ? (0, r.jsx)(s.P3F, {
                      className: E.close,
                      onClick: () => (null == n ? void 0 : n(p.L.DISMISS)),
                      "aria-label": g.intl.string(g.t.cpT0Cg),
                      children: (0, r.jsx)(s.Dio, {
                          size: "xs",
                          color: "currentColor",
                          className: E.closeIcon,
                      }),
                  })
                : null,
            (0, r.jsxs)("div", {
                className: E.upsellTitle,
                children: [
                    (0, r.jsx)(s.SrA, {
                        size: "sm",
                        color: "currentColor",
                        className: E.nitroWheel,
                    }),
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/bold",
                        children: g.intl.string(g.t.dTbAx8),
                    }),
                ],
            }),
            (0, r.jsx)(o.x, {
                variant: "text-sm/normal",
                children: O,
            }),
            v
                ? (0, r.jsx)(s.zxk, {
                      onClick: I,
                      text: g.intl.string(g.t.RzWDqa),
                      fullWidth: !0,
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: g.intl.string(g.t.pj0XBA) },
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: _.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: _.qAy.BUTTON_CTA,
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == n ? void 0 : n(p.L.PRIMARY)),
                  }),
        ],
    });
}
