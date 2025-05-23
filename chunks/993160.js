n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(572691),
    c = n(906732),
    a = n(705556),
    l = n(30556),
    s = n(664794),
    d = n(522182),
    u = n(821706),
    f = n(562831),
    p = n(981631);
function m(e) {
    let { user: t, currentUser: n, guildId: m, relationshipType: b, onClose: _ } = e,
        { newestAnalyticsLocation: y } = (0, c.ZP)(),
        { gameFriends: x, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: g } = (0, f.H)({ userId: t.id }),
        j = x.length > 0 || h || g;
    return b === p.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Z, {
                        user: t,
                        guildId: m,
                        onClose: _
                    }),
                    (0, r.jsx)(d.Z, { onClose: _ }),
                    (0, r.jsx)(s.Z, {
                        type: 'icon',
                        user: t,
                        guildId: m,
                        themeColor: 'secondary'
                    })
                ]
            })
          : t.bot
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.Z, {
                          type: 'text',
                          userId: t.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0
                      }),
                      (0, r.jsx)(s.Z, {
                          type: 'icon',
                          user: t,
                          guildId: m,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : b === p.OGo.FRIEND || b === p.OGo.PENDING_OUTGOING || b === p.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Z, {
                            type: 'text',
                            userId: t.id,
                            color: o.zxk.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, r.jsx)(u.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: b,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: y
                        }),
                        (0, r.jsx)(s.Z, {
                            type: 'icon',
                            user: t,
                            guildId: m,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : b === p.OGo.NONE && j
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Z, {
                              type: 'text',
                              userId: t.id,
                              onClose: i.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, r.jsx)(u.k9, {
                              type: 'icon',
                              user: t,
                              analyticsLocation: y,
                              themeColor: 'secondary',
                              gameFriends: x,
                              tooltipPosition: 'top',
                              tooltipAlign: 'center',
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: g,
                              hasOutgoingPendingGameFriends: h
                          }),
                          (0, r.jsx)(s.Z, {
                              type: 'icon',
                              user: t,
                              guildId: m,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.Z7, {
                              type: 'text',
                              userId: t.id,
                              analyticsLocation: y,
                              color: o.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, r.jsx)(l.Z, {
                              type: 'icon',
                              userId: t.id,
                              onClose: i.Z.popAll,
                              themeColor: 'secondary'
                          }),
                          (0, r.jsx)(s.Z, {
                              type: 'icon',
                              user: t,
                              guildId: m,
                              themeColor: 'secondary'
                          })
                      ]
                  });
}
