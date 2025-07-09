n.d(t, { Z: () => M });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    c = n(755721),
    u = n(730749),
    d = n(726542),
    p = n(40851),
    f = n(600164),
    m = n(750154),
    g = n(892001),
    b = n(594174),
    _ = n(374129),
    v = n(639351),
    h = n(503438),
    y = n(802856),
    O = n(387903),
    j = n(606925),
    S = n(719216),
    x = n(429589),
    I = n(636245),
    P = n(697761),
    C = n(611459),
    E = n(544671),
    w = n(757182),
    T = n(910424),
    N = n(981631),
    Z = n(477839),
    A = n(388032),
    D = n(603571),
    L = n(126485);
let k = (e) => {
        let { user: t, color: n, look: i, activity: l, onAction: o } = e,
            a = (0, p.Aq)();
        return (0, r.jsx)(
            S.Z,
            {
                user: t,
                color: n,
                look: i,
                activity: l,
                onAction: () => {
                    (a.dispatch(N.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == o || o());
                }
            },
            'custom-activity-button'
        );
    },
    M = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: i, applicationStream: o, className: u, guildId: p, channelId: g, source: M, color: R = c.zx.Colors.WHITE, look: F = c.zx.Looks.OUTLINED, type: U, onAction: V } = e,
            B = (0, s.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return (a()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e);
            }),
            Y = U === O.Y.STREAM_PREVIEW || null != o,
            z = (0, h.Z)(t),
            W = z || Y ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL;
        if ((null == t ? void 0 : t.application_id) === Z.bO) {
            var H, G;
            return (
                (H = (function (e) {
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
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, t)),
                (G = G =
                    {
                        buttons: [A.intl.string(D.default['Fv/2Oz'])],
                        metadata: { button_urls: [Z.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(H, Object.getOwnPropertyDescriptors(G))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(G)).forEach(function (e) {
                          Object.defineProperty(H, e, Object.getOwnPropertyDescriptor(G, e));
                      }),
                (t = H),
                (0, r.jsx)(k, {
                    user: i,
                    color: R,
                    look: F,
                    activity: t,
                    onAction: V
                })
            );
        }
        let J = W === f.Z.Direction.VERTICAL;
        return (0, r.jsx)(f.Z, {
            grow: 0,
            align: f.Z.Align.STRETCH,
            direction: W,
            wrap: J ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
            className: l()(u, L.buttonsWrapper, J ? L.vertical : L.horizontal),
            children: (() => {
                if ((0, y.Z)(t))
                    return (0, r.jsx)(
                        j.Z,
                        {
                            platform: d.Z.get(N.ABu.XBOX),
                            look: F,
                            color: R,
                            onAction: V,
                            Icon: v.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === N.M7m.PS4 || (null == t ? void 0 : t.platform) === N.M7m.PS5)
                    return (0, r.jsx)(
                        j.Z,
                        {
                            look: F,
                            color: R,
                            platform: d.Z.get(N.ABu.PLAYSTATION),
                            onAction: V,
                            Icon: _.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (z) {
                    let e = (0, r.jsx)(
                            E.Z,
                            {
                                activity: t,
                                user: i,
                                guildId: p,
                                channelId: g,
                                source: M,
                                look: F,
                                color: R,
                                onAction: V
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            C.Z,
                            {
                                activity: t,
                                user: i,
                                source: M,
                                look: F,
                                color: R,
                                onAction: V
                            },
                            'spotify-activity-play-button'
                        );
                    return (0, r.jsxs)(r.Fragment, {
                        children: [n, e]
                    });
                }
                if ((0, m.dS)(t)) {
                    let e = (0, m.rq)(t);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              I.Z,
                              {
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  color: R,
                                  look: F,
                                  onAction: V
                              },
                              e.channelId
                          );
                }
                return Y
                    ? (0, r.jsx)(
                          T.Z,
                          {
                              isCurrentUser: B.id === i.id,
                              color: R,
                              look: F,
                              applicationStream: o,
                              onAction: V
                          },
                          'watch-button'
                      )
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  w.Z,
                                  {
                                      activity: t,
                                      color: R,
                                      look: F,
                                      onAction: V
                                  },
                                  'watch-button'
                              ),
                              (0, r.jsx)(
                                  x.Z,
                                  {
                                      activity: t,
                                      embeddedActivity: n,
                                      user: i,
                                      color: R,
                                      look: F,
                                      onAction: V
                                  },
                                  'join-activity-button'
                              ),
                              (0, r.jsx)(
                                  P.Z,
                                  {
                                      activity: t,
                                      user: i,
                                      color: R,
                                      look: F,
                                      onAction: V
                                  },
                                  'notify-button'
                              ),
                              (0, r.jsx)(
                                  S.Z,
                                  {
                                      user: i,
                                      color: R,
                                      look: F,
                                      activity: t,
                                      onAction: V
                                  },
                                  'custom-activity-button'
                              )
                          ]
                      });
            })()
        });
    });
