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
    p = n(592125),
    h = n(594174),
    g = n(979651),
    v = n(374129),
    S = n(639351),
    I = n(503438),
    _ = n(802856),
    x = n(387903),
    E = n(606925),
    C = n(719216),
    y = n(429589),
    Z = n(276149),
    b = n(636245),
    T = n(697761),
    A = n(611459),
    N = n(544671),
    w = n(757182),
    j = n(910424),
    P = n(981631),
    R = n(418013);
t.Z = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: l, applicationStream: r, className: u, guildId: M, channelId: O, source: L, color: k = c.Button.Colors.WHITE, look: D = c.Button.Looks.OUTLINED, type: U, onAction: V, isEmbedded: F = !1 } = e,
        W = (0, o.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        B = U === x.Y.STREAM_PREVIEW || null != r,
        G = (0, I.Z)(t),
        z = G || B ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
        H = (null == t ? void 0 : t.type) === P.IIU.HANG_STATUS,
        Y = (0, o.e7)([g.Z, p.Z], () => {
            var e;
            return H ? p.Z.getChannel(null === (e = g.Z.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        J = z === m.Z.Direction.VERTICAL;
    return (0, i.jsx)(m.Z, {
        grow: 0,
        align: m.Z.Align.STRETCH,
        direction: z,
        wrap: J ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
        className: a()(u, R.buttonsWrapper, J ? R.vertical : R.horizontal),
        children: (() => {
            if ((0, _.Z)(t))
                return (0, i.jsx)(
                    E.Z,
                    {
                        platform: d.Z.get(P.ABu.XBOX),
                        look: D,
                        color: k,
                        onAction: V,
                        Icon: S.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, i.jsx)(
                    E.Z,
                    {
                        look: D,
                        color: k,
                        platform: d.Z.get(P.ABu.PLAYSTATION),
                        onAction: V,
                        Icon: v.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (G) {
                let e = (0, i.jsx)(
                        N.Z,
                        {
                            activity: t,
                            user: l,
                            guildId: M,
                            channelId: O,
                            source: L,
                            look: D,
                            color: k,
                            onAction: V
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, i.jsx)(
                        A.Z,
                        {
                            activity: t,
                            user: l,
                            source: L,
                            look: D,
                            color: k,
                            onAction: V
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
                          b.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: k,
                              look: D,
                              onAction: V
                          },
                          e.channelId
                      );
            }
            return B
                ? (0, i.jsx)(
                      j.Z,
                      {
                          isCurrentUser: W.id === l.id,
                          color: k,
                          look: D,
                          applicationStream: r,
                          onAction: V
                      },
                      'watch-button'
                  )
                : H && null != Y
                  ? (0, i.jsx)(
                        Z.Z,
                        {
                            color: k,
                            look: D,
                            hangStatusChannel: Y,
                            onAction: V
                        },
                        'hang-status-button'
                    )
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(
                                w.Z,
                                {
                                    activity: t,
                                    color: k,
                                    look: D,
                                    onAction: V
                                },
                                'watch-button'
                            ),
                            (0, i.jsx)(
                                y.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: l,
                                    color: k,
                                    look: D,
                                    isEmbedded: F,
                                    onAction: V
                                },
                                'join-activity-button'
                            ),
                            (0, i.jsx)(
                                T.Z,
                                {
                                    activity: t,
                                    user: l,
                                    color: k,
                                    look: D,
                                    onAction: V
                                },
                                'notify-button'
                            ),
                            (0, i.jsx)(
                                C.Z,
                                {
                                    user: l,
                                    color: k,
                                    look: D,
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
