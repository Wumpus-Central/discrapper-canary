var i = r(200651),
    a = r(192379),
    s = r(996146),
    o = r(481060),
    l = r(100527),
    u = r(906732),
    c = r(540059),
    d = r(963249),
    f = r(109213),
    _ = r(51144),
    h = r(443603),
    p = r(981631),
    m = r(388032),
    g = r(553796);
function E(e) {
    let { disabled: n, channel: a } = e,
        { analyticsLocations: E } = (0, u.ZP)(l.Z.GIFT_BUTTON),
        v = (0, _.Ft)(a),
        { Component: I, events: T, play: b } = (0, s.$)(),
        { enabled: y } = f.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        S = (0, c.Q3)('ChannelPremiumGiftButton'),
        A = a.type === p.d4z.DM;
    if (n) return null;
    let N = () => {
        y && A && null != v
            ? (0, o.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('12013'), r.e('73503'), r.e('52249'), r.e('68956'), r.e('26182'), r.e('95900'), r.e('32776'), r.e('87624'), r.e('74421'), r.e('57674'), r.e('77650')]).then(r.bind(r, 435626));
                  return (n) =>
                      (0, i.jsx)(e, {
                          analyticsObject: {
                              page: p.ZY5.DM_CHANNEL,
                              section: p.jXE.CHANNEL_TEXT_AREA,
                              object: p.qAy.BUTTON_ICON,
                              objectType: p.Qqv.GIFT
                          },
                          analyticsLocations: E,
                          giftRecipient: v,
                          ...n
                      });
              })
            : (0, d.Z)({
                  isGift: !0,
                  giftRecipient: null === v ? void 0 : v,
                  initialPlanId: null,
                  analyticsLocations: E,
                  analyticsObject: {
                      page: a.isPrivate() ? p.ZY5.DM_CHANNEL : p.ZY5.GUILD_CHANNEL,
                      section: p.jXE.CHANNEL_TEXT_AREA,
                      object: p.qAy.BUTTON_ICON,
                      objectType: p.Qqv.GIFT
                  }
              });
    };
    return (0, i.jsx)(o.Tooltip, {
        text: m.intl.string(m.t.sWtWDQ),
        children: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                innerClassName: g.button,
                isActive: !1,
                'aria-label': m.intl.string(m.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    N(), b();
                },
                ...T,
                children: (0, i.jsx)(I, {
                    size: S ? 'refresh_sm' : void 0,
                    color: 'currentColor'
                })
            })
    });
}
n.Z = a.memo(E);
