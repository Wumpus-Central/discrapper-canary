n.d(t, { o: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(693789),
    o = n(993365),
    l = n(481060),
    s = n(230711),
    c = n(767714),
    d = n(504983),
    u = n(594174),
    _ = n(74538),
    m = n(981631),
    f = n(921944),
    p = n(474936),
    g = n(526761),
    v = n(388032),
    h = n(435803);
function b(e) {
    var t;
    let { onClose: n, markAsDismissed: b } = e,
        y = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        x = (t = null == y ? void 0 : y.premiumType) === p.p9.TIER_2 ? v.intl.string(v.t.jqO5Qk) : null == t ? v.intl.string(v.t.f2qjw8) : v.intl.string(v.t.SblICQ),
        j = _.ZP.canUseCustomCallSounds(y);
    return (0, r.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: h.upsellOuter,
        backgroundClassName: h.upsellInner,
        children: [
            null != b
                ? (0, r.jsx)(l.P3F, {
                      className: h.close,
                      onClick: () => (null == b ? void 0 : b(f.L.DISMISS)),
                      'aria-label': v.intl.string(v.t.cpT0Cg),
                      children: (0, r.jsx)(l.Dio, {
                          size: 'xs',
                          color: 'currentColor',
                          className: h.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: h.upsellTitle,
                children: [
                    (0, r.jsx)(l.SrA, {
                        size: 'sm',
                        color: 'currentColor',
                        className: h.nitroWheel
                    }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-sm/bold',
                        children: v.intl.string(v.t.dTbAx8)
                    })
                ]
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-sm/normal',
                children: x
            }),
            j
                ? (0, r.jsx)(a.zx, {
                      onClick: function () {
                          s.Z.open(m.oAB.VOICE, g.GA), null == n || n(), null == b || b(f.L.PRIMARY);
                      },
                      children: v.intl.string(v.t.RzWDqa)
                  })
                : (0, r.jsx)(c.Z, {
                      textOptions: { textOverride: v.intl.string(v.t.pj0XBA) },
                      subscriptionTier: p.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: m.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: m.qAy.BUTTON_CTA
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == b ? void 0 : b(f.L.PRIMARY))
                  })
        ]
    });
}
