n.d(t, { Z: () => y }), n(314940), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(481060),
    c = n(492593),
    u = n(534469),
    d = n(511010),
    p = n(834129),
    h = n(981631),
    f = n(388032),
    m = n(77162),
    g = n(5898);
function b(e) {
    let { expanded: t, onClick: n, count: r, compact: l, collapsedReason: a } = e,
        u = (0, o.EQ)({ collapsedReason: a })
            .with({ collapsedReason: f.t["VFWjc+"] }, () =>
                (0, i.jsx)(s.kZF, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            )
            .with({ collapsedReason: f.t["+FcYM/"] }, () =>
                (0, i.jsx)(s.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            )
            .otherwise(() =>
                (0, i.jsx)(s.Dio, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            );
    return (0, i.jsx)(c.Z, {
        compact: l,
        role: "group",
        childrenMessageContent: (0, i.jsx)(p.Z, {
            compact: l,
            className: m.blockedSystemMessage,
            iconNode: u,
            children: (0, i.jsxs)("div", {
                className: m.blockedMessageText,
                children: [
                    f.intl.format(a, { count: r }),
                    " \u2014",
                    " ",
                    (0, i.jsx)(s.P3F, {
                        tag: "span",
                        onClick: n,
                        className: m.blockedAction,
                        children: t ? f.intl.string(f.t.fgq1gs) : f.intl.string(f.t.XJuakA),
                    }),
                ],
            }),
        }),
    });
}
let y = r.memo(function (e) {
    var t;
    let { messages: n, channel: l, compact: o = !1, unreadId: s, collapsedReason: c } = e,
        { hasJumpTarget: p = !1 } = n,
        [f, y] = r.useState(p),
        C = r.useCallback(() => y((e) => !e), []),
        v = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, i.jsxs)("div", {
        className: a()({
            [g.groupStart]: !0,
            [m.expanded]: f,
        }),
        children: [
            n.hasUnread && (!f || (null == (t = n.content[0]) ? void 0 : t.type) === h.ys_.DIVIDER)
                ? (0, i.jsx)(
                      d.Z,
                      {
                          isUnread: !0,
                          id: s,
                      },
                      "divider",
                  )
                : null,
            (0, i.jsx)(
                b,
                {
                    count: v,
                    compact: o,
                    expanded: f,
                    onClick: C,
                    collapsedReason: c,
                },
                "collapsed-message-item",
            ),
            f
                ? n.content.map((e, t) => {
                      if (e.type === h.ys_.DIVIDER && t > 0) {
                          var r, a;
                          let e = null != (a = null == (r = n.content[t + 1]) ? void 0 : r.isGroupStart) && a;
                          return (0, i.jsx)(
                              d.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: s,
                              },
                              "divider",
                          );
                      }
                      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
                          return (0, i.jsx)(
                              t,
                              {
                                  className: m.__invalid_blocked,
                                  compact: o,
                                  channel: l,
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
});
