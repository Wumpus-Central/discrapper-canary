n.d(t, { Z: () => w });
var l = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    u = n(481060),
    c = n(730749),
    d = n(726542),
    m = n(600164),
    h = n(750154),
    f = n(594174),
    g = n(374129),
    p = n(639351),
    v = n(503438),
    S = n(802856),
    I = n(387903),
    x = n(606925),
    T = n(719216),
    Z = n(429589),
    y = n(636245),
    N = n(697761),
    E = n(611459),
    C = n(544671),
    A = n(757182),
    j = n(910424),
    P = n(981631),
    b = n(522832);
let w = (0, c.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: i, applicationStream: a, className: c, guildId: w, channelId: _, source: R, color: L = u.zxk.Colors.WHITE, look: M = u.zxk.Looks.OUTLINED, type: O, onAction: U } = e,
        D = (0, o.e7)([f.default], () => {
            let e = f.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        k = O === I.Y.STREAM_PREVIEW || null != a,
        G = (0, v.Z)(t),
        Y = G || k ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
        z = Y === m.Z.Direction.VERTICAL;
    return (0, l.jsx)(m.Z, {
        grow: 0,
        align: m.Z.Align.STRETCH,
        direction: Y,
        wrap: z ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
        className: r()(c, b.buttonsWrapper, z ? b.vertical : b.horizontal),
        children: (() => {
            if ((0, S.Z)(t))
                return (0, l.jsx)(
                    x.Z,
                    {
                        platform: d.Z.get(P.ABu.XBOX),
                        look: M,
                        color: L,
                        onAction: U,
                        Icon: p.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, l.jsx)(
                    x.Z,
                    {
                        look: M,
                        color: L,
                        platform: d.Z.get(P.ABu.PLAYSTATION),
                        onAction: U,
                        Icon: g.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (G) {
                let e = (0, l.jsx)(
                        C.Z,
                        {
                            activity: t,
                            user: i,
                            guildId: w,
                            channelId: _,
                            source: R,
                            look: M,
                            color: L,
                            onAction: U
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
                            onAction: U
                        },
                        'spotify-activity-play-button'
                    );
                return (0, l.jsxs)(l.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, h.dS)(t)) {
                let e = (0, h.rq)(t);
                return null == e
                    ? null
                    : (0, l.jsx)(
                          y.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: L,
                              look: M,
                              onAction: U
                          },
                          e.channelId
                      );
            }
            return k
                ? (0, l.jsx)(
                      j.Z,
                      {
                          isCurrentUser: D.id === i.id,
                          color: L,
                          look: M,
                          applicationStream: a,
                          onAction: U
                      },
                      'watch-button'
                  )
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(
                              A.Z,
                              {
                                  activity: t,
                                  color: L,
                                  look: M,
                                  onAction: U
                              },
                              'watch-button'
                          ),
                          (0, l.jsx)(
                              Z.Z,
                              {
                                  activity: t,
                                  embeddedActivity: n,
                                  user: i,
                                  color: L,
                                  look: M,
                                  onAction: U
                              },
                              'join-activity-button'
                          ),
                          (0, l.jsx)(
                              N.Z,
                              {
                                  activity: t,
                                  user: i,
                                  color: L,
                                  look: M,
                                  onAction: U
                              },
                              'notify-button'
                          ),
                          (0, l.jsx)(
                              T.Z,
                              {
                                  user: i,
                                  color: L,
                                  look: M,
                                  activity: t,
                                  onAction: U
                              },
                              'custom-activity-button'
                          )
                      ]
                  });
        })()
    });
});
