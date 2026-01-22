t.d(l, { A: () => m });
var n = t(627968);
t(64700);
var i = t(630054),
    r = t(688810),
    s = t(722868),
    a = t(822775),
    o = t(982985),
    d = t(853397),
    c = t(290090),
    u = t(697250),
    f = t(102951),
    p = t(652215);
function m(e) {
    let { user: l, currentUser: t, guildId: m, channelId: x, displayProfile: A, relationshipType: j, onClose: h } = e,
        { newestAnalyticsLocation: g } = (0, r.Ay)(),
        v = (0, s.A)({
            user: l,
            guildId: m,
            channelId: x,
            displayProfile: A,
            onClose: h,
        }),
        {
            gameFriends: b,
            hasOutgoingPendingGameFriends: I,
            hasIncomingPendingGameFriends: y,
        } = (0, f.J)({ userId: l.id }),
        O = b.length > 0 || I || y;
    return j === p.eA$.BLOCKED
        ? null
        : l.id === t.id
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(a.A, {
                        user: l,
                        guildId: m,
                        onClose: h,
                    }),
                    (0, n.jsx)(c.A, { onClose: h }),
                    (0, n.jsx)(d.Zt, {
                        user: l,
                        guildId: m,
                        viewProfileItem: v,
                    }),
                ],
            })
          : l.bot
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(o.e, {
                          userId: l.id,
                          onClose: i.A.popAll,
                          autoFocus: !0,
                      }),
                      (0, n.jsx)(d.Zt, {
                          user: l,
                          guildId: m,
                          viewProfileItem: v,
                      }),
                  ],
              })
            : j === p.eA$.PENDING_INCOMING
              ? (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o.e, {
                            userId: l.id,
                            onClose: i.A.popAll,
                            autoFocus: !0,
                        }),
                        (0, n.jsx)(d.Zt, {
                            user: l,
                            guildId: m,
                        }),
                    ],
                })
              : j === p.eA$.FRIEND || j === p.eA$.PENDING_OUTGOING
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.e, {
                              userId: l.id,
                              onClose: i.A.popAll,
                              autoFocus: !0,
                          }),
                          (0, n.jsx)(u.Ef, {
                              user: l,
                              relationshipType: j,
                              analyticsLocation: g,
                          }),
                          (0, n.jsx)(d.Zt, {
                              user: l,
                              guildId: m,
                              viewProfileItem: v,
                          }),
                      ],
                  })
                : j === p.eA$.NONE && O
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.e, {
                                userId: l.id,
                                onClose: i.A.popAll,
                                autoFocus: !0,
                            }),
                            (0, n.jsx)(u.ES, {
                                user: l,
                                analyticsLocation: g,
                                gameFriends: b,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: y,
                                hasOutgoingPendingGameFriends: I,
                            }),
                            (0, n.jsx)(d.Zt, {
                                user: l,
                                guildId: m,
                                viewProfileItem: v,
                            }),
                        ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(u.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: g,
                                autoFocus: !0,
                            }),
                            (0, n.jsx)(o.l, {
                                userId: l.id,
                                onClose: i.A.popAll,
                                variant: "secondary",
                            }),
                            (0, n.jsx)(d.Zt, {
                                user: l,
                                guildId: m,
                                viewProfileItem: v,
                            }),
                        ],
                    });
}
