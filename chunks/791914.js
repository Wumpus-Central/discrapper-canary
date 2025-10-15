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
    h = n(216789),
    f = n(153209),
    g = n(818186),
    m = n(999671),
    b = n(946443),
    _ = n(264233),
    O = n(388032),
    y = n(407067);
function v(e) {
    let { tab: t, setTab: n, badgeState: f, closePopout: m } = e,
        { enabled: b, inInbox: _ } = d.Z.useExperiment({ location: "RecentsPopout" }),
        v = (0, h.Us)({ location: "RecentsHeader" }),
        { enabled: x } = u.Z.useExperiment({ location: "RecentsHeader" }),
        C = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        E = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
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
                    (0, r.jsx)(o.Heading, {
                        className: y.inboxTitle,
                        variant: "text-lg/semibold",
                        color: "interactive-active",
                        children: O.intl.string(O.t.GSmTKJ),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: y.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": O.intl.string(O.t["8k+6QY"]),
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
                            "aria-label": O.intl.string(O.t["En+D+u"]),
                            className: y.tab,
                            children: [
                                O.intl.string(O.t["En+D+u"]),
                                (null == f ? void 0 : f.badgeForYou)
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
                            children: O.intl.string(O.t.sRUdB8),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": O.intl.string(O.t.GRZF96),
                            id: l.X.MENTIONS,
                            className: y.tab,
                            children: O.intl.string(O.t.GRZF96),
                        }),
                        x
                            ? (0, r.jsxs)(o.njP.Item, {
                                  "aria-label": "game_invites",
                                  id: l.X.GAME_INVITES,
                                  className: y.tab,
                                  children: [
                                      O.intl.string(O.t.apq3cU),
                                      C > 0
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
                                      0 === E
                                          ? O.intl.string(O.t["2pAkDA"])
                                          : O.intl.formatToPlainString(O.t.I4fryG, { count: E }),
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
        ? (0, r.jsx)(f.Gp, {})
        : t === l.X.UNREADS
          ? (0, r.jsx)(b.QP, {})
          : t === l.X.MENTIONS
            ? (0, r.jsx)(m.Z, {})
            : t === l.X.GAME_INVITES
              ? (0, r.jsx)(_.S, {})
              : null;
}
