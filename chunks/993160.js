n.d(t, { Z: () => m });
var o = n(255367);
n(73800);
var r = n(481060),
    c = n(572691),
    i = n(906732),
    l = n(705556),
    a = n(30556),
    s = n(664794),
    d = n(522182),
    u = n(821706),
    f = n(562831),
    p = n(981631);
function m(e) {
    let { user: t, currentUser: n, guildId: m, relationshipType: b, onClose: _ } = e,
        { newestAnalyticsLocation: y } = (0, i.ZP)(),
        { gameFriends: x, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: j } = (0, f.H)({ userId: t.id }),
        g = x.length > 0 || h || j;
    return b === p.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(l.Z, {
                        user: t,
                        guildId: m,
                        onClose: _
                    }),
                    (0, o.jsx)(d.Z, { onClose: _ }),
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
                          onClose: c.Z.popAll,
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
                            onClose: c.Z.popAll,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(u.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: b,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: y
                        }),
                        (0, o.jsx)(s.Z, {
                            type: 'icon',
                            user: t,
                            guildId: m,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : b === p.OGo.NONE && g
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(a.Z, {
                              type: 'text',
                              userId: t.id,
                              onClose: c.Z.popAll,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(u.k9, {
                              type: 'icon',
                              user: t,
                              analyticsLocation: y,
                              themeColor: 'secondary',
                              gameFriends: x,
                              tooltipPosition: 'top',
                              tooltipAlign: 'center',
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: j,
                              hasOutgoingPendingGameFriends: h
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
                              analyticsLocation: y,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: t.id,
                              onClose: c.Z.popAll,
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
