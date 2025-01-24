var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    x = n(802856),
    _ = n(387903),
    C = n(606925),
    b = n(719216),
    E = n(429589),
    y = n(276149),
    Z = n(636245),
    T = n(697761),
    N = n(611459),
    A = n(544671),
    j = n(757182),
    w = n(910424),
    P = n(981631),
    R = n(522832);
t.Z = (0, u.Z)((e) => {
    let { activity: t, embeddedActivity: n, user: l, applicationStream: a, className: u, guildId: O, channelId: k, source: M, color: L = c.Button.Colors.WHITE, look: D = c.Button.Looks.OUTLINED, type: U, onAction: V } = e,
        F = (0, o.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, 'UserActivityActions: currentUser cannot be undefined'), e;
        }),
        z = U === _.Y.STREAM_PREVIEW || null != a,
        B = (0, I.Z)(t),
        W = B || z ? m.Z.Direction.HORIZONTAL : m.Z.Direction.VERTICAL,
        G = (null == t ? void 0 : t.type) === P.IIU.HANG_STATUS,
        H = (0, o.e7)([g.Z, p.Z], () => {
            var e;
            return G ? p.Z.getChannel(null === (e = g.Z.getVoiceStateForUser(l.id)) || void 0 === e ? void 0 : e.channelId) : null;
        }),
        Y = W === m.Z.Direction.VERTICAL;
    return (0, i.jsx)(m.Z, {
        grow: 0,
        align: m.Z.Align.STRETCH,
        direction: W,
        wrap: Y ? m.Z.Wrap.WRAP : m.Z.Wrap.NO_WRAP,
        className: r()(u, R.buttonsWrapper, Y ? R.vertical : R.horizontal),
        children: (() => {
            if ((0, x.Z)(t))
                return (0, i.jsx)(
                    C.Z,
                    {
                        platform: d.Z.get(P.ABu.XBOX),
                        look: D,
                        color: L,
                        onAction: V,
                        Icon: S.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, i.jsx)(
                    C.Z,
                    {
                        look: D,
                        color: L,
                        platform: d.Z.get(P.ABu.PLAYSTATION),
                        onAction: V,
                        Icon: v.Z
                    },
                    'ConnectPlatformActivityButton'
                );
            if (B) {
                let e = (0, i.jsx)(
                        A.Z,
                        {
                            activity: t,
                            user: l,
                            guildId: O,
                            channelId: k,
                            source: M,
                            look: D,
                            color: L,
                            onAction: V
                        },
                        'spotify-activity-sync-button'
                    ),
                    n = (0, i.jsx)(
                        N.Z,
                        {
                            activity: t,
                            user: l,
                            source: M,
                            look: D,
                            color: L,
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
                          Z.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: L,
                              look: D,
                              onAction: V
                          },
                          e.channelId
                      );
            }
            return z
                ? (0, i.jsx)(
                      w.Z,
                      {
                          isCurrentUser: F.id === l.id,
                          color: L,
                          look: D,
                          applicationStream: a,
                          onAction: V
                      },
                      'watch-button'
                  )
                : G && null != H
                  ? (0, i.jsx)(
                        y.Z,
                        {
                            color: L,
                            look: D,
                            hangStatusChannel: H,
                            onAction: V
                        },
                        'hang-status-button'
                    )
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(
                                j.Z,
                                {
                                    activity: t,
                                    color: L,
                                    look: D,
                                    onAction: V
                                },
                                'watch-button'
                            ),
                            (0, i.jsx)(
                                E.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: l,
                                    color: L,
                                    look: D,
                                    onAction: V
                                },
                                'join-activity-button'
                            ),
                            (0, i.jsx)(
                                T.Z,
                                {
                                    activity: t,
                                    user: l,
                                    color: L,
                                    look: D,
                                    onAction: V
                                },
                                'notify-button'
                            ),
                            (0, i.jsx)(
                                b.Z,
                                {
                                    user: l,
                                    color: L,
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
