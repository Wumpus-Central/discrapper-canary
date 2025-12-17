t.d(n, { Z: () => p });
var l = t(54381);
t(473749);
var i = t(572691),
    o = t(906732),
    r = t(444141),
    a = t(705556),
    c = t(30556),
    s = t(664794),
    d = t(522182),
    u = t(821706),
    f = t(562831),
    m = t(981631);
function p(e) {
    let { user: n, currentUser: t, guildId: p, channelId: x, displayProfile: h, relationshipType: v, onClose: b } = e,
        { newestAnalyticsLocation: j } = (0, o.ZP)(),
        g = (0, r.Z)({
            user: n,
            guildId: p,
            channelId: x,
            displayProfile: h,
            onClose: b,
        }),
        {
            gameFriends: I,
            hasOutgoingPendingGameFriends: y,
            hasIncomingPendingGameFriends: Z,
        } = (0, f.H)({ userId: n.id }),
        O = I.length > 0 || y || Z;
    return v === m.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.Z, {
                        user: n,
                        guildId: p,
                        onClose: b,
                    }),
                    (0, l.jsx)(d.Z, { onClose: b }),
                    (0, l.jsx)(s.wV, {
                        user: n,
                        guildId: p,
                        viewProfileItem: g,
                    }),
                ],
            })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(c.H, {
                          userId: n.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, l.jsx)(s.wV, {
                          user: n,
                          guildId: p,
                          viewProfileItem: g,
                      }),
                  ],
              })
            : v === m.OGo.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.H, {
                            userId: n.id,
                            onClose: i.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(s.wV, {
                            user: n,
                            guildId: p,
                        }),
                    ],
                })
              : v === m.OGo.FRIEND || v === m.OGo.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(c.H, {
                              userId: n.id,
                              onClose: i.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, l.jsx)(u.n1, {
                              user: n,
                              relationshipType: v,
                              analyticsLocation: j,
                          }),
                          (0, l.jsx)(s.wV, {
                              user: n,
                              guildId: p,
                              viewProfileItem: g,
                          }),
                      ],
                  })
                : v === m.OGo.NONE && O
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.H, {
                                userId: n.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(u.C0, {
                                user: n,
                                analyticsLocation: j,
                                gameFriends: I,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: Z,
                                hasOutgoingPendingGameFriends: y,
                            }),
                            (0, l.jsx)(s.wV, {
                                user: n,
                                guildId: p,
                                viewProfileItem: g,
                            }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(u.Z7, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: j,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(c.v, {
                                userId: n.id,
                                onClose: i.Z.popAll,
                                variant: "secondary",
                            }),
                            (0, l.jsx)(s.wV, {
                                user: n,
                                guildId: p,
                                viewProfileItem: g,
                            }),
                        ],
                    });
}
