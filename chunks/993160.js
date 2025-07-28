n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(755721),
    i = n(572691),
    c = n(906732),
    l = n(444141),
    a = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    m = n(562831),
    p = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: x, displayProfile: h, relationshipType: _, onClose: g } = e,
        { newestAnalyticsLocation: y } = (0, c.ZP)(),
        j = (0, l.Z)({
            user: t,
            guildId: b,
            channelId: x,
            displayProfile: h,
            onClose: g
        }),
        { gameFriends: v, hasOutgoingPendingGameFriends: I, hasIncomingPendingGameFriends: O } = (0, m.H)({ userId: t.id }),
        P = v.length > 0 || I || O;
    return _ === p.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Z, {
                        user: t,
                        guildId: b,
                        onClose: g
                    }),
                    (0, r.jsx)(u.Z, { onClose: g }),
                    (0, r.jsx)(d.Z, {
                        type: 'icon',
                        user: t,
                        guildId: b,
                        viewProfileItem: j,
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
                          guildId: b,
                          viewProfileItem: j,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : _ === p.OGo.PENDING_INCOMING
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
                            guildId: b,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : _ === p.OGo.FRIEND || _ === p.OGo.PENDING_OUTGOING
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
                              relationshipType: _,
                              shouldShowTooltip: !0,
                              themeColor: 'secondary',
                              analyticsLocation: y
                          }),
                          (0, r.jsx)(d.Z, {
                              type: 'icon',
                              user: t,
                              guildId: b,
                              viewProfileItem: j,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : _ === p.OGo.NONE && P
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
                                analyticsLocation: y,
                                themeColor: 'secondary',
                                gameFriends: v,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: O,
                                hasOutgoingPendingGameFriends: I
                            }),
                            (0, r.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: j,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: y,
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
                                guildId: b,
                                viewProfileItem: j,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
