n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    a = n(87051),
    r = n(778123),
    d = n(122074),
    u = n(9156),
    c = n(621600),
    o = n(981631),
    g = n(388032);
function E() {
    return [
        {
            setting: o.bL.ALL_MESSAGES,
            label: g.intl.string(g.t['n/bTaW'])
        },
        {
            setting: o.bL.ONLY_MENTIONS,
            label: g.intl.format(g.t.L2hmY2, {})
        },
        {
            setting: o.bL.NO_MESSAGES,
            label: g.intl.string(g.t.CtVGyc)
        }
    ];
}
function h(e) {
    var t, h;
    let S = (function (e) {
            let {
                    suppressEveryone: t,
                    suppressRoles: n,
                    mobilePush: h,
                    messageNotifications: S,
                    notifyHighlights: N
                } = (0, l.cj)(
                    [u.ZP],
                    () => ({
                        suppressEveryone: u.ZP.isSuppressEveryoneEnabled(e.id),
                        suppressRoles: u.ZP.isSuppressRolesEnabled(e.id),
                        mobilePush: u.ZP.isMobilePushEnabled(e.id),
                        messageNotifications: u.ZP.getMessageNotifications(e.id),
                        notifyHighlights: u.ZP.getNotifyHighlights(e.id)
                    }),
                    [e.id]
                ),
                _ = N === o.gLR.DISABLED,
                f = (0, r.Z)(e.id);
            function Z(t, n) {
                a.Z.updateGuildNotificationSettings(e.id, t, n);
            }
            let x = (0, d.ng)(e.id, !0);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.kSQ, {
                        children: E().map((e) => {
                            let { setting: t, label: n } = e;
                            return (0, i.jsx)(
                                s.k5B,
                                {
                                    group: 'guild-notifications',
                                    id: ''.concat(t),
                                    label: n,
                                    action: () => Z({ message_notifications: t }, c.UE.notifications(t)),
                                    checked: t === S
                                },
                                t
                            );
                        })
                    }),
                    null != x && (0, i.jsx)(s.kSQ, { children: x }),
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-everyone',
                                label: g.intl.format(g.t.OWiWAg, {}),
                                action: () => Z({ suppress_everyone: !t }, c.UE.suppressEveryone(!t)),
                                checked: t
                            }),
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-roles',
                                label: g.intl.string(g.t['O/QdoK']),
                                action: () => Z({ suppress_roles: !n }, c.UE.suppressRoles(!n)),
                                checked: n
                            }),
                            (0, i.jsx)(s.S89, {
                                id: 'suppress-highlights',
                                label: g.intl.string(g.t.gPuteH),
                                action: () => {
                                    Z({ notify_highlights: _ ? o.gLR.ENABLED : o.gLR.DISABLED }, c.UE.highlights(_));
                                },
                                checked: _
                            }),
                            f
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'mobile-push',
                            label: g.intl.string(g.t['h1DL6+']),
                            action: () => Z({ mobile_push: !h }, c.UE.mobilePush(!h)),
                            checked: h
                        })
                    })
                ]
            });
        })(e),
        N = (0, l.e7)([u.ZP], () => u.ZP.getMessageNotifications(e.id), [e.id]),
        _ =
            null === (h = E()) || void 0 === h
                ? void 0
                : null ===
                        (t = h.find((e) => {
                            let { setting: t } = e;
                            return t === N;
                        })) || void 0 === t
                  ? void 0
                  : t.label,
        f = (0, d.U)();
    return null != S
        ? (0, i.jsx)(s.sNh, {
              id: 'guild-notifications',
              label: (0, i.jsxs)(i.Fragment, {
                  children: [f, g.intl.string(g.t.h850Sk)]
              }),
              subtext: _,
              action: () =>
                  (0, s.ZDy)(async () => {
                      let { default: t } = await Promise.all([n.e('5863'), n.e('3828')]).then(n.bind(n, 751212));
                      return (n) =>
                          (0, i.jsx)(t, {
                              ...n,
                              guildId: e.id
                          });
                  }),
              children: S
          })
        : null;
}
