t.d(n, { Z: () => b });
var r = t(951288);
t(647438);
var o = t(755721),
    l = t(572691),
    i = t(906732),
    c = t(444141),
    a = t(705556),
    s = t(30556),
    d = t(664794),
    u = t(522182),
    f = t(821706),
    m = t(562831),
    p = t(981631);
function b(e) {
    let { user: n, currentUser: t, guildId: b, channelId: g, displayProfile: x, relationshipType: h, onClose: j } = e,
        { newestAnalyticsLocation: v } = (0, i.ZP)(),
        _ = (0, c.Z)({
            user: n,
            guildId: b,
            channelId: g,
            displayProfile: x,
            onClose: j,
        }),
        {
            gameFriends: y,
            hasOutgoingPendingGameFriends: I,
            hasIncomingPendingGameFriends: O,
        } = (0, m.H)({ userId: n.id }),
        P = y.length > 0 || I || O;
    return h === p.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.Z, {
                        user: n,
                        guildId: b,
                        onClose: j,
                    }),
                    (0, r.jsx)(u.Z, { onClose: j }),
                    (0, r.jsx)(d.Z, {
                        type: "icon",
                        user: n,
                        guildId: b,
                        viewProfileItem: _,
                        themeColor: "secondary",
                    }),
                ],
            })
          : n.bot
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Z, {
                          type: "text",
                          userId: n.id,
                          onClose: l.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, r.jsx)(d.Z, {
                          type: "icon",
                          user: n,
                          guildId: b,
                          viewProfileItem: _,
                          themeColor: "secondary",
                      }),
                  ],
              })
            : h === p.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: "text",
                            userId: n.id,
                            color: o.zx.Colors.BRAND,
                            onClose: l.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, r.jsx)(d.Z, {
                            type: "icon",
                            user: n,
                            guildId: b,
                            themeColor: "secondary",
                        }),
                    ],
                })
              : h === p.OGo.FRIEND || h === p.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Z, {
                              type: "text",
                              userId: n.id,
                              color: o.zx.Colors.BRAND,
                              onClose: l.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, r.jsx)(f.g, {
                              type: "icon",
                              user: n,
                              relationshipType: h,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: v,
                          }),
                          (0, r.jsx)(d.Z, {
                              type: "icon",
                              user: n,
                              guildId: b,
                              viewProfileItem: _,
                              themeColor: "secondary",
                          }),
                      ],
                  })
                : h === p.OGo.NONE && P
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Z, {
                                type: "text",
                                userId: n.id,
                                onClose: l.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(f.k9, {
                                type: "icon",
                                user: n,
                                analyticsLocation: v,
                                themeColor: "secondary",
                                gameFriends: y,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: O,
                                hasOutgoingPendingGameFriends: I,
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: b,
                                viewProfileItem: _,
                                themeColor: "secondary",
                            }),
                        ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: "text",
                                userId: n.id,
                                analyticsLocation: v,
                                color: o.zx.Colors.BRAND,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(s.Z, {
                                type: "icon",
                                userId: n.id,
                                onClose: l.Z.popAll,
                                themeColor: "secondary",
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: b,
                                viewProfileItem: _,
                                themeColor: "secondary",
                            }),
                        ],
                    });
}
