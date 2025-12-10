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
    p = n(750154),
    _ = n(592125),
    m = n(594174),
    h = n(979651),
    g = n(503438),
    E = n(802856),
    b = n(942596),
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
        B = Z || G ? f.Z.Direction.HORIZONTAL : f.Z.Direction.VERTICAL,
        F = (null == t ? void 0 : t.type) === R.IIU.HANG_STATUS,
        V = (0, l.e7)([h.Z, _.Z], () => {
            var e;
            return F ? _.Z.getChannel(null == (e = h.Z.getVoiceStateForUser(i.id)) ? void 0 : e.channelId) : null;
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
                        guildId: w,
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
                : F && null != V
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
        Y = B === f.Z.Direction.VERTICAL;
    return (0, r.jsx)(f.Z, {
        grow: 0,
        align: f.Z.Align.STRETCH,
        direction: B,
        wrap: Y ? f.Z.Wrap.WRAP : f.Z.Wrap.NO_WRAP,
        className: a()(u, D.buttonsWrapper, Y ? D.vertical : D.horizontal),
        children: H(),
    });
});
