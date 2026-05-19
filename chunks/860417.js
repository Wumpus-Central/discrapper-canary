t.d(i, { default: () => es });
var n = t(627968),
    s = t(284009),
    l = t.n(s),
    r = t(17928),
    a = t(192308),
    d = t(980707),
    o = t(477782),
    c = t(442433),
    u = t(793574),
    g = t(688810),
    h = t(359047),
    A = t(769591),
    E = t(36942),
    _ = t(260509),
    S = t(495544),
    p = t(287809),
    b = t(346247),
    N = t(810263),
    L = t(911612),
    x = t(664967),
    y = t(64700),
    G = t(458294),
    M = t(567035),
    f = t(375708),
    j = t(507238),
    D = t(832712),
    m = t(568873),
    O = t(543465),
    I = t(477427),
    R = t(652215);
function T() {
    return [
        { setting: R.orn.ALL_MESSAGES, label: f.intl.string(f.t["n/bTaY"]) },
        { setting: R.orn.ONLY_MENTIONS, label: f.intl.format(f.t.L2hmYy, {}) },
        { setting: R.orn.NO_MESSAGES, label: f.intl.string(f.t.CtVGyQ) },
    ];
}
t(938796);
var v = t(585510),
    U = t(610136),
    k = t(393432),
    P = t(910323),
    B = t(24873),
    X = t(594061),
    C = t(790782),
    H = t(355097),
    w = t(138134),
    Y = t(865116),
    W = t(928658),
    F = t(811893),
    V = t(837057),
    J = t(310419),
    Q = t(468689),
    z = t(576705),
    Z = t(887501),
    K = t(684407),
    q = t(891812),
    $ = t(267102),
    ee = t(488995),
    ei = t(153594),
    et = t(531335);
