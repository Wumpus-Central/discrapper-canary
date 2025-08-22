t.d(n, { Z: () => h });
var r = t(951288);
t(647438);
var l = t(755721),
    o = t(572691),
    i = t(906732),
    c = t(444141),
    s = t(705556),
    a = t(30556),
    d = t(664794),
    u = t(522182),
    f = t(821706),
    m = t(562831),
    p = t(981631);
function h(e) {
    let { user: n, currentUser: t, guildId: h, channelId: x, displayProfile: b, relationshipType: j, onClose: g } = e,
        { newestAnalyticsLocation: v } = (0, i.ZP)(),
        y = (0, c.Z)({
            user: n,
            guildId: h,
            channelId: x,
            displayProfile: b,
            onClose: g,
        }),
        {
            gameFriends: O,
            hasOutgoingPendingGameFriends: I,
            hasIncomingPendingGameFriends: _,
        } = (0, m.H)({ userId: n.id }),
        Z = O.length > 0 || I || _;
    return j === p.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.Z, {
                        user: n,
                        guildId: h,
                        onClose: g,
                    }),
                    (0, r.jsx)(u.Z, { onClose: g }),
                    (0, r.jsx)(d.Z, {
                        type: "icon",
                        user: n,
                        guildId: h,
                        viewProfileItem: y,
                        themeColor: "secondary",
                    }),
                ],
            })
          : n.bot
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.Z, {
                          type: "text",
                          userId: n.id,
                          onClose: o.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, r.jsx)(d.Z, {
                          type: "icon",
                          user: n,
                          guildId: h,
                          viewProfileItem: y,
                          themeColor: "secondary",
                      }),
                  ],
              })
            : j === p.OGo.PENDING_INCOMING
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.Z, {
                            type: "text",
                            userId: n.id,
                            color: l.zx.Colors.BRAND,
                            onClose: o.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, r.jsx)(d.Z, {
                            type: "icon",
                            user: n,
                            guildId: h,
                            themeColor: "secondary",
                        }),
                    ],
                })
              : j === p.OGo.FRIEND || j === p.OGo.PENDING_OUTGOING
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.Z, {
                              type: "text",
                              userId: n.id,
                              color: l.zx.Colors.BRAND,
                              onClose: o.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, r.jsx)(f.g, {
                              type: "icon",
                              user: n,
                              relationshipType: j,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: v,
                          }),
                          (0, r.jsx)(d.Z, {
                              type: "icon",
                              user: n,
                              guildId: h,
                              viewProfileItem: y,
                              themeColor: "secondary",
                          }),
                      ],
                  })
                : j === p.OGo.NONE && Z
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(a.Z, {
                                type: "text",
                                userId: n.id,
                                onClose: o.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(f.k9, {
                                type: "icon",
                                user: n,
                                analyticsLocation: v,
                                themeColor: "secondary",
                                gameFriends: O,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: _,
                                hasOutgoingPendingGameFriends: I,
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: h,
                                viewProfileItem: y,
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
                                color: l.zx.Colors.BRAND,
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(a.Z, {
                                type: "icon",
                                userId: n.id,
                                onClose: o.Z.popAll,
                                themeColor: "secondary",
                            }),
                            (0, r.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: h,
                                viewProfileItem: y,
                                themeColor: "secondary",
                            }),
                        ],
                    });
}
