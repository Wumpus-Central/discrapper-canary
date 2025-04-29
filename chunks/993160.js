t.d(n, { Z: () => p });
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(906732),
    c = t(705556),
    a = t(30556),
    l = t(664794),
    s = t(522182),
    d = t(821706),
    u = t(562831),
    f = t(981631);
function p(e) {
    let { user: n, currentUser: t, guildId: p, relationshipType: m, friendToken: b, onClose: _ } = e,
        { newestAnalyticsLocation: h } = (0, i.ZP)(),
        { gameFriends: y, hasOutgoingPendingGameFriends: g, hasIncomingPendingGameFriends: x } = (0, u.H)({ userId: n.id }),
        j = y.length > 0 || g || x;
    return m === f.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(c.Z, {
                        user: n,
                        guildId: p,
                        onClose: _
                    }),
                    (0, o.jsx)(s.Z, { onClose: _ }),
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
                          onClose: _,
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
                            onClose: _,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(d.g, {
                            type: 'icon',
                            user: n,
                            relationshipType: m,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: h
                        }),
                        (0, o.jsx)(l.Z, {
                            type: 'icon',
                            user: n,
                            guildId: p,
                            themeColor: 'secondary'
                        })
                    ]
                })
              : m === f.OGo.NONE && j
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(a.Z, {
                              type: 'text',
                              userId: n.id,
                              onClose: _,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(d.k9, {
                              type: 'icon',
                              user: n,
                              analyticsLocation: h,
                              themeColor: 'secondary',
                              gameFriends: y,
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: x,
                              hasOutgoingPendingGameFriends: g
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
                              friendToken: b,
                              analyticsLocation: h,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: n.id,
                              onClose: _,
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
