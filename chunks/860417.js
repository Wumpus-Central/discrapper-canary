t.d(i, { default: () => ei });
var n = t(477900),
    s = t(284009),
    l = t.n(s),
    r = t(17928),
    a = t(192308),
    d = t(980707),
    c = t(477782),
    o = t(442433),
    u = t(793574),
    g = t(688810),
    h = t(359047),
    A = t(769591),
    p = t(36942),
    E = t(260509),
    b = t(280450),
    _ = t(287809),
    y = t(346247),
    x = t(810263),
    N = t(911612),
    f = t(664967);
t(582128);
var j = t(458294),
    S = t(567035),
    G = t(375708),
    L = t(507238),
    D = t(832712),
    M = t(568873),
    m = t(543465),
    I = t(477427),
    R = t(652215);
function v() {
    return [
        { setting: R.orn.ALL_MESSAGES, label: G.intl.string(G.t["n/bTaY"]) },
        { setting: R.orn.ONLY_MENTIONS, label: G.intl.format(G.t.L2hmYy, {}) },
        { setting: R.orn.NO_MESSAGES, label: G.intl.string(G.t.CtVGyQ) },
    ];
}
var T = t(585510),
    O = t(610136),
    P = t(910323),
    B = t(24873),
    k = t(594061),
    U = t(355097),
    X = t(138134),
    C = t(865116),
    H = t(928658),
    w = t(811893),
    Y = t(837057),
    F = t(310419),
    J = t(468689),
    V = t(576705),
    W = t(887501),
    Q = t(684407),
    z = t(219317),
    Z = t(267102),
    K = t(488995),
    q = t(153594),
    $ = t(531335);
