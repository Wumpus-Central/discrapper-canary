n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(524437),
    o = n(481060),
    a = n(494404),
    s = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    p = n(768943),
    h = n(216789),
    f = n(153209),
    g = n(818186),
    m = n(999671),
    b = n(946443),
    O = n(264233),
    y = n(388032),
    _ = n(407067);
function j(e) {
    let { tab: t, setTab: n, badgeState: f, closePopout: m } = e,
        { enabled: b, inInbox: O } = d.Z.useExperiment({ location: "RecentsPopout" }),
        j = (0, h.Us)({ location: "RecentsHeader" }),
        { enabled: x } = u.Z.useExperiment({ location: "RecentsHeader" }),
        C = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        E = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(a.h4, {
        className: _.header,
        children: [
            (0, r.jsxs)("div", {
                className: _.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: "md",
                        color: "currentColor",
                        className: _.inboxIcon,
                    }),
                    (0, r.jsx)(o.X6q, {
                        className: _.inboxTitle,
                        variant: "text-lg/semibold",
                        color: "interactive-active",
                        children: y.intl.string(y.t.GSmTKC),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: _.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": y.intl.string(y.t["8k+6QU"]),
                        children: [(0, r.jsx)(v, { tab: t }), (0, r.jsx)(g.Z, { closePopout: m })],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: _.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: _.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: l.X.FOR_YOU,
                            "aria-label": y.intl.string(y.t["En+D+v"]),
                            className: _.tab,
                            children: [
                                y.intl.string(y.t["En+D+v"]),
                                (null == f ? void 0 : f.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: s.Z.STATUS_DANGER,
                                          className: _.iconBadge,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: _.tab,
                            children: y.intl.string(y.t.sRUdBw),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": y.intl.string(y.t["GRZF9/"]),
                            id: l.X.MENTIONS,
                            className: _.tab,
                            children: y.intl.string(y.t["GRZF9/"]),
                        }),
                        x
                            ? (0, r.jsxs)(o.njP.Item, {
                                  "aria-label": "game_invites",
                                  id: l.X.GAME_INVITES,
                                  className: _.tab,
                                  children: [
                                      y.intl.string(y.t.apq3cX),
                                      C > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: _.iconBadge,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        b && O
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": y.intl.string(y.t["2pAkDA"]),
                                  id: l.X.BOOKMARKS,
                                  className: _.tab,
                                  children:
                                      0 === E
                                          ? y.intl.string(y.t["2pAkDA"])
                                          : y.intl.formatToPlainString(y.t.I4fryM, { count: E }),
                              })
                            : null,
                        j
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": "scheduled",
                                  id: l.X.SCHEDULED,
                                  className: _.tab,
                                  children: y.intl.string(y.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function v(e) {
    let { tab: t } = e;
    return t === l.X.FOR_YOU
        ? (0, r.jsx)(f.Gp, {})
        : t === l.X.UNREADS
          ? (0, r.jsx)(b.QP, {})
          : t === l.X.MENTIONS
            ? (0, r.jsx)(m.Z, {})
            : t === l.X.GAME_INVITES
              ? (0, r.jsx)(O.S, {})
              : null;
}
