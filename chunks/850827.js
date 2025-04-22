n.d(t, { Z: () => M });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    p = n(40851),
    f = n(600164),
    m = n(750154),
    g = n(171368),
    b = n(594174),
    O = n(374129),
    h = n(639351),
    y = n(503438),
    v = n(802856),
    S = n(387903),
    j = n(606925),
    P = n(719216),
    E = n(429589),
    I = n(636245),
    Z = n(697761),
    x = n(611459),
    C = n(544671),
    T = n(757182),
    N = n(910424),
    A = n(981631),
    w = n(477839),
    D = n(388032),
    _ = n(622802),
    L = n(126485);
let k = (e) => {
        let { user: t, color: n, look: l, activity: i, onAction: o } = e,
            a = (0, p.Aq)();
        return (0, r.jsx)(
            P.Z,
            {
                user: t,
                color: n,
                look: l,
                activity: i,
                onAction: () => {
                    a.dispatch(A.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == o || o();
                }
            },
            'custom-activity-button'
        );
    },
    M = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: l, applicationStream: o, className: u, guildId: p, channelId: g, source: M, color: U = c.zxk.Colors.WHITE, look: R = c.zxk.Looks.OUTLINED, type: V, onAction: F } = e,
            Y = (0, s.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return a()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
            }),
            B = V === S.Y.STREAM_PREVIEW || null != o,
            G = (0, y.Z)(t),
            W = G || B ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL;
        if ((null == t ? void 0 : t.application_id) === w.bO) {
            var z, H;
            return (
                (z = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t)),
                (H = H =
                    {
                        buttons: [D.intl.string(_.default['Fv/2Oz'])],
                        metadata: { button_urls: [w.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(H))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(H)).forEach(function (e) {
                          Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(H, e));
                      }),
                (t = z),
                (0, r.jsx)(k, {
                    user: l,
                    color: U,
                    look: R,
                    activity: t,
                    onAction: F
                })
            );
        }
        let J = W === f.Z.Direction.VERTICAL;
        return (0, r.jsx)(f.Z, {
            grow: 0,
            align: f.Z.Align.STRETCH,
            direction: W,
            wrap: J ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
            className: i()(u, L.buttonsWrapper, J ? L.vertical : L.horizontal),
            children: (() => {
                if ((0, v.Z)(t))
                    return (0, r.jsx)(
                        j.Z,
                        {
                            platform: d.Z.get(A.ABu.XBOX),
                            look: R,
                            color: U,
                            onAction: F,
                            Icon: h.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === A.M7m.PS4 || (null == t ? void 0 : t.platform) === A.M7m.PS5)
                    return (0, r.jsx)(
                        j.Z,
                        {
                            look: R,
                            color: U,
                            platform: d.Z.get(A.ABu.PLAYSTATION),
                            onAction: F,
                            Icon: O.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (G) {
                    let e = (0, r.jsx)(
                            C.Z,
                            {
                                activity: t,
                                user: l,
                                guildId: p,
                                channelId: g,
                                source: M,
                                look: R,
                                color: U,
                                onAction: F
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            x.Z,
                            {
                                activity: t,
                                user: l,
                                source: M,
                                look: R,
                                color: U,
                                onAction: F
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
                                  color: U,
                                  look: R,
                                  onAction: F
                              },
                              e.channelId
                          );
                }
                return B
                    ? (0, r.jsx)(
                          N.Z,
                          {
                              isCurrentUser: Y.id === l.id,
                              color: U,
                              look: R,
                              applicationStream: o,
                              onAction: F
                          },
                          'watch-button'
                      )
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(
                                  T.Z,
                                  {
                                      activity: t,
                                      color: U,
                                      look: R,
                                      onAction: F
                                  },
                                  'watch-button'
                              ),
                              (0, r.jsx)(
                                  E.Z,
                                  {
                                      activity: t,
                                      embeddedActivity: n,
                                      user: l,
                                      color: U,
                                      look: R,
                                      onAction: F
                                  },
                                  'join-activity-button'
                              ),
                              (0, r.jsx)(
                                  Z.Z,
                                  {
                                      activity: t,
                                      user: l,
                                      color: U,
                                      look: R,
                                      onAction: F
                                  },
                                  'notify-button'
                              ),
                              (0, r.jsx)(
                                  P.Z,
                                  {
                                      user: l,
                                      color: U,
                                      look: R,
                                      activity: t,
                                      onAction: F
                                  },
                                  'custom-activity-button'
                              )
                          ]
                      });
            })()
        });
    });
