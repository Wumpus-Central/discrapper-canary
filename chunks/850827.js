n.d(t, { Z: () => H });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(442837),
    c = n(755721),
    u = n(730749),
    d = n(726542),
    f = n(40851),
    _ = n(600164),
    p = n(750154),
    h = n(892001),
    m = n(592125),
    g = n(594174),
    E = n(979651),
    b = n(374129),
    y = n(639351),
    O = n(503438),
    v = n(802856),
    I = n(387903),
    T = n(606925),
    S = n(719216),
    A = n(429589),
    N = n(276149),
    C = n(636245),
    R = n(697761),
    P = n(611459),
    w = n(544671),
    D = n(757182),
    L = n(910424),
    x = n(981631),
    M = n(477839),
    k = n(388032),
    j = n(511479),
    U = n(964719);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = (e) => {
        let { user: t, color: n, look: i, activity: o, onAction: a } = e,
            s = (0, f.Aq)(),
            l = () => {
                s.dispatch(x.CkL.POPOUT_CLOSE), (0, h.closeUserProfileModal)(), null == a || a();
            };
        return (0, r.jsx)(
            S.Z,
            {
                user: t,
                color: n,
                look: i,
                activity: o,
                onAction: l,
            },
            "custom-activity-button",
        );
    },
    H = (0, u.Z)((e) => {
        let {
                activity: t,
                embeddedActivity: n,
                user: i,
                applicationStream: a,
                className: u,
                guildId: f,
                channelId: h,
                source: G,
                color: Z = c.zx.Colors.WHITE,
                look: H = c.zx.Looks.OUTLINED,
                type: Y,
                onAction: W,
            } = e,
            K = (0, l.e7)([g.default], () => {
                let e = g.default.getCurrentUser();
                return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
            }),
            z = Y === I.Y.STREAM_PREVIEW || null != a,
            q = (0, O.Z)(t),
            X = q || z ? _.Z.Direction.HORIZONTAL : _.Z.Direction.VERTICAL,
            Q = (null == t ? void 0 : t.type) === x.IIU.HANG_STATUS,
            J = (0, l.e7)([E.Z, m.Z], () => {
                var e;
                return Q ? m.Z.getChannel(null == (e = E.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
            });
        if ((null == t ? void 0 : t.application_id) === M.bO)
            return (
                (t = F(B({}, t), {
                    buttons: [k.intl.string(j.default["Fv/2Oz"])],
                    metadata: { button_urls: [M.U8] },
                })),
                (0, r.jsx)(V, {
                    user: i,
                    color: Z,
                    look: H,
                    activity: t,
                    onAction: W,
                })
            );
        let $ = () => {
                if ((0, v.Z)(t))
                    return (0, r.jsx)(
                        T.Z,
                        {
                            platform: d.Z.get(x.ABu.XBOX),
                            look: H,
                            color: Z,
                            onAction: W,
                            Icon: y.Z,
                        },
                        "ConnectPlatformActivityButton",
                    );
                if ((null == t ? void 0 : t.platform) === x.M7m.PS4 || (null == t ? void 0 : t.platform) === x.M7m.PS5)
                    return (0, r.jsx)(
                        T.Z,
                        {
                            look: H,
                            color: Z,
                            platform: d.Z.get(x.ABu.PLAYSTATION),
                            onAction: W,
                            Icon: b.Z,
                        },
                        "ConnectPlatformActivityButton",
                    );
                if (q) {
                    let e = (0, r.jsx)(
                            w.Z,
                            {
                                activity: t,
                                user: i,
                                guildId: f,
                                channelId: h,
                                source: G,
                                look: H,
                                color: Z,
                                onAction: W,
                            },
                            "spotify-activity-sync-button",
                        ),
                        n = (0, r.jsx)(
                            P.Z,
                            {
                                activity: t,
                                user: i,
                                source: G,
                                look: H,
                                color: Z,
                                onAction: W,
                            },
                            "spotify-activity-play-button",
                        );
                    return (0, r.jsxs)(r.Fragment, {
                        children: [n, e],
                    });
                }
                if ((0, p.dS)(t)) {
                    let e = (0, p.rq)(t);
                    return null == e
                        ? null
                        : (0, r.jsx)(
                              C.Z,
                              {
                                  guildId: e.guildId,
                                  channelId: e.channelId,
                                  color: Z,
                                  look: H,
                                  onAction: W,
                              },
                              e.channelId,
                          );
                }
                return z
                    ? (0, r.jsx)(
                          L.Z,
                          {
                              isCurrentUser: K.id === i.id,
                              color: Z,
                              look: H,
                              applicationStream: a,
                              onAction: W,
                          },
                          "watch-button",
                      )
                    : Q && null != J
                      ? (0, r.jsx)(
                            N.Z,
                            {
                                color: Z,
                                look: H,
                                hangStatusChannel: J,
                                onAction: W,
                            },
                            "hang-status-button",
                        )
                      : (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(
                                    D.Z,
                                    {
                                        activity: t,
                                        color: Z,
                                        look: H,
                                        onAction: W,
                                    },
                                    "watch-button",
                                ),
                                (0, r.jsx)(
                                    A.Z,
                                    {
                                        activity: t,
                                        embeddedActivity: n,
                                        user: i,
                                        color: Z,
                                        look: H,
                                        onAction: W,
                                    },
                                    "join-activity-button",
                                ),
                                (0, r.jsx)(
                                    R.Z,
                                    {
                                        activity: t,
                                        user: i,
                                        color: Z,
                                        look: H,
                                        onAction: W,
                                    },
                                    "notify-button",
                                ),
                                (0, r.jsx)(
                                    S.Z,
                                    {
                                        user: i,
                                        color: Z,
                                        look: H,
                                        activity: t,
                                        onAction: W,
                                    },
                                    "custom-activity-button",
                                ),
                            ],
                        });
            },
            ee = X === _.Z.Direction.VERTICAL;
        return (0, r.jsx)(_.Z, {
            grow: 0,
            align: _.Z.Align.STRETCH,
            direction: X,
            wrap: ee ? _.Z.Wrap.WRAP : _.Z.Wrap.NO_WRAP,
            className: o()(u, U.buttonsWrapper, ee ? U.vertical : U.horizontal),
            children: $(),
        });
    });
