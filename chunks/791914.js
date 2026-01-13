n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(524437),
    a = n(692547),
    o = n(481060),
    s = n(598999),
    c = n(2818),
    u = n(768943),
    d = n(216789),
    p = n(153209),
    f = n(818186),
    h = n(999671),
    g = n(946443),
    m = n(388032),
    b = n(557208);
function y(e) {
    let { tab: t, setTab: n, badgeState: p, closePopout: h } = e,
        { enabled: g, inInbox: y } = c.Z.useExperiment({ location: "RecentsPopout" }),
        O = (0, d.Us)({ location: "RecentsHeader" }),
        j = (0, i.e7)([u.Z], () => u.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(s.h4, {
        className: b.header,
        children: [
            (0, r.jsxs)("div", {
                className: b.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: "md",
                        color: "currentColor",
                        className: b.inboxIcon,
                    }),
                    (0, r.jsx)(o.Heading, {
                        className: b.inboxTitle,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: m.intl.string(m.t.GSmTKJ),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: b.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": m.intl.string(m.t["8k+6QY"]),
                        children: [(0, r.jsx)(v, { tab: t }), (0, r.jsx)(f.Z, { closePopout: h })],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: b.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: b.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: l.X.FOR_YOU,
                            "aria-label": m.intl.string(m.t["En+D+u"]),
                            className: b.tab,
                            children: [
                                m.intl.string(m.t["En+D+u"]),
                                (null == p ? void 0 : p.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: a.Z.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: b.iconBadge,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: b.tab,
                            children: m.intl.string(m.t.sRUdB8),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": m.intl.string(m.t.GRZF96),
                            id: l.X.MENTIONS,
                            className: b.tab,
                            children: m.intl.string(m.t.GRZF96),
                        }),
                        g && y
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": m.intl.string(m.t["2pAkDA"]),
                                  id: l.X.BOOKMARKS,
                                  className: b.tab,
                                  children:
                                      0 === j
                                          ? m.intl.string(m.t["2pAkDA"])
                                          : m.intl.formatToPlainString(m.t.I4fryG, { count: j }),
                              })
                            : null,
                        O
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": "scheduled",
                                  id: l.X.SCHEDULED,
                                  className: b.tab,
                                  children: m.intl.string(m.t.Fn6Odn),
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
        ? (0, r.jsx)(p.Gp, {})
        : t === l.X.UNREADS
          ? (0, r.jsx)(g.QP, {})
          : t === l.X.MENTIONS
            ? (0, r.jsx)(h.Z, {})
            : null;
}
