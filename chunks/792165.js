n.d(t, { o: () => v });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(693789),
    o = n(993365),
    l = n(481060),
    s = n(230711),
    c = n(197115),
    d = n(504983),
    u = n(594174),
    p = n(74538),
    m = n(981631),
    f = n(921944),
    h = n(474936),
    g = n(526761),
    _ = n(388032),
    b = n(781152);
function v(e) {
    var t;
    let { onClose: n, markAsDismissed: v } = e,
        y = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        x = (t = null == y ? void 0 : y.premiumType) === h.p9.TIER_2 ? _.NW.string(_.t.jqO5Qk) : null == t ? _.NW.string(_.t.f2qjw8) : _.NW.string(_.t.SblICQ),
        O = p.ZP.canUseCustomCallSounds(y);
    return (0, r.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: b.upsellOuter,
        backgroundClassName: b.upsellInner,
        children: [
            null != v
                ? (0, r.jsx)(l.P3F, {
                      className: b.close,
                      onClick: () => (null == v ? void 0 : v(f.L.DISMISS)),
                      'aria-label': _.NW.string(_.t.cpT0Cg),
                      children: (0, r.jsx)(l.Dio, {
                          size: 'xs',
                          color: 'currentColor',
                          className: b.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: b.upsellTitle,
                children: [
                    (0, r.jsx)(l.SrA, {
                        size: 'sm',
                        color: 'currentColor',
                        className: b.nitroWheel
                    }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-sm/bold',
                        children: _.NW.string(_.t.dTbAx8)
                    })
                ]
            }),
            (0, r.jsx)(o.x, {
                variant: 'text-sm/normal',
                children: x
            }),
            O
                ? (0, r.jsx)(a.zx, {
                      onClick: function () {
                          s.Z.open(m.oAB.VOICE, g.GA), null == n || n(), null == v || v(f.L.PRIMARY);
                      },
                      children: _.NW.string(_.t.RzWDqa)
                  })
                : (0, r.jsx)(c.Z, {
                      buttonText: _.NW.string(_.t.pj0XBA),
                      subscriptionTier: h.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: m.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: m.qAy.BUTTON_CTA
                      },
                      color: a.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == v ? void 0 : v(f.L.PRIMARY))
                  })
        ]
    });
}
