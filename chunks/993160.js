n.d(t, { Z: () => p });
var o = n(255367);
n(73800);
var r = n(481060),
    c = n(906732),
    i = n(705556),
    a = n(30556),
    l = n(664794),
    s = n(522182),
    d = n(821706),
    u = n(562831),
    f = n(981631);
function p(e) {
    let { user: t, currentUser: n, guildId: p, relationshipType: m, onClose: b } = e,
        { newestAnalyticsLocation: _ } = (0, c.ZP)(),
        { gameFriends: y, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: x } = (0, u.H)({ userId: t.id }),
        g = y.length > 0 || h || x;
    return m === f.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(i.Z, {
                        user: t,
                        guildId: p,
                        onClose: b
                    }),
                    (0, o.jsx)(s.Z, { onClose: b }),
                    (0, o.jsx)(l.Z, {
                        type: 'icon',
                        user: t,
                        guildId: p,
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
                          onClose: b,
                          autoFocus: !0
                      }),
                      (0, o.jsx)(l.Z, {
                          type: 'icon',
                          user: t,
                          guildId: p,
                          themeColor: 'secondary'
                      })
                  ]
              })
            : m === f.OGo.FRIEND || m === f.OGo.PENDING_OUTGOING || m === f.OGo.PENDING_INCOMING
              ? (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(a.Z, {
                            type: 'text',
                            userId: t.id,
                            color: r.zxk.Colors.BRAND,
                            onClose: b,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(d.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: m,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: _
                        }),
                        (0, o.jsx)(l.Z, {
                            type: 'icon',
                            user: t,
                            guildId: p,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : m === f.OGo.NONE && g
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(a.Z, {
                              type: 'text',
                              userId: t.id,
                              onClose: b,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(d.k9, {
                              type: 'icon',
                              user: t,
                              analyticsLocation: _,
                              themeColor: 'secondary',
                              gameFriends: y,
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: x,
                              hasOutgoingPendingGameFriends: h
                          }),
                          (0, o.jsx)(l.Z, {
                              type: 'icon',
                              user: t,
                              guildId: p,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(d.Z7, {
                              type: 'text',
                              userId: t.id,
                              analyticsLocation: _,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: t.id,
                              onClose: b,
                              themeColor: 'secondary'
                          }),
                          (0, o.jsx)(l.Z, {
                              type: 'icon',
                              user: t,
                              guildId: p,
                              themeColor: 'secondary'
                          })
                      ]
                  });
}
