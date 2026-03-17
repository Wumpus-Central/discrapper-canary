i.d(l, { A: () => p });
var n = i(627968);
i(64700);
var t = i(630054),
    s = i(688810),
    a = i(722868),
    r = i(822775),
    o = i(982985),
    d = i(853397),
    c = i(290090),
    u = i(697250),
    A = i(102951),
    m = i(652215);
function p(e) {
    let {
            user: l,
            currentUser: i,
            guildId: p,
            originGuildId: g,
            channelId: x,
            displayProfile: h,
            relationshipType: f,
            onClose: I,
            onChangeGuildId: j,
        } = e,
        { newestAnalyticsLocation: v } = (0, s.Ay)(),
        N = (0, a.A)({ user: l, guildId: g, channelId: x, displayProfile: h, onClose: I, onChangeGuildId: j }),
        {
            gameFriends: y,
            hasOutgoingPendingGameFriends: E,
            hasIncomingPendingGameFriends: C,
        } = (0, A.J)({ userId: l.id }),
        T = y.length > 0 || E || C;
    return f === m.eA$.BLOCKED
        ? null
        : l.id === i.id
          ? (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(r.A, { user: l, guildId: p, onClose: I }),
                    (0, n.jsx)(c.A, { onClose: I }),
                    (0, n.jsx)(d.Zt, { user: l, guildId: p, viewProfileItem: N }),
                ],
            })
          : l.bot
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(o.e, { userId: l.id, onClose: t.A.popAll, autoFocus: !0 }),
                      (0, n.jsx)(d.Zt, { user: l, guildId: p, viewProfileItem: N }),
                  ],
              })
            : f === m.eA$.PENDING_INCOMING
              ? (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o.e, { userId: l.id, onClose: t.A.popAll, autoFocus: !0 }),
                        (0, n.jsx)(d.Zt, { user: l, guildId: p }),
                    ],
                })
              : f === m.eA$.FRIEND || f === m.eA$.PENDING_OUTGOING
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.e, { userId: l.id, onClose: t.A.popAll, autoFocus: !0 }),
                          (0, n.jsx)(u.Ef, { user: l, relationshipType: f, analyticsLocation: v }),
                          (0, n.jsx)(d.Zt, { user: l, guildId: p, viewProfileItem: N }),
                      ],
                  })
                : f === m.eA$.NONE && T
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.e, { userId: l.id, onClose: t.A.popAll, autoFocus: !0 }),
                            (0, n.jsx)(u.ES, {
                                user: l,
                                analyticsLocation: v,
                                gameFriends: y,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: C,
                                hasOutgoingPendingGameFriends: E,
                            }),
                            (0, n.jsx)(d.Zt, { user: l, guildId: p, viewProfileItem: N }),
                        ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(u.cO, { variant: "primary", userId: l.id, analyticsLocation: v, autoFocus: !0 }),
                            (0, n.jsx)(o.l, { userId: l.id, onClose: t.A.popAll, variant: "secondary" }),
                            (0, n.jsx)(d.Zt, { user: l, guildId: p, viewProfileItem: N }),
                        ],
                    });
}
