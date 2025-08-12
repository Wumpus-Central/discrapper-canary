n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var l = n(755721),
    i = n(572691),
    o = n(906732),
    a = n(444141),
    c = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: g, displayProfile: j, relationshipType: y, onClose: O } = e,
        { newestAnalyticsLocation: x } = (0, o.ZP)(),
        h = (0, a.Z)({
            user: t,
            guildId: b,
            channelId: g,
            displayProfile: j,
            onClose: O,
        }),
        {
            gameFriends: v,
            hasOutgoingPendingGameFriends: _,
            hasIncomingPendingGameFriends: I,
        } = (0, p.H)({ userId: t.id }),
        P = v.length > 0 || _ || I;
    return y === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: b,
                        onClose: O,
                    }),
                    (0, r.jsx)(u.Z, { onClose: O }),
                    (0, r.jsx)(d.Z, {
                        type: "icon",
                        user: t,
                        guildId: b,
                        viewProfileItem: h,
                        themeColor: "secondary",
                    }),
                ],
            })
          : t.bot
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(s.Z, {
                          type: "text",
                          userId: t.id,
                          onClose: i.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, r.jsx)(d.Z, {
                          type: "icon",
                          user: t,
                          guildId: b,
                          viewProfileItem: h,
                          themeColor: "secondary",
                      }),
                  ],
              })
            : y === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: "text",
                            userId: t.id,
                            color: l.zx.Colors.BRAND,
                            onClose: i.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, r.jsx)(d.Z, {
                            type: "icon",
                            user: t,
                            guildId: b,
                            themeColor: "secondary",
                        }),
                    ],
                })
              : y === m.OGo.FRIEND || y === m.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Z, {
                              type: "text",
                              userId: t.id,
                              color: l.zx.Colors.BRAND,
                              onClose: i.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, r.jsx)(f.g, {
                              type: "icon",
                              user: t,
                              relationshipType: y,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: x,
                          }),
                          (0, r.jsx)(d.Z, {
                              type: "icon",
                              user: t,
                              guildId: b,
                              viewProfileItem: h,
                              themeColor: "secondary",
                          }),
                      ],
                  })
                : y === m.OGo.NONE && P
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.Z, {
                                type: "text",
                                userId: t.id,
                                onClose: i.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(f.k9, {
                                type: "icon",
                                user: t,
                                analyticsLocation: x,
                                themeColor: "secondary",
                                gameFriends: v,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: I,
                                hasOutgoingPendingGameFriends: _,
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: t,
                                guildId: b,
                                viewProfileItem: h,
                                themeColor: "secondary",
                            }),
                        ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: "text",
                                userId: t.id,
                                analyticsLocation: x,
                                color: l.zx.Colors.BRAND,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(s.Z, {
                                type: "icon",
                                userId: t.id,
                                onClose: i.Z.popAll,
                                themeColor: "secondary",
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: t,
                                guildId: b,
                                viewProfileItem: h,
                                themeColor: "secondary",
                            }),
                        ],
                    });
}
