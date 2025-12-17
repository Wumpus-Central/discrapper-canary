n.d(t, { Z: () => D });
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
    p = n(750154),
    _ = n(592125),
    m = n(594174),
    h = n(979651),
    g = n(503438),
    E = n(802856),
    b = n(387903),
    y = n(606925),
    O = n(719216),
    v = n(429589),
    S = n(276149),
    I = n(636245),
    T = n(697761),
    C = n(611459),
    A = n(544671),
    N = n(757182),
    P = n(910424),
    R = n(981631),
    w = n(765812);
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
            buttonVariant: j,
            type: M,
            onAction: k,
        } = e,
        U = (0, l.e7)([m.default], () => {
            let e = m.default.getCurrentUser();
            return s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e;
        }),
        G = M === b.Y.STREAM_PREVIEW || null != o,
        Z = (0, g.Z)(t),
        F = Z || G ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL,
        B = (null == t ? void 0 : t.type) === R.IIU.HANG_STATUS,
        V = (0, l.e7)([h.Z, _.Z], () => {
            var e;
            return B ? _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
        }),
        H = () => {
            if ((0, E.Z)(t))
                return (0, r.jsx)(y.Z, {
                    platform: d.Z.get(R.ABu.XBOX),
                    variant: j,
                    onAction: k,
                    icon: c.Mko,
                });
            if ((null == t ? void 0 : t.platform) === R.M7m.PS4 || (null == t ? void 0 : t.platform) === R.M7m.PS5)
                return (0, r.jsx)(y.Z, {
                    variant: j,
                    platform: d.Z.get(R.ABu.PLAYSTATION),
                    onAction: k,
                    icon: c.Tsp,
                });
            if (Z) {
                let e = (0, r.jsx)(A.Z, {
                        activity: t,
                        user: i,
                        guildId: D,
                        channelId: x,
                        source: L,
                        onAction: k,
                    }),
                    n = (0, r.jsx)(C.Z, {
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
            if ((0, p.dS)(t)) {
                let e = (0, p.rq)(t);
                return null == e
                    ? null
                    : (0, r.jsx)(I.Z, {
                          guildId: e.guildId,
                          channelId: e.channelId,
                          variant: j,
                          onAction: k,
                      });
            }
            return G
                ? (0, r.jsx)(P.Z, {
                      isCurrentUser: U.id === i.id,
                      applicationStream: o,
                      onAction: k,
                  })
                : B && null != V
                  ? (0, r.jsx)(S.Z, {
                        userId: i.id,
                        variant: j,
                        hangStatusChannel: V,
                        onAction: k,
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N.Z, {
                                activity: t,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(v.Z, {
                                activity: t,
                                embeddedActivity: n,
                                user: i,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(T.Z, {
                                activity: t,
                                user: i,
                                variant: j,
                                onAction: k,
                            }),
                            (0, r.jsx)(O.Z, {
                                user: i,
                                activity: t,
                                variant: j,
                                onAction: k,
                            }),
                        ],
                    });
        },
        Y = F === f.Z.Direction.VERTICAL;
    return (0, r.jsx)(f.Z, {
        grow: 0,
        align: f.Z.Align.STRETCH,
        direction: F,
        wrap: Y ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
        className: a()(u, w.buttonsWrapper, Y ? w.vertical : w.horizontal),
        children: H(),
    });
});
