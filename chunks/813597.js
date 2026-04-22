i.d(t, { A: () => L }), i(938796);
var n = i(627968),
    s = i(64700),
    l = i(311907),
    a = i(192308),
    r = i(477782),
    d = i(832712),
    o = i(585510),
    c = i(610136),
    u = i(393432),
    g = i(910323),
    A = i(24873),
    E = i(594061),
    h = i(543465),
    _ = i(477427),
    S = i(652215),
    p = i(790782),
    N = i(355097),
    b = i(985018);
function L(e) {
    var t;
    let L, f;
    return (0, n.jsxs)(r.Dr, {
        id: "notification",
        label: b.intl.string(b.t.HcoRu0),
        action: () => {
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("64992"), i.e("59566")]).then(i.bind(i, 401539));
                return (i) => (0, n.jsx)(t, { ...i, guildId: e });
            });
        },
        children: [
            (function (e) {
                let [t, i] = s.useState(!1),
                    [a, L] = s.useState(!1),
                    f = (0, l.bG)([h.Ay], () => h.Ay.getGuildUnreadSetting(e)),
                    y = (0, l.bG)([h.Ay], () => h.Ay.getMessageNotifications(e)),
                    G = a ? A.N9.CUSTOM : (0, A.jU)(f, y),
                    M = (t) => {
                        L(!1);
                        let i = { message_notifications: t };
                        t === S.orn.ALL_MESSAGES &&
                            f !== p.e.ALL_MESSAGES &&
                            (i.flags = (0, u.md)(h.Ay.getGuildFlags(e), N.n3.UNREADS_ALL_MESSAGES)),
                            d.A.updateGuildNotificationSettings(e, i, _.G_.notifications(t));
                    },
                    x = (t) => {
                        L(!1);
                        let i = h.Ay.getGuildFlags(e);
                        d.A.updateGuildNotificationSettings(
                            e,
                            {
                                flags: (0, u.md)(
                                    i,
                                    t === p.e.ALL_MESSAGES ? N.n3.UNREADS_ALL_MESSAGES : N.n3.UNREADS_ONLY_MENTIONS,
                                ),
                            },
                            _.G_.unreads(t),
                        );
                    },
                    j = (function (e) {
                        let t = (0, o._g)(e),
                            i = (0, l.bG)([c.A], () => c.A.getGuildAlertSettings()[e]);
                        if (t && null != i)
                            return (0, n.jsxs)(r.Dr, {
                                id: "activity_alerts",
                                label: b.intl.string(b.t.D9yVAH),
                                children: [
                                    (0, n.jsx)(r.sL, {
                                        id: "activity_alerts_in_app",
                                        label: b.intl.string(b.t.u6dc5B),
                                        checked: !i.disableRaidAlertNag,
                                        action: () =>
                                            (0, E.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                },
                                                N.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                    (0, n.jsx)(r.sL, {
                                        id: "activity_alerts_push",
                                        label: b.intl.string(b.t.P8MG6q),
                                        checked: !i.disableRaidAlertPush,
                                        action: () =>
                                            (0, E.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                },
                                                N.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                ],
                            });
                    })(e);
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(r.rX, {
                            children: [
                                (0, n.jsx)(r.iD, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: G === A.N9.ALL_MESSAGES,
                                    label: b.intl.string(b.t.hZrr6k),
                                    action: () => ((0, g.i)(e, A.N9.ALL_MESSAGES), L(!1)),
                                }),
                                (0, n.jsx)(r.iD, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: G === A.N9.MENTIONS,
                                    label: b.intl.string(b.t.y59NJm),
                                    action: () => ((0, g.i)(e, A.N9.MENTIONS), L(!1)),
                                }),
                                (0, n.jsx)(r.iD, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: G === A.N9.NOTHING,
                                    label: b.intl.string(b.t["pGn/bJ"]),
                                    action: () => ((0, g.i)(e, A.N9.NOTHING), L(!1)),
                                }),
                                (0, n.jsx)(r.iD, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: G === A.N9.CUSTOM,
                                    action: () => (i(!0), L(!0)),
                                    label: b.intl.string(b.t["32yow9"]),
                                }),
                            ],
                        }),
                        (G === A.N9.CUSTOM || t) &&
                            (0, n.jsxs)(r.rX, {
                                children: [
                                    (0, n.jsxs)(
                                        r.Dr,
                                        {
                                            id: "unread_setting",
                                            label: "Unread Badges",
                                            children: [
                                                (0, n.jsx)(r.iD, {
                                                    id: "unread_setting_all_messages",
                                                    group: "unread_setting",
                                                    checked: f === p.e.ALL_MESSAGES,
                                                    label: b.intl.string(b.t["HVah/3"]),
                                                    action: () => x(p.e.ALL_MESSAGES),
                                                }),
                                                (0, n.jsx)(r.iD, {
                                                    id: "unread_setting_mention_only",
                                                    group: "unread_setting",
                                                    checked: f === p.e.ONLY_MENTIONS,
                                                    label: b.intl.string(b.t["tu+ZWJ"]),
                                                    action: () => x(p.e.ONLY_MENTIONS),
                                                    disabled: f !== p.e.ONLY_MENTIONS && y === S.orn.ALL_MESSAGES,
                                                    subtext:
                                                        f !== p.e.ONLY_MENTIONS && y === S.orn.ALL_MESSAGES
                                                            ? b.intl.string(b.t.eP8yWU)
                                                            : void 0,
                                                }),
                                            ],
                                        },
                                        "unread_setting",
                                    ),
                                    (0, n.jsxs)(
                                        r.Dr,
                                        {
                                            id: "push_settings",
                                            label: b.intl.string(b.t.HcoRu0),
                                            children: [
                                                (0, n.jsx)(r.iD, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything",
                                                    label: b.intl.string(b.t["HVah/3"]),
                                                    checked: y === S.orn.ALL_MESSAGES,
                                                    action: () => M(S.orn.ALL_MESSAGES),
                                                    subtext:
                                                        f !== p.e.ALL_MESSAGES && y !== S.orn.ALL_MESSAGES
                                                            ? b.intl.string(b.t.idXSbI)
                                                            : void 0,
                                                }),
                                                (0, n.jsx)(r.iD, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_mention",
                                                    checked: y === S.orn.ONLY_MENTIONS,
                                                    label: b.intl.string(b.t["tu+ZWJ"]),
                                                    action: () => M(S.orn.ONLY_MENTIONS),
                                                }),
                                                (0, n.jsx)(r.iD, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_nothing",
                                                    label: b.intl.string(b.t.X4wWUi),
                                                    checked: y === S.orn.NO_MESSAGES,
                                                    action: () => M(S.orn.NO_MESSAGES),
                                                }),
                                            ],
                                        },
                                        "push_settings",
                                    ),
                                    j,
                                ],
                            }),
                    ],
                });
            })(e),
            ((t = e),
            (L = (0, l.cf)([h.Ay], () => ({
                highligths: h.Ay.getNotifyHighlights(t),
                mobilePush: h.Ay.isMobilePushEnabled(t),
                suppressRoles: h.Ay.isSuppressRolesEnabled(t),
                suppressEveryone: h.Ay.isSuppressEveryoneEnabled(t),
                muteScheduledEvents: h.Ay.isMuteScheduledEventsEnabled(t),
            }))),
            (f = d.A.updateGuildNotificationSettings),
            (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)(r.rX, {
                        children: [
                            (0, n.jsx)(r.sL, {
                                id: "mention",
                                checked: L.suppressEveryone,
                                label: b.intl.format(b.t.OWiWAp, {}),
                                action: () =>
                                    f(
                                        t,
                                        { suppress_everyone: !L.suppressEveryone },
                                        _.G_.suppressEveryone(!L.suppressEveryone),
                                    ),
                            }),
                            (0, n.jsx)(r.sL, {
                                id: "roles",
                                checked: L.suppressRoles,
                                label: b.intl.string(b.t["O/QdoD"]),
                                action: () =>
                                    f(t, { suppress_roles: !L.suppressRoles }, _.G_.suppressRoles(!L.suppressRoles)),
                            }),
                            (0, n.jsx)(r.sL, {
                                id: "hightlight",
                                label: b.intl.string(b.t.gPuteJ),
                                checked: L.highligths === S.guM.ENABLED,
                                action: () =>
                                    f(
                                        t,
                                        {
                                            notify_highlights:
                                                L.highligths === S.guM.ENABLED ? S.guM.DISABLED : S.guM.ENABLED,
                                        },
                                        _.G_.highlights(L.highligths !== S.guM.ENABLED),
                                    ),
                            }),
                        ],
                    }),
                    (0, n.jsxs)(r.rX, {
                        children: [
                            (0, n.jsx)(r.sL, {
                                id: "event",
                                checked: L.muteScheduledEvents,
                                label: b.intl.string(b.t.ONG3Yz),
                                action: () =>
                                    f(
                                        t,
                                        { mute_scheduled_events: !L.muteScheduledEvents },
                                        _.G_.mutedEvents(!L.muteScheduledEvents),
                                    ),
                            }),
                            (0, n.jsx)(r.sL, {
                                id: "mobile_push",
                                checked: L.mobilePush,
                                label: b.intl.string(b.t.h1DL66),
                                action: () => f(t, { mobile_push: !L.mobilePush }, _.G_.mobilePush(!L.mobilePush)),
                            }),
                        ],
                    }),
                ],
            })),
        ],
    });
}
