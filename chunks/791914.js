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
    f = n(153209),
    h = n(818186),
    p = n(999671),
    g = n(946443),
    b = n(388032),
    m = n(557208);
function y(e) {
    let { tab: t, setTab: n, badgeState: f, closePopout: p } = e,
        { enabled: g, inInbox: y } = c.Z.useExperiment({ location: "RecentsPopout" }),
        v = (0, d.Us)({ location: "RecentsHeader" }),
        j = (0, i.e7)([u.Z], () => u.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(s.h4, {
        className: m.header,
        children: [
            (0, r.jsxs)("div", {
                className: m.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: "md",
                        color: "currentColor",
                        className: m.inboxIcon,
                    }),
                    (0, r.jsx)(o.Heading, {
                        className: m.inboxTitle,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: b.intl.string(b.t.GSmTKJ),
                    }),
                    (0, r.jsxs)(o.kL8, {
                        className: m.controls,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": b.intl.string(b.t["8k+6QY"]),
                        children: [(0, r.jsx)(O, { tab: t }), (0, r.jsx)(h.Z, { closePopout: p })],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: m.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: l.X.FOR_YOU,
                            "aria-label": b.intl.string(b.t["En+D+u"]),
                            className: m.tab,
                            children: [
                                b.intl.string(b.t["En+D+u"]),
                                (null == f ? void 0 : f.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: a.Z.colors.STATUS_DANGER.css,
                                          className: m.iconBadge,
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: m.tab,
                            children: b.intl.string(b.t.sRUdB8),
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            "aria-label": b.intl.string(b.t.GRZF96),
                            id: l.X.MENTIONS,
                            className: m.tab,
                            children: b.intl.string(b.t.GRZF96),
                        }),
                        g && y
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": b.intl.string(b.t["2pAkDA"]),
                                  id: l.X.BOOKMARKS,
                                  className: m.tab,
                                  children:
                                      0 === j
                                          ? b.intl.string(b.t["2pAkDA"])
                                          : b.intl.formatToPlainString(b.t.I4fryG, { count: j }),
                              })
                            : null,
                        v
                            ? (0, r.jsx)(o.njP.Item, {
                                  "aria-label": "scheduled",
                                  id: l.X.SCHEDULED,
                                  className: m.tab,
                                  children: b.intl.string(b.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function O(e) {
    let { tab: t } = e;
    return t === l.X.FOR_YOU
        ? (0, r.jsx)(f.Gp, {})
        : t === l.X.UNREADS
          ? (0, r.jsx)(g.QP, {})
          : t === l.X.MENTIONS
            ? (0, r.jsx)(p.Z, {})
            : null;
}
