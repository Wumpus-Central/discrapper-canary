n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    v = n(791914),
    E = n(981631),
    N = n(388032),
    O = n(829444),
    j = n(384323);
let C = {
    offset: {
        left: 4,
        right: -12
    }
};
function S(e) {
    let { setTab: t, closePopout: n } = e,
        a = (0, c.e7)([g.Z], () => g.Z.getMessageReminders()),
        [l, o] = i.useState(!1),
        s = i.useMemo(() => a.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [a]),
        p = l ? a : s;
    return (0, r.jsxs)('div', {
        className: O.container,
        children: [
            (0, r.jsx)(v.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, r.jsxs)('div', {
                className: O.headerText,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-lg/bold',
                        children: l ? N.NW.string(N.t['0KeMAw']) : N.NW.string(N.t.j5ZHEB)
                    }),
                    (0, r.jsx)(d.eee, {
                        onClick: () => o(!l),
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: l ? N.NW.formatToPlainString(N.t['/VlKx8'], { count: s.length }) : N.NW.formatToPlainString(N.t.QEO4Ii, { count: a.length })
                        })
                    })
                ]
            }),
            0 === p.length ? (0, r.jsx)(T, {}) : (0, r.jsx)(d.h21, { children: p.map((e) => (0, r.jsx)(I, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function I(e) {
    let t,
        { messageReminder: i } = e,
        a = i.saveData,
        o = i.message,
        u = (0, c.e7)([b.Z], () => b.Z.getChannel(a.channelId)),
        g = () => {
            (0, f.uL)(E.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), a.channelId, a.messageId));
        },
        v = null;
    return (null != a.dueAt &&
        (a.dueAt > new Date()
            ? ((t = 'text-muted'),
              (v = N.NW.formatToPlainString(N.t.H4gnX1, {
                  duration: s()
                      .duration(a.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (v = N.NW.formatToPlainString(N.t['Uq7Y+/'], {
                  duration: s()
                      .duration(Date.now() - a.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == o || null == u)
        ? null
        : (0, r.jsxs)('div', {
              className: j.container,
              children: [
                  (0, r.jsx)(y.Z, {
                      channel: u,
                      gotoChannel: g,
                      children: (0, r.jsxs)('div', {
                          className: O.reminderActions,
                          children: [
                              null != i.saveData.notes && i.saveData.notes.length > 0
                                  ? (0, r.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: O.notes,
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
                              null != v
                                  ? (0, r.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: v
                                    })
                                  : null,
                              (0, r.jsx)(d.DY3, {
                                  text: N.NW.string(N.t.GtBCn5),
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
                                      className: O.clock,
                                      children: (0, r.jsx)(d.T39, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, r.jsx)(d.DY3, {
                                  text: N.NW.string(N.t['1GzslZ']),
                                  children: (0, r.jsx)(d.P3F, {
                                      onClick: () => (0, h.x)(a),
                                      className: O.delete,
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
                      className: l()(j.messageContainer, O.unloadedMessage),
                      children: [
                          (0, r.jsx)(x.Z, {
                              className: j.jumpMessageButton,
                              onJump: g
                          }),
                          (0, r.jsx)(
                              m.Z,
                              {
                                  message: o,
                                  channel: u,
                                  className: j.message,
                                  compact: _.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: C,
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
