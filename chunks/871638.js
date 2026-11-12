t.d(i, { default: () => en });
var n = t(477900),
    l = t(284009),
    s = t.n(l),
    r = t(855986),
    a = t(192308),
    d = t(165862),
    o = t(477782),
    c = t(442433),
    u = t(793574),
    g = t(688810),
    A = t(359047),
    f = t(36942),
    b = t(260509),
    E = t(46653),
    h = t(287809),
    _ = t(346247),
    S = t(810263),
    x = t(911612),
    L = t(664967);
t(582128);
var p = t(458294),
    j = t(567035),
    m = t(792996),
    N = t(711014),
    I = t(263715),
    y = t(36412),
    M = t(727479),
    G = t(507238),
    D = t(832712),
    O = t(568873),
    T = t(769591),
    v = t(393432),
    R = t(543465),
    U = t(477427),
    X = t(652215),
    B = t(790782),
    P = t(355097);
function C(e) {
    return [
        { setting: X.orn.ALL_MESSAGES, label: m.intl.string(m.t["n/bTaY"]) },
        ...(e ? [{ setting: X.orn.ONLY_MENTIONS, label: m.intl.string(m.t.JzbSEY), allUnreads: !0 }] : []),
        { setting: X.orn.ONLY_MENTIONS, label: m.intl.format(m.t.L2hmYy, {}) },
        { setting: X.orn.NO_MESSAGES, label: m.intl.string(m.t.CtVGyQ) },
    ];
}
var Y = t(138134),
    k = t(865116),
    w = t(928658),
    F = t(811893),
    H = t(837057),
    W = t(310419),
    J = t(727419),
    V = t(576705),
    z = t(602881),
    Q = t(887501),
    K = t(684407),
    q = t(541223),
    Z = t(267102),
    $ = t(488995),
    ee = t(153594),
    ei = t(531335);
