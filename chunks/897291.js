n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    a = n(996146),
    o = n(481060),
    s = n(100527),
    l = n(906732),
    c = n(963249),
    u = n(109213),
    d = n(51144),
    f = n(443603),
    _ = n(981631),
    p = n(388032),
    h = n(302195);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { disabled: t, channel: i } = e,
        { analyticsLocations: m } = (0, l.ZP)(s.Z.GIFT_BUTTON),
        E = (0, d.Ft)(i),
        { Component: y, events: O, play: v } = (0, a.$)(),
        { enabled: I } = u.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        T = i.type === _.d4z.DM;
    if (t) return null;
    let S = () => {
        I && T && null != E
            ? (0, o.ZDy)(async () => {
                  let { default: e } = await n.e('59207').then(n.bind(n, 435626));
                  return (t) =>
                      (0, r.jsx)(
                          e,
                          g(
                              {
                                  analyticsObject: {
                                      page: _.ZY5.DM_CHANNEL,
                                      section: _.jXE.CHANNEL_TEXT_AREA,
                                      object: _.qAy.BUTTON_ICON,
                                      objectType: _.Qqv.GIFT
                                  },
                                  analyticsLocations: m,
                                  giftRecipient: E
                              },
                              t
                          )
                      );
              })
            : (0, c.Z)({
                  isGift: !0,
                  giftRecipient: null === E ? void 0 : E,
                  initialPlanId: null,
                  analyticsLocations: m,
                  analyticsObject: {
                      page: i.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
                      section: _.jXE.CHANNEL_TEXT_AREA,
                      object: _.qAy.BUTTON_ICON,
                      objectType: _.Qqv.GIFT
                  }
              });
    };
    return (0, r.jsx)(o.ua7, {
        text: p.intl.string(p.t.sWtWDQ),
        children: (e) =>
            (0, r.jsx)(
                f.Z,
                b(
                    g(
                        b(g({}, e), {
                            innerClassName: h.button,
                            isActive: !1,
                            'aria-label': p.intl.string(p.t.Z1RnTk),
                            'aria-haspopup': 'dialog',
                            onClick: () => {
                                (S(), v());
                            }
                        }),
                        O
                    ),
                    {
                        children: (0, r.jsx)(y, {
                            size: 'refresh_sm',
                            color: 'currentColor'
                        })
                    }
                )
            )
    });
}
let O = i.memo(y);
