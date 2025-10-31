n.d(t, { Z: () => D });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(730749),
    d = n(726542),
    f = n(600164),
    _ = n(750154),
    p = n(592125),
    h = n(594174),
    m = n(979651),
    g = n(503438),
    E = n(802856),
    b = n(942596),
    y = n(606925),
    O = n(719216),
    v = n(429589),
    I = n(276149),
    T = n(636245),
    S = n(697761),
    A = n(611459),
    C = n(544671),
    N = n(757182),
    R = n(910424),
    P = n(981631),
    w = n(964719);
let D = (0, u.Z)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: o,
            className: u,
            guildId: D,
            channelId: x,
            source: L,
            buttonVariant: M,
            type: j,
            onAction: k,
        } = e,
        U = (0, l.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        G = j === b.Y.STREAM_PREVIEW || null != o,
        B = (0, g.Z)(t),
        Z = B || G ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL,
        F = (null == t ? void 0 : t.type) === P.IIU.HANG_STATUS,
        V = (0, l.e7)([m.Z, p.Z], () => {
            var e;
            return F ? p.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        H = () => {
            if ((0, E.Z)(t))
                return (0, r.jsx)(y.Z, {
                    platform: d.Z.get(P.ABu.XBOX),
                    variant: M,
                    onAction: k,
                    icon: c.Mko,
                });
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, r.jsx)(y.Z, {
                    variant: M,
                    platform: d.Z.get(P.ABu.PLAYSTATION),
                    onAction: k,
                    icon: c.Tsp,
                });
            if (B) {
                let e = (0, r.jsx)(C.Z, {
                        activity: t,
                        user: i,
                        guildId: D,
                        channelId: x,
                        source: L,
                        onAction: k,
                    }),
                    n = (0, r.jsx)(A.Z, {
                        activity: t,
                        user: i,
                        source: L,
                        onAction: k,
                    });
                return (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    fullWidth: !0,
                    children: [n, e],
                });
            }
            if ((0, _.dS)(t)) {
                let e = (0, _.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(T.Z, {
                          guildId: e.guildId,
                          channelId: e.channelId,
                          variant: M,
                          onAction: k,
                      });
            }
            return G
                ? (0, r.jsx)(R.Z, {
                      isCurrentUser: U.id === i.id,
                      applicationStream: o,
                      onAction: k,
                  })
                : F && null != V
                  ? (0, r.jsx)(I.Z, {
                        userId: i.id,
                        variant: M,
                        hangStatusChannel: V,
                        onAction: k,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N.Z, {
                                activity: t,
                                variant: M,
                                onAction: k,
                            }),
                            (0, r.jsx)(v.Z, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: M,
                                onAction: k,
                            }),
                            (0, r.jsx)(S.Z, {
                                activity: t,
                                user: i,
                                variant: M,
                                onAction: k,
                            }),
                            (0, r.jsx)(O.Z, {
                                user: i,
                                activity: t,
                                variant: M,
                                onAction: k,
                            }),
                        ],
                    });
        },
        Y = Z === f.Z.Direction.VERTICAL;
    return (0, r.jsx)(f.Z, {
        grow: 0,
        align: f.Z.Align.STRETCH,
        direction: Z,
        wrap: Y ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
        className: a()(u, w.buttonsWrapper, Y ? w.vertical : w.horizontal),
        children: H(),
    });
});
