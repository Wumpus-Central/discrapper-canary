n.d(t, { Z: () => p });
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(906732),
    c = n(705556),
    a = n(30556),
    l = n(664794),
    s = n(522182),
    d = n(821706),
    u = n(562831),
    f = n(981631);
function p(e) {
    let { user: t, currentUser: n, guildId: p, relationshipType: m, friendToken: b, onClose: h } = e,
        { newestAnalyticsLocation: y } = (0, i.ZP)(),
        { gameFriends: g, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: _ } = (0, u.H)({ userId: t.id }),
        x = g.length > 0 || j || _;
    return m === f.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(c.Z, {
                        user: t,
                        guildId: p,
                        onClose: h
                    }),
                    (0, o.jsx)(s.Z, { onClose: h }),
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
                          onClose: h,
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
                            onClose: h,
                            autoFocus: !0
                        }),
                        (0, o.jsx)(d.g, {
                            type: 'icon',
                            user: t,
                            relationshipType: m,
                            shouldShowTooltip: !0,
                            themeColor: 'secondary',
                            analyticsLocation: y
                        }),
                        (0, o.jsx)(l.Z, {
                            type: 'icon',
                            user: t,
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
                              userId: t.id,
                              onClose: h,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(d.k9, {
                              type: 'icon',
                              user: t,
                              analyticsLocation: y,
                              themeColor: 'secondary',
                              gameFriends: g,
                              shouldShowTooltip: !0,
                              hasIncomingPendingGameFriends: _,
                              hasOutgoingPendingGameFriends: j
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
                              friendToken: b,
                              analyticsLocation: y,
                              color: r.zxk.Colors.BRAND,
                              autoFocus: !0
                          }),
                          (0, o.jsx)(a.Z, {
                              type: 'icon',
                              userId: t.id,
                              onClose: h,
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
