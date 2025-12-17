n.d(t, { Z: () => b });
var i = n(54381);
n(473749);
var r = n(442837),
    s = n(481060),
    l = n(87051),
    a = n(778123),
    c = n(9156),
    o = n(621600),
    u = n(981631),
    d = n(388032);
function g() {
    return [
        {
            setting: u.bL.ALL_MESSAGES,
            label: d.intl.string(d.t["n/bTaY"]),
        },
        {
            setting: u.bL.ONLY_MENTIONS,
            label: d.intl.format(d.t.L2hmYy, {}),
        },
        {
            setting: u.bL.NO_MESSAGES,
            label: d.intl.string(d.t.CtVGyQ),
        },
    ];
}
function b(e) {
    var t, b;
    let p = (function (e) {
            let {
                    suppressEveryone: t,
                    suppressRoles: n,
                    mobilePush: b,
                    messageNotifications: p,
                    notifyHighlights: S,
                } = (0, r.cj)(
                    [c.ZP],
                    () => ({
                        suppressEveryone: c.ZP.isSuppressEveryoneEnabled(e.id),
                        suppressRoles: c.ZP.isSuppressRolesEnabled(e.id),
                        mobilePush: c.ZP.isMobilePushEnabled(e.id),
                        messageNotifications: c.ZP.getMessageNotifications(e.id),
                        notifyHighlights: c.ZP.getNotifyHighlights(e.id),
                    }),
                    [e.id],
                ),
                h = S === u.gLR.DISABLED,
                f = (0, a.Z)(e.id);
            function E(t, n) {
                l.Z.updateGuildNotificationSettings(e.id, t, n);
            }
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.kSQ, {
                        children: g().map((e) => {
                            let { setting: t, label: n } = e;
                            return (0, i.jsx)(
                                s.k5B,
                                {
                                    group: "guild-notifications",
                                    id: "".concat(t),
                                    label: n,
                                    action: () => E({ message_notifications: t }, o.UE.notifications(t)),
                                    checked: t === p,
                                },
                                t,
                            );
                        }),
                    }),
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            (0, i.jsx)(s.S89, {
                                id: "suppress-everyone",
                                label: d.intl.format(d.t.OWiWAp, {}),
                                action: () => E({ suppress_everyone: !t }, o.UE.suppressEveryone(!t)),
                                checked: t,
                            }),
                            (0, i.jsx)(s.S89, {
                                id: "suppress-roles",
                                label: d.intl.string(d.t["O/QdoD"]),
                                action: () => E({ suppress_roles: !n }, o.UE.suppressRoles(!n)),
                                checked: n,
                            }),
                            (0, i.jsx)(s.S89, {
                                id: "suppress-highlights",
                                label: d.intl.string(d.t.gPuteJ),
                                action: () => {
                                    E({ notify_highlights: h ? u.gLR.ENABLED : u.gLR.DISABLED }, o.UE.highlights(h));
                                },
                                checked: h,
                            }),
                            f,
                        ],
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: "mobile-push",
                            label: d.intl.string(d.t.h1DL66),
                            action: () => E({ mobile_push: !b }, o.UE.mobilePush(!b)),
                            checked: b,
                        }),
                    }),
                ],
            });
        })(e),
        S = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(e.id), [e.id]),
        h =
            null == (b = g()) ||
            null ==
                (t = b.find((e) => {
                    let { setting: t } = e;
                    return t === S;
                }))
                ? void 0
                : t.label;
    return null != p
        ? (0, i.jsx)(s.sNh, {
              id: "guild-notifications",
              label: d.intl.string(d.t.h850Ss),
              subtext: h,
              action: () =>
                  (0, s.ZDy)(async () => {
                      let { default: t } = await Promise.all([n.e("15076"), n.e("86115")]).then(n.bind(n, 907941));
                      return (n) => {
                          var r, s;
                          return (0, i.jsx)(
                              t,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
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
                              r),
                          );
                      };
                  }),
              children: p,
          })
        : null;
}