function en(e) {
    var i, s, u;
    let g,
        en,
        es,
        el,
        er,
        ea,
        ed,
        eo,
        ec,
        { guild: eu, onSelect: eg, hideSettings: eh } = e,
        eA = eu.id,
        eE = (0, r.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return l()(null != e, "GuildContextMenu: user cannot be undefined"), (0, _.bM)(eu, e);
        }, [eu]),
        e_ = (0, et.A)({ guild: eu, source: R.PE1.GUILD_CONTEXT_MENU, channel: null }),
        eS = (0, ei.A)(eA),
        ep = (0, j.A)(eu),
        eb =
            ((es = (function (e) {
                let {
                        suppressEveryone: i,
                        suppressRoles: t,
                        mobilePush: s,
                        messageNotifications: l,
                        notifyHighlights: a,
                    } = (0, r.cf)(
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
                    d = a === R.guM.DISABLED,
                    c = (0, m.A)(e.id);
                function u(i, t) {
                    D.A.updateGuildNotificationSettings(e.id, i, t);
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(o.rX, {
                            children: T().map((e) => {
                                let { setting: i, label: t } = e;
                                return (0, n.jsx)(
                                    o.iD,
                                    {
                                        group: "guild-notifications",
                                        id: `${i}`,
                                        label: t,
                                        action: () => u({ message_notifications: i }, I.G_.notifications(i)),
                                        checked: i === l,
                                    },
                                    i,
                                );
                            }),
                        }),
                        (0, n.jsxs)(o.rX, {
                            children: [
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-everyone",
                                    label: f.intl.format(f.t.OWiWAp, {}),
                                    action: () => u({ suppress_everyone: !i }, I.G_.suppressEveryone(!i)),
                                    checked: i,
                                }),
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-roles",
                                    label: f.intl.string(f.t["O/QdoD"]),
                                    action: () => u({ suppress_roles: !t }, I.G_.suppressRoles(!t)),
                                    checked: t,
                                }),
                                (0, n.jsx)(o.sL, {
                                    id: "suppress-highlights",
                                    label: f.intl.string(f.t.gPuteJ),
                                    action: () => {
                                        u(
                                            { notify_highlights: d ? R.guM.ENABLED : R.guM.DISABLED },
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
                                label: f.intl.string(f.t.h1DL66),
                                action: () => u({ mobile_push: !s }, I.G_.mobilePush(!s)),
                                checked: s,
                            }),
                        }),
                    ],
                });
            })(eu)),
            (el = (0, r.bG)([O.Ay], () => O.Ay.getMessageNotifications(eu.id), [eu.id])),
            (er = T()?.find((e) => {
                let { setting: i } = e;
                return i === el;
            })?.label),
            null != es
                ? (0, n.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: f.intl.string(f.t.h850Ss),
                      subtext: er,
                      action: () =>
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("93855"),
                                  t.e("35321"),
                                  t.e("42865"),
                                  t.e("56814"),
                                  t.e("30282"),
                              ]).then(t.bind(t, 893605));
                              return (i) => (0, n.jsx)(e, { ...i, guildId: eu.id });
                          }),
                      children: es,
                  })
                : null),
        eN = (function (e) {
            let i,
                t,
                s = (0, $.aL)(),
                l = (function (e) {
                    let {
                        canManageGuild: i,
                        canManageRoles: t,
                        canBanMembers: n,
                        canManageNicknames: s,
                        canCreateEmojisAndStickers: l,
                        canManageEmojisAndStickers: a,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, r.cf)(
                        [z.A],
                        () => ({
                            canManageGuild: z.A.can(R.xBc.MANAGE_GUILD, e),
                            canManageRoles: z.A.can(R.xBc.MANAGE_ROLES, e),
                            canBanMembers: z.A.can(R.xBc.BAN_MEMBERS, e),
                            canManageNicknames: z.A.can(R.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: z.A.can(R.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: z.A.can(R.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: z.A.can(R.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: z.A.can(R.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || t || n || s || l || a || d || o;
                })(e);
            if (__OVERLAY__ || !l) return null;
            let d = (i) => {
                Q.A.open(e.id, i), s.dispatch(R.jej.POPOUT_CLOSE), (0, a.closeAllModals)();
            };
            return (0, n.jsx)(o.Dr, {
                id: "guild-settings",
                label: f.intl.string(f.t["154/bL"]),
                action: () => d(),
                children: ((i = z.A.getGuildPermissionProps(e)),
                (t = (0, Z.b)(e.id).length > 0),
                q.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: t,
                    welcomeScreenEmpty: K.A.isEmpty(e.id),
                })
                    .filter((e) => {
                        let { section: i } = e;
                        return "HEADER" !== i && "DIVIDER" !== i;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((i) => {
                    let { section: t, label: s, ariaLabel: l } = i;
                    switch (t) {
                        case R.BEX.DELETE:
                            return null;
                        case R.BEX.COMMUNITY:
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: f.intl.string(f.t.nRtNqn) }, t);
                        case R.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: t,
                                    action: () => {
                                        (0, V.transitionToGlobalDiscovery)({
                                            tab: ee.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: J.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    leadingAccessory: { type: "icon", icon: F.t },
                                    iconLeft: F.t,
                                    label: f.intl.string(f.t.AKcFUj),
                                },
                                t,
                            );
                        default:
                            let r = "string" == typeof s ? s : l;
                            if (null == r) return null;
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: r }, t);
                    }
                }),
            });
        })(eu),
        eL = (0, b.A)({
            guildId: eu.id,
            userId: S.default.getId(),
            analyticsLocation: {
                page: R.liQ.GUILD_CHANNEL,
                section: R.JJy.CHAT_USERNAME,
                object: R.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        ex = (0, L.A)(eu),
        ey = (0, h.A)(eu.id),
        eG = (0, N.A)(eu),
        eM =
            ((i = { section: R.JJy.GUILD_LIST }),
            (ea = eu.id),
            (ed = (0, r.bG)([G.default], () => G.default.getGuildHasUnreadIgnoreMuted(ea), [ea])),
            (0, n.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: f.intl.string(f.t.e6RscS),
                icon: void 0,
                action: () => (0, M.A)([ea], i.section),
                disabled: !ed,
            })),
        ef = (0, E.A)(eu.id),
        ej =
            ((s = eu.id),
            (0, n.jsxs)(o.Dr, {
                id: "notification",
                label: f.intl.string(f.t.HcoRu0),
                action: () => {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            t.e("93855"),
                            t.e("35321"),
                            t.e("42865"),
                            t.e("56814"),
                            t.e("30282"),
                        ]).then(t.bind(t, 893605));
                        return (i) => (0, n.jsx)(e, { ...i, guildId: s });
                    });
                },
                children: [
                    (function (e) {
                        let [i, t] = y.useState(!1),
                            [s, l] = y.useState(!1),
                            a = (0, r.bG)([O.Ay], () => O.Ay.getGuildUnreadSetting(e)),
                            d = (0, r.bG)([O.Ay], () => O.Ay.getMessageNotifications(e)),
                            c = s ? B.N9.CUSTOM : (0, B.jU)(a, d),
                            u = (i) => {
                                l(!1);
                                let t = { message_notifications: i };
                                i === R.orn.ALL_MESSAGES &&
                                    a !== C.e.ALL_MESSAGES &&
                                    (t.flags = (0, k.md)(O.Ay.getGuildFlags(e), H.n3.UNREADS_ALL_MESSAGES)),
                                    D.A.updateGuildNotificationSettings(e, t, I.G_.notifications(i));
                            },
                            g = (i) => {
                                l(!1);
                                let t = O.Ay.getGuildFlags(e);
                                D.A.updateGuildNotificationSettings(
                                    e,
                                    {
                                        flags: (0, k.md)(
                                            t,
                                            i === C.e.ALL_MESSAGES
                                                ? H.n3.UNREADS_ALL_MESSAGES
                                                : H.n3.UNREADS_ONLY_MENTIONS,
                                        ),
                                    },
                                    I.G_.unreads(i),
                                );
                            },
                            h = (function (e) {
                                let i = (0, v._g)(e),
                                    t = (0, r.bG)([U.A], () => U.A.getGuildAlertSettings()[e]);
                                if (i && null != t)
                                    return (0, n.jsxs)(o.Dr, {
                                        id: "activity_alerts",
                                        label: f.intl.string(f.t.D9yVAH),
                                        children: [
                                            (0, n.jsx)(o.sL, {
                                                id: "activity_alerts_in_app",
                                                label: f.intl.string(f.t.u6dc5B),
                                                checked: !t.disableRaidAlertNag,
                                                action: () =>
                                                    (0, X.TG)(
                                                        e,
                                                        (e) => {
                                                            e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                        },
                                                        H.Sb.INFREQUENT_USER_ACTION,
                                                    ),
                                            }),
                                            (0, n.jsx)(o.sL, {
                                                id: "activity_alerts_push",
                                                label: f.intl.string(f.t.P8MG6q),
                                                checked: !t.disableRaidAlertPush,
                                                action: () =>
                                                    (0, X.TG)(
                                                        e,
                                                        (e) => {
                                                            e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                        },
                                                        H.Sb.INFREQUENT_USER_ACTION,
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
                                            label: f.intl.string(f.t.hZrr6k),
                                            action: () => ((0, P.i)(e, B.N9.ALL_MESSAGES), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "essentials",
                                            group: "notification-preset",
                                            checked: c === B.N9.MENTIONS,
                                            label: f.intl.string(f.t.y59NJm),
                                            action: () => ((0, P.i)(e, B.N9.MENTIONS), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "nothing",
                                            group: "notification-preset",
                                            checked: c === B.N9.NOTHING,
                                            label: f.intl.string(f.t["pGn/bJ"]),
                                            action: () => ((0, P.i)(e, B.N9.NOTHING), l(!1)),
                                        }),
                                        (0, n.jsx)(o.iD, {
                                            id: "custom",
                                            group: "notification-preset",
                                            checked: c === B.N9.CUSTOM,
                                            action: () => (t(!0), l(!0)),
                                            label: f.intl.string(f.t["32yow9"]),
                                        }),
                                    ],
                                }),
                                (c === B.N9.CUSTOM || i) &&
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
                                                            checked: a === C.e.ALL_MESSAGES,
                                                            label: f.intl.string(f.t["HVah/3"]),
                                                            action: () => g(C.e.ALL_MESSAGES),
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            id: "unread_setting_mention_only",
                                                            group: "unread_setting",
                                                            checked: a === C.e.ONLY_MENTIONS,
                                                            label: f.intl.string(f.t["tu+ZWJ"]),
                                                            action: () => g(C.e.ONLY_MENTIONS),
                                                            disabled:
                                                                a !== C.e.ONLY_MENTIONS && d === R.orn.ALL_MESSAGES,
                                                            subtext:
                                                                a !== C.e.ONLY_MENTIONS && d === R.orn.ALL_MESSAGES
                                                                    ? f.intl.string(f.t.eP8yWU)
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
                                                    label: f.intl.string(f.t.HcoRu0),
                                                    children: [
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything",
                                                            label: f.intl.string(f.t["HVah/3"]),
                                                            checked: d === R.orn.ALL_MESSAGES,
                                                            action: () => u(R.orn.ALL_MESSAGES),
                                                            subtext:
                                                                a !== C.e.ALL_MESSAGES && d !== R.orn.ALL_MESSAGES
                                                                    ? f.intl.string(f.t.idXSbI)
                                                                    : void 0,
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything_mention",
                                                            checked: d === R.orn.ONLY_MENTIONS,
                                                            label: f.intl.string(f.t["tu+ZWJ"]),
                                                            action: () => u(R.orn.ONLY_MENTIONS),
                                                        }),
                                                        (0, n.jsx)(o.iD, {
                                                            group: "notification-preset",
                                                            id: "push_settings_everything_nothing",
                                                            label: f.intl.string(f.t.X4wWUi),
                                                            checked: d === R.orn.NO_MESSAGES,
                                                            action: () => u(R.orn.NO_MESSAGES),
                                                        }),
                                                    ],
                                                },
                                                "push_settings",
                                            ),
                                            h,
                                        ],
                                    }),
                            ],
                        });
                    })(s),
                    ((u = s),
                    (g = (0, r.cf)([O.Ay], () => ({
                        highligths: O.Ay.getNotifyHighlights(u),
                        mobilePush: O.Ay.isMobilePushEnabled(u),
                        suppressRoles: O.Ay.isSuppressRolesEnabled(u),
                        suppressEveryone: O.Ay.isSuppressEveryoneEnabled(u),
                        muteScheduledEvents: O.Ay.isMuteScheduledEventsEnabled(u),
                    }))),
                    (en = D.A.updateGuildNotificationSettings),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "mention",
                                        checked: g.suppressEveryone,
                                        label: f.intl.format(f.t.OWiWAp, {}),
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
                                        label: f.intl.string(f.t["O/QdoD"]),
                                        action: () =>
                                            en(
                                                u,
                                                { suppress_roles: !g.suppressRoles },
                                                I.G_.suppressRoles(!g.suppressRoles),
                                            ),
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "hightlight",
                                        label: f.intl.string(f.t.gPuteJ),
                                        checked: g.highligths === R.guM.ENABLED,
                                        action: () =>
                                            en(
                                                u,
                                                {
                                                    notify_highlights:
                                                        g.highligths === R.guM.ENABLED ? R.guM.DISABLED : R.guM.ENABLED,
                                                },
                                                I.G_.highlights(g.highligths !== R.guM.ENABLED),
                                            ),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "event",
                                        checked: g.muteScheduledEvents,
                                        label: f.intl.string(f.t.ONG3Yz),
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
                                        label: f.intl.string(f.t.h1DL66),
                                        action: () =>
                                            en(u, { mobile_push: !g.mobilePush }, I.G_.mobilePush(!g.mobilePush)),
                                    }),
                                ],
                            }),
                        ],
                    })),
                ],
            })),
        eD = (0, x.A)(eu),
        em = (0, A.os)("GuildContextMenu"),
        eO =
            ((eo = (0, r.bG)([Y.Ay], () => Y.Ay.get("iar_testing"))),
            null != (ec = (0, r.bG)([p.default], () => p.default.getCurrentUser())) && ec.isStaff() && eo
                ? (0, n.jsx)(o.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, W.RV)(eu, "web_guild_context_menu"),
                      icon: w.i,
                      color: "danger",
                  })
                : null);
    function eI() {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await t.e("53485").then(t.bind(t, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: eu });
        });
    }
    return eu.features.has(R.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": f.intl.string(f.t.HpQykc),
              onSelect: eg,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          e_,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: f.intl.string(f.t.IlFwwR),
                              action: () =>
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("51960"),
                                          t.e("76542"),
                                          t.e("5871"),
                                          t.e("66380"),
                                          t.e("11883"),
                                          t.e("43549"),
                                          t.e("73084"),
                                          t.e("54630"),
                                          t.e("21403"),
                                          t.e("44414"),
                                          t.e("79743"),
                                      ]).then(t.bind(t, 79522));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: eu });
                                  }),
                          }),
                          eL,
                      ],
                  }),
                  eE
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: f.intl.string(f.t.Dv8gFT),
                                action: eI,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: eG }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": f.intl.string(f.t.HpQykc),
              onSelect: eg,
              children: [
                  (0, n.jsx)(o.rX, { children: eM }),
                  (0, n.jsx)(o.rX, { children: e_ }),
                  (0, n.jsxs)(o.rX, {
                      children: [ep, em || __OVERLAY__ ? null : eb, em && !__OVERLAY__ ? ej : null, eS, ef],
                  }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          eh ? null : eN,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: f.intl.string(f.t.BayiAo),
                                    action: () =>
                                        (0, a.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                t.e("51960"),
                                                t.e("76542"),
                                                t.e("5871"),
                                                t.e("66380"),
                                                t.e("11883"),
                                                t.e("43549"),
                                                t.e("73084"),
                                                t.e("54630"),
                                                t.e("21403"),
                                                t.e("44414"),
                                                t.e("79743"),
                                            ]).then(t.bind(t, 79522));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: eu });
                                        }),
                                }),
                          eL,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [ex, ey] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          eD,
                          !eE &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: f.intl.string(f.t.J2TBi3),
                                  action: eI,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: eO }),
                  (0, n.jsx)(o.rX, { children: eG }),
              ],
          });
}
function es(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: i, children: (0, n.jsx)(en, { ...e }) });
}
