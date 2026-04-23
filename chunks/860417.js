i.d(t, { default: () => es });
var n = i(627968),
    s = i(284009),
    l = i.n(s),
    a = i(17928),
    r = i(192308),
    d = i(550079),
    o = i(477782),
    c = i(442433),
    u = i(793574),
    g = i(688810),
    A = i(359047),
    E = i(769591),
    h = i(36942),
    _ = i(260509),
    S = i(495544),
    p = i(287809),
    N = i(346247),
    b = i(810263),
    L = i(911612),
    y = i(664967),
    G = i(64700),
    f = i(458294),
    M = i(567035),
    x = i(985018),
    j = i(507238),
    m = i(832712),
    D = i(568873),
    O = i(543465),
    I = i(477427),
    v = i(652215);
function T() {
    return [
        { setting: v.orn.ALL_MESSAGES, label: x.intl.string(x.t["n/bTaY"]) },
        { setting: v.orn.ONLY_MENTIONS, label: x.intl.format(x.t.L2hmYy, {}) },
        { setting: v.orn.NO_MESSAGES, label: x.intl.string(x.t.CtVGyQ) },
    ];
}
i(938796);
var R = i(585510),
    U = i(610136),
    P = i(393432),
    k = i(910323),
    B = i(24873),
    C = i(594061),
    X = i(790782),
    Y = i(355097),
    w = i(138134),
    H = i(865116),
    F = i(928658),
    W = i(811893),
    V = i(837057),
    J = i(310419),
    z = i(997509),
    Q = i(576705),
    Z = i(887501),
    K = i(684407),
    q = i(47138),
    $ = i(267102),
    ee = i(488995),
    et = i(153594),
    ei = i(531335);
