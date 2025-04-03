n.d(t, { Z: () => W });
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
    y = n(639351),
    h = n(503438),
    v = n(802856),
    j = n(387903),
    S = n(606925),
    P = n(719216),
    N = n(429589),
    I = n(636245),
    E = n(697761),
    Z = n(611459),
    x = n(544671),
    w = n(757182),
    C = n(910424),
    T = n(981631),
    A = n(477839),
    D = n(388032),
    _ = n(622802),
    k = n(126485);
let L = (e) => {
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
                    a.dispatch(T.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == o || o();
                }
            },
            'custom-activity-button'
        );
    },
    W = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: l, applicationStream: o, className: u, guildId: p, channelId: g, source: W, color: M = c.zxk.Colors.WHITE, look: U = c.zxk.Looks.OUTLINED, type: R, onAction: V } = e,
            F = (0, s.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return a()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
            }),
            B = R === j.Y.STREAM_PREVIEW || null != o,
            Y = (0, h.Z)(t),
            G = Y || B ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL;
        if ((null == t ? void 0 : t.application_id) === A.bO) {
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
                        buttons: [D.NW.string(_.Z['Fv/2Oz'])],
                        metadata: { button_urls: [A.U8] }
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
                (0, r.jsx)(L, {
                    user: l,
                    color: M,
                    look: U,
                    activity: t,
                    onAction: V
                })
            );
        }
        let J = G === f.Z.Direction.VERTICAL;
        return (0, r.jsx)(f.Z, {
            grow: 0,
            align: f.Z.Align.STRETCH,
            direction: G,
            wrap: J ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
            className: i()(u, k.buttonsWrapper, J ? k.vertical : k.horizontal),
            children: (() => {
                if ((0, v.Z)(t))
                    return (0, r.jsx)(
                        S.Z,
                        {
                            platform: d.Z.get(T.ABu.XBOX),
                            look: U,
                            color: M,
                            onAction: V,
                            Icon: y.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === T.M7m.PS4 || (null == t ? void 0 : t.platform) === T.M7m.PS5)
                    return (0, r.jsx)(
                        S.Z,
                        {
                            look: U,
                            color: M,
                            platform: d.Z.get(T.ABu.PLAYSTATION),
                            onAction: V,
                            Icon: O.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (Y) {
                    let e = (0, r.jsx)(
                            x.Z,
                            {
                                activity: t,
                                user: l,
                                guildId: p,
                                channelId: g,
                                source: W,
                                look: U,
                                color: M,
                                onAction: V
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            Z.Z,
                            {
                                activity: t,
                                user: l,
                                source: W,
                                look: U,
                                color: M,
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
                                  color: M,
                                  look: U,
                                  onAction: V
                              },
                              e.channelId
                          );
                }
                return B
                    ? (0, r.jsx)(
                          C.Z,
                          {
                              isCurrentUser: F.id === l.id,
                              color: M,
                              look: U,
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
                                      color: M,
                                      look: U,
                                      onAction: V
                                  },
                                  'watch-button'
                              ),
                              (0, r.jsx)(
                                  N.Z,
                                  {
                                      activity: t,
                                      embeddedActivity: n,
                                      user: l,
                                      color: M,
                                      look: U,
                                      onAction: V
                                  },
                                  'join-activity-button'
                              ),
                              (0, r.jsx)(
                                  E.Z,
                                  {
                                      activity: t,
                                      user: l,
                                      color: M,
                                      look: U,
                                      onAction: V
                                  },
                                  'notify-button'
                              ),
                              (0, r.jsx)(
                                  P.Z,
                                  {
                                      user: l,
                                      color: M,
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
