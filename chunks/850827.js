n.d(t, { Z: () => P });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(512722),
    s = n.n(r),
    o = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    m = n(600164),
    f = n(750154),
    p = n(594174),
    h = n(374129),
    g = n(639351),
    v = n(503438),
    _ = n(802856),
    S = n(387903),
    I = n(606925),
    x = n(719216),
    E = n(429589),
    C = n(636245),
    Z = n(697761),
    y = n(611459),
    b = n(544671),
    N = n(757182),
    T = n(910424),
    A = n(981631),
    w = n(522832);
let P = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: l, applicationStream: r, className: u, guildId: P, channelId: j, source: R, color: k = c.zxk.Colors.WHITE, look: L = c.zxk.Looks.OUTLINED, type: O, onAction: M } = e,
        D = (0, o.e7)([p.default], () => {
            let e = p.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        U = O === S.Y.STREAM_PREVIEW || null != r,
        F = (0, v.Z)(t),
        z = F || U ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
        V = z === m.Z.Direction.VERTICAL;
    return (0, i.jsx)(m.Z, {
        grow: 0,
        align: m.Z.Align.STRETCH,
        direction: z,
        wrap: V ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
        className: a()(u, w.buttonsWrapper, V ? w.vertical : w.horizontal),
        children: (() => {
            if ((0, _.Z)(t))
                return (0, i.jsx)(
                    I.Z,
                    {
                        platform: d.Z.get(A.ABu.XBOX),
                        look: L,
                        color: k,
                        onAction: M,
                        Icon: g.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === A.M7m.PS4 || (null == t ? void 0 : t.platform) === A.M7m.PS5)
                return (0, i.jsx)(
                    I.Z,
                    {
                        look: L,
                        color: k,
                        platform: d.Z.get(A.ABu.PLAYSTATION),
                        onAction: M,
                        Icon: h.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (F) {
                let e = (0, i.jsx)(
                        b.Z,
                        {
                            activity: t,
                            user: l,
                            guildId: P,
                            channelId: j,
                            source: R,
                            look: L,
                            color: k,
                            onAction: M
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, i.jsx)(
                        y.Z,
                        {
                            activity: t,
                            user: l,
                            source: R,
                            look: L,
                            color: k,
                            onAction: M
                        },
                        'spotify-activity-play-button'
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [n, e]
                });
            }
            if ((0, f.dS)(t)) {
                let e = (0, f.rq)(t);
                return null == e
                    ? null
                    : (0, i.jsx)(
                          C.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: k,
                              look: L,
                              onAction: M
                          },
                          e.channelId
                      );
            }
            return U
                ? (0, i.jsx)(
                      T.Z,
                      {
                          isCurrentUser: D.id === l.id,
                          color: k,
                          look: L,
                          applicationStream: r,
                          onAction: M
                      },
                      'watch-button'
                  )
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              N.Z,
                              {
                                  activity: t,
                                  color: k,
                                  look: L,
                                  onAction: M
                              },
                              'watch-button'
                          ),
                          (0, i.jsx)(
                              E.Z,
                              {
                                  activity: t,
                                  embeddedActivity: n,
                                  user: l,
                                  color: k,
                                  look: L,
                                  onAction: M
                              },
                              'join-activity-button'
                          ),
                          (0, i.jsx)(
                              Z.Z,
                              {
                                  activity: t,
                                  user: l,
                                  color: k,
                                  look: L,
                                  onAction: M
                              },
                              'notify-button'
                          ),
                          (0, i.jsx)(
                              x.Z,
                              {
                                  user: l,
                                  color: k,
                                  look: L,
                                  activity: t,
                                  onAction: M
                              },
                              'custom-activity-button'
                          )
                      ]
                  });
        })()
    });
});
