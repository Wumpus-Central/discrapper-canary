n.d(t, { Z: () => b });
var o = n(255367);
n(73800);
var r = n(755721),
    i = n(572691),
    c = n(906732),
    l = n(444141),
    a = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: x, displayProfile: y, relationshipType: _, onClose: h } = e,
        { newestAnalyticsLocation: g } = (0, c.ZP)(),
        j = (0, l.Z)({
            user: t,
            guildId: b,
            channelId: x,
            displayProfile: y,
            onClose: h
        }),
        { gameFriends: I, hasOutgoingPendingGameFriends: v, hasIncomingPendingGameFriends: O } = (0, p.H)({ userId: t.id }),
        P = I.length > 0 || v || O;
    return _ === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(a.Z, {
                        user: t,
                        guildId: b,
                        onClose: h
                    }),
                    (0, o.jsx)(u.Z, { onClose: h }),
                    (0, o.jsx)(d.Z, {
                        type: 'icon',
                        user: t,
                        guildId: b,
                        viewProfileItem: j,
                        themeColor: 'secondary'
                    })
                ]
            })
          : t.bot
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(s.Z, {
                          type: 'text',
                          userId: t.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0
                      }),
                      (0, o.jsx)(d.Z, {
                          type: 'icon',
                          user: t,
                          guildId: b,
                          viewProfileItem: j,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : _ === m.OGo.PENDING_INCOMING
              ? (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: r.zx.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(d.Z, {
                            type: 'icon',
                            user: t,
                            guildId: b,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : _ === m.OGo.FRIEND || _ === m.OGo.PENDING_OUTGOING
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(s.Z, {
                              type: 'text',
                              userId: t.id,
                              color: r.zx.Colors.BRAND,
                              onClose: i.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(f.g, {
                              type: 'icon',
                              user: t,
                              relationshipType: _,
                              shouldShowTooltip: !0,
                              themeColor: 'secondary',
                              analyticsLocation: g
                          }),
                          (0, o.jsx)(d.Z, {
                              type: 'icon',
                              user: t,
                              guildId: b,
                              viewProfileItem: j,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : _ === m.OGo.NONE && P
                  ? (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(s.Z, {
                                type: 'text',
                                userId: t.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0
                            }),
                            (0, o.jsx)(f.k9, {
                                type: 'icon',
                                user: t,
                                analyticsLocation: g,
                                themeColor: 'secondary',
                                gameFriends: I,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: O,
                                hasOutgoingPendingGameFriends: v
                            }),
                            (0, o.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: j,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: g,
                                color: r.zx.Colors.BRAND,
                                autoFocus: !0
                            }),
                            (0, o.jsx)(s.Z, {
                                type: 'icon',
                                userId: t.id,
                                onClose: i.Z.popAll,
                                themeColor: 'secondary'
                            }),
                            (0, o.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: j,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
