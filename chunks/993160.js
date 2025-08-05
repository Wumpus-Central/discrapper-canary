n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(755721),
    i = n(572691),
    l = n(906732),
    a = n(444141),
    c = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function g(e) {
    let { user: t, currentUser: n, guildId: g, channelId: b, displayProfile: y, relationshipType: O, onClose: h } = e,
        { newestAnalyticsLocation: j } = (0, l.ZP)(),
        x = (0, a.Z)({
            user: t,
            guildId: g,
            channelId: b,
            displayProfile: y,
            onClose: h
        }),
        { gameFriends: _, hasOutgoingPendingGameFriends: v, hasIncomingPendingGameFriends: I } = (0, p.H)({ userId: t.id }),
        P = _.length > 0 || v || I;
    return O === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: g,
                        onClose: h
                    }),
                    (0, r.jsx)(u.Z, { onClose: h }),
                    (0, r.jsx)(d.Z, {
                        type: 'icon',
                        user: t,
                        guildId: g,
                        viewProfileItem: x,
                        themeColor: 'secondary'
                    })
                ]
            })
          : t.bot
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Z, {
                          type: 'text',
                          userId: t.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0
                      }),
                      (0, r.jsx)(d.Z, {
                          type: 'icon',
                          user: t,
                          guildId: g,
                          viewProfileItem: x,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : O === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: o.zx.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, r.jsx)(d.Z, {
                            type: 'icon',
                            user: t,
                            guildId: g,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : O === m.OGo.FRIEND || O === m.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Z, {
                              type: 'text',
                              userId: t.id,
                              color: o.zx.Colors.BRAND,
                              onClose: i.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, r.jsx)(f.g, {
                              type: 'icon',
                              user: t,
                              relationshipType: O,
                              shouldShowTooltip: !0,
                              themeColor: 'secondary',
                              analyticsLocation: j
                          }),
                          (0, r.jsx)(d.Z, {
                              type: 'icon',
                              user: t,
                              guildId: g,
                              viewProfileItem: x,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : O === m.OGo.NONE && P
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Z, {
                                type: 'text',
                                userId: t.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0
                            }),
                            (0, r.jsx)(f.k9, {
                                type: 'icon',
                                user: t,
                                analyticsLocation: j,
                                themeColor: 'secondary',
                                gameFriends: _,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: I,
                                hasOutgoingPendingGameFriends: v
                            }),
                            (0, r.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: g,
                                viewProfileItem: x,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: j,
                                color: o.zx.Colors.BRAND,
                                autoFocus: !0
                            }),
                            (0, r.jsx)(s.Z, {
                                type: 'icon',
                                userId: t.id,
                                onClose: i.Z.popAll,
                                themeColor: 'secondary'
                            }),
                            (0, r.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: g,
                                viewProfileItem: x,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
