n.d(t, { Z: () => V });
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
    f = n(40851),
    p = n(600164),
    m = n(750154),
    g = n(892001),
    _ = n(592125),
    v = n(594174),
    h = n(979651),
    b = n(374129),
    y = n(639351),
    O = n(503438),
    j = n(802856),
    S = n(387903),
    x = n(606925),
    I = n(719216),
    P = n(429589),
    C = n(276149),
    E = n(636245),
    w = n(697761),
    T = n(611459),
    N = n(544671),
    Z = n(757182),
    A = n(910424),
    D = n(981631),
    k = n(477839),
    L = n(388032),
    M = n(603571),
    U = n(126485);
let R = (e) => {
        let { user: t, color: n, look: i, activity: l, onAction: a } = e,
            o = (0, f.Aq)();
        return (0, r.jsx)(
            I.Z,
            {
                user: t,
                color: n,
                look: i,
                activity: l,
                onAction: () => {
                    (o.dispatch(D.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == a || a());
                }
            },
            'custom-activity-button'
        );
    },
    V = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: i, applicationStream: a, className: u, guildId: f, channelId: g, source: V, color: F = c.zx.Colors.WHITE, look: W = c.zx.Looks.OUTLINED, type: Y, onAction: B } = e,
            G = (0, s.e7)([v.default], () => {
                let e = v.default.getCurrentUser();
                return (o()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e);
            }),
            H = Y === S.Y.STREAM_PREVIEW || null != a,
            z = (0, O.Z)(t),
            J = z || H ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
            X = (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS,
            q = (0, s.e7)([h.Z, _.Z], () => {
                var e;
                return X ? _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
            });
        if ((null == t ? void 0 : t.application_id) === k.bO) {
            var K, Q;
            return (
                (K = (function (e) {
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
                (Q = Q =
                    {
                        buttons: [L.intl.string(M.default['Fv/2Oz'])],
                        metadata: { button_urls: [k.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(K, Object.getOwnPropertyDescriptors(Q))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(Q)).forEach(function (e) {
                          Object.defineProperty(K, e, Object.getOwnPropertyDescriptor(Q, e));
                      }),
                (t = K),
                (0, r.jsx)(R, {
                    user: i,
                    color: F,
                    look: W,
                    activity: t,
                    onAction: B
                })
            );
        }
        let $ = J === p.Z.Direction.VERTICAL;
        return (0, r.jsx)(p.Z, {
            grow: 0,
            align: p.Z.Align.STRETCH,
            direction: J,
            wrap: $ ? p.Z.Wrap.WRAP : p.Z.Wrap.NO_WRAP,
            className: l()(u, U.buttonsWrapper, $ ? U.vertical : U.horizontal),
            children: (() => {
                if ((0, j.Z)(t))
                    return (0, r.jsx)(
                        x.Z,
                        {
                            platform: d.Z.get(D.ABu.XBOX),
                            look: W,
                            color: F,
                            onAction: B,
                            Icon: y.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === D.M7m.PS4 || (null == t ? void 0 : t.platform) === D.M7m.PS5)
                    return (0, r.jsx)(
                        x.Z,
                        {
                            look: W,
                            color: F,
                            platform: d.Z.get(D.ABu.PLAYSTATION),
                            onAction: B,
                            Icon: b.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (z) {
                    let e = (0, r.jsx)(
                            N.Z,
                            {
                                activity: t,
                                user: i,
                                guildId: f,
                                channelId: g,
                                source: V,
                                look: W,
                                color: F,
                                onAction: B
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            T.Z,
                            {
                                activity: t,
                                user: i,
                                source: V,
                                look: W,
                                color: F,
                                onAction: B
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
                              E.Z,
                              {
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  color: F,
                                  look: W,
                                  onAction: B
                              },
                              e.channelId
                          );
                }
                return H
                    ? (0, r.jsx)(
                          A.Z,
                          {
                              isCurrentUser: G.id === i.id,
                              color: F,
                              look: W,
                              applicationStream: a,
                              onAction: B
                          },
                          'watch-button'
                      )
                    : X && null != q
                      ? (0, r.jsx)(
                            C.Z,
                            {
                                color: F,
                                look: W,
                                hangStatusChannel: q,
                                onAction: B
                            },
                            'hang-status-button'
                        )
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    Z.Z,
                                    {
                                        activity: t,
                                        color: F,
                                        look: W,
                                        onAction: B
                                    },
                                    'watch-button'
                                ),
                                (0, r.jsx)(
                                    P.Z,
                                    {
                                        activity: t,
                                        embeddedActivity: n,
                                        user: i,
                                        color: F,
                                        look: W,
                                        onAction: B
                                    },
                                    'join-activity-button'
                                ),
                                (0, r.jsx)(
                                    w.Z,
                                    {
                                        activity: t,
                                        user: i,
                                        color: F,
                                        look: W,
                                        onAction: B
                                    },
                                    'notify-button'
                                ),
                                (0, r.jsx)(
                                    I.Z,
                                    {
                                        user: i,
                                        color: F,
                                        look: W,
                                        activity: t,
                                        onAction: B
                                    },
                                    'custom-activity-button'
                                )
                            ]
                        });
            })()
        });
    });
