n.d(t, { A: () => E }), n(896048), n(938796);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(832712),
    o = n(585510),
    c = n(610136),
    u = n(393432),
    d = n(910323),
    g = n(24873),
    p = n(594061),
    b = n(543465),
    A = n(477427),
    h = n(652215),
    O = n(790782),
    y = n(355097),
    f = n(985018);
function E(e) {
    var t;
    let E, S;
    return (0, i.jsxs)(l.Drp, {
        id: "notification",
        label: f.intl.string(f.t.HcoRu0),
        action: () => {
            (0, l.mMO)(async () => {
                let { default: t } = await Promise.all([n.e("64992"), n.e("90432")]).then(n.bind(n, 401539));
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
                        (s = s = { guildId: e }),
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
            });
        },
        children: [
            (function (e) {
                let [t, n] = r.useState(!1),
                    [E, S] = r.useState(!1),
                    _ = (0, s.bG)([b.Ay], () => b.Ay.getGuildUnreadSetting(e)),
                    j = (0, s.bG)([b.Ay], () => b.Ay.getMessageNotifications(e)),
                    N = E ? g.N9.CUSTOM : (0, g.jU)(_, j),
                    v = (t) => {
                        S(!1);
                        let n = { message_notifications: t };
                        t === h.orn.ALL_MESSAGES &&
                            _ !== O.e.ALL_MESSAGES &&
                            (n.flags = (0, u.md)(b.Ay.getGuildFlags(e), y.n3.UNREADS_ALL_MESSAGES)),
                            a.A.updateGuildNotificationSettings(e, n, A.G_.notifications(t));
                    },
                    L = (t) => {
                        S(!1);
                        let n = b.Ay.getGuildFlags(e);
                        a.A.updateGuildNotificationSettings(
                            e,
                            {
                                flags: (0, u.md)(
                                    n,
                                    t === O.e.ALL_MESSAGES ? y.n3.UNREADS_ALL_MESSAGES : y.n3.UNREADS_ONLY_MENTIONS,
                                ),
                            },
                            A.G_.unreads(t),
                        );
                    },
                    m = (function (e) {
                        let t = (0, o._g)(e),
                            n = (0, s.bG)([c.A], () => c.A.getGuildAlertSettings()[e]);
                        if (t && null != n)
                            return (0, i.jsxs)(l.Drp, {
                                id: "activity_alerts",
                                label: f.intl.string(f.t.D9yVAH),
                                children: [
                                    (0, i.jsx)(l.sLh, {
                                        id: "activity_alerts_in_app",
                                        label: f.intl.string(f.t.u6dc5B),
                                        checked: !n.disableRaidAlertNag,
                                        action: () =>
                                            (0, p.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                },
                                                y.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                    (0, i.jsx)(l.sLh, {
                                        id: "activity_alerts_push",
                                        label: f.intl.string(f.t.P8MG6q),
                                        checked: !n.disableRaidAlertPush,
                                        action: () =>
                                            (0, p.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                },
                                                y.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                ],
                            });
                    })(e);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.rXV, {
                            children: [
                                (0, i.jsx)(l.iDA, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: N === g.N9.ALL_MESSAGES,
                                    label: f.intl.string(f.t.hZrr6k),
                                    action: () => ((0, d.i)(e, g.N9.ALL_MESSAGES), S(!1)),
                                }),
                                (0, i.jsx)(l.iDA, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: N === g.N9.MENTIONS,
                                    label: f.intl.string(f.t.y59NJm),
                                    action: () => ((0, d.i)(e, g.N9.MENTIONS), S(!1)),
                                }),
                                (0, i.jsx)(l.iDA, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: N === g.N9.NOTHING,
                                    label: f.intl.string(f.t["pGn/bJ"]),
                                    action: () => ((0, d.i)(e, g.N9.NOTHING), S(!1)),
                                }),
                                (0, i.jsx)(l.iDA, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: N === g.N9.CUSTOM,
                                    action: () => (n(!0), S(!0)),
                                    label: f.intl.string(f.t["32yow9"]),
                                }),
                            ],
                        }),
                        (N === g.N9.CUSTOM || t) &&
                            (0, i.jsxs)(l.rXV, {
                                children: [
                                    (0, i.jsxs)(
                                        l.Drp,
                                        {
                                            id: "unread_setting",
                                            label: "Unread Badges",
                                            children: [
                                                (0, i.jsx)(l.iDA, {
                                                    id: "unread_setting_all_messages",
                                                    group: "unread_setting",
                                                    checked: _ === O.e.ALL_MESSAGES,
                                                    label: f.intl.string(f.t["HVah/3"]),
                                                    action: () => L(O.e.ALL_MESSAGES),
                                                }),
                                                (0, i.jsx)(l.iDA, {
                                                    id: "unread_setting_mention_only",
                                                    group: "unread_setting",
                                                    checked: _ === O.e.ONLY_MENTIONS,
                                                    label: f.intl.string(f.t["tu+ZWJ"]),
                                                    action: () => L(O.e.ONLY_MENTIONS),
                                                    disabled: _ !== O.e.ONLY_MENTIONS && j === h.orn.ALL_MESSAGES,
                                                    subtext:
                                                        _ !== O.e.ONLY_MENTIONS && j === h.orn.ALL_MESSAGES
                                                            ? f.intl.string(f.t.eP8yWU)
                                                            : void 0,
                                                }),
                                            ],
                                        },
                                        "unread_setting",
                                    ),
                                    (0, i.jsxs)(
                                        l.Drp,
                                        {
                                            id: "push_settings",
                                            label: f.intl.string(f.t.HcoRu0),
                                            children: [
                                                (0, i.jsx)(l.iDA, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything",
                                                    label: f.intl.string(f.t["HVah/3"]),
                                                    checked: j === h.orn.ALL_MESSAGES,
                                                    action: () => v(h.orn.ALL_MESSAGES),
                                                    subtext:
                                                        _ !== O.e.ALL_MESSAGES && j !== h.orn.ALL_MESSAGES
                                                            ? f.intl.string(f.t.idXSbI)
                                                            : void 0,
                                                }),
                                                (0, i.jsx)(l.iDA, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_mention",
                                                    checked: j === h.orn.ONLY_MENTIONS,
                                                    label: f.intl.string(f.t["tu+ZWJ"]),
                                                    action: () => v(h.orn.ONLY_MENTIONS),
                                                }),
                                                (0, i.jsx)(l.iDA, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_nothing",
                                                    label: f.intl.string(f.t.X4wWUi),
                                                    checked: j === h.orn.NO_MESSAGES,
                                                    action: () => v(h.orn.NO_MESSAGES),
                                                }),
                                            ],
                                        },
                                        "push_settings",
                                    ),
                                    m,
                                ],
                            }),
                    ],
                });
            })(e),
            ((t = e),
            (E = (0, s.cf)([b.Ay], () => ({
                highligths: b.Ay.getNotifyHighlights(t),
                mobilePush: b.Ay.isMobilePushEnabled(t),
                suppressRoles: b.Ay.isSuppressRolesEnabled(t),
                suppressEveryone: b.Ay.isSuppressEveryoneEnabled(t),
                muteScheduledEvents: b.Ay.isMuteScheduledEventsEnabled(t),
            }))),
            (S = a.A.updateGuildNotificationSettings),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(l.rXV, {
                        children: [
                            (0, i.jsx)(l.sLh, {
                                id: "mention",
                                checked: E.suppressEveryone,
                                label: f.intl.format(f.t.OWiWAp, {}),
                                action: () =>
                                    S(
                                        t,
                                        { suppress_everyone: !E.suppressEveryone },
                                        A.G_.suppressEveryone(!E.suppressEveryone),
                                    ),
                            }),
                            (0, i.jsx)(l.sLh, {
                                id: "roles",
                                checked: E.suppressRoles,
                                label: f.intl.string(f.t["O/QdoD"]),
                                action: () =>
                                    S(t, { suppress_roles: !E.suppressRoles }, A.G_.suppressRoles(!E.suppressRoles)),
                            }),
                            (0, i.jsx)(l.sLh, {
                                id: "hightlight",
                                label: f.intl.string(f.t.gPuteJ),
                                checked: E.highligths === h.guM.ENABLED,
                                action: () =>
                                    S(
                                        t,
                                        {
                                            notify_highlights:
                                                E.highligths === h.guM.ENABLED ? h.guM.DISABLED : h.guM.ENABLED,
                                        },
                                        A.G_.highlights(E.highligths !== h.guM.ENABLED),
                                    ),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(l.rXV, {
                        children: [
                            (0, i.jsx)(l.sLh, {
                                id: "event",
                                checked: E.muteScheduledEvents,
                                label: f.intl.string(f.t.ONG3Yz),
                                action: () =>
                                    S(
                                        t,
                                        { mute_scheduled_events: !E.muteScheduledEvents },
                                        A.G_.mutedEvents(!E.muteScheduledEvents),
                                    ),
                            }),
                            (0, i.jsx)(l.sLh, {
                                id: "mobile_push",
                                checked: E.mobilePush,
                                label: f.intl.string(f.t.h1DL66),
                                action: () => S(t, { mobile_push: !E.mobilePush }, A.G_.mobilePush(!E.mobilePush)),
                            }),
                        ],
                    }),
                ],
            })),
        ],
    });
}
