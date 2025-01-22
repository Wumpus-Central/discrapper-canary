var i = r(200651),
    a = r(192379),
    o = r(996146),
    s = r(481060),
    l = r(100527),
    u = r(906732),
    c = r(540059),
    d = r(963249),
    f = r(109213),
    p = r(51144),
    h = r(443603),
    _ = r(981631),
    m = r(388032),
    g = r(553796);
function E(e) {
    let { disabled: n, channel: a } = e,
        { analyticsLocations: E } = (0, u.ZP)(l.Z.GIFT_BUTTON),
        v = (0, p.Ft)(a),
        { Component: y, events: b, play: I } = (0, o.$)(),
        { enabled: T } = f.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        S = (0, c.Q3)('ChannelPremiumGiftButton'),
        A = a.type === _.d4z.DM;
    if (n) return null;
    let C = () => {
        T && A && null != v
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await r.e('59207').then(r.bind(r, 435626));
                  return (n) =>
                      (0, i.jsx)(e, {
                          analyticsObject: {
                              page: _.ZY5.DM_CHANNEL,
                              section: _.jXE.CHANNEL_TEXT_AREA,
                              object: _.qAy.BUTTON_ICON,
                              objectType: _.Qqv.GIFT
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
                      page: a.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
                      section: _.jXE.CHANNEL_TEXT_AREA,
                      object: _.qAy.BUTTON_ICON,
                      objectType: _.Qqv.GIFT
                  }
              });
    };
    return (0, i.jsx)(s.Tooltip, {
        text: m.intl.string(m.t.sWtWDQ),
        children: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                innerClassName: g.button,
                isActive: !1,
                'aria-label': m.intl.string(m.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    C(), I();
                },
                ...b,
                children: (0, i.jsx)(y, {
                    size: S ? 'refresh_sm' : void 0,
                    color: 'currentColor'
                })
            })
    });
}
n.Z = a.memo(E);
