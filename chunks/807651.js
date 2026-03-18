t.d(l, { A: () => x });
var i = t(627968);
t(64700);
var n = t(630054),
    s = t(688810),
    a = t(722868),
    r = t(822775),
    o = t(832696),
    d = t(982985),
    c = t(853397),
    u = t(290090),
    m = t(697250),
    A = t(102951),
    p = t(652215);
function x(e) {
    let {
            user: l,
            currentUser: t,
            guildId: x,
            originGuildId: g,
            channelId: f,
            displayProfile: h,
            relationshipType: j,
            onClose: I,
        } = e,
        { newestAnalyticsLocation: v } = (0, s.Ay)(),
        N = (0, a.A)({ user: l, guildId: g, channelId: f, displayProfile: h, onClose: I }),
        {
            gameFriends: y,
            hasOutgoingPendingGameFriends: E,
            hasIncomingPendingGameFriends: T,
        } = (0, A.J)({ userId: l.id }),
        C = y.length > 0 || E || T;
    return j === p.eA$.BLOCKED
        ? null
        : l.id === t.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.A, { user: l, guildId: x, onClose: I }),
                    (0, i.jsx)(u.A, { onClose: I }),
                    (0, i.jsx)(c.Zt, { user: l, guildId: x, viewProfileItem: N }),
                ],
            })
          : l.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(c.Zt, { user: l, guildId: x, viewProfileItem: N }),
                  ],
              })
            : j === p.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(o.A, { user: l }),
                        (0, i.jsx)(c.Zt, { user: l, guildId: x }),
                    ],
                })
              : j === p.eA$.FRIEND || j === p.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(m.Ef, { user: l, relationshipType: j, analyticsLocation: v }),
                          (0, i.jsx)(o.A, { user: l }),
                          (0, i.jsx)(c.Zt, { user: l, guildId: x, viewProfileItem: N }),
                      ],
                  })
                : j === p.eA$.NONE && C
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(m.ES, {
                                user: l,
                                analyticsLocation: v,
                                gameFriends: y,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: T,
                                hasOutgoingPendingGameFriends: E,
                            }),
                            (0, i.jsx)(o.A, { user: l }),
                            (0, i.jsx)(c.Zt, { user: l, guildId: x, viewProfileItem: N }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(m.cO, { variant: "primary", userId: l.id, analyticsLocation: v, autoFocus: !0 }),
                            (0, i.jsx)(d.l, { userId: l.id, onClose: n.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(o.A, { user: l }),
                            (0, i.jsx)(c.Zt, { user: l, guildId: x, viewProfileItem: N }),
                        ],
                    });
}
