n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var o = n(755721),
    i = n(572691),
    l = n(906732),
    a = n(444141),
    c = n(705556),
    s = n(30556),
    d = n(664794),
    u = n(522182),
    f = n(821706),
    p = n(562831),
    m = n(981631);
function b(e) {
    let { user: t, currentUser: n, guildId: b, channelId: g, displayProfile: h, relationshipType: x, onClose: _ } = e,
        { newestAnalyticsLocation: j } = (0, l.ZP)(),
        v = (0, a.Z)({
            user: t,
            guildId: b,
            channelId: g,
            displayProfile: h,
            onClose: _,
        }),
        {
            gameFriends: y,
            hasOutgoingPendingGameFriends: I,
            hasIncomingPendingGameFriends: O,
        } = (0, p.H)({ userId: t.id }),
        Z = y.length > 0 || I || O;
    return x === m.OGo.BLOCKED
        ? null
        : t.id === n.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Z, {
                        user: t,
                        guildId: b,
                        onClose: _,
                    }),
                    (0, r.jsx)(u.Z, { onClose: _ }),
                    (0, r.jsx)(d.Z, {
                        type: "icon",
                        user: t,
                        guildId: b,
                        viewProfileItem: v,
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
                          viewProfileItem: v,
                          themeColor: "secondary",
                      }),
                  ],
              })
            : x === m.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.Z, {
                            type: "text",
                            userId: t.id,
                            color: o.zx.Colors.BRAND,
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
              : x === m.OGo.FRIEND || x === m.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Z, {
                              type: "text",
                              userId: t.id,
                              color: o.zx.Colors.BRAND,
                              onClose: i.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, r.jsx)(f.g, {
                              type: "icon",
                              user: t,
                              relationshipType: x,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: j,
                          }),
                          (0, r.jsx)(d.Z, {
                              type: "icon",
                              user: t,
                              guildId: b,
                              viewProfileItem: v,
                              themeColor: "secondary",
                          }),
                      ],
                  })
                : x === m.OGo.NONE && Z
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
                                analyticsLocation: j,
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
                                user: t,
                                guildId: b,
                                viewProfileItem: v,
                                themeColor: "secondary",
                            }),
                        ],
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f.Z7, {
                                type: "text",
                                userId: t.id,
                                analyticsLocation: j,
                                color: o.zx.Colors.BRAND,
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
                                viewProfileItem: v,
                                themeColor: "secondary",
                            }),
                        ],
                    });
}
