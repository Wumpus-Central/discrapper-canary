n.d(t, { Z: () => M });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    c = n(755721),
    u = n(730749),
    d = n(726542),
    p = n(40851),
    f = n(600164),
    m = n(750154),
    g = n(892001),
    _ = n(594174),
    v = n(374129),
    b = n(639351),
    h = n(503438),
    y = n(802856),
    O = n(387903),
    j = n(606925),
    x = n(719216),
    S = n(429589),
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
    k = n(126485);
let L = (e) => {
        let { user: t, color: n, look: i, activity: l, onAction: a } = e,
            o = (0, p.Aq)();
        return (0, r.jsx)(
            x.Z,
            {
                user: t,
                color: n,
                look: i,
                activity: l,
                onAction: () => {
                    (o.dispatch(N.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == a || a());
                }
            },
            'custom-activity-button'
        );
    },
    M = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: i, applicationStream: a, className: u, guildId: p, channelId: g, source: M, color: R = c.zx.Colors.WHITE, look: U = c.zx.Looks.OUTLINED, type: F, onAction: V } = e,
            Y = (0, s.e7)([_.default], () => {
                let e = _.default.getCurrentUser();
                return (o()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e);
            }),
            W = F === O.Y.STREAM_PREVIEW || null != a,
            B = (0, h.Z)(t),
            z = B || W ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL;
        if ((null == t ? void 0 : t.application_id) === Z.bO) {
            var G, H;
            return (
                (G = (function (e) {
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
                (H = H =
                    {
                        buttons: [A.intl.string(D.default['Fv/2Oz'])],
                        metadata: { button_urls: [Z.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(H))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(H)).forEach(function (e) {
                          Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(H, e));
                      }),
                (t = G),
                (0, r.jsx)(L, {
                    user: i,
                    color: R,
                    look: U,
                    activity: t,
                    onAction: V
                })
            );
        }
        let J = z === f.Z.Direction.VERTICAL;
        return (0, r.jsx)(f.Z, {
            grow: 0,
            align: f.Z.Align.STRETCH,
            direction: z,
            wrap: J ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
            className: l()(u, k.buttonsWrapper, J ? k.vertical : k.horizontal),
            children: (() => {
                if ((0, y.Z)(t))
                    return (0, r.jsx)(
                        j.Z,
                        {
                            platform: d.Z.get(N.ABu.XBOX),
                            look: U,
                            color: R,
                            onAction: V,
                            Icon: b.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === N.M7m.PS4 || (null == t ? void 0 : t.platform) === N.M7m.PS5)
                    return (0, r.jsx)(
                        j.Z,
                        {
                            look: U,
                            color: R,
                            platform: d.Z.get(N.ABu.PLAYSTATION),
                            onAction: V,
                            Icon: v.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (B) {
                    let e = (0, r.jsx)(
                            E.Z,
                            {
                                activity: t,
                                user: i,
                                guildId: p,
                                channelId: g,
                                source: M,
                                look: U,
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
                                look: U,
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
                                  look: U,
                                  onAction: V
                              },
                              e.channelId
                          );
                }
                return W
                    ? (0, r.jsx)(
                          T.Z,
                          {
                              isCurrentUser: Y.id === i.id,
                              color: R,
                              look: U,
                              applicationStream: a,
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
                                      look: U,
                                      onAction: V
                                  },
                                  'watch-button'
                              ),
                              (0, r.jsx)(
                                  S.Z,
                                  {
                                      activity: t,
                                      embeddedActivity: n,
                                      user: i,
                                      color: R,
                                      look: U,
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
                                      look: U,
                                      onAction: V
                                  },
                                  'notify-button'
                              ),
                              (0, r.jsx)(
                                  x.Z,
                                  {
                                      user: i,
                                      color: R,
                                      look: U,
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