function ee(e) {
    var i, s, u, g;
    let ee,
        ei,
        et,
        en,
        es,
        el,
        er,
        ea,
        ed,
        ec,
        eo,
        eu,
        eg,
        { guild: eh, onSelect: eA, hideSettings: ep } = e,
        eE = eh.id,
        eb = (0, r.bG)(
            [_.default],
            () => {
                let e = _.default.getCurrentUser();
                return (l()(null != e, "GuildContextMenu: user cannot be undefined"), (0, E.bM)(eh, e));
            },
            [eh],
        ),
        e_ = (0, $.A)({ guild: eh, source: R.PE1.GUILD_CONTEXT_MENU, channel: null }),
        ey = (0, q.A)(eE),
        ex = (0, L.A)(eh),
        eN =
            ((er = (function (e) {
                let {
                        suppressEveryone: i,
                        suppressRoles: t,
                        mobilePush: s,
                        messageNotifications: l,
                        notifyHighlights: a,
                    } = (0, r.cf)(
                        [m.Ay],
                        () => ({
                            suppressEveryone: m.Ay.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: m.Ay.isSuppressRolesEnabled(e.id),
                            mobilePush: m.Ay.isMobilePushEnabled(e.id),
                            messageNotifications: m.Ay.getMessageNotifications(e.id),
                            notifyHighlights: m.Ay.getNotifyHighlights(e.id),
                        }),
                        [e.id],
                    ),
                    d = a === R.guM.DISABLED,
                    o = (0, M.A)(e.id);
                function u(i, t) {
                    D.A.updateGuildNotificationSettings(e.id, i, t);
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(c.rX, {
                            children: v().map((e) => {
                                let { setting: i, label: t } = e;
                                return (0, n.jsx)(
                                    c.iD,
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
                        (0, n.jsxs)(c.rX, {
                            children: [
                                (0, n.jsx)(c.sL, {
                                    id: "suppress-everyone",
                                    label: G.intl.format(G.t.OWiWAp, {}),
                                    action: () => u({ suppress_everyone: !i }, I.G_.suppressEveryone(!i)),
                                    checked: i,
                                }),
                                (0, n.jsx)(c.sL, {
                                    id: "suppress-roles",
                                    label: G.intl.string(G.t["O/QdoD"]),
                                    action: () => u({ suppress_roles: !t }, I.G_.suppressRoles(!t)),
                                    checked: t,
                                }),
                                (0, n.jsx)(c.sL, {
                                    id: "suppress-highlights",
                                    label: G.intl.string(G.t.gPuteJ),
                                    action: () => {
                                        u(
                                            { notify_highlights: d ? R.guM.ENABLED : R.guM.DISABLED },
                                            I.G_.highlights(d),
                                        );
                                    },
                                    checked: d,
                                }),
                                o,
                            ],
                        }),
                        (0, n.jsx)(c.rX, {
                            children: (0, n.jsx)(c.sL, {
                                id: "mobile-push",
                                label: G.intl.string(G.t.h1DL66),
                                action: () => u({ mobile_push: !s }, I.G_.mobilePush(!s)),
                                checked: s,
                            }),
                        }),
                    ],
                });
            })(eh)),
            (ea = (0, r.bG)([m.Ay], () => m.Ay.getMessageNotifications(eh.id), [eh.id])),
            (ed = v()?.find((e) => {
                let { setting: i } = e;
                return i === ea;
            })?.label),
            null != er
                ? (0, n.jsx)(c.Dr, {
                      id: "guild-notifications",
                      label: G.intl.string(G.t.h850Ss),
                      subtext: ed,
                      action: () =>
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("386655"),
                                  t.e("614535"),
                                  t.e("242865"),
                                  t.e("956814"),
                                  t.e("16507"),
                              ]).then(t.bind(t, 868918));
                              return (i) => (0, n.jsx)(e, { ...i, guildId: eh.id });
                          }),
                      children: er,
                  })
                : null),
        ef = (function (e) {
            let i,
                t,
                s = (0, Z.aL)(),
                l = (function (e) {
                    let {
                        canManageGuild: i,
                        canManageRoles: t,
                        canBanMembers: n,
                        canManageNicknames: s,
                        canCreateEmojisAndStickers: l,
                        canManageEmojisAndStickers: a,
                        canManageWebhooks: d,
                        canViewAuditLog: c,
                    } = (0, r.cf)(
                        [V.A],
                        () => ({
                            canManageGuild: V.A.can(R.xBc.MANAGE_GUILD, e),
                            canManageRoles: V.A.can(R.xBc.MANAGE_ROLES, e),
                            canBanMembers: V.A.can(R.xBc.BAN_MEMBERS, e),
                            canManageNicknames: V.A.can(R.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: V.A.can(R.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: V.A.can(R.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: V.A.can(R.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: V.A.can(R.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || t || n || s || l || a || d || c;
                })(e);
            if (__OVERLAY__ || !l) return null;
            function d(i) {
                (J.A.open(e.id, i), s.dispatch(R.jej.POPOUT_CLOSE), (0, a.closeAllModals)());
            }
            return (0, n.jsx)(c.Dr, {
                id: "guild-settings",
                label: G.intl.string(G.t["154/bL"]),
                action: () => d(),
                children: ((i = V.A.getGuildPermissionProps(e)),
                (t = (0, W.b)(e.id).length > 0),
                z.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: t,
                    welcomeScreenEmpty: Q.A.isEmpty(e.id),
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
                            return (0, n.jsx)(c.Dr, { id: t, action: () => d(t), label: G.intl.string(G.t.nRtNqn) }, t);
                        case R.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                c.Dr,
                                {
                                    id: t,
                                    action: () => {
                                        (0, Y.transitionToGlobalDiscovery)({
                                            tab: K.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: F.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: w.t },
                                    icon: w.t,
                                    label: G.intl.string(G.t.AKcFUj),
                                },
                                t,
                            );
                        default:
                            let r = "string" == typeof s ? s : l;
                            if (null == r) return null;
                            return (0, n.jsx)(c.Dr, { id: t, action: () => d(t), label: r }, t);
                    }
                }),
            });
        })(eh),
        ej = (0, y.A)({
            guildId: eh.id,
            userId: b.default.getId(),
            analyticsLocation: {
                page: R.liQ.GUILD_CHANNEL,
                section: R.JJy.CHAT_USERNAME,
                object: R.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        eS = (0, N.A)(eh),
        eG = (0, h.A)(eh.id),
        eL = (0, x.A)(eh),
        eD =
            ((i = { section: R.JJy.GUILD_LIST }),
            (ec = eh.id),
            (eo = (0, r.bG)([j.default], () => j.default.getGuildHasUnreadIgnoreMuted(ec), [ec])),
            (0, n.jsx)(c.Dr, {
                id: "mark-guild-read",
                label: G.intl.string(G.t.e6RscS),
                icon: void 0,
                action: () => (0, S.A)([ec], i.section),
                disabled: !eo,
            })),
        eM = (0, p.A)(eh.id),
        em =
            ((s = eh.id),
            (0, n.jsxs)(c.Dr, {
                id: "notification",
                label: G.intl.string(G.t.HcoRu0),
                action: function () {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            t.e("386655"),
                            t.e("614535"),
                            t.e("242865"),
                            t.e("956814"),
                            t.e("16507"),
                        ]).then(t.bind(t, 868918));
                        return (i) => (0, n.jsx)(e, { ...i, guildId: s });
                    });
                },
                children: [
                    ((u = s),
                    (ee = (0, r.bG)([m.Ay], () => m.Ay.getGuildUnreadSetting(u))),
                    (ei = (0, r.bG)([m.Ay], () => m.Ay.getMessageNotifications(u))),
                    (et = (0, B.hJ)(ee, ei)),
                    (en = (function (e) {
                        let i = (0, T._g)(e),
                            t = (0, r.bG)([O.A], () => O.A.getGuildAlertSettings()[e]);
                        if (i && null != t)
                            return (0, n.jsxs)(c.Dr, {
                                id: "activity_alerts",
                                label: G.intl.string(G.t.D9yVAH),
                                children: [
                                    (0, n.jsx)(c.sL, {
                                        id: "activity_alerts_in_app",
                                        label: G.intl.string(G.t.u6dc5B),
                                        checked: !t.disableRaidAlertNag,
                                        action: () =>
                                            (0, k.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                },
                                                U.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                    (0, n.jsx)(c.sL, {
                                        id: "activity_alerts_push",
                                        label: G.intl.string(G.t.P8MG6q),
                                        checked: !t.disableRaidAlertPush,
                                        action: () =>
                                            (0, k.TG)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                },
                                                U.Sb.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                ],
                            });
                    })(u)),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(c.rX, {
                                children: [
                                    (0, n.jsx)(c.iD, {
                                        id: "everything",
                                        group: "notification-preset",
                                        checked: et === B.N9.ALL_MESSAGES,
                                        label: G.intl.string(G.t.hZrr6k),
                                        action: () => (0, P.i)(u, B.N9.ALL_MESSAGES),
                                    }),
                                    (0, n.jsx)(c.iD, {
                                        id: "hybrid",
                                        group: "notification-preset",
                                        checked: et === B.N9.HYBRID,
                                        label: G.intl.string(G.t.JzbSEY),
                                        action: () => (0, P.i)(u, B.N9.HYBRID),
                                    }),
                                    (0, n.jsx)(c.iD, {
                                        id: "essentials",
                                        group: "notification-preset",
                                        checked: et === B.N9.MENTIONS,
                                        label: G.intl.string(G.t.y59NJm),
                                        action: () => (0, P.i)(u, B.N9.MENTIONS),
                                    }),
                                    (0, n.jsx)(c.iD, {
                                        id: "nothing",
                                        group: "notification-preset",
                                        checked: et === B.N9.NOTHING,
                                        label: G.intl.string(G.t["pGn/bJ"]),
                                        action: () => (0, P.i)(u, B.N9.NOTHING),
                                    }),
                                ],
                            }),
                            null != en && (0, n.jsx)(c.rX, { children: en }),
                        ],
                    })),
                    ((g = s),
                    (es = (0, r.cf)([m.Ay], () => ({
                        highligths: m.Ay.getNotifyHighlights(g),
                        mobilePush: m.Ay.isMobilePushEnabled(g),
                        suppressRoles: m.Ay.isSuppressRolesEnabled(g),
                        suppressEveryone: m.Ay.isSuppressEveryoneEnabled(g),
                        muteScheduledEvents: m.Ay.isMuteScheduledEventsEnabled(g),
                    }))),
                    (el = D.A.updateGuildNotificationSettings),
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(c.rX, {
                                children: [
                                    (0, n.jsx)(c.sL, {
                                        id: "mention",
                                        checked: es.suppressEveryone,
                                        label: G.intl.format(G.t.OWiWAp, {}),
                                        action: () =>
                                            el(
                                                g,
                                                { suppress_everyone: !es.suppressEveryone },
                                                I.G_.suppressEveryone(!es.suppressEveryone),
                                            ),
                                    }),
                                    (0, n.jsx)(c.sL, {
                                        id: "roles",
                                        checked: es.suppressRoles,
                                        label: G.intl.string(G.t["O/QdoD"]),
                                        action: () =>
                                            el(
                                                g,
                                                { suppress_roles: !es.suppressRoles },
                                                I.G_.suppressRoles(!es.suppressRoles),
                                            ),
                                    }),
                                    (0, n.jsx)(c.sL, {
                                        id: "hightlight",
                                        label: G.intl.string(G.t.gPuteJ),
                                        checked: es.highligths === R.guM.ENABLED,
                                        action: () =>
                                            el(
                                                g,
                                                {
                                                    notify_highlights:
                                                        es.highligths === R.guM.ENABLED
                                                            ? R.guM.DISABLED
                                                            : R.guM.ENABLED,
                                                },
                                                I.G_.highlights(es.highligths !== R.guM.ENABLED),
                                            ),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(c.rX, {
                                children: [
                                    (0, n.jsx)(c.sL, {
                                        id: "event",
                                        checked: es.muteScheduledEvents,
                                        label: G.intl.string(G.t.ONG3Yz),
                                        action: () =>
                                            el(
                                                g,
                                                { mute_scheduled_events: !es.muteScheduledEvents },
                                                I.G_.mutedEvents(!es.muteScheduledEvents),
                                            ),
                                    }),
                                    (0, n.jsx)(c.sL, {
                                        id: "mobile_push",
                                        checked: es.mobilePush,
                                        label: G.intl.string(G.t.h1DL66),
                                        action: () =>
                                            el(g, { mobile_push: !es.mobilePush }, I.G_.mobilePush(!es.mobilePush)),
                                    }),
                                ],
                            }),
                        ],
                    })),
                ],
            })),
        eI = (0, f.A)(eh),
        eR = (0, A.os)("GuildContextMenu"),
        ev =
            ((eu = (0, r.bG)([C.Ay], () => C.Ay.get("iar_testing"))),
            null != (eg = (0, r.bG)([_.default], () => _.default.getCurrentUser())) && eg.isStaff() && eu
                ? (0, n.jsx)(c.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, H.RV)(eh, "web_guild_context_menu"),
                      icon: X.FlagIcon,
                      color: "danger",
                  })
                : null);
    function eT() {
        (0, a.openModalLazy)(async () => {
            let { default: e } = await t.e("553485").then(t.bind(t, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: eh });
        });
    }
    return eh.features.has(R.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: o.Z_,
              "aria-label": G.intl.string(G.t.HpQykc),
              onSelect: eA,
              children: [
                  (0, n.jsxs)(c.rX, {
                      children: [
                          e_,
                          (0, n.jsx)(c.Dr, {
                              id: "privacy",
                              label: G.intl.string(G.t.IlFwwR),
                              action: () =>
                                  (0, a.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          t.e("684986"),
                                          t.e("705871"),
                                          t.e("407408"),
                                          t.e("354902"),
                                          t.e("273084"),
                                          t.e("821403"),
                                          t.e("215890"),
                                          t.e("303198"),
                                      ]).then(t.bind(t, 382573));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: eh });
                                  }),
                          }),
                          ej,
                      ],
                  }),
                  eb
                      ? null
                      : (0, n.jsx)(c.rX, {
                            children: (0, n.jsx)(c.Dr, {
                                id: "leave-guild",
                                label: G.intl.string(G.t.Dv8gFT),
                                action: eT,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(c.rX, { children: eL }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: o.Z_,
              "aria-label": G.intl.string(G.t.HpQykc),
              onSelect: eA,
              children: [
                  (0, n.jsx)(c.rX, { children: eD }),
                  (0, n.jsx)(c.rX, { children: e_ }),
                  (0, n.jsxs)(c.rX, {
                      children: [ex, eR || __OVERLAY__ ? null : eN, eR && !__OVERLAY__ ? em : null, ey, eM],
                  }),
                  (0, n.jsxs)(c.rX, {
                      children: [
                          ep ? null : ef,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(c.Dr, {
                                    id: "privacy",
                                    label: G.intl.string(G.t.BayiAo),
                                    action: () =>
                                        (0, a.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                t.e("684986"),
                                                t.e("705871"),
                                                t.e("407408"),
                                                t.e("354902"),
                                                t.e("273084"),
                                                t.e("821403"),
                                                t.e("215890"),
                                                t.e("303198"),
                                            ]).then(t.bind(t, 382573));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: eh });
                                        }),
                                }),
                          ej,
                      ],
                  }),
                  (0, n.jsxs)(c.rX, { children: [eS, eG] }),
                  (0, n.jsxs)(c.rX, {
                      children: [
                          eI,
                          !eb &&
                              (0, n.jsx)(c.Dr, {
                                  id: "leave-guild",
                                  label: G.intl.string(G.t.J2TBi3),
                                  action: eT,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(c.rX, { children: ev }),
                  (0, n.jsx)(c.rX, { children: eL }),
              ],
          });
}
function ei(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: i, children: (0, n.jsx)(ee, { ...e }) });
}
