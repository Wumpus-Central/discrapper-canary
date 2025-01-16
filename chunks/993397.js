n(627341), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(481060),
    c = n(922611),
    d = n(492593),
    u = n(534469),
    h = n(511010),
    p = n(834129),
    m = n(981631),
    f = n(388032),
    g = n(447817),
    C = n(46124);
function x(e) {
    let { expanded: t, onClick: n, count: l, compact: r, collapsedReason: a } = e,
        u = (0, c.Do)({ location: 'CollapsedItemMessage' }),
        h = (0, s.EQ)({
            stealthRemediationEnabled: u,
            expanded: t
        })
            .returnType()
            .with(
                {
                    stealthRemediationEnabled: !0,
                    expanded: !0
                },
                () => f.intl.string(f.t.fgq1go)
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    expanded: !1
                },
                () => f.intl.string(f.t.XJuakJ)
            )
            .with(
                {
                    stealthRemediationEnabled: !1,
                    expanded: !1
                },
                () => f.intl.formatToPlainString(f.t.wUJXIi, { count: l })
            )
            .with(
                {
                    stealthRemediationEnabled: !1,
                    expanded: !0
                },
                () => f.intl.formatToPlainString(f.t['5XFZjY'], { count: l })
            )
            .exhaustive(),
        m = (0, s.EQ)({
            stealthRemediationEnabled: u,
            collapsedReason: a
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    collapsedReason: f.t.VFWjc3
                },
                () =>
                    (0, i.jsx)(o.EyeSlashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.blockedIcon
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    collapsedReason: f.t['+FcYMz']
                },
                () =>
                    (0, i.jsx)(o.DenyIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.blockedIcon
                    })
            )
            .otherwise(() =>
                (0, i.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.blockedIcon
                })
            );
    return (0, i.jsx)(d.Z, {
        compact: r,
        role: 'group',
        childrenMessageContent: (0, i.jsx)(p.Z, {
            compact: r,
            className: g.blockedSystemMessage,
            iconNode: m,
            children: (0, i.jsxs)('div', {
                className: g.blockedMessageText,
                children: [
                    f.intl.format(a, { count: l }),
                    ' \u2014',
                    ' ',
                    (0, i.jsx)(o.Clickable, {
                        tag: 'span',
                        onClick: n,
                        className: g.blockedAction,
                        children: h
                    })
                ]
            })
        })
    });
}
t.Z = l.memo(function (e) {
    var t;
    let { messages: n, channel: r, compact: s = !1, unreadId: o, collapsedReason: c } = e,
        { hasJumpTarget: d = !1 } = n,
        [p, f] = l.useState(d),
        v = l.useCallback(() => f((e) => !e), []),
        _ = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, i.jsxs)('div', {
        className: a()({
            [C.groupStart]: !0,
            [g.expanded]: p
        }),
        children: [
            n.hasUnread && (!p || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === m.ys_.DIVIDER)
                ? (0, i.jsx)(
                      h.Z,
                      {
                          isUnread: !0,
                          id: o
                      },
                      'divider'
                  )
                : null,
            (0, i.jsx)(
                x,
                {
                    count: _,
                    compact: s,
                    expanded: p,
                    onClick: v,
                    collapsedReason: c
                },
                'collapsed-message-item'
            ),
            p
                ? n.content.map((e, t) => {
                      if (e.type === m.ys_.DIVIDER && t > 0) {
                          var l, a;
                          let e = null !== (a = null === (l = n.content[t + 1]) || void 0 === l ? void 0 : l.isGroupStart) && void 0 !== a && a;
                          return (0, i.jsx)(
                              h.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: o
                              },
                              'divider'
                          );
                      }
                      if (e.type === m.ys_.MESSAGE || e.type === m.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === m.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
                          return (0, i.jsx)(
                              t,
                              {
                                  className: g.__invalid_blocked,
                                  compact: s,
                                  channel: r,
                                  message: e.content,
                                  groupId: e.groupId,
                                  flashKey: e.flashKey,
                                  isLastItem: !1,
                                  renderContentOnly: !1
                              },
                              e.content.id
                          );
                      }
                  })
                : null
        ]
    });
});
