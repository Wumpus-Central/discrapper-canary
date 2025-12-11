t.d(n, { Z: () => f });
var l = t(54381);
t(473749);
var i = t(572691),
    o = t(906732),
    r = t(444141),
    s = t(705556),
    a = t(30556),
    c = t(664794),
    d = t(522182),
    u = t(821706),
    m = t(562831),
    p = t(981631);
function f(e) {
    let { user: n, currentUser: t, guildId: f, channelId: x, displayProfile: h, relationshipType: v, onClose: j } = e,
        { newestAnalyticsLocation: g } = (0, o.ZP)(),
        b = (0, r.Z)({
            user: n,
            guildId: f,
            channelId: x,
            displayProfile: h,
            onClose: j,
        }),
        {
            gameFriends: I,
            hasOutgoingPendingGameFriends: y,
            hasIncomingPendingGameFriends: Z,
        } = (0, m.H)({ userId: n.id }),
        _ = I.length > 0 || y || Z;
    return v === p.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(s.Z, {
                        user: n,
                        guildId: f,
                        onClose: j,
                    }),
                    (0, l.jsx)(d.Z, { onClose: j }),
                    (0, l.jsx)(c.wV, {
                        user: n,
                        guildId: f,
                        viewProfileItem: b,
                    }),
                ],
            })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(a.H, {
                          userId: n.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, l.jsx)(c.wV, {
                          user: n,
                          guildId: f,
                          viewProfileItem: b,
                      }),
                  ],
              })
            : v === p.OGo.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(a.H, {
                            userId: n.id,
                            onClose: i.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(c.wV, {
                            user: n,
                            guildId: f,
                        }),
                    ],
                })
              : v === p.OGo.FRIEND || v === p.OGo.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(a.H, {
                              userId: n.id,
                              onClose: i.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, l.jsx)(u.n1, {
                              user: n,
                              relationshipType: v,
                              analyticsLocation: g,
                          }),
                          (0, l.jsx)(c.wV, {
                              user: n,
                              guildId: f,
                              viewProfileItem: b,
                          }),
                      ],
                  })
                : v === p.OGo.NONE && _
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.H, {
                                userId: n.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(u.C0, {
                                user: n,
                                analyticsLocation: g,
                                gameFriends: I,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: Z,
                                hasOutgoingPendingGameFriends: y,
                            }),
                            (0, l.jsx)(c.wV, {
                                user: n,
                                guildId: f,
                                viewProfileItem: b,
                            }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(u.Z7, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: g,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(a.v, {
                                userId: n.id,
                                onClose: i.Z.popAll,
                                variant: "secondary",
                            }),
                            (0, l.jsx)(c.wV, {
                                user: n,
                                guildId: f,
                                viewProfileItem: b,
                            }),
                        ],
                    });
}
