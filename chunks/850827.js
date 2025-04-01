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
    y = n(374129),
    O = n(639351),
    v = n(503438),
    h = n(802856),
    j = n(387903),
    S = n(606925),
    P = n(719216),
    N = n(429589),
    x = n(636245),
    I = n(697761),
    Z = n(611459),
    E = n(544671),
    w = n(757182),
    T = n(910424),
    C = n(981631),
    A = n(477839),
    D = n(388032),
    _ = n(884479),
    W = n(456312);
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
                    a.dispatch(C.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == o || o();
                }
            },
            'custom-activity-button'
        );
    },
    M = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: l, applicationStream: o, className: u, guildId: p, channelId: g, source: M, color: L = c.zxk.Colors.WHITE, look: U = c.zxk.Looks.OUTLINED, type: R, onAction: V } = e,
            Y = (0, s.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return a()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
            }),
            F = R === j.Y.STREAM_PREVIEW || null != o,
            B = (0, v.Z)(t),
            G = B || F ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL;
        if ((null == t ? void 0 : t.application_id) === A.bO) {
            var z, J;
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
                (J = J =
                    {
                        buttons: [D.NW.string(_.Z['Fv/2Oz'])],
                        metadata: { button_urls: [A.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(z, Object.getOwnPropertyDescriptors(J))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(J)).forEach(function (e) {
                          Object.defineProperty(z, e, Object.getOwnPropertyDescriptor(J, e));
                      }),
                (t = z),
                (0, r.jsx)(k, {
                    user: l,
                    color: L,
                    look: U,
                    activity: t,
                    onAction: V
                })
            );
        }
        let H = G === f.Z.Direction.VERTICAL;
        return (0, r.jsx)(f.Z, {
            grow: 0,
            align: f.Z.Align.STRETCH,
            direction: G,
            wrap: H ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
            className: i()(u, W.buttonsWrapper, H ? W.vertical : W.horizontal),
            children: (() => {
                if ((0, h.Z)(t))
                    return (0, r.jsx)(
                        S.Z,
                        {
                            platform: d.Z.get(C.ABu.XBOX),
                            look: U,
                            color: L,
                            onAction: V,
                            Icon: O.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === C.M7m.PS4 || (null == t ? void 0 : t.platform) === C.M7m.PS5)
                    return (0, r.jsx)(
                        S.Z,
                        {
                            look: U,
                            color: L,
                            platform: d.Z.get(C.ABu.PLAYSTATION),
                            onAction: V,
                            Icon: y.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (B) {
                    let e = (0, r.jsx)(
                            E.Z,
                            {
                                activity: t,
                                user: l,
                                guildId: p,
                                channelId: g,
                                source: M,
                                look: U,
                                color: L,
                                onAction: V
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            Z.Z,
                            {
                                activity: t,
                                user: l,
                                source: M,
                                look: U,
                                color: L,
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
                              x.Z,
                              {
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  color: L,
                                  look: U,
                                  onAction: V
                              },
                              e.channelId
                          );
                }
                return F
                    ? (0, r.jsx)(
                          T.Z,
                          {
                              isCurrentUser: Y.id === l.id,
                              color: L,
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
                                      color: L,
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
                                      color: L,
                                      look: U,
                                      onAction: V
                                  },
                                  'join-activity-button'
                              ),
                              (0, r.jsx)(
                                  I.Z,
                                  {
                                      activity: t,
                                      user: l,
                                      color: L,
                                      look: U,
                                      onAction: V
                                  },
                                  'notify-button'
                              ),
                              (0, r.jsx)(
                                  P.Z,
                                  {
                                      user: l,
                                      color: L,
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
