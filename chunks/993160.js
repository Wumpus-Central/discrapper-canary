t.d(n, { Z: () => h });
var l = t(951288);
t(647438);
var i = t(755721),
    r = t(572691),
    o = t(906732),
    s = t(444141),
    a = t(705556),
    c = t(30556),
    d = t(664794),
    u = t(522182),
    m = t(821706),
    p = t(562831),
    f = t(981631);
function h(e) {
    let { user: n, currentUser: t, guildId: h, channelId: x, displayProfile: j, relationshipType: v, onClose: g } = e,
        { newestAnalyticsLocation: b } = (0, o.ZP)(),
        y = (0, s.Z)({
            user: n,
            guildId: h,
            channelId: x,
            displayProfile: j,
            onClose: g,
        }),
        {
            gameFriends: I,
            hasOutgoingPendingGameFriends: Z,
            hasIncomingPendingGameFriends: O,
        } = (0, p.H)({ userId: n.id }),
        N = I.length > 0 || Z || O;
    return v === f.OGo.BLOCKED
        ? null
        : n.id === t.id
          ? (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(a.Z, {
                        user: n,
                        guildId: h,
                        onClose: g,
                    }),
                    (0, l.jsx)(u.Z, { onClose: g }),
                    (0, l.jsx)(d.Z, {
                        type: "icon",
                        user: n,
                        guildId: h,
                        viewProfileItem: y,
                        themeColor: "secondary",
                    }),
                ],
            })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(c.Z, {
                          type: "text",
                          userId: n.id,
                          onClose: r.Z.popAll,
                          autoFocus: !0,
                      }),
                      (0, l.jsx)(d.Z, {
                          type: "icon",
                          user: n,
                          guildId: h,
                          viewProfileItem: y,
                          themeColor: "secondary",
                      }),
                  ],
              })
            : v === f.OGo.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.Z, {
                            type: "text",
                            userId: n.id,
                            color: i.zx.Colors.BRAND,
                            onClose: r.Z.popAll,
                            autoFocus: !0,
                        }),
                        (0, l.jsx)(d.Z, {
                            type: "icon",
                            user: n,
                            guildId: h,
                            themeColor: "secondary",
                        }),
                    ],
                })
              : v === f.OGo.FRIEND || v === f.OGo.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(c.Z, {
                              type: "text",
                              userId: n.id,
                              color: i.zx.Colors.BRAND,
                              onClose: r.Z.popAll,
                              autoFocus: !0,
                          }),
                          (0, l.jsx)(m.g, {
                              type: "icon",
                              user: n,
                              relationshipType: v,
                              shouldShowTooltip: !0,
                              themeColor: "secondary",
                              analyticsLocation: b,
                          }),
                          (0, l.jsx)(d.Z, {
                              type: "icon",
                              user: n,
                              guildId: h,
                              viewProfileItem: y,
                              themeColor: "secondary",
                          }),
                      ],
                  })
                : v === f.OGo.NONE && N
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(c.Z, {
                                type: "text",
                                userId: n.id,
                                onClose: r.Z.popAll,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(m.k9, {
                                type: "icon",
                                user: n,
                                analyticsLocation: b,
                                themeColor: "secondary",
                                gameFriends: I,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                shouldShowTooltip: !0,
                                hasIncomingPendingGameFriends: O,
                                hasOutgoingPendingGameFriends: Z,
                            }),
                            (0, l.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: h,
                                viewProfileItem: y,
                                themeColor: "secondary",
                            }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(m.Z7, {
                                type: "text",
                                userId: n.id,
                                analyticsLocation: b,
                                color: i.zx.Colors.BRAND,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(c.Z, {
                                type: "icon",
                                userId: n.id,
                                onClose: r.Z.popAll,
                                themeColor: "secondary",
                            }),
                            (0, l.jsx)(d.Z, {
                                type: "icon",
                                user: n,
                                guildId: h,
                                viewProfileItem: y,
                                themeColor: "secondary",
                            }),
                        ],
                    });
}
