n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
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
    D = n(964719);
let w = (0, u.Z)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: o,
            className: u,
            guildId: w,
            channelId: x,
            source: L,
            buttonVariant: M,
            type: k,
            onAction: j,
        } = e,
        U = (0, l.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        G = k === b.Y.STREAM_PREVIEW || null != o,
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
                    onAction: j,
                    icon: c.Mko,
                });
            if ((null == t ? void 0 : t.platform) === P.M7m.PS4 || (null == t ? void 0 : t.platform) === P.M7m.PS5)
                return (0, r.jsx)(y.Z, {
                    variant: M,
                    platform: d.Z.get(P.ABu.PLAYSTATION),
                    onAction: j,
                    icon: c.Tsp,
                });
            if (B) {
                let e = (0, r.jsx)(C.Z, {
                        activity: t,
                        user: i,
                        guildId: w,
                        channelId: x,
                        source: L,
                        onAction: j,
                    }),
                    n = (0, r.jsx)(A.Z, {
                        activity: t,
                        user: i,
                        source: L,
                        onAction: j,
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
                          onAction: j,
                      });
            }
            return G
                ? (0, r.jsx)(R.Z, {
                      isCurrentUser: U.id === i.id,
                      applicationStream: o,
                      onAction: j,
                  })
                : F && null != V
                  ? (0, r.jsx)(I.Z, {
                        userId: i.id,
                        variant: M,
                        hangStatusChannel: V,
                        onAction: j,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N.Z, {
                                activity: t,
                                variant: M,
                                onAction: j,
                            }),
                            (0, r.jsx)(v.Z, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: M,
                                onAction: j,
                            }),
                            (0, r.jsx)(S.Z, {
                                activity: t,
                                user: i,
                                variant: M,
                                onAction: j,
                            }),
                            (0, r.jsx)(O.Z, {
                                user: i,
                                activity: t,
                                variant: M,
                                onAction: j,
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
        className: a()(u, D.buttonsWrapper, Y ? D.vertical : D.horizontal),
        children: H(),
    });
});
