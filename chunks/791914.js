n.d(t, { Z: () => v });
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
    f = n(216789),
    h = n(153209),
    g = n(818186),
    m = n(999671),
    b = n(946443),
    _ = n(264233),
    O = n(388032),
    y = n(407067);
function v(e) {
    let { tab: t, setTab: n, badgeState: h, closePopout: m } = e,
        { enabled: b, inInbox: _ } = d.Z.useExperiment({ location: "RecentsPopout" }),
        v = (0, f.Us)({ location: "RecentsHeader" }),
        { enabled: C } = u.Z.useExperiment({ location: "RecentsHeader" }),
        E = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        x = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(a.h4, {
        className: y.header,
        children: [
            (0, r.jsxs)("div", {
                className: y.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: "md",
                        color: "currentColor",
                        className: y.inboxIcon,
                    }),
                    (0, r.jsx)(o.X6q, {
                        className: y.inboxTitle,
                        variant: "text-lg/semibold",
                        color: "interactive-active",
                        children: O.intl.string(O.t.GSmTKC),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: y.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": O.intl.string(O.t["8k+6QU"]),
                        children: [(0, r.jsx)(j, { tab: t }), (0, r.jsx)(g.Z, { closePopout: m })],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: y.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: l.X.FOR_YOU,
                            "aria-label": O.intl.string(O.t["En+D+v"]),
                            className: y.tab,
                            children: [
                                O.intl.string(O.t["En+D+v"]),
                                (null == h ? void 0 : h.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: s.Z.STATUS_DANGER,
                                          className: y.iconBadge,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: y.tab,
                            children: O.intl.string(O.t.sRUdBw),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": O.intl.string(O.t["GRZF9/"]),
                            id: l.X.MENTIONS,
                            className: y.tab,
                            children: O.intl.string(O.t["GRZF9/"]),
                        }),
                        C
                            ? (0, r.jsxs)(o.njP.Item, {
                                  "aria-label": "game_invites",
                                  id: l.X.GAME_INVITES,
                                  className: y.tab,
                                  children: [
                                      O.intl.string(O.t.apq3cX),
                                      E > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: y.iconBadge,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        b && _
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": O.intl.string(O.t["2pAkDA"]),
                                  id: l.X.BOOKMARKS,
                                  className: y.tab,
                                  children:
                                      0 === x
                                          ? O.intl.string(O.t["2pAkDA"])
                                          : O.intl.formatToPlainString(O.t.I4fryM, { count: x }),
                              })
                            : null,
                        v
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": "scheduled",
                                  id: l.X.SCHEDULED,
                                  className: y.tab,
                                  children: O.intl.string(O.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function j(e) {
    let { tab: t } = e;
    return t === l.X.FOR_YOU
        ? (0, r.jsx)(h.Gp, {})
        : t === l.X.UNREADS
          ? (0, r.jsx)(b.QP, {})
          : t === l.X.MENTIONS
            ? (0, r.jsx)(m.Z, {})
            : t === l.X.GAME_INVITES
              ? (0, r.jsx)(_.S, {})
              : null;
}
