n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(913527),
    s = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    p = n(239091),
    m = n(294218),
    f = n(703656),
    h = n(324701),
    g = n(768943),
    _ = n(695346),
    b = n(592125),
    v = n(655354),
    y = n(324081),
    x = n(791914),
    O = n(981631),
    E = n(388032),
    j = n(404693),
    N = n(404431);
let C = {
    offset: {
        left: 4,
        right: -12
    }
};
function I(e) {
    let { setTab: t, closePopout: n } = e,
        a = (0, c.e7)([g.Z], () => g.Z.getMessageReminders()),
        [o, l] = i.useState(!1),
        s = i.useMemo(() => a.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [a]),
        p = o ? a : s;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsx)(x.Z, {
                tab: d.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, r.jsxs)('div', {
                className: j.headerText,
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-lg/bold',
                        children: o ? E.NW.string(E.t['0KeMAw']) : E.NW.string(E.t.j5ZHEB)
                    }),
                    (0, r.jsx)(u.eee, {
                        onClick: () => l(!o),
                        children: (0, r.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: o ? E.NW.formatToPlainString(E.t['/VlKx8'], { count: s.length }) : E.NW.formatToPlainString(E.t.QEO4Ii, { count: a.length })
                        })
                    })
                ]
            }),
            0 === p.length ? (0, r.jsx)(P, {}) : (0, r.jsx)(u.h21, { children: p.map((e) => (0, r.jsx)(S, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function S(e) {
    let t,
        { messageReminder: i } = e,
        a = i.saveData,
        l = i.message,
        d = (0, c.e7)([b.Z], () => b.Z.getChannel(a.channelId)),
        g = () => {
            (0, f.uL)(O.Z5c.CHANNEL(null == d ? void 0 : d.getGuildId(), a.channelId, a.messageId));
        },
        x = null;
    return (null != a.dueAt &&
        (a.dueAt > new Date()
            ? ((t = 'text-muted'),
              (x = E.NW.formatToPlainString(E.t.H4gnX1, {
                  duration: s()
                      .duration(a.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (x = E.NW.formatToPlainString(E.t['Uq7Y+/'], {
                  duration: s()
                      .duration(Date.now() - a.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == l || null == d)
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsx)(y.Z, {
                      channel: d,
                      gotoChannel: g,
                      children: (0, r.jsxs)('div', {
                          className: j.reminderActions,
                          children: [
                              null != i.saveData.notes && i.saveData.notes.length > 0
                                  ? (0, r.jsxs)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: j.notes,
                                        selectable: !0,
                                        children: [
                                            (0, r.jsx)(u.aAW, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            i.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != x
                                  ? (0, r.jsx)(u.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: x
                                    })
                                  : null,
                              (0, r.jsx)(u.DY3, {
                                  text: E.NW.string(E.t.GtBCn5),
                                  children: (0, r.jsx)(u.P3F, {
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
                                                      (i = i = { message: l }),
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
                                      children: (0, r.jsx)(u.T39, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, r.jsx)(u.DY3, {
                                  text: E.NW.string(E.t['1GzslZ']),
                                  children: (0, r.jsx)(u.P3F, {
                                      onClick: () => (0, h.x)(a),
                                      className: j.delete,
                                      children: (0, r.jsx)(u.XHJ, {
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
                      className: o()(N.messageContainer, j.unloadedMessage),
                      children: [
                          (0, r.jsx)(v.Z, {
                              className: N.jumpMessageButton,
                              onJump: g
                          }),
                          (0, r.jsx)(
                              m.Z,
                              {
                                  message: l,
                                  channel: d,
                                  className: N.message,
                                  compact: _.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: C,
                                  trackAnnouncementViews: !0
                              },
                              l.id
                          )
                      ]
                  })
              ]
          });
}
function P() {
    return null;
}
