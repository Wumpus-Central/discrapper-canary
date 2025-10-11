t.d(n, { Z: () => f });
var l = t(951288);
t(647438);
var i = t(572691),
    r = t(906732),
    o = t(444141),
    s = t(705556),
    a = t(30556),
    c = t(664794),
    d = t(522182),
    u = t(821706),
    m = t(562831),
    p = t(981631);
function f(e) {
    let { user: n, currentUser: t, guildId: f, channelId: h, displayProfile: x, relationshipType: j, onClose: v } = e,
        { newestAnalyticsLocation: g } = (0, r.ZP)(),
        b = (0, o.Z)({
            user: n,
            guildId: f,
            channelId: h,
            displayProfile: x,
            onClose: v,
        }),
        {
            gameFriends: I,
            hasOutgoingPendingGameFriends: y,
            hasIncomingPendingGameFriends: Z,
        } = (0, m.H)({ userId: n.id }),
        O = I.length > 0 || y || Z;
    return j === p.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(s.Z, {
                        user: n,
                        guildId: f,
                        onClose: v,
                    }),
                    (0, l.jsx)(d.Z, { onClose: v }),
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
            : j === p.OGo.PENDING_INCOMING
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
              : j === p.OGo.FRIEND || j === p.OGo.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(a.H, {
                              userId: n.id,
                              onClose: i.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, l.jsx)(u.g, {
                              type: "icon",
                              user: n,
                              relationshipType: j,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: g,
                          }),
                          (0, l.jsx)(c.wV, {
                              user: n,
                              guildId: f,
                              viewProfileItem: b,
                          }),
                      ],
                  })
                : j === p.OGo.NONE && O
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.H, {
                                userId: n.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(u.k9, {
                                type: "icon",
                                user: n,
                                analyticsLocation: g,
                                themeColor: "secondary",
                                gameFriends: I,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                shouldShowTooltip: !0,
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
