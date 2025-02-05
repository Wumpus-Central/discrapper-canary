n.d(t, { Z: () => w });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    m = n(600164),
    p = n(750154),
    h = n(594174),
    g = n(374129),
    f = n(639351),
    v = n(503438),
    S = n(802856),
    x = n(387903),
    I = n(606925),
    y = n(719216),
    T = n(429589),
    N = n(636245),
    A = n(697761),
    E = n(611459),
    Z = n(544671),
    C = n(757182),
    j = n(910424),
    P = n(981631),
    b = n(522832);
let w = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: i, applicationStream: a, className: u, guildId: w, channelId: _, source: R, color: L = c.zxk.Colors.WHITE, look: M = c.zxk.Looks.OUTLINED, type: U, onAction: k } = e,
        O = (0, o.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        D = U === x.Y.STREAM_PREVIEW || null != a,
        G = (0, v.Z)(t),
        Y = G || D ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
        z = Y === m.Z.Direction.VERTICAL;
    return (0, l.jsx)(m.Z, {
        grow: 0,
        align: m.Z.Align.STRETCH,
        direction: Y,
        wrap: z ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
        className: r()(u, b.buttonsWrapper, z ? b.vertical : b.horizontal),
        children: (() => {
            if ((0, S.Z)(t))
                return (0, l.jsx)(
                    I.Z,
                    {
                        platform: d.Z.get(P.ABu.XBOX),
                        look: M,
                        color: L,
                        onAction: k,
                        Icon: f.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, l.jsx)(
                    I.Z,
                    {
                        look: M,
                        color: L,
                        platform: d.Z.get(P.ABu.PLAYSTATION),
                        onAction: k,
                        Icon: g.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (G) {
                let e = (0, l.jsx)(
                        Z.Z,
                        {
                            activity: t,
                            user: i,
                            guildId: w,
                            channelId: _,
                            source: R,
                            look: M,
                            color: L,
                            onAction: k
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, l.jsx)(
                        E.Z,
                        {
                            activity: t,
                            user: i,
                            source: R,
                            look: M,
                            color: L,
                            onAction: k
                        },
                        'spotify-activity-play-button'
                    );
                return (0, l.jsxs)(l.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, p.dS)(t)) {
                let e = (0, p.rq)(t);
                return null == e
                    ? null
                    : (0, l.jsx)(
                          N.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: L,
                              look: M,
                              onAction: k
                          },
                          e.channelId
                      );
            }
            return D
                ? (0, l.jsx)(
                      j.Z,
                      {
                          isCurrentUser: O.id === i.id,
                          color: L,
                          look: M,
                          applicationStream: a,
                          onAction: k
                      },
                      'watch-button'
                  )
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(
                              C.Z,
                              {
                                  activity: t,
                                  color: L,
                                  look: M,
                                  onAction: k
                              },
                              'watch-button'
                          ),
                          (0, l.jsx)(
                              T.Z,
                              {
                                  activity: t,
                                  embeddedActivity: n,
                                  user: i,
                                  color: L,
                                  look: M,
                                  onAction: k
                              },
                              'join-activity-button'
                          ),
                          (0, l.jsx)(
                              A.Z,
                              {
                                  activity: t,
                                  user: i,
                                  color: L,
                                  look: M,
                                  onAction: k
                              },
                              'notify-button'
                          ),
                          (0, l.jsx)(
                              y.Z,
                              {
                                  user: i,
                                  color: L,
                                  look: M,
                                  activity: t,
                                  onAction: k
                              },
                              'custom-activity-button'
                          )
                      ]
                  });
        })()
    });
});
