n.d(t, {
    o: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(693789),
    a = n(993365),
    o = n(481060),
    s = n(230711),
    c = n(197115),
    d = n(504983),
    u = n(594174),
    m = n(74538),
    h = n(981631),
    f = n(921944),
    p = n(474936),
    _ = n(526761),
    g = n(388032),
    E = n(376799);
function C(e) {
    var t;
    let { onClose: n, markAsDismissed: C } = e,
        I = (0, r.e7)([u.default], () => u.default.getCurrentUser());
    let x = (t = null == I ? void 0 : I.premiumType) === p.p9.TIER_2 ? g.intl.string(g.t.jqO5Qk) : null == t ? g.intl.string(g.t.f2qjw8) : g.intl.string(g.t.SblICQ),
        N = m.ZP.canUseCustomCallSounds(I);
    return (0, i.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: E.upsellOuter,
        backgroundClassName: E.upsellInner,
        children: [
            null != C
                ? (0, i.jsx)(o.Clickable, {
                      className: E.close,
                      onClick: () => (null == C ? void 0 : C(f.L.DISMISS)),
                      'aria-label': g.intl.string(g.t.cpT0Cg),
                      children: (0, i.jsx)(o.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: E.closeIcon
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: E.upsellTitle,
                children: [
                    (0, i.jsx)(o.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: E.nitroWheel
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-sm/bold',
                        children: g.intl.string(g.t.dTbAx8)
                    })
                ]
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-sm/normal',
                children: x
            }),
            N
                ? (0, i.jsx)(l.zx, {
                      onClick: function () {
                          s.Z.open(h.oAB.VOICE, _.GA), null == n || n(), null == C || C(f.L.PRIMARY);
                      },
                      children: g.intl.string(g.t.RzWDqa)
                  })
                : (0, i.jsx)(c.Z, {
                      buttonText: g.intl.string(g.t.pj0XBA),
                      subscriptionTier: p.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: h.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: h.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == C ? void 0 : C(f.L.PRIMARY))
                  })
        ]
    });
}
