n.d(t, { Z: () => b });
var o = n(255367);
n(73800);
var r = n(481060),
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
    let { user: t, currentUser: n, guildId: b, channelId: y, displayProfile: _, relationshipType: x, onClose: h } = e,
        { newestAnalyticsLocation: j } = (0, c.ZP)(),
        g = (0, l.Z)({
            user: t,
            guildId: b,
            channelId: y,
            displayProfile: _,
            onClose: h
        }),
        { gameFriends: v, hasOutgoingPendingGameFriends: I, hasIncomingPendingGameFriends: O } = (0, p.H)({ userId: t.id }),
        P = v.length > 0 || I || O;
    return x === m.OGo.BLOCKED
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
                        viewProfileItem: g,
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
                          viewProfileItem: g,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : x === m.OGo.PENDING_INCOMING
              ? (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: r.zxk.Colors.BRAND,
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
              : x === m.OGo.FRIEND || x === m.OGo.PENDING_OUTGOING
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(s.Z, {
                              type: 'text',
                              userId: t.id,
                              color: r.zxk.Colors.BRAND,
                              onClose: i.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(f.g, {
                              type: 'icon',
                              user: t,
                              relationshipType: x,
                              shouldShowTooltip: !0,
                              themeColor: 'secondary',
                              analyticsLocation: j
                          }),
                          (0, o.jsx)(d.Z, {
                              type: 'icon',
                              user: t,
                              guildId: b,
                              viewProfileItem: g,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : x === m.OGo.NONE && P
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
                                analyticsLocation: j,
                                themeColor: 'secondary',
                                gameFriends: v,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: O,
                                hasOutgoingPendingGameFriends: I
                            }),
                            (0, o.jsx)(d.Z, {
                                type: 'icon',
                                user: t,
                                guildId: b,
                                viewProfileItem: g,
                                themeColor: 'secondary'
                            })
                        ]
                    })
                  : (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(f.Z7, {
                                type: 'text',
                                userId: t.id,
                                analyticsLocation: j,
                                color: r.zxk.Colors.BRAND,
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
                                viewProfileItem: g,
                                themeColor: 'secondary'
                            })
                        ]
                    });
}
