t.d(n, { Z: () => p });
var o = t(255367);
t(73800);
var r = t(481060),
    c = t(906732),
    i = t(705556),
    a = t(30556),
    l = t(664794),
    s = t(522182),
    d = t(821706),
    u = t(562831),
    f = t(981631);
function p(e) {
    let { user: n, currentUser: t, guildId: p, relationshipType: m, onClose: b } = e,
        { newestAnalyticsLocation: _ } = (0, c.ZP)(),
        { gameFriends: y, hasOutgoingPendingGameFriends: h, hasIncomingPendingGameFriends: g } = (0, u.H)({ userId: n.id }),
        x = y.length > 0 || h || g;
    return m === f.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(i.Z, {
                        user: n,
                        guildId: p,
                        onClose: b
                    }),
                    (0, o.jsx)(s.Z, { onClose: b }),
                    (0, o.jsx)(l.Z, {
                        type: 'icon',
                        user: n,
                        guildId: p,
                        themeColor: 'secondary'
                    })
                ]
            })
          : n.bot
            ? (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(a.Z, {
                          type: 'text',
                          userId: n.id,
                          onClose: b,
                          autoFocus: !0
                      }),
                      (0, o.jsx)(l.Z, {
                          type: 'icon',
                          user: n,
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
                            userId: n.id,
                            color: r.zxk.Colors.BRAND,
                            onClose: b,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(d.g, {
                            type: 'icon',
                            user: n,
                            relationshipType: m,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: _
                        }),
                        (0, o.jsx)(l.Z, {
                            type: 'icon',
                            user: n,
                            guildId: p,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : m === f.OGo.NONE && x
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(a.Z, {
                              type: 'text',
                              userId: n.id,
                              onClose: b,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(d.k9, {
                              type: 'icon',
                              user: n,
                              analyticsLocation: _,
                              themeColor: 'secondary',
                              gameFriends: y,
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: g,
                              hasOutgoingPendingGameFriends: h
                          }),
                          (0, o.jsx)(l.Z, {
                              type: 'icon',
                              user: n,
                              guildId: p,
                              themeColor: 'secondary'
                          })
                      ]
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(d.Z7, {
                              type: 'text',
                              userId: n.id,
                              analyticsLocation: _,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: n.id,
                              onClose: b,
                              themeColor: 'secondary'
                          }),
                          (0, o.jsx)(l.Z, {
                              type: 'icon',
                              user: n,
                              guildId: p,
                              themeColor: 'secondary'
                          })
                      ]
                  });
}
