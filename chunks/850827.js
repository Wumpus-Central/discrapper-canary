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
    h = n(592125),
    b = n(594174),
    v = n(979651),
    _ = n(374129),
    y = n(639351),
    O = n(503438),
    S = n(802856),
    I = n(387903),
    j = n(606925),
    x = n(719216),
    E = n(429589),
    P = n(276149),
    C = n(636245),
    T = n(697761),
    N = n(611459),
    A = n(544671),
    w = n(757182),
    D = n(910424),
    Z = n(981631),
    L = n(477839),
    k = n(388032),
    M = n(603571),
    U = n(126485);
let R = (e) => {
        let { user: t, color: n, look: i, activity: l, onAction: a } = e,
            o = (0, f.Aq)();
        return (0, r.jsx)(
            x.Z,
            {
                user: t,
                color: n,
                look: i,
                activity: l,
                onAction: () => {
                    (o.dispatch(Z.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == a || a());
                }
            },
            'custom-activity-button'
        );
    },
    V = (0, u.Z)((e) => {
        let { activity: t, embeddedActivity: n, user: i, applicationStream: a, className: u, guildId: f, channelId: g, source: V, color: F = c.zx.Colors.WHITE, look: G = c.zx.Looks.OUTLINED, type: B, onAction: W } = e,
            H = (0, s.e7)([b.default], () => {
                let e = b.default.getCurrentUser();
                return (o()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e);
            }),
            Y = B === I.Y.STREAM_PREVIEW || null != a,
            z = (0, O.Z)(t),
            J = z || Y ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
            K = (null == t ? void 0 : t.type) === Z.IIU.HANG_STATUS,
            q = (0, s.e7)([v.Z, h.Z], () => {
                var e;
                return K ? h.Z.getChannel(null == (e = v.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
            });
        if ((null == t ? void 0 : t.application_id) === L.bO) {
            var X, Q;
            return (
                (X = (function (e) {
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
                        buttons: [k.intl.string(M.default['Fv/2Oz'])],
                        metadata: { button_urls: [L.U8] }
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(X, Object.getOwnPropertyDescriptors(Q))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(Q)).forEach(function (e) {
                          Object.defineProperty(X, e, Object.getOwnPropertyDescriptor(Q, e));
                      }),
                (t = X),
                (0, r.jsx)(R, {
                    user: i,
                    color: F,
                    look: G,
                    activity: t,
                    onAction: W
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
                if ((0, S.Z)(t))
                    return (0, r.jsx)(
                        j.Z,
                        {
                            platform: d.Z.get(Z.ABu.XBOX),
                            look: G,
                            color: F,
                            onAction: W,
                            Icon: y.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if ((null == t ? void 0 : t.platform) === Z.M7m.PS4 || (null == t ? void 0 : t.platform) === Z.M7m.PS5)
                    return (0, r.jsx)(
                        j.Z,
                        {
                            look: G,
                            color: F,
                            platform: d.Z.get(Z.ABu.PLAYSTATION),
                            onAction: W,
                            Icon: _.Z
                        },
                        'ConnectPlatformActivityButton'
                    );
                if (z) {
                    let e = (0, r.jsx)(
                            A.Z,
                            {
                                activity: t,
                                user: i,
                                guildId: f,
                                channelId: g,
                                source: V,
                                look: G,
                                color: F,
                                onAction: W
                            },
                            'spotify-activity-sync-button'
                        ),
                        n = (0, r.jsx)(
                            N.Z,
                            {
                                activity: t,
                                user: i,
                                source: V,
                                look: G,
                                color: F,
                                onAction: W
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
                              C.Z,
                              {
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  color: F,
                                  look: G,
                                  onAction: W
                              },
                              e.channelId
                          );
                }
                return Y
                    ? (0, r.jsx)(
                          D.Z,
                          {
                              isCurrentUser: H.id === i.id,
                              color: F,
                              look: G,
                              applicationStream: a,
                              onAction: W
                          },
                          'watch-button'
                      )
                    : K && null != q
                      ? (0, r.jsx)(
                            P.Z,
                            {
                                color: F,
                                look: G,
                                hangStatusChannel: q,
                                onAction: W
                            },
                            'hang-status-button'
                        )
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    w.Z,
                                    {
                                        activity: t,
                                        color: F,
                                        look: G,
                                        onAction: W
                                    },
                                    'watch-button'
                                ),
                                (0, r.jsx)(
                                    E.Z,
                                    {
                                        activity: t,
                                        embeddedActivity: n,
                                        user: i,
                                        color: F,
                                        look: G,
                                        onAction: W
                                    },
                                    'join-activity-button'
                                ),
                                (0, r.jsx)(
                                    T.Z,
                                    {
                                        activity: t,
                                        user: i,
                                        color: F,
                                        look: G,
                                        onAction: W
                                    },
                                    'notify-button'
                                ),
                                (0, r.jsx)(
                                    x.Z,
                                    {
                                        user: i,
                                        color: F,
                                        look: G,
                                        activity: t,
                                        onAction: W
                                    },
                                    'custom-activity-button'
                                )
                            ]
                        });
            })()
        });
    });
