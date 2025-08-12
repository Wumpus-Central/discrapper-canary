n.d(t, { Z: () => b }), n(314940), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(481060),
    c = n(492593),
    u = n(534469),
    d = n(511010),
    f = n(834129),
    _ = n(981631),
    p = n(388032),
    h = n(960777),
    m = n(433869);
function g(e) {
    let { expanded: t, onClick: n, count: i, compact: o, collapsedReason: a } = e,
        u = (0, s.EQ)({ collapsedReason: a })
            .with({ collapsedReason: p.t.VFWjc3 }, () =>
                (0, r.jsx)(l.kZF, {
                    size: "md",
                    color: "currentColor",
                    className: h.blockedIcon,
                }),
            )
            .with({ collapsedReason: p.t["+FcYMz"] }, () =>
                (0, r.jsx)(l.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: h.blockedIcon,
                }),
            )
            .otherwise(() =>
                (0, r.jsx)(l.Dio, {
                    size: "md",
                    color: "currentColor",
                    className: h.blockedIcon,
                }),
            );
    return (0, r.jsx)(c.Z, {
        compact: o,
        role: "group",
        childrenMessageContent: (0, r.jsx)(f.Z, {
            compact: o,
            className: h.blockedSystemMessage,
            iconNode: u,
            children: (0, r.jsxs)("div", {
                className: h.blockedMessageText,
                children: [
                    p.intl.format(a, { count: i }),
                    " \u2014",
                    " ",
                    (0, r.jsx)(l.P3F, {
                        tag: "span",
                        onClick: n,
                        className: h.blockedAction,
                        children: t ? p.intl.string(p.t.fgq1go) : p.intl.string(p.t.XJuakJ),
                    }),
                ],
            }),
        }),
    });
}
function E(e) {
    var t;
    let { messages: n, channel: o, compact: s = !1, unreadId: l, collapsedReason: c } = e,
        { hasJumpTarget: f = !1 } = n,
        [p, E] = i.useState(f),
        b = i.useCallback(() => E((e) => !e), []),
        y = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)("div", {
        className: a()({
            [m.groupStart]: !0,
            [h.expanded]: p,
        }),
        children: [
            n.hasUnread && (!p || (null == (t = n.content[0]) ? void 0 : t.type) === _.ys_.DIVIDER)
                ? (0, r.jsx)(
                      d.Z,
                      {
                          isUnread: !0,
                          id: l,
                      },
                      "divider",
                  )
                : null,
            (0, r.jsx)(
                g,
                {
                    count: y,
                    compact: s,
                    expanded: p,
                    onClick: b,
                    collapsedReason: c,
                },
                "collapsed-message-item",
            ),
            p
                ? n.content.map((e, t) => {
                      if (e.type === _.ys_.DIVIDER && t > 0) {
                          var i, a;
                          let e = null != (a = null == (i = n.content[t + 1]) ? void 0 : i.isGroupStart) && a;
                          return (0, r.jsx)(
                              d.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: l,
                              },
                              "divider",
                          );
                      }
                      if (e.type === _.ys_.MESSAGE || e.type === _.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === _.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
                          return (0, r.jsx)(
                              t,
                              {
                                  className: h.__invalid_blocked,
                                  compact: s,
                                  channel: o,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1,
                              },
                              e.content.id,
                          );
                      }
                  })
                : null,
        ],
    });
}
let b = i.memo(E);
