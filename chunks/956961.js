n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(239091),
    _ = n(294218),
    h = n(703656),
    p = n(324701),
    g = n(768943),
    f = n(695346),
    x = n(592125),
    C = n(655354),
    E = n(324081),
    v = n(791914),
    I = n(981631),
    N = n(388032),
    S = n(858430),
    T = n(884596);
let b = {
    offset: {
        left: 4,
        right: -12
    }
};
function A(e) {
    let { setTab: t, closePopout: n } = e,
        a = (0, c.e7)([g.Z], () => g.Z.getMessageReminders()),
        [r, s] = l.useState(!1),
        o = l.useMemo(() => a.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [a]),
        m = r ? a : o;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(v.Z, {
                tab: d.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: S.headerText,
                children: [
                    (0, i.jsx)(u.X6q, {
                        variant: 'heading-lg/bold',
                        children: r ? N.intl.string(N.t['0KeMAw']) : N.intl.string(N.t.j5ZHEB)
                    }),
                    (0, i.jsx)(u.eee, {
                        onClick: () => s(!r),
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: r ? N.intl.formatToPlainString(N.t['/VlKx8'], { count: o.length }) : N.intl.formatToPlainString(N.t.QEO4Ii, { count: a.length })
                        })
                    })
                ]
            }),
            0 === m.length ? (0, i.jsx)(y, {}) : (0, i.jsx)(u.h21, { children: m.map((e) => (0, i.jsx)(j, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function j(e) {
    let t,
        { messageReminder: l } = e,
        a = l.saveData,
        s = l.message,
        d = (0, c.e7)([x.Z], () => x.Z.getChannel(a.channelId)),
        g = () => {
            (0, h.uL)(I.Z5c.CHANNEL(null == d ? void 0 : d.getGuildId(), a.channelId, a.messageId));
        },
        v = null;
    return (null != a.dueAt &&
        (a.dueAt > new Date()
            ? ((t = 'text-muted'),
              (v = N.intl.formatToPlainString(N.t.H4gnX1, {
                  duration: o()
                      .duration(a.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (v = N.intl.formatToPlainString(N.t['Uq7Y+/'], {
                  duration: o()
                      .duration(Date.now() - a.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == s || null == d)
        ? null
        : (0, i.jsxs)('div', {
              className: T.container,
              children: [
                  (0, i.jsx)(E.Z, {
                      channel: d,
                      gotoChannel: g,
                      children: (0, i.jsxs)('div', {
                          className: S.reminderActions,
                          children: [
                              null != l.saveData.notes && l.saveData.notes.length > 0
                                  ? (0, i.jsxs)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: S.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(u.aAW, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            l.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != v
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: v
                                    })
                                  : null,
                              (0, i.jsx)(u.DY3, {
                                  text: N.intl.string(N.t.GtBCn5),
                                  children: (0, i.jsx)(u.P3F, {
                                      onClick: (e) =>
                                          (0, m.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      message: s
                                                  });
                                          }),
                                      className: S.clock,
                                      children: (0, i.jsx)(u.T39, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(u.DY3, {
                                  text: N.intl.string(N.t['1GzslZ']),
                                  children: (0, i.jsx)(u.P3F, {
                                      onClick: () => (0, p.x)(a),
                                      className: S.delete,
                                      children: (0, i.jsx)(u.XHJ, {
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
                      className: r()(T.messageContainer, S.unloadedMessage),
                      children: [
                          (0, i.jsx)(C.Z, {
                              className: T.jumpMessageButton,
                              onJump: g
                          }),
                          (0, i.jsx)(
                              _.Z,
                              {
                                  message: s,
                                  channel: d,
                                  className: T.message,
                                  compact: f.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: b,
                                  trackAnnouncementViews: !0
                              },
                              s.id
                          )
                      ]
                  })
              ]
          });
}
function y() {
    return null;
}
