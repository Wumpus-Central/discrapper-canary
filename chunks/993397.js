n.d(t, { Z: () => C }), n(314940), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(278074),
    s = n(481060),
    c = n(534091),
    u = n(492593),
    d = n(534469),
    p = n(511010),
    h = n(834129),
    f = n(981631),
    m = n(388032),
    g = n(378661),
    b = n(360514);
function y(e) {
    let { expanded: t, onClick: n, count: r, compact: l, collapsedReason: a } = e,
        c = (0, o.EQ)({ collapsedReason: a })
            .with({ collapsedReason: m.t["VFWjc+"] }, () =>
                (0, i.jsx)(s.kZF, {
                    size: "md",
                    color: "currentColor",
                    className: g.blockedIcon,
                }),
            )
            .with({ collapsedReason: m.t["+FcYM/"] }, () =>
                (0, i.jsx)(s.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: g.blockedIcon,
                }),
            )
            .otherwise(() =>
                (0, i.jsx)(s.Dio, {
                    size: "md",
                    color: "currentColor",
                    className: g.blockedIcon,
                }),
            );
    return (0, i.jsx)(u.Z, {
        compact: l,
        role: "group",
        childrenMessageContent: (0, i.jsx)(h.Z, {
            compact: l,
            className: g.blockedSystemMessage,
            iconNode: c,
            children: (0, i.jsxs)("div", {
                className: g.blockedMessageText,
                children: [
                    m.intl.format(a, { count: r }),
                    " \u2014",
                    " ",
                    (0, i.jsx)(s.P3F, {
                        tag: "span",
                        onClick: n,
                        className: g.blockedAction,
                        children: t ? m.intl.string(m.t.fgq1gs) : m.intl.string(m.t.XJuakA),
                    }),
                ],
            }),
        }),
    });
}
let C = r.memo(function (e) {
    var t;
    let { messages: n, channel: l, compact: o = !1, unreadId: s, collapsedReason: u } = e,
        { hasJumpTarget: h = !1 } = n,
        [m, C] = r.useState(h),
        v = r.useCallback(() => C((e) => !e), []);
    r.useEffect(() => {
        h && C(!0);
    }, [h]);
    let _ = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, i.jsxs)("div", {
        className: a()({
            [b.groupStart]: !0,
            [g.expanded]: m,
        }),
        children: [
            n.hasUnread && (!m || (null == (t = n.content[0]) ? void 0 : t.type) === f.ys_.DIVIDER)
                ? (0, i.jsx)(
                      p.Z,
                      {
                          isUnread: !0,
                          id: s,
                      },
                      "divider",
                  )
                : null,
            (0, i.jsx)(
                y,
                {
                    count: _,
                    compact: o,
                    expanded: m,
                    onClick: v,
                    collapsedReason: u,
                },
                "collapsed-message-item",
            ),
            m
                ? n.content.map((e, t) => {
                      if (e.type === f.ys_.DIVIDER && t > 0) {
                          var r, a;
                          let e = null != (a = null == (r = n.content[t + 1]) ? void 0 : r.isGroupStart) && a;
                          return (0, i.jsx)(
                              p.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: s,
                              },
                              "divider",
                          );
                      }
                      if (e.type === f.ys_.MESSAGE || e.type === f.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === f.ys_.THREAD_STARTER_MESSAGE ? d.Ru : d.ZP;
                          return (0, i.jsx)(
                              t,
                              {
                                  id: (0, c.p)(l.id, e.content.id),
                                  className: g.__invalid_blocked,
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
