n.d(t, { Z: () => L });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(755721),
    u = n(730749),
    d = n(726542),
    f = n(600164),
    _ = n(750154),
    p = n(592125),
    h = n(594174),
    m = n(979651),
    g = n(374129),
    E = n(639351),
    b = n(503438),
    y = n(802856),
    O = n(387903),
    v = n(606925),
    I = n(719216),
    T = n(429589),
    S = n(276149),
    A = n(636245),
    C = n(697761),
    N = n(611459),
    R = n(544671),
    P = n(757182),
    w = n(910424),
    D = n(981631),
    x = n(964719);
let L = (0, u.Z)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: o,
            className: u,
            guildId: L,
            channelId: j,
            source: M,
            color: k = c.zx.Colors.WHITE,
            look: U = c.zx.Looks.OUTLINED,
            type: G,
            onAction: B,
        } = e,
        Z = (0, l.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        V = G === O.Y.STREAM_PREVIEW || null != o,
        F = (0, b.Z)(t),
        H = F || V ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL,
        Y = (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS,
        W = (0, l.e7)([m.Z, p.Z], () => {
            var e;
            return Y ? p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        K = () => {
            if ((0, y.Z)(t))
                return (0, r.jsx)(
                    v.Z,
                    {
                        platform: d.Z.get(D.ABu.XBOX),
                        look: U,
                        color: k,
                        onAction: B,
                        Icon: E.Z,
                    },
                    "ConnectPlatformActivityButton",
                );
            if ((null == t ? void 0 : t.platform) === D.M7m.PS4 || (null == t ? void 0 : t.platform) === D.M7m.PS5)
                return (0, r.jsx)(
                    v.Z,
                    {
                        look: U,
                        color: k,
                        platform: d.Z.get(D.ABu.PLAYSTATION),
                        onAction: B,
                        Icon: g.Z,
                    },
                    "ConnectPlatformActivityButton",
                );
            if (F) {
                let e = (0, r.jsx)(
                        R.Z,
                        {
                            activity: t,
                            user: i,
                            guildId: L,
                            channelId: j,
                            source: M,
                            look: U,
                            color: k,
                            onAction: B,
                        },
                        "spotify-activity-sync-button",
                    ),
                    n = (0, r.jsx)(
                        N.Z,
                        {
                            activity: t,
                            user: i,
                            source: M,
                            look: U,
                            color: k,
                            onAction: B,
                        },
                        "spotify-activity-play-button",
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [n, e],
                });
            }
            if ((0, _.dS)(t)) {
                let e = (0, _.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(
                          A.Z,
                          {
                              guildId: e.guildId,
                              channelId: e.channelId,
                              color: k,
                              look: U,
                              onAction: B,
                          },
                          e.channelId,
                      );
            }
            return V
                ? (0, r.jsx)(
                      w.Z,
                      {
                          isCurrentUser: Z.id === i.id,
                          color: k,
                          look: U,
                          applicationStream: o,
                          onAction: B,
                      },
                      "watch-button",
                  )
                : Y && null != W
                  ? (0, r.jsx)(
                        S.Z,
                        {
                            color: k,
                            look: U,
                            hangStatusChannel: W,
                            onAction: B,
                        },
                        "hang-status-button",
                    )
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                P.Z,
                                {
                                    activity: t,
                                    color: k,
                                    look: U,
                                    onAction: B,
                                },
                                "watch-button",
                            ),
                            (0, r.jsx)(
                                T.Z,
                                {
                                    activity: t,
                                    embeddedActivity: n,
                                    user: i,
                                    color: k,
                                    look: U,
                                    onAction: B,
                                },
                                "join-activity-button",
                            ),
                            (0, r.jsx)(
                                C.Z,
                                {
                                    activity: t,
                                    user: i,
                                    color: k,
                                    look: U,
                                    onAction: B,
                                },
                                "notify-button",
                            ),
                            (0, r.jsx)(
                                I.Z,
                                {
                                    user: i,
                                    color: k,
                                    look: U,
                                    activity: t,
                                    onAction: B,
                                },
                                "custom-activity-button",
                            ),
                        ],
                    });
        },
        z = H === f.Z.Direction.VERTICAL;
    return (0, r.jsx)(f.Z, {
        grow: 0,
        align: f.Z.Align.STRETCH,
        direction: H,
        wrap: z ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
        className: a()(u, x.buttonsWrapper, z ? x.vertical : x.horizontal),
        children: K(),
    });
});
