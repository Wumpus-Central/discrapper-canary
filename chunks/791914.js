n.d(t, { Z: () => C });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(524437),
    o = n(481060),
    s = n(494404),
    a = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    h = n(768943),
    p = n(216789),
    f = n(153209),
    g = n(818186),
    m = n(999671),
    b = n(946443),
    O = n(264233),
    _ = n(388032),
    y = n(808934);
function C(e) {
    let { tab: t, setTab: n, badgeState: f, closePopout: m } = e,
        { enabled: b, inInbox: O } = d.Z.useExperiment({ location: "RecentsPopout" }),
        C = (0, p.Us)({ location: "RecentsHeader" }),
        { enabled: j } = u.Z.useExperiment({ location: "RecentsHeader" }),
        E = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        S = (0, i.e7)([h.Z], () => h.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(s.h4, {
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
                        children: _.intl.string(_.t.GSmTKC),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: y.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": _.intl.string(_.t["8k+6QU"]),
                        children: [(0, r.jsx)(v, { tab: t }), (0, r.jsx)(g.Z, { closePopout: m })],
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
                            "aria-label": _.intl.string(_.t["En+D+v"]),
                            className: y.tab,
                            children: [
                                _.intl.string(_.t["En+D+v"]),
                                (null == f ? void 0 : f.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: a.Z.STATUS_DANGER,
                                          className: y.iconBadge,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: y.tab,
                            children: _.intl.string(_.t.sRUdBw),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": _.intl.string(_.t["GRZF9/"]),
                            id: l.X.MENTIONS,
                            className: y.tab,
                            children: _.intl.string(_.t["GRZF9/"]),
                        }),
                        j
                            ? (0, r.jsxs)(o.njP.Item, {
                                  "aria-label": "game_invites",
                                  id: l.X.GAME_INVITES,
                                  className: y.tab,
                                  children: [
                                      _.intl.string(_.t.apq3cX),
                                      E > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: a.Z.STATUS_DANGER,
                                                className: y.iconBadge,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        b && O
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": _.intl.string(_.t["2pAkDA"]),
                                  id: l.X.BOOKMARKS,
                                  className: y.tab,
                                  children:
                                      0 === S
                                          ? _.intl.string(_.t["2pAkDA"])
                                          : _.intl.formatToPlainString(_.t.I4fryM, { count: S }),
                              })
                            : null,
                        C
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": "scheduled",
                                  id: l.X.SCHEDULED,
                                  className: y.tab,
                                  children: _.intl.string(_.t.Fn6Odn),
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
