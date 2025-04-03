n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(87051),
    a = n(778123),
    o = n(122074),
    c = n(9156),
    u = n(621600),
    d = n(981631),
    g = n(388032);
function b() {
    return [
        {
            setting: d.bL.ALL_MESSAGES,
            label: g.NW.string(g.t['n/bTaW'])
        },
        {
            setting: d.bL.ONLY_MENTIONS,
            label: g.NW.format(g.t.L2hmY2, {})
        },
        {
            setting: d.bL.NO_MESSAGES,
            label: g.NW.string(g.t.CtVGyc)
        }
    ];
}
function p(e) {
    var t, p;
    let f = (function (e) {
            let {
                    suppressEveryone: t,
                    suppressRoles: n,
                    mobilePush: p,
                    messageNotifications: f,
                    notifyHighlights: S
                } = (0, r.cj)(
                    [c.ZP],
                    () => ({
                        suppressEveryone: c.ZP.isSuppressEveryoneEnabled(e.id),
                        suppressRoles: c.ZP.isSuppressRolesEnabled(e.id),
                        mobilePush: c.ZP.isMobilePushEnabled(e.id),
                        messageNotifications: c.ZP.getMessageNotifications(e.id),
                        notifyHighlights: c.ZP.getNotifyHighlights(e.id)
                    }),
                    [e.id]
                ),
                N = S === d.gLR.DISABLED,
                O = (0, a.Z)(e.id);
            function E(t, n) {
                l.Z.updateGuildNotificationSettings(e.id, t, n);
            }
            let h = (0, o.ng)(e.id, !0);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.kSQ, {
                        children: b().map((e) => {
                            let { setting: t, label: n } = e;
                            return (0, i.jsx)(
                                s.k5B,
                                {
                                    group: 'guild-notifications',
                                    id: ''.concat(t),
                                    label: n,
                                    action: () => E({ message_notifications: t }, u.UE.notifications(t)),
                                    checked: t === f
                                },
                                t
                            );
                        })
                    }),
                    null != h && (0, i.jsx)(s.kSQ, { children: h }),
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-everyone',
                                label: g.NW.format(g.t.OWiWAg, {}),
                                action: () => E({ suppress_everyone: !t }, u.UE.suppressEveryone(!t)),
                                checked: t
                            }),
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-roles',
                                label: g.NW.string(g.t['O/QdoK']),
                                action: () => E({ suppress_roles: !n }, u.UE.suppressRoles(!n)),
                                checked: n
                            }),
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-highlights',
                                label: g.NW.string(g.t.gPuteH),
                                action: () => {
                                    E({ notify_highlights: N ? d.gLR.ENABLED : d.gLR.DISABLED }, u.UE.highlights(N));
                                },
                                checked: N
                            }),
                            O
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'mobile-push',
                            label: g.NW.string(g.t['h1DL6+']),
                            action: () => E({ mobile_push: !p }, u.UE.mobilePush(!p)),
                            checked: p
                        })
                    })
                ]
            });
        })(e),
        S = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(e.id), [e.id]),
        N =
            null == (p = b()) ||
            null ==
                (t = p.find((e) => {
                    let { setting: t } = e;
                    return t === S;
                }))
                ? void 0
                : t.label,
        O = (0, o.U)();
    return null != f
        ? (0, i.jsx)(s.sNh, {
              id: 'guild-notifications',
              label: (0, i.jsxs)(i.Fragment, {
                  children: [O, g.NW.string(g.t.h850Sk)]
              }),
              subtext: N,
              action: () =>
                  (0, s.ZDy)(async () => {
                      let { default: t } = await Promise.all([n.e('5863'), n.e('99922')]).then(n.bind(n, 751212));
                      return (n) => {
                          var r, s;
                          return (0, i.jsx)(
                              t,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (s = s = { guildId: e.id }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(s)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                                    }),
                              r)
                          );
                      };
                  }),
              children: f
          })
        : null;
}
