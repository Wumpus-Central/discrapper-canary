n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(524437),
    d = n(481060),
    p = n(239091),
    m = n(294218),
    f = n(703656),
    h = n(324701),
    g = n(768943),
    _ = n(695346),
    b = n(592125),
    x = n(655354),
    y = n(324081),
    E = n(791914),
    v = n(981631),
    O = n(388032),
    j = n(829444),
    C = n(384323);
let S = {
    offset: {
        left: 4,
        right: -12
    }
};
function I(e) {
    let { setTab: t, closePopout: n } = e,
        l = (0, c.e7)([g.Z], () => g.Z.getMessageReminders()),
        [a, o] = i.useState(!1),
        s = i.useMemo(() => l.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [l]),
        p = a ? l : s;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)(E.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, r.jsxs)('div', {
                className: j.headerText,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-lg/bold',
                        children: a ? O.intl.string(O.t['0KeMAw']) : O.intl.string(O.t.j5ZHEB)
                    }),
                    (0, r.jsx)(d.eee, {
                        onClick: () => o(!a),
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: a ? O.intl.formatToPlainString(O.t['/VlKx8'], { count: s.length }) : O.intl.formatToPlainString(O.t.QEO4Ii, { count: l.length })
                        })
                    })
                ]
            }),
            0 === p.length ? (0, r.jsx)(T, {}) : (0, r.jsx)(d.h21, { children: p.map((e) => (0, r.jsx)(N, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function N(e) {
    let t,
        { messageReminder: i } = e,
        l = i.saveData,
        o = i.message,
        u = (0, c.e7)([b.Z], () => b.Z.getChannel(l.channelId)),
        g = () => {
            (0, f.uL)(v.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), l.channelId, l.messageId));
        },
        E = null;
    return (null != l.dueAt &&
        (l.dueAt > new Date()
            ? ((t = 'text-muted'),
              (E = O.intl.formatToPlainString(O.t.H4gnX1, {
                  duration: s()
                      .duration(l.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (E = O.intl.formatToPlainString(O.t['Uq7Y+/'], {
                  duration: s()
                      .duration(Date.now() - l.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == o || null == u)
        ? null
        : (0, r.jsxs)('div', {
              className: C.container,
              children: [
                  (0, r.jsx)(y.Z, {
                      channel: u,
                      gotoChannel: g,
                      children: (0, r.jsxs)('div', {
                          className: j.reminderActions,
                          children: [
                              null != i.saveData.notes && i.saveData.notes.length > 0
                                  ? (0, r.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: j.notes,
                                        selectable: !0,
                                        children: [
                                            (0, r.jsx)(d.aAW, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            i.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != E
                                  ? (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: E
                                    })
                                  : null,
                              (0, r.jsx)(d.DY3, {
                                  text: O.intl.string(O.t.GtBCn5),
                                  children: (0, r.jsx)(d.P3F, {
                                      onClick: (e) =>
                                          (0, p.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      e,
                                                      ((n = (function (e) {
                                                          for (var t = 1; t < arguments.length; t++) {
                                                              var n = null != arguments[t] ? arguments[t] : {},
                                                                  r = Object.keys(n);
                                                              'function' == typeof Object.getOwnPropertySymbols &&
                                                                  (r = r.concat(
                                                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                      })
                                                                  )),
                                                                  r.forEach(function (t) {
                                                                      var r;
                                                                      (r = n[t]),
                                                                          t in e
                                                                              ? Object.defineProperty(e, t, {
                                                                                    value: r,
                                                                                    enumerable: !0,
                                                                                    configurable: !0,
                                                                                    writable: !0
                                                                                })
                                                                              : (e[t] = r);
                                                                  });
                                                          }
                                                          return e;
                                                      })({}, t)),
                                                      (i = i = { message: o }),
                                                      Object.getOwnPropertyDescriptors
                                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                          : (function (e, t) {
                                                                var n = Object.keys(e);
                                                                if (Object.getOwnPropertySymbols) {
                                                                    var r = Object.getOwnPropertySymbols(e);
                                                                    n.push.apply(n, r);
                                                                }
                                                                return n;
                                                            })(Object(i)).forEach(function (e) {
                                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                            }),
                                                      n)
                                                  );
                                              };
                                          }),
                                      className: j.clock,
                                      children: (0, r.jsx)(d.T39, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, r.jsx)(d.DY3, {
                                  text: O.intl.string(O.t['1GzslZ']),
                                  children: (0, r.jsx)(d.P3F, {
                                      onClick: () => (0, h.x)(l),
                                      className: j.delete,
                                      children: (0, r.jsx)(d.XHJ, {
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
                  (0, r.jsxs)('div', {
                      className: a()(C.messageContainer, j.unloadedMessage),
                      children: [
                          (0, r.jsx)(x.Z, {
                              className: C.jumpMessageButton,
                              onJump: g
                          }),
                          (0, r.jsx)(
                              m.Z,
                              {
                                  message: o,
                                  channel: u,
                                  className: C.message,
                                  compact: _.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: S,
                                  trackAnnouncementViews: !0
                              },
                              o.id
                          )
                      ]
                  })
              ]
          });
}
function T() {
    return null;
}
