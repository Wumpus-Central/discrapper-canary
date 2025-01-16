t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    s = t(87051),
    r = t(778123),
    u = t(122074),
    o = t(9156),
    d = t(621600),
    c = t(981631),
    g = t(388032);
function E() {
    return [
        {
            setting: c.bL.ALL_MESSAGES,
            label: g.intl.string(g.t['n/bTaW'])
        },
        {
            setting: c.bL.ONLY_MENTIONS,
            label: g.intl.format(g.t.L2hmY2, {})
        },
        {
            setting: c.bL.NO_MESSAGES,
            label: g.intl.string(g.t.CtVGyc)
        }
    ];
}
function h(e) {
    var n, h;
    let M = (function (e) {
            let {
                    suppressEveryone: n,
                    suppressRoles: t,
                    mobilePush: h,
                    messageNotifications: M,
                    notifyHighlights: f
                } = (0, l.cj)(
                    [o.ZP],
                    () => ({
                        suppressEveryone: o.ZP.isSuppressEveryoneEnabled(e.id),
                        suppressRoles: o.ZP.isSuppressRolesEnabled(e.id),
                        mobilePush: o.ZP.isMobilePushEnabled(e.id),
                        messageNotifications: o.ZP.getMessageNotifications(e.id),
                        notifyHighlights: o.ZP.getNotifyHighlights(e.id)
                    }),
                    [e.id]
                ),
                _ = f === c.gLR.DISABLED,
                N = (0, r.Z)(e.id);
            function S(n, t) {
                s.Z.updateGuildNotificationSettings(e.id, n, t);
            }
            let I = (0, u.ng)(e.id, !0);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.MenuGroup, {
                        children: E().map((e) => {
                            let { setting: n, label: t } = e;
                            return (0, i.jsx)(
                                a.MenuRadioItem,
                                {
                                    group: 'guild-notifications',
                                    id: ''.concat(n),
                                    label: t,
                                    action: () => S({ message_notifications: n }, d.UE.notifications(n)),
                                    checked: n === M
                                },
                                n
                            );
                        })
                    }),
                    null != I && (0, i.jsx)(a.MenuGroup, { children: I }),
                    (0, i.jsxs)(a.MenuGroup, {
                        children: [
                            (0, i.jsx)(a.MenuCheckboxItem, {
                                id: 'suppress-everyone',
                                label: g.intl.format(g.t.OWiWAg, {}),
                                action: () => S({ suppress_everyone: !n }, d.UE.suppressEveryone(!n)),
                                checked: n
                            }),
                            (0, i.jsx)(a.MenuCheckboxItem, {
                                id: 'suppress-roles',
                                label: g.intl.string(g.t['O/QdoK']),
                                action: () => S({ suppress_roles: !t }, d.UE.suppressRoles(!t)),
                                checked: t
                            }),
                            (0, i.jsx)(a.MenuCheckboxItem, {
                                id: 'suppress-highlights',
                                label: g.intl.string(g.t.gPuteH),
                                action: () => {
                                    S({ notify_highlights: _ ? c.gLR.ENABLED : c.gLR.DISABLED }, d.UE.highlights(_));
                                },
                                checked: _
                            }),
                            N
                        ]
                    }),
                    (0, i.jsx)(a.MenuGroup, {
                        children: (0, i.jsx)(a.MenuCheckboxItem, {
                            id: 'mobile-push',
                            label: g.intl.string(g.t['h1DL6+']),
                            action: () => S({ mobile_push: !h }, d.UE.mobilePush(!h)),
                            checked: h
                        })
                    })
                ]
            });
        })(e),
        f = (0, l.e7)([o.ZP], () => o.ZP.getMessageNotifications(e.id), [e.id]),
        _ =
            null === (h = E()) || void 0 === h
                ? void 0
                : null ===
                        (n = h.find((e) => {
                            let { setting: n } = e;
                            return n === f;
                        })) || void 0 === n
                  ? void 0
                  : n.label,
        N = (0, u.U)();
    return null != M
        ? (0, i.jsx)(a.MenuItem, {
              id: 'guild-notifications',
              label: (0, i.jsxs)(i.Fragment, {
                  children: [N, g.intl.string(g.t.h850Sk)]
              }),
              subtext: _,
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: n } = await Promise.all([t.e('5863'), t.e('67913')]).then(t.bind(t, 751212));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              guildId: e.id
                          });
                  }),
              children: M
          })
        : null;
}
