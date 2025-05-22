n.d(t, { Z: () => m });
var o = n(255367);
n(73800);
var r = n(481060),
    i = n(572691),
    c = n(906732),
    l = n(705556),
    a = n(30556),
    s = n(664794),
    d = n(522182),
    u = n(821706),
    f = n(562831),
    p = n(981631);
function m(e) {
    let { user: t, currentUser: n, guildId: m, relationshipType: b, onClose: y } = e,
        { newestAnalyticsLocation: _ } = (0, c.ZP)(),
        { gameFriends: h, hasOutgoingPendingGameFriends: x, hasIncomingPendingGameFriends: g } = (0, f.H)({ userId: t.id }),
        j = h.length > 0 || x || g;
    return b === p.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(l.Z, {
                        user: t,
                        guildId: m,
                        onClose: y
                    }),
                    (0, o.jsx)(d.Z, { onClose: y }),
                    (0, o.jsx)(s.Z, {
                        type: 'icon',
                        user: t,
                        guildId: m,
                        themeColor: 'secondary'
                    })
                ]
            })
          : t.bot
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(a.Z, {
                          type: 'text',
                          userId: t.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0
                      }),
                      (0, o.jsx)(s.Z, {
                          type: 'icon',
                          user: t,
                          guildId: m,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : b === p.OGo.FRIEND || b === p.OGo.PENDING_OUTGOING || b === p.OGo.PENDING_INCOMING
              ? (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(a.Z, {
                            type: 'text',
                            userId: t.id,
                            color: r.zxk.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(u.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: b,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: _
                        }),
                        (0, o.jsx)(s.Z, {
                            type: 'icon',
                            user: t,
                            guildId: m,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : b === p.OGo.NONE && j
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(a.Z, {
                              type: 'text',
                              userId: t.id,
                              onClose: i.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(u.k9, {
                              type: 'icon',
                              user: t,
                              analyticsLocation: _,
                              themeColor: 'secondary',
                              gameFriends: h,
                              tooltipPosition: 'top',
                              tooltipAlign: 'center',
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: g,
                              hasOutgoingPendingGameFriends: x
                          }),
                          (0, o.jsx)(s.Z, {
                              type: 'icon',
                              user: t,
                              guildId: m,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(u.Z7, {
                              type: 'text',
                              userId: t.id,
                              analyticsLocation: _,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: t.id,
                              onClose: i.Z.popAll,
                              themeColor: 'secondary'
                          }),
                          (0, o.jsx)(s.Z, {
                              type: 'icon',
                              user: t,
                              guildId: m,
                              themeColor: 'secondary'
                          })
                      ]
                  });
}
