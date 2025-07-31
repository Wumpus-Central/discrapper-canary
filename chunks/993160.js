n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var o = n(755721),
    i = n(572691),
    a = n(906732),
    l = n(444141),
    c = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    m = n(562831),
    p = n(981631);
function g(e) {
    let { user: t, currentUser: n, guildId: g, channelId: b, displayProfile: x, relationshipType: _, onClose: j } = e,
        { newestAnalyticsLocation: h } = (0, a.ZP)(),
        y = (0, l.Z)({
            user: t,
            guildId: g,
            channelId: b,
            displayProfile: x,
            onClose: j
        }),
        { gameFriends: v, hasOutgoingPendingGameFriends: I, hasIncomingPendingGameFriends: O } = (0, m.H)({ userId: t.id }),
        P = v.length > 0 || I || O;
    return _ === p.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: g,
                        onClose: j
                    }),
                    (0, r.jsx)(u.Z, { onClose: j }),
                    (0, r.jsx)(d.Z, {
                        type: 'icon',
                        user: t,
                        guildId: g,
                        viewProfileItem: y,
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
                          viewProfileItem: y,
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
                            guildId: g,
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
                              analyticsLocation: h
                          }),
                          (0, r.jsx)(d.Z, {
                              type: 'icon',
                              user: t,
                              guildId: g,
                              viewProfileItem: y,
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
                                analyticsLocation: h,
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
                                guildId: g,
                                viewProfileItem: y,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: h,
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
                                viewProfileItem: y,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
