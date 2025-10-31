n.d(t, { Z: () => _ }), n(314940), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(481060),
    c = n(492593),
    u = n(534469),
    d = n(511010),
    p = n(834129),
    f = n(981631),
    h = n(388032),
    m = n(378661),
    g = n(360514);
function b(e) {
    let { expanded: t, onClick: n, count: i, compact: l, collapsedReason: a } = e,
        u = (0, o.EQ)({ collapsedReason: a })
            .with({ collapsedReason: h.t["VFWjc+"] }, () =>
                (0, r.jsx)(s.kZF, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            )
            .with({ collapsedReason: h.t["+FcYM/"] }, () =>
                (0, r.jsx)(s.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            )
            .otherwise(() =>
                (0, r.jsx)(s.Dio, {
                    size: "md",
                    color: "currentColor",
                    className: m.blockedIcon,
                }),
            );
    return (0, r.jsx)(c.Z, {
        compact: l,
        role: "group",
        childrenMessageContent: (0, r.jsx)(p.Z, {
            compact: l,
            className: m.blockedSystemMessage,
            iconNode: u,
            children: (0, r.jsxs)("div", {
                className: m.blockedMessageText,
                children: [
                    h.intl.format(a, { count: i }),
                    " \u2014",
                    " ",
                    (0, r.jsx)(s.P3F, {
                        tag: "span",
                        onClick: n,
                        className: m.blockedAction,
                        children: t ? h.intl.string(h.t.fgq1gs) : h.intl.string(h.t.XJuakA),
                    }),
                ],
            }),
        }),
    });
}
let _ = i.memo(function (e) {
    var t;
    let { messages: n, channel: l, compact: o = !1, unreadId: s, collapsedReason: c } = e,
        { hasJumpTarget: p = !1 } = n,
        [h, _] = i.useState(p),
        y = i.useCallback(() => _((e) => !e), []),
        C = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)("div", {
        className: a()({
            [g.groupStart]: !0,
            [m.expanded]: h,
        }),
        children: [
            n.hasUnread && (!h || (null == (t = n.content[0]) ? void 0 : t.type) === f.ys_.DIVIDER)
                ? (0, r.jsx)(
                      d.Z,
                      {
                          isUnread: !0,
                          id: s,
                      },
                      "divider",
                  )
                : null,
            (0, r.jsx)(
                b,
                {
                    count: C,
                    compact: o,
                    expanded: h,
                    onClick: y,
                    collapsedReason: c,
                },
                "collapsed-message-item",
            ),
            h
                ? n.content.map((e, t) => {
                      if (e.type === f.ys_.DIVIDER && t > 0) {
                          var i, a;
                          let e = null != (a = null == (i = n.content[t + 1]) ? void 0 : i.isGroupStart) && a;
                          return (0, r.jsx)(
                              d.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: s,
                              },
                              "divider",
                          );
                      }
                      if (e.type === f.ys_.MESSAGE || e.type === f.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === f.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
                          return (0, r.jsx)(
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
