n.d(t, { o: () => _ });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(693789),
    a = n(993365),
    o = n(481060),
    s = n(230711),
    c = n(767714),
    u = n(504983),
    d = n(594174),
    m = n(74538),
    p = n(981631),
    f = n(921944),
    h = n(474936),
    g = n(526761),
    b = n(388032),
    v = n(435803);
function _(e) {
    var t;
    let { onClose: n, markAsDismissed: _ } = e,
        C = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        j = (t = null == C ? void 0 : C.premiumType) === h.p9.TIER_2 ? b.intl.string(b.t.jqO5Qk) : null == t ? b.intl.string(b.t.f2qjw8) : b.intl.string(b.t.SblICQ),
        y = m.ZP.canUseCustomCallSounds(C);
    return (0, r.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: v.upsellOuter,
        backgroundClassName: v.upsellInner,
        children: [
            null != _
                ? (0, r.jsx)(o.P3F, {
                      className: v.close,
                      onClick: () => (null == _ ? void 0 : _(f.L.DISMISS)),
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
            (0, r.jsx)(a.x, {
                variant: 'text-sm/normal',
                children: j
            }),
            y
                ? (0, r.jsx)(l.zx, {
                      onClick: function () {
                          s.Z.open(p.oAB.VOICE, g.GA), null == n || n(), null == _ || _(f.L.PRIMARY);
                      },
                      children: b.intl.string(b.t.RzWDqa)
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: b.intl.string(b.t.pj0XBA) },
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: p.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: p.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == _ ? void 0 : _(f.L.PRIMARY))
                  })
        ]
    });
}
