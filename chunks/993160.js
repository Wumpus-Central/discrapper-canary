n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(755721),
    i = n(572691),
    l = n(906732),
    a = n(444141),
    c = n(705556),
    s = n(30556),
    u = n(664794),
    d = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: g, displayProfile: y, relationshipType: j, onClose: O } = e,
        { newestAnalyticsLocation: x } = (0, l.ZP)(),
        h = (0, a.Z)({
            user: t,
            guildId: b,
            channelId: g,
            displayProfile: y,
            onClose: O
        }),
        { gameFriends: _, hasOutgoingPendingGameFriends: v, hasIncomingPendingGameFriends: I } = (0, p.H)({ userId: t.id }),
        P = _.length > 0 || v || I;
    return j === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: b,
                        onClose: O
                    }),
                    (0, r.jsx)(d.Z, { onClose: O }),
                    (0, r.jsx)(u.Z, {
                        type: 'icon',
                        user: t,
                        guildId: b,
                        viewProfileItem: h,
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
                      (0, r.jsx)(u.Z, {
                          type: 'icon',
                          user: t,
                          guildId: b,
                          viewProfileItem: h,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : j === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: o.zx.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, r.jsx)(u.Z, {
                            type: 'icon',
                            user: t,
                            guildId: b,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : j === m.OGo.FRIEND || j === m.OGo.PENDING_OUTGOING
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
                              relationshipType: j,
                              shouldShowTooltip: !0,
                              themeColor: 'secondary',
                              analyticsLocation: x
                          }),
                          (0, r.jsx)(u.Z, {
                              type: 'icon',
                              user: t,
                              guildId: b,
                              viewProfileItem: h,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : j === m.OGo.NONE && P
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
                                analyticsLocation: x,
                                themeColor: 'secondary',
                                gameFriends: _,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: I,
                                hasOutgoingPendingGameFriends: v
                            }),
                            (0, r.jsx)(u.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: h,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: x,
                                color: o.zx.Colors.BRAND,
                                autoFocus: !0
                            }),
                            (0, r.jsx)(s.Z, {
                                type: 'icon',
                                userId: t.id,
                                onClose: i.Z.popAll,
                                themeColor: 'secondary'
                            }),
                            (0, r.jsx)(u.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: h,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
