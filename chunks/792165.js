n.d(t, { o: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(993365),
    a = n(755721),
    o = n(481060),
    s = n(230711),
    c = n(767714),
    u = n(504983),
    d = n(594174),
    p = n(74538),
    m = n(981631),
    f = n(921944),
    h = n(474936),
    g = n(526761),
    b = n(388032),
    v = n(435803);
function y(e) {
    var t;
    let { onClose: n, markAsDismissed: y } = e,
        j = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        C = (t = null == j ? void 0 : j.premiumType) === h.p9.TIER_2 ? b.intl.string(b.t.jqO5Qk) : null == t ? b.intl.string(b.t.f2qjw8) : b.intl.string(b.t.SblICQ),
        _ = p.ZP.canUseCustomCallSounds(j);
    return (0, r.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: v.upsellOuter,
        backgroundClassName: v.upsellInner,
        children: [
            null != y
                ? (0, r.jsx)(o.P3F, {
                      className: v.close,
                      onClick: () => (null == y ? void 0 : y(f.L.DISMISS)),
                      'aria-label': b.intl.string(b.t.cpT0Cg),
                      children: (0, r.jsx)(o.Dio, {
                          size: 'xs',
                          color: 'currentColor',
                          className: v.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: v.upsellTitle,
                children: [
                    (0, r.jsx)(o.SrA, {
                        size: 'sm',
                        color: 'currentColor',
                        className: v.nitroWheel
                    }),
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-sm/bold',
                        children: b.intl.string(b.t.dTbAx8)
                    })
                ]
            }),
            (0, r.jsx)(l.x, {
                variant: 'text-sm/normal',
                children: C
            }),
            _
                ? (0, r.jsx)(o.zxk, {
                      onClick: function () {
                          (s.Z.open(m.oAB.VOICE, g.GA), null == n || n(), null == y || y(f.L.PRIMARY));
                      },
                      text: b.intl.string(b.t.RzWDqa),
                      fullWidth: !0
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: b.intl.string(b.t.pj0XBA) },
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: m.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: m.qAy.BUTTON_CTA
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == y ? void 0 : y(f.L.PRIMARY))
                  })
        ]
    });
}
