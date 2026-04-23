t.d(n, { A: () => p });
var l = t(627968);
t(64700);
var i = t(630054),
    r = t(688810),
    a = t(591179),
    s = t(722868),
    o = t(822775),
    d = t(832696),
    u = t(982985),
    c = t(853397),
    g = t(290090),
    A = t(697250),
    m = t(102951),
    f = t(652215);
function p(e) {
    let {
            user: n,
            currentUser: t,
            guildId: p,
            originGuildId: x,
            channelId: h,
            displayProfile: v,
            relationshipType: j,
            onClose: I,
        } = e,
        b = (0, a.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: C } = (0, r.Ay)(),
        N = (0, s.A)({ user: n, guildId: x, channelId: h, displayProfile: v, onClose: I }),
        {
            gameFriends: y,
            hasOutgoingPendingGameFriends: E,
            hasIncomingPendingGameFriends: P,
        } = (0, m.J)({ userId: n.id }),
        R = y.length > 0 || E || P;
    return j === f.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? b
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(g.A, { onClose: I }),
                        (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(o.A, { user: n, guildId: p, onClose: I }),
                        (0, l.jsx)(g.A, { onClose: I }),
                        (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(u.e, { userId: n.id, onClose: i.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                  ],
              })
            : j === f.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(u.e, { userId: n.id, onClose: i.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(d.A, { user: n }),
                        (0, l.jsx)(c.Zt, { user: n, guildId: p }),
                    ],
                })
              : j === f.eA$.FRIEND || j === f.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(u.e, { userId: n.id, onClose: i.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(A.Ef, { user: n, relationshipType: j, analyticsLocation: C }),
                          (0, l.jsx)(d.A, { user: n }),
                          (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                      ],
                  })
                : j === f.eA$.NONE && R
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(u.e, { userId: n.id, onClose: i.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(A.ES, {
                                user: n,
                                analyticsLocation: C,
                                gameFriends: y,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: P,
                                hasOutgoingPendingGameFriends: E,
                            }),
                            (0, l.jsx)(d.A, { user: n }),
                            (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(A.cO, { variant: "primary", userId: n.id, analyticsLocation: C, autoFocus: !0 }),
                            (0, l.jsx)(u.l, { userId: n.id, onClose: i.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(d.A, { user: n }),
                            (0, l.jsx)(c.Zt, { user: n, guildId: p, viewProfileItem: N }),
                        ],
                    });
}
