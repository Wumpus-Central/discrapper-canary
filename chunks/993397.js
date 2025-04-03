n.d(t, { Z: () => _ }), n(627341), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(278074),
    s = n(481060),
    c = n(492593),
    u = n(534469),
    d = n(511010),
    p = n(834129),
    h = n(981631),
    f = n(388032),
    m = n(758010),
    g = n(30804);
function b(e) {
    let { expanded: t, onClick: n, count: i, compact: l, collapsedReason: o } = e,
        u = (0, a.EQ)({ collapsedReason: o })
            .with({ collapsedReason: f.t.VFWjc3 }, () =>
                (0, r.jsx)(s.kZF, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.blockedIcon
                })
            )
            .with({ collapsedReason: f.t['+FcYMz'] }, () =>
                (0, r.jsx)(s.t6m, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.blockedIcon
                })
            )
            .otherwise(() =>
                (0, r.jsx)(s.Dio, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.blockedIcon
                })
            );
    return (0, r.jsx)(c.Z, {
        compact: l,
        role: 'group',
        childrenMessageContent: (0, r.jsx)(p.Z, {
            compact: l,
            className: m.blockedSystemMessage,
            iconNode: u,
            children: (0, r.jsxs)('div', {
                className: m.blockedMessageText,
                children: [
                    f.NW.format(o, { count: i }),
                    ' \u2014',
                    ' ',
                    (0, r.jsx)(s.P3F, {
                        tag: 'span',
                        onClick: n,
                        className: m.blockedAction,
                        children: t ? f.NW.string(f.t.fgq1go) : f.NW.string(f.t.XJuakJ)
                    })
                ]
            })
        })
    });
}
let _ = i.memo(function (e) {
    var t;
    let { messages: n, channel: l, compact: a = !1, unreadId: s, collapsedReason: c } = e,
        { hasJumpTarget: p = !1 } = n,
        [f, _] = i.useState(p),
        C = i.useCallback(() => _((e) => !e), []),
        y = n.hasUnread ? n.content.length - 1 : n.content.length;
    return (0, r.jsxs)('div', {
        className: o()({
            [g.groupStart]: !0,
            [m.expanded]: f
        }),
        children: [
            n.hasUnread && (!f || (null == (t = n.content[0]) ? void 0 : t.type) === h.ys_.DIVIDER)
                ? (0, r.jsx)(
                      d.Z,
                      {
                          isUnread: !0,
                          id: s
                      },
                      'divider'
                  )
                : null,
            (0, r.jsx)(
                b,
                {
                    count: y,
                    compact: a,
                    expanded: f,
                    onClick: C,
                    collapsedReason: c
                },
                'collapsed-message-item'
            ),
            f
                ? n.content.map((e, t) => {
                      if (e.type === h.ys_.DIVIDER && t > 0) {
                          var i, o;
                          let e = null != (o = null == (i = n.content[t + 1]) ? void 0 : i.isGroupStart) && o;
                          return (0, r.jsx)(
                              d.Z,
                              {
                                  isUnread: !0,
                                  isBeforeGroup: e,
                                  id: s
                              },
                              'divider'
                          );
                      }
                      if (e.type === h.ys_.MESSAGE || e.type === h.ys_.THREAD_STARTER_MESSAGE) {
                          let t = e.type === h.ys_.THREAD_STARTER_MESSAGE ? u.Ru : u.ZP;
                          return (0, r.jsx)(
                              t,
                              {
                                  className: m.__invalid_blocked,
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
