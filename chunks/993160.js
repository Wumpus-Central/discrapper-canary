n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var o = n(481060),
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
    let { user: t, currentUser: n, guildId: b, channelId: _, displayProfile: y, relationshipType: x, onClose: h } = e,
        { newestAnalyticsLocation: g } = (0, c.ZP)(),
        j = (0, l.Z)({
            user: t,
            guildId: b,
            channelId: _,
            displayProfile: y,
            onClose: h
        }),
        { gameFriends: I, hasOutgoingPendingGameFriends: v, hasIncomingPendingGameFriends: O } = (0, p.H)({ userId: t.id }),
        P = I.length > 0 || v || O;
    return x === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Z, {
                        user: t,
                        guildId: b,
                        onClose: h
                    }),
                    (0, r.jsx)(u.Z, { onClose: h }),
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
            : x === m.OGo.FRIEND || x === m.OGo.PENDING_OUTGOING || x === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: 'text',
                            userId: t.id,
                            color: o.zxk.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, r.jsx)(f.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: x,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: g
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
              : x === m.OGo.NONE && P
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
                              analyticsLocation: g,
                              themeColor: 'secondary',
                              gameFriends: I,
                              tooltipPosition: 'top',
                              tooltipAlign: 'center',
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: O,
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
                              analyticsLocation: g,
                              color: o.zxk.Colors.BRAND,
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
