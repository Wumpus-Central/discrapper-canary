n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(755721),
    l = n(572691),
    i = n(906732),
    a = n(444141),
    c = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: g, displayProfile: y, relationshipType: _, onClose: O } = e,
        { newestAnalyticsLocation: h } = (0, i.ZP)(),
        j = (0, a.Z)({
            user: t,
            guildId: b,
            channelId: g,
            displayProfile: y,
            onClose: O
        }),
        { gameFriends: x, hasOutgoingPendingGameFriends: v, hasIncomingPendingGameFriends: I } = (0, p.H)({ userId: t.id }),
        P = x.length > 0 || v || I;
    return _ === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: b,
                        onClose: O
                    }),
                    (0, r.jsx)(u.Z, { onClose: O }),
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
                          onClose: l.Z.popAll,
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
            : _ === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: o.zx.Colors.BRAND,
                            onClose: l.Z.popAll,
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
              : _ === m.OGo.FRIEND || _ === m.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Z, {
                              type: 'text',
                              userId: t.id,
                              color: o.zx.Colors.BRAND,
                              onClose: l.Z.popAll,
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
                              guildId: b,
                              viewProfileItem: j,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : _ === m.OGo.NONE && P
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Z, {
                                type: 'text',
                                userId: t.id,
                                onClose: l.Z.popAll,
                                autoFocus: !0
                            }),
                            (0, r.jsx)(f.k9, {
                                type: 'icon',
                                user: t,
                                analyticsLocation: h,
                                themeColor: 'secondary',
                                gameFriends: x,
                                tooltipPosition: 'top',
                                tooltipAlign: 'center',
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: I,
                                hasOutgoingPendingGameFriends: v
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
                                analyticsLocation: h,
                                color: o.zx.Colors.BRAND,
                                autoFocus: !0
                            }),
                            (0, r.jsx)(s.Z, {
                                type: 'icon',
                                userId: t.id,
                                onClose: l.Z.popAll,
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
