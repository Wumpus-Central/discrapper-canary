n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(524437),
    d = n(481060),
    m = n(239091),
    h = n(294218),
    f = n(703656),
    p = n(324701),
    _ = n(768943),
    g = n(695346),
    E = n(592125),
    C = n(655354),
    I = n(324081),
    x = n(791914),
    N = n(981631),
    v = n(388032),
    T = n(683280),
    S = n(227040);
let A = {
    offset: {
        left: 4,
        right: -12
    }
};
function b(e) {
    let { setTab: t, closePopout: n } = e,
        l = (0, c.e7)([_.Z], () => _.Z.getMessageReminders()),
        [a, o] = r.useState(!1),
        s = r.useMemo(() => l.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [l]),
        m = a ? l : s;
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsx)(x.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: T.headerText,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/bold',
                        children: a ? v.intl.string(v.t['0KeMAw']) : v.intl.string(v.t.j5ZHEB)
                    }),
                    (0, i.jsx)(d.Anchor, {
                        onClick: () => o(!a),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: a ? v.intl.formatToPlainString(v.t['/VlKx8'], { count: s.length }) : v.intl.formatToPlainString(v.t.QEO4Ii, { count: l.length })
                        })
                    })
                ]
            }),
            0 === m.length ? (0, i.jsx)(R, {}) : (0, i.jsx)(d.AdvancedScrollerThin, { children: m.map((e) => (0, i.jsx)(j, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function j(e) {
    let t,
        { messageReminder: r } = e,
        l = r.saveData,
        o = r.message,
        u = (0, c.e7)([E.Z], () => E.Z.getChannel(l.channelId)),
        _ = () => {
            (0, f.uL)(N.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), l.channelId, l.messageId));
        },
        x = null;
    return (null != l.dueAt &&
        (l.dueAt > new Date()
            ? ((t = 'text-muted'),
              (x = v.intl.formatToPlainString(v.t.H4gnX1, {
                  duration: s()
                      .duration(l.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (x = v.intl.formatToPlainString(v.t['Uq7Y+/'], {
                  duration: s()
                      .duration(Date.now() - l.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == o || null == u)
        ? null
        : (0, i.jsxs)('div', {
              className: S.container,
              children: [
                  (0, i.jsx)(I.Z, {
                      channel: u,
                      gotoChannel: _,
                      children: (0, i.jsxs)('div', {
                          className: T.reminderActions,
                          children: [
                              null != r.saveData.notes && r.saveData.notes.length > 0
                                  ? (0, i.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: T.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(d.FileIcon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            r.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != x
                                  ? (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: x
                                    })
                                  : null,
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: v.intl.string(v.t.GtBCn5),
                                  children: (0, i.jsx)(d.Clickable, {
                                      onClick: (e) =>
                                          (0, m.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      message: o
                                                  });
                                          }),
                                      className: T.clock,
                                      children: (0, i.jsx)(d.ClockIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: v.intl.string(v.t['1GzslZ']),
                                  children: (0, i.jsx)(d.Clickable, {
                                      onClick: () => (0, p.x)(l),
                                      className: T.delete,
                                      children: (0, i.jsx)(d.TrashIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: a()(S.messageContainer, T.unloadedMessage),
                      children: [
                          (0, i.jsx)(C.Z, {
                              className: S.jumpMessageButton,
                              onJump: _
                          }),
                          (0, i.jsx)(
                              h.Z,
                              {
                                  message: o,
                                  channel: u,
                                  className: S.message,
                                  compact: g.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: A,
                                  trackAnnouncementViews: !0
                              },
                              o.id
                          )
                      ]
                  })
              ]
          });
}
function R() {
    return null;
}
