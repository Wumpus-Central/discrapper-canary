n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(996146),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(540059),
    c = n(963249),
    d = n(109213),
    f = n(51144),
    _ = n(443603),
    p = n(981631),
    h = n(388032),
    m = n(513632);
function g(e) {
    let { disabled: t, channel: r } = e,
        { analyticsLocations: g } = (0, l.ZP)(o.Z.GIFT_BUTTON),
        E = (0, f.Ft)(r),
        { Component: v, events: y, play: I } = (0, a.$)(),
        { enabled: T } = d.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        b = (0, u.Q3)('ChannelPremiumGiftButton'),
        S = r.type === p.d4z.DM;
    if (t) return null;
    let A = () => {
        T && S && null != E
            ? (0, s.ZDy)(async () => {
                  let { default: e } = await n.e('59207').then(n.bind(n, 435626));
                  return (t) =>
                      (0, i.jsx)(e, {
                          analyticsObject: {
                              page: p.ZY5.DM_CHANNEL,
                              section: p.jXE.CHANNEL_TEXT_AREA,
                              object: p.qAy.BUTTON_ICON,
                              objectType: p.Qqv.GIFT
                          },
                          analyticsLocations: g,
                          giftRecipient: E,
                          ...t
                      });
              })
            : (0, c.Z)({
                  isGift: !0,
                  giftRecipient: null === E ? void 0 : E,
                  initialPlanId: null,
                  analyticsLocations: g,
                  analyticsObject: {
                      page: r.isPrivate() ? p.ZY5.DM_CHANNEL : p.ZY5.GUILD_CHANNEL,
                      section: p.jXE.CHANNEL_TEXT_AREA,
                      object: p.qAy.BUTTON_ICON,
                      objectType: p.Qqv.GIFT
                  }
              });
    };
    return (0, i.jsx)(s.ua7, {
        text: h.intl.string(h.t.sWtWDQ),
        children: (e) =>
            (0, i.jsx)(_.Z, {
                ...e,
                innerClassName: m.button,
                isActive: !1,
                'aria-label': h.intl.string(h.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    A(), I();
                },
                ...y,
                children: (0, i.jsx)(v, {
                    size: b ? 'refresh_sm' : void 0,
                    color: 'currentColor'
                })
            })
    });
}
let E = r.memo(g);
