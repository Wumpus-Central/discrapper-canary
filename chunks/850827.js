n.d(t, { Z: () => A });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    f = n(600164),
    p = n(750154),
    m = n(594174),
    g = n(374129),
    y = n(639351),
    b = n(503438),
    h = n(802856),
    v = n(387903),
    O = n(606925),
    j = n(719216),
    S = n(429589),
    N = n(636245),
    P = n(697761),
    I = n(611459),
    x = n(544671),
    E = n(757182),
    w = n(910424),
    Z = n(981631),
    T = n(688354);
let A = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: l, applicationStream: a, className: u, guildId: A, channelId: C, source: D, color: _ = c.zxk.Colors.WHITE, look: k = c.zxk.Looks.OUTLINED, type: W, onAction: R } = e,
        M = (0, s.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return o()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        L = W === v.Y.STREAM_PREVIEW || null != a,
        U = (0, b.Z)(t),
        G = U || L ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL,
        V = G === f.Z.Direction.VERTICAL;
    return (0, r.jsx)(f.Z, {
        grow: 0,
        align: f.Z.Align.STRETCH,
        direction: G,
        wrap: V ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
        className: i()(u, T.buttonsWrapper, V ? T.vertical : T.horizontal),
        children: (() => {
            if ((0, h.Z)(t))
                return (0, r.jsx)(
                    O.Z,
                    {
                        platform: d.Z.get(Z.ABu.XBOX),
                        look: k,
                        color: _,
                        onAction: R,
                        Icon: y.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === Z.M7m.PS4 || (null == t ? void 0 : t.platform) === Z.M7m.PS5)
                return (0, r.jsx)(
                    O.Z,
                    {
                        look: k,
                        color: _,
                        platform: d.Z.get(Z.ABu.PLAYSTATION),
                        onAction: R,
                        Icon: g.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (U) {
                let e = (0, r.jsx)(
                        x.Z,
                        {
                            activity: t,
                            user: l,
                            guildId: A,
                            channelId: C,
                            source: D,
                            look: k,
                            color: _,
                            onAction: R
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, r.jsx)(
                        I.Z,
                        {
                            activity: t,
                            user: l,
                            source: D,
                            look: k,
                            color: _,
                            onAction: R
                        },
                        'spotify-activity-play-button'
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, p.dS)(t)) {
                let e = (0, p.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(
                          N.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: _,
                              look: k,
                              onAction: R
                          },
                          e.channelId
                      );
            }
            return L
                ? (0, r.jsx)(
                      w.Z,
                      {
                          isCurrentUser: M.id === l.id,
                          color: _,
                          look: k,
                          applicationStream: a,
                          onAction: R
                      },
                      'watch-button'
                  )
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(
                              E.Z,
                              {
                                  activity: t,
                                  color: _,
                                  look: k,
                                  onAction: R
                              },
                              'watch-button'
                          ),
                          (0, r.jsx)(
                              S.Z,
                              {
                                  activity: t,
                                  embeddedActivity: n,
                                  user: l,
                                  color: _,
                                  look: k,
                                  onAction: R
                              },
                              'join-activity-button'
                          ),
                          (0, r.jsx)(
                              P.Z,
                              {
                                  activity: t,
                                  user: l,
                                  color: _,
                                  look: k,
                                  onAction: R
                              },
                              'notify-button'
                          ),
                          (0, r.jsx)(
                              j.Z,
                              {
                                  user: l,
                                  color: _,
                                  look: k,
                                  activity: t,
                                  onAction: R
                              },
                              'custom-activity-button'
                          )
                      ]
                  });
        })()
    });
});