function en(e) {
    var t, s, u;
    let g,
        en,
        es,
        el,
        ea,
        er,
        ed,
        eo,
        ec,
        { guild: eu, onSelect: eg, hideSettings: eA } = e,
        eE = eu.id,
        eh = (0, a.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return l()(null != e, "GuildContextMenu: user cannot be undefined"), (0, _.bM)(eu, e);
        }, [eu]),
        e_ = (0, ei.A)({ guild: eu, source: v.PE1.GUILD_CONTEXT_MENU, channel: null }),
        eS = (0, et.A)(eE),
        ep = (0, j.A)(eu),
        eN =
            ((es = (function (e) {
                let {
                        suppressEveryone: t,
                        suppressRoles: i,
                        mobilePush: s,
                        messageNotifications: l,
                        notifyHighlights: r,
                    } = (0, a.cf)(
                        [O.Ay],
                        () => ({
                            suppressEveryone: O.Ay.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: O.Ay.isSuppressRolesEnabled(e.id),
                            mobilePush: O.Ay.isMobilePushEnabled(e.id),
                            messageNotifications: O.Ay.getMessageNotifications(e.id),
                            notifyHighlights: O.Ay.getNotifyHighlights(e.id),
                        }),
                        [e.id],
                    ),
                    d = r === v.guM.DISABLED,
                    c = (0, D.A)(e.id);
                function u(t, i) {
                    m.A.updateGuildNotificationSettings(e.id, t, i);
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o.rX, {
                            children: T().map((e) => {
                                let { setting: t, label: i } = e;
                                return (0, n.jsx)(
                                    o.iD,
                                    {
                                        group: "guild-notifications",
                                        id: `${t}`,
                                        label: i,
                                        action: () => u({ message_notifications: t }, I.G_.notifications(t)),
                                        checked: t === l,
                                    },
                                    t,
                                );
                            }),
                        }),
                        (0, n.jsxs)(o.rX, {
                            children: [
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-everyone",
                                    label: x.intl.format(x.t.OWiWAp, {}),
                                    action: () => u({ suppress_everyone: !t }, I.G_.suppressEveryone(!t)),
                                    checked: t,
                                }),
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-roles",
                                    label: x.intl.string(x.t["O/QdoD"]),
                                    action: () => u({ suppress_roles: !i }, I.G_.suppressRoles(!i)),
                                    checked: i,
                                }),
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-highlights",
                                    label: x.intl.string(x.t.gPuteJ),
                                    action: () => {
                                        u(
                                            { notify_highlights: d ? v.guM.ENABLED : v.guM.DISABLED },
                                            I.G_.highlights(d),
                                        );
                                    },
                                    checked: d,
                                }),
                                c,
                            ],
                        }),
                        (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.sL, {
                                id: "mobile-push",
                                label: x.intl.string(x.t.h1DL66),
                                action: () => u({ mobile_push: !s }, I.G_.mobilePush(!s)),
                                checked: s,
                            }),
                        }),
                    ],
                });
            })(eu)),
            (el = (0, a.bG)([O.Ay], () => O.Ay.getMessageNotifications(eu.id), [eu.id])),
            (ea = T()?.find((e) => {
                let { setting: t } = e;
                return t === el;
            })?.label),
            null != es
                ? (0, n.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: x.intl.string(x.t.h850Ss),
                      subtext: ea,
                      action: () =>
                          (0, r.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([i.e("30282"), i.e("59566")]).then(
                                  i.bind(i, 893605),
                              );
                              return (t) => (0, n.jsx)(e, { ...t, guildId: eu.id });
                          }),
                      children: es,
                  })
                : null),
        eb = (function (e) {
            let t,
                i,
                s = (0, $.aL)(),
                l = (function (e) {
                    let {
                        canManageGuild: t,
                        canManageRoles: i,
                        canBanMembers: n,
                        canManageNicknames: s,
                        canCreateEmojisAndStickers: l,
                        canManageEmojisAndStickers: r,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, a.cf)(
                        [Q.A],
                        () => ({
                            canManageGuild: Q.A.can(v.xBc.MANAGE_GUILD, e),
                            canManageRoles: Q.A.can(v.xBc.MANAGE_ROLES, e),
                            canBanMembers: Q.A.can(v.xBc.BAN_MEMBERS, e),
                            canManageNicknames: Q.A.can(v.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: Q.A.can(v.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: Q.A.can(v.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: Q.A.can(v.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: Q.A.can(v.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return t || i || n || s || l || r || d || o;
                })(e);
            if (__OVERLAY__ || !l) return null;
            let d = (t) => {
                z.A.open(e.id, t), s.dispatch(v.jej.POPOUT_CLOSE), (0, r.closeAllModals)();
            };
            return (0, n.jsx)(o.Dr, {
                id: "guild-settings",
                label: x.intl.string(x.t["154/bL"]),
                action: () => d(),
                children: ((t = Q.A.getGuildPermissionProps(e)),
                (i = (0, Z.b)(e.id).length > 0),
                q.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...t,
                    canUnlinkChannels: i,
                    welcomeScreenEmpty: K.A.isEmpty(e.id),
                })
                    .filter((e) => {
                        let { section: t } = e;
                        return "HEADER" !== t && "DIVIDER" !== t;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((t) => {
                    let { section: i, label: s, ariaLabel: l } = t;
                    switch (i) {
                        case v.BEX.DELETE:
                            return null;
                        case v.BEX.COMMUNITY:
                            return (0, n.jsx)(o.Dr, { id: i, action: () => d(i), label: x.intl.string(x.t.nRtNqn) }, i);
                        case v.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: i,
                                    action: () => {
                                        (0, V.transitionToGlobalDiscovery)({
                                            tab: ee.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: J.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    leadingAccessory: { type: "icon", icon: W.t },
                                    iconLeft: W.t,
                                    label: x.intl.string(x.t.AKcFUj),
                                },
                                i,
                            );
                        default:
                            let a = "string" == typeof s ? s : l;
                            if (null == a) return null;
                            return (0, n.jsx)(o.Dr, { id: i, action: () => d(i), label: a }, i);
                    }
                }),
            });
        })(eu),
        eL = (0, N.A)({
            guildId: eu.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: v.liQ.GUILD_CHANNEL,
                section: v.JJy.CHAT_USERNAME,
                object: v.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        ey = (0, L.A)(eu),
        eG = (0, A.A)(eu.id),
        ef = (0, b.A)(eu),
        eM =
            ((t = { section: v.JJy.GUILD_LIST }),
            (er = eu.id),
            (ed = (0, a.bG)([f.default], () => f.default.getGuildHasUnreadIgnoreMuted(er), [er])),
            (0, n.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: x.intl.string(x.t.e6RscS),
                icon: void 0,
                action: () => (0, M.A)([er], t.section),
                disabled: !ed,
            })),
        ex = (0, h.A)(eu.id),
        ej =
            ((s = eu.id),
            (0, n.jsxs)(o.Dr, {
                id: "notification",
                label: x.intl.string(x.t.HcoRu0),
                action: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([i.e("30282"), i.e("59566")]).then(i.bind(i, 893605));
                        return (t) => (0, n.jsx)(e, { ...t, guildId: s });
                    });
                },
                children: [
                    (function (e) {
                        let [t, i] = G.useState(!1),
                            [s, l] = G.useState(!1),
                            r = (0, a.bG)([O.Ay], () => O.Ay.getGuildUnreadSetting(e)),
                            d = (0, a.bG)([O.Ay], () => O.Ay.getMessageNotifications(e)),
                            c = s ? B.N9.CUSTOM : (0, B.jU)(r, d),
                            u = (t) => {
                                l(!1);
                                let i = { message_notifications: t };
                                t === v.orn.ALL_MESSAGES &&
                                    r !== X.e.ALL_MESSAGES &&
                                    (i.flags = (0, P.md)(O.Ay.getGuildFlags(e), Y.n3.UNREADS_ALL_MESSAGES)),
                                    m.A.updateGuildNotificationSettings(e, i, I.G_.notifications(t));
                            },
                            g = (t) => {
                                l(!1);
                                let i = O.Ay.getGuildFlags(e);
                                m.A.updateGuildNotificationSettings(
                                    e,
                                    {
                                        flags: (0, P.md)(
                                            i,
                                            t === X.e.ALL_MESSAGES
                                                ? Y.n3.UNREADS_ALL_MESSAGES
                                                : Y.n3.UNREADS_ONLY_MENTIONS,
                                        ),
                                    },
                                    I.G_.unreads(t),
                                );
                            },
                            A = (function (e) {
                                let t = (0, R._g)(e),
                                    i = (0, a.bG)([U.A], () => U.A.getGuildAlertSettings()[e]);
                                if (t && null != i)
                                    return (0, n.jsxs)(o.Dr, {
                                        id: "activity_alerts",
                                        label: x.intl.string(x.t.D9yVAH),
                                        children: [
                                            (0, n.jsx)(o.sL, {
                                                id: "activity_alerts_in_app",
                                                label: x.intl.string(x.t.u6dc5B),
                                                checked: !i.disableRaidAlertNag,
                                                action: () =>
                                                    (0, C.TG)(
                                                        e,
                                                        (e) => {
                                                            e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                        },
                                                        Y.Sb.INFREQUENT_USER_ACTION,
                                                    ),
                                            }),
                                            (0, n.jsx)(o.sL, {
                                                id: "activity_alerts_push",
                                                label: x.intl.string(x.t.P8MG6q),
                                                checked: !i.disableRaidAlertPush,
                                                action: () =>
                                                    (0, C.TG)(
                                                        e,
                                                        (e) => {
                                                            e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                        },
                                                        Y.Sb.INFREQUENT_USER_ACTION,
                                                    ),
                                            }),
                                        ],
                                    });
                            })(e);
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(o.rX, {
                                    children: [
                                        (0, n.jsx)(o.iD, {
                                            id: "everything",
                                            group: "notification-preset",
                                            checked: c === B.N9.ALL_MESSAGES,
                                            label: x.intl.string(x.t.hZrr6k),
                                            action: () => ((0, k.i)(e, B.N9.ALL_MESSAGES), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "essentials",
                                            group: "notification-preset",
                                            checked: c === B.N9.MENTIONS,
                                            label: x.intl.string(x.t.y59NJm),
                                            action: () => ((0, k.i)(e, B.N9.MENTIONS), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "nothing",
                                            group: "notification-preset",
                                            checked: c === B.N9.NOTHING,
                                            label: x.intl.string(x.t["pGn/bJ"]),
                                            action: () => ((0, k.i)(e, B.N9.NOTHING), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "custom",
                                            group: "notification-preset",
                                            checked: c === B.N9.CUSTOM,
                                            action: () => (i(!0), l(!0)),
                                            label: x.intl.string(x.t["32yow9"]),
                                        }),
                                    ],
                                }),
                                (c === B.N9.CUSTOM || t) &&
                                    (0, n.jsxs)(o.rX, {
                                        children: [
                                            (0, n.jsxs)(
                                                o.Dr,
                                                {
                                                    id: "unread_setting",
                                                    label: "Unread Badges",
                                                    children: [
                                                        (0, n.jsx)(o.iD, {
                                                            id: "unread_setting_all_messages",
                                                            group: "unread_setting",
                                                            checked: r === X.e.ALL_MESSAGES,
                                                            label: x.intl.string(x.t["HVah/3"]),
                                                            action: () => g(X.e.ALL_MESSAGES),
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            id: "unread_setting_mention_only",
                                                            group: "unread_setting",
                                                            checked: r === X.e.ONLY_MENTIONS,
                                                            label: x.intl.string(x.t["tu+ZWJ"]),
                                                            action: () => g(X.e.ONLY_MENTIONS),
                                                            disabled:
                                                                r !== X.e.ONLY_MENTIONS && d === v.orn.ALL_MESSAGES,
                                                            subtext:
                                                                r !== X.e.ONLY_MENTIONS && d === v.orn.ALL_MESSAGES
                                                                    ? x.intl.string(x.t.eP8yWU)
                                                                    : void 0,
                                                        }),
                                                    ],
                                                },
                                                "unread_setting",
                                            ),
                                            (0, n.jsxs)(
                                                o.Dr,
                                                {
                                                    id: "push_settings",
                                                    label: x.intl.string(x.t.HcoRu0),
                                                    children: [
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything",
                                                            label: x.intl.string(x.t["HVah/3"]),
                                                            checked: d === v.orn.ALL_MESSAGES,
                                                            action: () => u(v.orn.ALL_MESSAGES),
                                                            subtext:
                                                                r !== X.e.ALL_MESSAGES && d !== v.orn.ALL_MESSAGES
                                                                    ? x.intl.string(x.t.idXSbI)
                                                                    : void 0,
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything_mention",
                                                            checked: d === v.orn.ONLY_MENTIONS,
                                                            label: x.intl.string(x.t["tu+ZWJ"]),
                                                            action: () => u(v.orn.ONLY_MENTIONS),
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything_nothing",
                                                            label: x.intl.string(x.t.X4wWUi),
                                                            checked: d === v.orn.NO_MESSAGES,
                                                            action: () => u(v.orn.NO_MESSAGES),
                                                        }),
                                                    ],
                                                },
                                                "push_settings",
                                            ),
                                            A,
                                        ],
                                    }),
                            ],
                        });
                    })(s),
                    ((u = s),
                    (g = (0, a.cf)([O.Ay], () => ({
                        highligths: O.Ay.getNotifyHighlights(u),
                        mobilePush: O.Ay.isMobilePushEnabled(u),
                        suppressRoles: O.Ay.isSuppressRolesEnabled(u),
                        suppressEveryone: O.Ay.isSuppressEveryoneEnabled(u),
                        muteScheduledEvents: O.Ay.isMuteScheduledEventsEnabled(u),
                    }))),
                    (en = m.A.updateGuildNotificationSettings),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "mention",
                                        checked: g.suppressEveryone,
                                        label: x.intl.format(x.t.OWiWAp, {}),
                                        action: () =>
                                            en(
                                                u,
                                                { suppress_everyone: !g.suppressEveryone },
                                                I.G_.suppressEveryone(!g.suppressEveryone),
                                            ),
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "roles",
                                        checked: g.suppressRoles,
                                        label: x.intl.string(x.t["O/QdoD"]),
                                        action: () =>
                                            en(
                                                u,
                                                { suppress_roles: !g.suppressRoles },
                                                I.G_.suppressRoles(!g.suppressRoles),
                                            ),
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "hightlight",
                                        label: x.intl.string(x.t.gPuteJ),
                                        checked: g.highligths === v.guM.ENABLED,
                                        action: () =>
                                            en(
                                                u,
                                                {
                                                    notify_highlights:
                                                        g.highligths === v.guM.ENABLED ? v.guM.DISABLED : v.guM.ENABLED,
                                                },
                                                I.G_.highlights(g.highligths !== v.guM.ENABLED),
                                            ),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "event",
                                        checked: g.muteScheduledEvents,
                                        label: x.intl.string(x.t.ONG3Yz),
                                        action: () =>
                                            en(
                                                u,
                                                { mute_scheduled_events: !g.muteScheduledEvents },
                                                I.G_.mutedEvents(!g.muteScheduledEvents),
                                            ),
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "mobile_push",
                                        checked: g.mobilePush,
                                        label: x.intl.string(x.t.h1DL66),
                                        action: () =>
                                            en(u, { mobile_push: !g.mobilePush }, I.G_.mobilePush(!g.mobilePush)),
                                    }),
                                ],
                            }),
                        ],
                    })),
                ],
            })),
        em = (0, y.A)(eu),
        eD = (0, E.os)("GuildContextMenu"),
        eO =
            ((eo = (0, a.bG)([H.Ay], () => H.Ay.get("iar_testing"))),
            null != (ec = (0, a.bG)([p.default], () => p.default.getCurrentUser())) && ec.isStaff() && eo
                ? (0, n.jsx)(o.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, F.RV)(eu, "web_guild_context_menu"),
                      icon: w.i,
                      color: "danger",
                  })
                : null);
    function eI() {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await i.e("53485").then(i.bind(i, 20508));
            return (t) => (0, n.jsx)(e, { ...t, guild: eu });
        });
    }
    return eu.features.has(v.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": x.intl.string(x.t.HpQykc),
              onSelect: eg,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          e_,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: x.intl.string(x.t.IlFwwR),
                              action: () =>
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          i.e("33098"),
                                          i.e("55595"),
                                          i.e("95311"),
                                      ]).then(i.bind(i, 522566));
                                      return (t) => (0, n.jsx)(e, { ...t, guild: eu });
                                  }),
                          }),
                          eL,
                      ],
                  }),
                  eh
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: x.intl.string(x.t.Dv8gFT),
                                action: eI,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: ef }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": x.intl.string(x.t.HpQykc),
              onSelect: eg,
              children: [
                  (0, n.jsx)(o.rX, { children: eM }),
                  (0, n.jsx)(o.rX, { children: e_ }),
                  (0, n.jsxs)(o.rX, {
                      children: [ep, eD || __OVERLAY__ ? null : eN, eD && !__OVERLAY__ ? ej : null, eS, ex],
                  }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          eA ? null : eb,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: x.intl.string(x.t.BayiAo),
                                    action: () =>
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                i.e("33098"),
                                                i.e("55595"),
                                                i.e("95311"),
                                            ]).then(i.bind(i, 522566));
                                            return (t) => (0, n.jsx)(e, { ...t, guild: eu });
                                        }),
                                }),
                          eL,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [ey, eG] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          em,
                          !eh &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: x.intl.string(x.t.J2TBi3),
                                  action: eI,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: eO }),
                  (0, n.jsx)(o.rX, { children: ef }),
              ],
          });
}
function es(e) {
    let { analyticsLocations: t } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: t, children: (0, n.jsx)(en, { ...e }) });
}
