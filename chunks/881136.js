i.d(t, { A: () => E });
var n = i(627968);
i(64700);
var s = i(311907),
    l = i(477782),
    a = i(192308),
    r = i(832712),
    d = i(568873),
    o = i(543465),
    c = i(477427),
    u = i(652215),
    g = i(985018);
function A() {
    return [
        { setting: u.orn.ALL_MESSAGES, label: g.intl.string(g.t["n/bTaY"]) },
        { setting: u.orn.ONLY_MENTIONS, label: g.intl.format(g.t.L2hmYy, {}) },
        { setting: u.orn.NO_MESSAGES, label: g.intl.string(g.t.CtVGyQ) },
    ];
}
function E(e) {
    let t = (function (e) {
            let {
                    suppressEveryone: t,
                    suppressRoles: i,
                    mobilePush: a,
                    messageNotifications: E,
                    notifyHighlights: h,
                } = (0, s.cf)(
                    [o.Ay],
                    () => ({
                        suppressEveryone: o.Ay.isSuppressEveryoneEnabled(e.id),
                        suppressRoles: o.Ay.isSuppressRolesEnabled(e.id),
                        mobilePush: o.Ay.isMobilePushEnabled(e.id),
                        messageNotifications: o.Ay.getMessageNotifications(e.id),
                        notifyHighlights: o.Ay.getNotifyHighlights(e.id),
                    }),
                    [e.id],
                ),
                _ = h === u.guM.DISABLED,
                S = (0, d.A)(e.id);
            function p(t, i) {
                r.A.updateGuildNotificationSettings(e.id, t, i);
            }
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(l.rX, {
                        children: A().map((e) => {
                            let { setting: t, label: i } = e;
                            return (0, n.jsx)(
                                l.iD,
                                {
                                    group: "guild-notifications",
                                    id: `${t}`,
                                    label: i,
                                    action: () => p({ message_notifications: t }, c.G_.notifications(t)),
                                    checked: t === E,
                                },
                                t,
                            );
                        }),
                    }),
                    (0, n.jsxs)(l.rX, {
                        children: [
                            (0, n.jsx)(l.sL, {
                                id: "suppress-everyone",
                                label: g.intl.format(g.t.OWiWAp, {}),
                                action: () => p({ suppress_everyone: !t }, c.G_.suppressEveryone(!t)),
                                checked: t,
                            }),
                            (0, n.jsx)(l.sL, {
                                id: "suppress-roles",
                                label: g.intl.string(g.t["O/QdoD"]),
                                action: () => p({ suppress_roles: !i }, c.G_.suppressRoles(!i)),
                                checked: i,
                            }),
                            (0, n.jsx)(l.sL, {
                                id: "suppress-highlights",
                                label: g.intl.string(g.t.gPuteJ),
                                action: () => {
                                    p({ notify_highlights: _ ? u.guM.ENABLED : u.guM.DISABLED }, c.G_.highlights(_));
                                },
                                checked: _,
                            }),
                            S,
                        ],
                    }),
                    (0, n.jsx)(l.rX, {
                        children: (0, n.jsx)(l.sL, {
                            id: "mobile-push",
                            label: g.intl.string(g.t.h1DL66),
                            action: () => p({ mobile_push: !a }, c.G_.mobilePush(!a)),
                            checked: a,
                        }),
                    }),
                ],
            });
        })(e),
        E = (0, s.bG)([o.Ay], () => o.Ay.getMessageNotifications(e.id), [e.id]),
        h = A()?.find((e) => {
            let { setting: t } = e;
            return t === E;
        })?.label;
    return null != t
        ? (0, n.jsx)(l.Dr, {
              id: "guild-notifications",
              label: g.intl.string(g.t.h850Ss),
              subtext: h,
              action: () =>
                  (0, a.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([i.e("64992"), i.e("59566")]).then(i.bind(i, 401539));
                      return (i) => (0, n.jsx)(t, { ...i, guildId: e.id });
                  }),
              children: t,
          })
        : null;
}
