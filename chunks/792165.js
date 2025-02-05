n.d(t, { o: () => C });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(693789),
    r = n(993365),
    s = n(481060),
    o = n(230711),
    c = n(197115),
    d = n(504983),
    u = n(594174),
    m = n(74538),
    _ = n(981631),
    h = n(921944),
    p = n(474936),
    g = n(526761),
    f = n(388032),
    x = n(376799);
function C(e) {
    var t;
    let { onClose: n, markAsDismissed: C } = e,
        v = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        E = (t = null == v ? void 0 : v.premiumType) === p.p9.TIER_2 ? f.intl.string(f.t.jqO5Qk) : null == t ? f.intl.string(f.t.f2qjw8) : f.intl.string(f.t.SblICQ),
        I = m.ZP.canUseCustomCallSounds(v);
    return (0, i.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: x.upsellOuter,
        backgroundClassName: x.upsellInner,
        children: [
            null != C
                ? (0, i.jsx)(s.P3F, {
                      className: x.close,
                      onClick: () => (null == C ? void 0 : C(h.L.DISMISS)),
                      'aria-label': f.intl.string(f.t.cpT0Cg),
                      children: (0, i.jsx)(s.Dio, {
                          size: 'xs',
                          color: 'currentColor',
                          className: x.closeIcon
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: x.upsellTitle,
                children: [
                    (0, i.jsx)(s.SrA, {
                        size: 'sm',
                        color: 'currentColor',
                        className: x.nitroWheel
                    }),
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-sm/bold',
                        children: f.intl.string(f.t.dTbAx8)
                    })
                ]
            }),
            (0, i.jsx)(r.x, {
                variant: 'text-sm/normal',
                children: E
            }),
            I
                ? (0, i.jsx)(a.zx, {
                      onClick: function () {
                          o.Z.open(_.oAB.VOICE, g.GA), null == n || n(), null == C || C(h.L.PRIMARY);
                      },
                      children: f.intl.string(f.t.RzWDqa)
                  })
                : (0, i.jsx)(c.Z, {
                      buttonText: f.intl.string(f.t.pj0XBA),
                      subscriptionTier: p.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: _.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: _.qAy.BUTTON_CTA
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == C ? void 0 : C(h.L.PRIMARY))
                  })
        ]
    });
}
