n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(630054),
    l = n(688810),
    a = n(722868),
    r = n(822775),
    d = n(982985),
    o = n(853397),
    c = n(290090),
    u = n(697250),
    A = n(102951),
    x = n(652215);
function m(e) {
    let { user: t, currentUser: n, guildId: m, channelId: p, displayProfile: h, relationshipType: f, onClose: g } = e,
        { newestAnalyticsLocation: I } = (0, l.Ay)(),
        j = (0, a.A)({ user: t, guildId: m, channelId: p, displayProfile: h, onClose: g }),
        {
            gameFriends: _,
            hasOutgoingPendingGameFriends: N,
            hasIncomingPendingGameFriends: v,
        } = (0, A.J)({ userId: t.id }),
        b = _.length > 0 || N || v;
    return f === x.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.A, { user: t, guildId: m, onClose: g }),
                    (0, i.jsx)(c.A, { onClose: g }),
                    (0, i.jsx)(o.Zt, { user: t, guildId: m, viewProfileItem: j }),
                ],
            })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(d.e, { userId: t.id, onClose: s.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(o.Zt, { user: t, guildId: m, viewProfileItem: j }),
                  ],
              })
            : f === x.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.e, { userId: t.id, onClose: s.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(o.Zt, { user: t, guildId: m }),
                    ],
                })
              : f === x.eA$.FRIEND || f === x.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.e, { userId: t.id, onClose: s.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(u.Ef, { user: t, relationshipType: f, analyticsLocation: I }),
                          (0, i.jsx)(o.Zt, { user: t, guildId: m, viewProfileItem: j }),
                      ],
                  })
                : f === x.eA$.NONE && b
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(d.e, { userId: t.id, onClose: s.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(u.ES, {
                                user: t,
                                analyticsLocation: I,
                                gameFriends: _,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: v,
                                hasOutgoingPendingGameFriends: N,
                            }),
                            (0, i.jsx)(o.Zt, { user: t, guildId: m, viewProfileItem: j }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.cO, { variant: "primary", userId: t.id, analyticsLocation: I, autoFocus: !0 }),
                            (0, i.jsx)(d.l, { userId: t.id, onClose: s.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(o.Zt, { user: t, guildId: m, viewProfileItem: j }),
                        ],
                    });
}
