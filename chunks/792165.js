n.d(t, { o: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(693789),
    a = n(993365),
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
    C = n(388032),
    v = n(435803);
function b(e) {
    var t;
    let { onClose: n, markAsDismissed: b } = e,
        _ = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        j = (t = null == _ ? void 0 : _.premiumType) === h.p9.TIER_2 ? C.intl.string(C.t.jqO5Qk) : null == t ? C.intl.string(C.t.f2qjw8) : C.intl.string(C.t.SblICQ),
        y = m.ZP.canUseCustomCallSounds(_);
    return (0, r.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: v.upsellOuter,
        backgroundClassName: v.upsellInner,
        children: [
            null != b
                ? (0, r.jsx)(s.P3F, {
                      className: v.close,
                      onClick: () => (null == b ? void 0 : b(f.L.DISMISS)),
                      'aria-label': C.intl.string(C.t.cpT0Cg),
                      children: (0, r.jsx)(s.Dio, {
                          size: 'xs',
                          color: 'currentColor',
                          className: v.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: v.upsellTitle,
                children: [
                    (0, r.jsx)(s.SrA, {
                        size: 'sm',
                        color: 'currentColor',
                        className: v.nitroWheel
                    }),
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-sm/bold',
                        children: C.intl.string(C.t.dTbAx8)
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
                          o.Z.open(p.oAB.VOICE, g.GA), null == n || n(), null == b || b(f.L.PRIMARY);
                      },
                      children: C.intl.string(C.t.RzWDqa)
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: C.intl.string(C.t.pj0XBA) },
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: p.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: p.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == b ? void 0 : b(f.L.PRIMARY))
                  })
        ]
    });
}