function et(e) {
    var i;
    let l,
        u,
        g,
        et,
        { guild: en, onSelect: el, hideSettings: es } = e,
        er = en.id,
        ea = (0, r.bG)(
            [h.default],
            () => {
                let e = h.default.getCurrentUser();
                return (s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, b.bM)(en, e));
            },
            [en],
        ),
        ed = (0, ei.A)({ guild: en, source: X.PE1.GUILD_CONTEXT_MENU, channel: null }),
        eo = (0, ee.A)(er),
        ec = (0, G.A)(en),
        eu = (function (e) {
            let i = (function (e) {
                    let i = (0, T.os)("GuildNotificationItems"),
                        {
                            suppressEveryone: t,
                            suppressRoles: l,
                            mobilePush: s,
                            messageNotifications: a,
                            notifyHighlights: d,
                            unreadSetting: c,
                        } = (0, r.cf)(
                            [R.Ay],
                            () => ({
                                suppressEveryone: R.Ay.isSuppressEveryoneEnabled(e.id),
                                suppressRoles: R.Ay.isSuppressRolesEnabled(e.id),
                                mobilePush: R.Ay.isMobilePushEnabled(e.id),
                                messageNotifications: R.Ay.getMessageNotifications(e.id),
                                notifyHighlights: R.Ay.getNotifyHighlights(e.id),
                                unreadSetting: R.Ay.getGuildUnreadSetting(e.id),
                            }),
                            [e.id],
                        ),
                        u = d === X.guM.DISABLED,
                        g = (0, O.A)(e.id);
                    function A(i, t) {
                        D.A.updateGuildNotificationSettings(e.id, i, t);
                    }
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.rX, {
                                children: C(i).map((t) => {
                                    let { setting: l, label: s, allUnreads: r } = t,
                                        d = `${l}-${!0 === r}`;
                                    return (0, n.jsx)(
                                        o.iD,
                                        {
                                            group: "guild-notifications",
                                            id: d,
                                            label: s,
                                            action: () =>
                                                (function (t, n) {
                                                    if (!i)
                                                        return void A(
                                                            { message_notifications: t },
                                                            U.G_.notifications(t),
                                                        );
                                                    let l =
                                                        n || t === X.orn.ALL_MESSAGES
                                                            ? P.n3.UNREADS_ALL_MESSAGES
                                                            : P.n3.UNREADS_ONLY_MENTIONS;
                                                    A(
                                                        {
                                                            message_notifications: t,
                                                            flags: (0, v.md)(R.Ay.getGuildFlags(e.id), l),
                                                        },
                                                        U.G_.notifications(t),
                                                    );
                                                })(l, !0 === r),
                                            checked:
                                                !0 === t.allUnreads
                                                    ? a === X.orn.ONLY_MENTIONS && c === B.e.ALL_MESSAGES
                                                    : i && t.setting === X.orn.ONLY_MENTIONS
                                                      ? a === X.orn.ONLY_MENTIONS && c !== B.e.ALL_MESSAGES
                                                      : t.setting === a,
                                        },
                                        d,
                                    );
                                }),
                            }),
                            (0, n.jsxs)(o.rX, {
                                children: [
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-everyone",
                                        label: m.intl.format(m.t.OWiWAp, {}),
                                        action: () => A({ suppress_everyone: !t }, U.G_.suppressEveryone(!t)),
                                        checked: t,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-roles",
                                        label: m.intl.string(m.t["O/QdoD"]),
                                        action: () => A({ suppress_roles: !l }, U.G_.suppressRoles(!l)),
                                        checked: l,
                                    }),
                                    (0, n.jsx)(o.sL, {
                                        id: "suppress-highlights",
                                        label: m.intl.string(m.t.gPuteJ),
                                        action: () => {
                                            A(
                                                { notify_highlights: u ? X.guM.ENABLED : X.guM.DISABLED },
                                                U.G_.highlights(u),
                                            );
                                        },
                                        checked: u,
                                    }),
                                    g,
                                ],
                            }),
                            (0, n.jsx)(o.rX, {
                                children: (0, n.jsx)(o.sL, {
                                    id: "mobile-push",
                                    label: m.intl.string(m.t.h1DL66),
                                    action: () => A({ mobile_push: !s }, U.G_.mobilePush(!s)),
                                    checked: s,
                                }),
                            }),
                        ],
                    });
                })(e),
                l = (0, T.os)("GuildNotificationItems"),
                { messageNotifications: s, unreadSetting: d } = (0, r.cf)(
                    [R.Ay],
                    () => ({
                        messageNotifications: R.Ay.getMessageNotifications(e.id),
                        unreadSetting: R.Ay.getGuildUnreadSetting(e.id),
                    }),
                    [e.id],
                ),
                c =
                    l && s === X.orn.ONLY_MENTIONS && d === B.e.ALL_MESSAGES
                        ? m.intl.string(m.t.JzbSEY)
                        : C(!1).find((e) => {
                              let { setting: i } = e;
                              return i === s;
                          })?.label;
            return null != i
                ? (0, n.jsx)(o.Dr, {
                      id: "guild-notifications",
                      label: m.intl.string(m.t.h850Ss),
                      subtext: c,
                      action: () =>
                          (0, a.mM)(async () => {
                              let { default: i } = await Promise.all([t.e(534266), t.e(956814), t.e(652748)]).then(
                                  t.bind(t, 131527),
                              );
                              return (t) => (0, n.jsx)(i, { ...t, guildId: e.id });
                          }),
                      children: i,
                  })
                : null;
        })(en),
        eg = (function (e) {
            let i,
                t,
                l = (0, Z.aL)(),
                s = (function (e) {
                    let {
                        canManageGuild: i,
                        canManageRoles: t,
                        canBanMembers: n,
                        canManageNicknames: l,
                        canCreateEmojisAndStickers: s,
                        canManageEmojisAndStickers: a,
                        canManageWebhooks: d,
                        canViewAuditLog: o,
                    } = (0, r.cf)(
                        [V.A],
                        () => ({
                            canManageGuild: V.A.can(X.xBc.MANAGE_GUILD, e),
                            canManageRoles: V.A.can(X.xBc.MANAGE_ROLES, e),
                            canBanMembers: V.A.can(X.xBc.BAN_MEMBERS, e),
                            canManageNicknames: V.A.can(X.xBc.MANAGE_NICKNAMES, e),
                            canCreateEmojisAndStickers: V.A.can(X.xBc.CREATE_GUILD_EXPRESSIONS, e),
                            canManageEmojisAndStickers: V.A.can(X.xBc.MANAGE_GUILD_EXPRESSIONS, e),
                            canManageWebhooks: V.A.can(X.xBc.MANAGE_WEBHOOKS, e),
                            canViewAuditLog: V.A.can(X.xBc.VIEW_AUDIT_LOG, e),
                        }),
                        [e],
                    );
                    return i || t || n || l || s || a || d || o;
                })(e);
            if (__OVERLAY__ || !s) return null;
            function d(i) {
                (J.A.open(e.id, i), l.dispatch(X.jej.POPOUT_CLOSE), (0, a.s7)());
            }
            return (0, n.jsx)(o.Dr, {
                id: "guild-settings",
                label: m.intl.string(m.t["154/bL"]),
                action: () => d(),
                children: ((i = V.A.getGuildPermissionProps(e)),
                (t = (0, Q.b)(e.id).length > 0),
                q.Ay.generateSections({
                    showDirtyGuildTemplateIndicator: !1,
                    ...i,
                    canUnlinkChannels: t,
                    welcomeScreenEmpty: K.A.isEmpty(e.id),
                    isLinkedGameOrganizationEnabled: (0, z.Dl)(e.id, "get-guild-settings-sections"),
                })
                    .filter((e) => {
                        let { section: i } = e;
                        return "HEADER" !== i && "DIVIDER" !== i;
                    })
                    .filter((e) => null == e.predicate || e.predicate())).map((i) => {
                    let { section: t, label: l, ariaLabel: s } = i;
                    switch (t) {
                        case X.BEX.DELETE:
                            return null;
                        case X.BEX.COMMUNITY:
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: m.intl.string(m.t.nRtNqn) }, t);
                        case X.BEX.APP_DIRECTORY:
                            return (0, n.jsx)(
                                o.Dr,
                                {
                                    id: t,
                                    action: () => {
                                        (0, H.transitionToGlobalDiscovery)({
                                            tab: $.GlobalDiscoveryTab.APPS,
                                            newSessionState: {
                                                guildId: e.id,
                                                entrypoint: { name: W.sW.GUILD_HEADER_POPOUT },
                                            },
                                        });
                                    },
                                    trailingIndicator: { type: "icon", icon: F.WindowLaunchIcon },
                                    icon: F.WindowLaunchIcon,
                                    label: m.intl.string(m.t.AKcFUj),
                                },
                                t,
                            );
                        default:
                            let r = "string" == typeof l ? l : s;
                            if (null == r) return null;
                            return (0, n.jsx)(o.Dr, { id: t, action: () => d(t), label: r }, t);
                    }
                }),
            });
        })(en),
        eA = (0, _.A)({
            guildId: en.id,
            userId: E.default.getId(),
            analyticsLocation: {
                page: X.liQ.GUILD_CHANNEL,
                section: X.JJy.CHAT_USERNAME,
                object: X.ZSU.CONTEXT_MENU_ITEM,
            },
        }),
        ef = (0, x.A)(en),
        eb = (0, A.A)(en.id),
        eE = (0, S.A)(en),
        eh =
            ((i = { section: X.JJy.GUILD_LIST }),
            (l = en.id),
            (u = (0, r.bG)([p.default], () => p.default.getGuildHasUnreadIgnoreMuted(l), [l])),
            (0, n.jsx)(o.Dr, {
                id: "mark-guild-read",
                label: m.intl.string(m.t.e6RscS),
                icon: void 0,
                action: () => (0, j.A)([l], i.section),
                disabled: !u,
            })),
        e_ = (0, f.A)(en.id),
        eS = (0, L.A)(en),
        ex = (function (e) {
            let i = (function (e) {
                let [i] = (0, r.yK)([N.Ay], () => {
                        let e = N.Ay.getGuildsTree();
                        return [e, e.version];
                    }),
                    t = i.getNode(e),
                    n = t?.parentId,
                    l = null != n ? i.getNode(n) : void 0,
                    s = l?.children ?? i.getRoots(),
                    a = s.length > 1 ? { first: s[0], last: s[s.length - 1] } : null,
                    d = i.getRoots().filter((e) => e.type === I.PJ.FOLDER);
                return null == t || (0 === d.length && null == a)
                    ? null
                    : {
                          label: m.intl.string(m.t.A95Fzm),
                          destinationsLabel: m.intl.string(m.t.znwvG4),
                          destinations:
                              d.length > 0
                                  ? [
                                        { folderId: null, label: m.intl.string(m.t.IfgLzT), disabled: null == n },
                                        ...d.map((e) => ({ folderId: e.id, label: (0, y.M)(e), disabled: e.id === n })),
                                    ]
                                  : [],
                          placements:
                              null != a
                                  ? {
                                        firstLabel: m.intl.string(null != l ? m.t["9qpRrY"] : m.t.IMqgs9),
                                        lastLabel: m.intl.string(null != l ? m.t.ytlaCY : m.t["8fQe3x"]),
                                        isFirst: a.first === t,
                                        isLast: a.last === t,
                                        moveFirst: () => (0, M.A)(e, a.first.id, !1),
                                        moveLast: () => (0, M.A)(e, a.last.id, !0),
                                    }
                                  : null,
                          moveTo: function (i) {
                              if (null == i) {
                                  if (null == n) return;
                                  (0, M.A)(e, n, !0);
                                  return;
                              }
                              (0, M.A)(e, i, !0, !0);
                          },
                      };
            })(e);
            if (null == i) return null;
            let t = i.destinations.find((e) => null == e.folderId),
                l = i.destinations.filter((e) => null != e.folderId),
                { placements: s } = i;
            return (0, n.jsxs)(o.Dr, {
                id: "move-to",
                label: i.label,
                children: [
                    (0, n.jsx)(o.rX, {
                        children:
                            l.length > 0
                                ? (0, n.jsxs)(o.Dr, {
                                      id: "move-to-folder",
                                      label: i.destinationsLabel,
                                      children: [
                                          null != t
                                              ? (0, n.jsx)(o.rX, {
                                                    children: (0, n.jsx)(o.Dr, {
                                                        id: "no-folder",
                                                        label: t.label,
                                                        disabled: t.disabled,
                                                        action: () => i.moveTo(null),
                                                    }),
                                                })
                                              : null,
                                          (0, n.jsx)(o.rX, {
                                              children: l.map((e) =>
                                                  (0, n.jsx)(
                                                      o.Dr,
                                                      {
                                                          id: String(e.folderId),
                                                          label: e.label,
                                                          disabled: e.disabled,
                                                          action: () => i.moveTo(e.folderId),
                                                      },
                                                      e.folderId,
                                                  ),
                                              ),
                                          }),
                                      ],
                                  })
                                : null,
                    }),
                    (0, n.jsx)(o.rX, {
                        children:
                            null != s
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(o.Dr, {
                                              id: "move-to-first",
                                              label: s.firstLabel,
                                              disabled: s.isFirst,
                                              action: s.moveFirst,
                                          }),
                                          (0, n.jsx)(o.Dr, {
                                              id: "move-to-last",
                                              label: s.lastLabel,
                                              disabled: s.isLast,
                                              action: s.moveLast,
                                          }),
                                      ],
                                  })
                                : null,
                    }),
                ],
            });
        })(er),
        eL =
            ((g = (0, r.bG)([k.Ay], () => k.Ay.get("iar_testing"))),
            null != (et = (0, r.bG)([h.default], () => h.default.getCurrentUser())) && et.isStaff() && g
                ? (0, n.jsx)(o.Dr, {
                      id: "staff-test-guild-report",
                      label: "[STAFF] Test Guild Report",
                      action: () => (0, w.RV)(en, "web_guild_context_menu"),
                      icon: Y.FlagIcon,
                      color: "danger",
                  })
                : null);
    function ep() {
        (0, a.mM)(async () => {
            let { default: e } = await t.e(553485).then(t.bind(t, 20508));
            return (i) => (0, n.jsx)(e, { ...i, guild: en });
        });
    }
    return en.features.has(X.GuildFeatures.HUB)
        ? (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": m.intl.string(m.t.HpQykc),
              onSelect: el,
              children: [
                  (0, n.jsxs)(o.rX, {
                      children: [
                          ed,
                          (0, n.jsx)(o.Dr, {
                              id: "privacy",
                              label: m.intl.string(m.t.IlFwwR),
                              action: () =>
                                  (0, a.mM)(async () => {
                                      let { default: e } = await Promise.all([
                                          t.e(684986),
                                          t.e(759174),
                                          t.e(705871),
                                          t.e(340346),
                                          t.e(523638),
                                          t.e(943534),
                                          t.e(273084),
                                          t.e(990080),
                                          t.e(354565),
                                          t.e(855979),
                                      ]).then(t.bind(t, 632038));
                                      return (i) => (0, n.jsx)(e, { ...i, guild: en });
                                  }),
                          }),
                          eA,
                      ],
                  }),
                  ea
                      ? null
                      : (0, n.jsx)(o.rX, {
                            children: (0, n.jsx)(o.Dr, {
                                id: "leave-guild",
                                label: m.intl.string(m.t.Dv8gFT),
                                action: ep,
                                color: "danger",
                            }),
                        }),
                  (0, n.jsx)(o.rX, { children: eE }),
              ],
          })
        : (0, n.jsxs)(d.W, {
              "data-menu-migrated": !0,
              navId: "guild-context",
              onClose: c.Z_,
              "aria-label": m.intl.string(m.t.HpQykc),
              onSelect: el,
              children: [
                  (0, n.jsx)(o.rX, { children: eh }),
                  (0, n.jsx)(o.rX, { children: ed }),
                  (0, n.jsxs)(o.rX, { children: [ec, __OVERLAY__ ? null : eu, eo, e_] }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          es ? null : eg,
                          __OVERLAY__
                              ? null
                              : (0, n.jsx)(o.Dr, {
                                    id: "privacy",
                                    label: m.intl.string(m.t.BayiAo),
                                    action: () =>
                                        (0, a.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                t.e(684986),
                                                t.e(759174),
                                                t.e(705871),
                                                t.e(340346),
                                                t.e(523638),
                                                t.e(943534),
                                                t.e(273084),
                                                t.e(990080),
                                                t.e(354565),
                                                t.e(855979),
                                            ]).then(t.bind(t, 632038));
                                            return (i) => (0, n.jsx)(e, { ...i, guild: en });
                                        }),
                                }),
                          eA,
                      ],
                  }),
                  (0, n.jsxs)(o.rX, { children: [ef, eb] }),
                  (0, n.jsx)(o.rX, { children: ex }),
                  (0, n.jsxs)(o.rX, {
                      children: [
                          eS,
                          !ea &&
                              (0, n.jsx)(o.Dr, {
                                  id: "leave-guild",
                                  label: m.intl.string(m.t.J2TBi3),
                                  action: ep,
                                  color: "danger",
                              }),
                      ],
                  }),
                  (0, n.jsx)(o.rX, { children: eL }),
                  (0, n.jsx)(o.rX, { children: eE }),
              ],
          });
}
function en(e) {
    let { analyticsLocations: i } = (0, g.Ay)(u.A.CONTEXT_MENU);
    return (0, n.jsx)(g.f5, { value: i, children: (0, n.jsx)(et, { ...e }) });
}
