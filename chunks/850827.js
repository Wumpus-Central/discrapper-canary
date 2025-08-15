n.d(t, { Z: () => D });
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
    p = n(600164),
    f = n(750154),
    m = n(592125),
    g = n(594174),
    v = n(979651),
    _ = n(374129),
    b = n(639351),
    h = n(503438),
    y = n(802856),
    O = n(387903),
    j = n(606925),
    S = n(719216),
    x = n(429589),
    I = n(276149),
    P = n(636245),
    C = n(697761),
    E = n(611459),
    w = n(544671),
    T = n(757182),
    N = n(910424),
    Z = n(981631),
    A = n(964719);
let D = (0, u.Z)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: a,
            className: u,
            guildId: D,
            channelId: k,
            source: L,
            color: M = c.zx.Colors.WHITE,
            look: U = c.zx.Looks.OUTLINED,
            type: R,
            onAction: V,
        } = e,
        F = (0, s.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        B = R === O.Y.STREAM_PREVIEW || null != a,
        W = (0, h.Z)(t),
        Y = W || B ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL,
        H = (null == t ? void 0 : t.type) === Z.IIU.HANG_STATUS,
        G = (0, s.e7)([v.Z, m.Z], () => {
            var e;
            return H ? m.Z.getChannel(null == (e = v.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        z = Y === p.Z.Direction.VERTICAL;
    return (0, r.jsx)(p.Z, {
        grow: 0,
        align: p.Z.Align.STRETCH,
        direction: Y,
        wrap: z ? p.Z.Wrap.WRAP : p.Z.Wrap.NO_WRAP,
        className: l()(u, A.buttonsWrapper, z ? A.vertical : A.horizontal),
        children: (() => {
            if ((0, y.Z)(t))
                return (0, r.jsx)(
                    j.Z,
                    {
                        platform: d.Z.get(Z.ABu.XBOX),
                        look: U,
                        color: M,
                        onAction: V,
                        Icon: b.Z,
                    },
                    "ConnectPlatformActivityButton",
                );
            if ((null == t ? void 0 : t.platform) === Z.M7m.PS4 || (null == t ? void 0 : t.platform) === Z.M7m.PS5)
                return (0, r.jsx)(
                    j.Z,
                    {
                        look: U,
                        color: M,
                        platform: d.Z.get(Z.ABu.PLAYSTATION),
                        onAction: V,
                        Icon: _.Z,
                    },
                    "ConnectPlatformActivityButton",
                );
            if (W) {
                let e = (0, r.jsx)(
                        w.Z,
                        {
                            activity: t,
                            user: i,
                            guildId: D,
                            channelId: k,
                            source: L,
                            look: U,
                            color: M,
                            onAction: V,
                        },
                        "spotify-activity-sync-button",
                    ),
                    n = (0, r.jsx)(
                        E.Z,
                        {
                            activity: t,
                            user: i,
                            source: L,
                            look: U,
                            color: M,
                            onAction: V,
                        },
                        "spotify-activity-play-button",
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [n, e],
                });
            }
            if ((0, f.dS)(t)) {
                let e = (0, f.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(
                          P.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: M,
                              look: U,
                              onAction: V,
                          },
                          e.channelId,
                      );
            }
            return B
                ? (0, r.jsx)(
                      N.Z,
                      {
                          isCurrentUser: F.id === i.id,
                          color: M,
                          look: U,
                          applicationStream: a,
                          onAction: V,
                      },
                      "watch-button",
                  )
                : H && null != G
                  ? (0, r.jsx)(
                        I.Z,
                        {
                            color: M,
                            look: U,
                            hangStatusChannel: G,
                            onAction: V,
                        },
                        "hang-status-button",
                    )
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                T.Z,
                                {
                                    activity: t,
                                    color: M,
                                    look: U,
                                    onAction: V,
                                },
                                "watch-button",
                            ),
                            (0, r.jsx)(
                                x.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: i,
                                    color: M,
                                    look: U,
                                    onAction: V,
                                },
                                "join-activity-button",
                            ),
                            (0, r.jsx)(
                                C.Z,
                                {
                                    activity: t,
                                    user: i,
                                    color: M,
                                    look: U,
                                    onAction: V,
                                },
                                "notify-button",
                            ),
                            (0, r.jsx)(
                                S.Z,
                                {
                                    user: i,
                                    color: M,
                                    look: U,
                                    activity: t,
                                    onAction: V,
                                },
                                "custom-activity-button",
                            ),
                        ],
                    });
        })(),
    });
});
