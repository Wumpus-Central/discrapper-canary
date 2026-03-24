t.d(l, { A: () => g });
var i = t(627968);
t(64700);
var n = t(630054),
    s = t(688810),
    a = t(591179),
    r = t(722868),
    o = t(822775),
    d = t(832696),
    c = t(982985),
    u = t(853397),
    m = t(290090),
    A = t(697250),
    p = t(102951),
    x = t(652215);
function g(e) {
    let {
            user: l,
            currentUser: t,
            guildId: g,
            originGuildId: h,
            channelId: f,
            displayProfile: j,
            relationshipType: I,
            onClose: v,
        } = e,
        N = (0, a.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: y } = (0, s.Ay)(),
        E = (0, r.A)({ user: l, guildId: h, channelId: f, displayProfile: j, onClose: v }),
        {
            gameFriends: T,
            hasOutgoingPendingGameFriends: C,
            hasIncomingPendingGameFriends: _,
        } = (0, p.J)({ userId: l.id }),
        b = T.length > 0 || C || _;
    return I === x.eA$.BLOCKED
        ? null
        : l.id === t.id
          ? N
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(m.A, { onClose: v }),
                        (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(o.A, { user: l, guildId: g, onClose: v }),
                        (0, i.jsx)(m.A, { onClose: v }),
                        (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                    ],
                })
          : l.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(c.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                  ],
              })
            : I === x.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(d.A, { user: l }),
                        (0, i.jsx)(u.Zt, { user: l, guildId: g }),
                    ],
                })
              : I === x.eA$.FRIEND || I === x.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(A.Ef, { user: l, relationshipType: I, analyticsLocation: y }),
                          (0, i.jsx)(d.A, { user: l }),
                          (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                      ],
                  })
                : I === x.eA$.NONE && b
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(c.e, { userId: l.id, onClose: n.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(A.ES, {
                                user: l,
                                analyticsLocation: y,
                                gameFriends: T,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: _,
                                hasOutgoingPendingGameFriends: C,
                            }),
                            (0, i.jsx)(d.A, { user: l }),
                            (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(A.cO, { variant: "primary", userId: l.id, analyticsLocation: y, autoFocus: !0 }),
                            (0, i.jsx)(c.l, { userId: l.id, onClose: n.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(d.A, { user: l }),
                            (0, i.jsx)(u.Zt, { user: l, guildId: g, viewProfileItem: E }),
                        ],
                    });
}
