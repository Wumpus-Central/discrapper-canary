n.d(t, { Z: () => C }), n(627341), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(278074),
    s = n(481060),
    c = n(922611),
    u = n(492593),
    d = n(534469),
    p = n(511010),
    h = n(834129),
    f = n(981631),
    m = n(388032),
    g = n(527173),
    b = n(656017);
function _(e) {
    let { expanded: t, onClick: n, count: i, compact: l, collapsedReason: o } = e,
        d = (0, c.Do)({ location: 'CollapsedItemMessage' }),
        p = (0, a.EQ)({
            stealthRemediationEnabled: d,
            expanded: t
        })
            .returnType()
            .with(
                {
                    stealthRemediationEnabled: !0,
                    expanded: !0
                },
                () => m.NW.string(m.t.fgq1go)
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    expanded: !1
                },
                () => m.NW.string(m.t.XJuakJ)
            )
            .with(
                {
                    stealthRemediationEnabled: !1,
                    expanded: !1
                },
                () => m.NW.formatToPlainString(m.t.wUJXIi, { count: i })
            )
            .with(
                {
                    stealthRemediationEnabled: !1,
                    expanded: !0
                },
                () => m.NW.formatToPlainString(m.t['5XFZjY'], { count: i })
            )
            .exhaustive(),
        f = (0, a.EQ)({
            stealthRemediationEnabled: d,
            collapsedReason: o
        })
            .with(
                {
                    stealthRemediationEnabled: !0,
                    collapsedReason: m.t.VFWjc3
                },
                () =>
                    (0, r.jsx)(s.kZF, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.blockedIcon
                    })
            )
            .with(
                {
                    stealthRemediationEnabled: !0,
                    collapsedReason: m.t['+FcYMz']
                },
                () =>
                    (0, r.jsx)(s.t6m, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.blockedIcon
                    })
            )
            .otherwise(() =>
                (0, r.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.blockedIcon
                })
            );
    return (0, r.jsx)(u.Z, {
        compact: l,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(h.Z, {
            compact: l,
            className: g.blockedSystemMessage,
            iconNode: f,
            children: (0, r.jsxs)('div', {
                className: g.blockedMessageText,
                children: [
                    m.NW.format(o, { count: i }),
                    ' \u2014',
                    ' ',
                    (0, r.jsx)(s.P3F, {
                        tag: 'span',
                        onClick: n,
                        className: g.blockedAction,
                        children: p
                    })
                ]
            })
        })
    });
}
let C = i.memo(function (e) {
    var t;
    let { messages: n, channel: l, compact: a = !1, unreadId: s, collapsedReason: c } = e,
        { hasJumpTarget: u = !1 } = n,
        [h, m] = i.useState(u),
        C = i.useCallback(() => m((e) => !e), []),
        v = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)('div', {
        className: o()({
            [b.groupStart]: !0,
            [g.expanded]: h
        }),
        children: [
            n.hasUnread && (!h || (null === (t = n.content[0]) || void 0 === t ? void 0 : t.type) === f.ys_.DIVIDER)
                ? (0, r.jsx)(
                      p.Z,
                      {
                          isUnread: !0,
                          id: s
                      },
                      'divider'
                  )
                : null,
            (0, r.jsx)(
                _,
                {
                    count: v,
                    compact: a,
                    expanded: h,
                    onClick: C,
                    collapsedReason: c
                },
                'collapsed-message-item'
            ),
            h
                ? n.content.map((e, t) => {
                      if (e.type === f.ys_.DIVIDER && t > 0) {
                          var i, o;
                          let e = null !== (o = null === (i = n.content[t + 1]) || void 0 === i ? void 0 : i.isGroupStart) && void 0 !== o && o;
                          return (0, r.jsx)(
                              p.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: s
                              },
                              'divider'
                          );
                      }
                      if (e.type === f.ys_.MESSAGE || e.type === f.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === f.ys_.THREAD_STARTER_MESSAGE ? d.Ru : d.ZP;
                          return (0, r.jsx)(
                              t,
                              {
                                  className: g.__invalid_blocked,
                                  compact: a,
                                  channel: l,
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
