n.d(i, { default: () => eA });
var l = n(477900),
    t = n(582128),
    a = n(284009),
    o = n.n(a),
    c = n(650809),
    s = n(855986),
    d = n(873298),
    r = n(22231),
    u = n(192308),
    g = n(165862),
    I = n(477782),
    y = n(70688),
    A = n(625903),
    p = n(231483),
    b = n(104510),
    h = n(555704),
    x = n(245604),
    D = n(234020),
    j = n(782603),
    f = n(952270),
    m = n(686449),
    G = n(293260),
    v = n(5180),
    E = n(425912),
    P = n(173936),
    S = n(124077),
    C = n(989683),
    L = n(752222),
    U = n(792996),
    T = n(435558),
    M = n.n(T),
    _ = n(534890),
    w = n(970278),
    k = n(406704),
    N = n(323384),
    H = n(837057),
    O = n(310419),
    F = n(488995),
    B = n(346247),
    X = n(810263),
    W = n(214947);
let J = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var R = n(664967),
    Y = n(531335),
    Q = n(957316),
    V = n(974103),
    K = n(233824),
    z = n(359047),
    q = n(727419),
    Z = n(595818),
    $ = n(685073),
    ee = n(534400),
    ei = n(857071),
    en = n(36942),
    el = n(875317),
    et = n(383272),
    ea = n(594061),
    eo = n(617617),
    ec = n(260509),
    es = n(696451),
    ed = n(576705),
    er = n(543465),
    eu = n(287809),
    eg = n(129230),
    eI = n(652215),
    ey = n(242868);
let eA = t.memo(function (e) {
    var i, a;
    let T,
        eA,
        { guild: ep, onClose: eb, onSelect: eh } = e,
        ex = (0, s.bG)([eu.default], () => eu.default.getCurrentUser());
    (o()(null != ex, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            eg.default.track(eI.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: ep.id });
        }));
    let eD = (0, s.bG)([er.Ay], () => er.Ay.isGuildCollapsed(ep.id), [ep.id]),
        {
            canAccessSettings: ej,
            canManageChannels: ef,
            showGuildAnalytics: em,
        } = (0, s.cf)(
            [ed.A],
            () => ({
                canAccessSettings: ed.A.canAccessGuildSettings(ep),
                canManageChannels: ed.A.can(eI.xBc.MANAGE_CHANNELS, ep),
                showGuildAnalytics:
                    ed.A.can(eI.xBc.VIEW_GUILD_ANALYTICS, ep) && ep.features.has(eI.GuildFeatures.COMMUNITY),
            }),
            [ep],
        ),
        eG = (0, V.ic)(ep),
        ev = (0, ec.bM)(ep, ex),
        eE = (0, s.bG)([ei.A], () => ei.A.isLurking(ep.id), [ep.id]),
        eP = (0, s.bG)([es.Ay], () => es.Ay.isCurrentUserGuest(ep.id)),
        eS = (0, z.A)(ep.id, !0),
        eC = (0, G.Ay)(ep),
        eL = (0, Y.A)({ source: eI.PE1.GUILD_HEADER, guild: ep }),
        eU = (0, C.Ay)(ep, "guild_header_popout")
            ? (0, l.jsx)(I.Dr, {
                  id: "invite-to-linked-game-organization",
                  label: U.intl.formatToPlainString(L.default.EnTIIr, { noun: (0, S.A)({ displayNoun: null }) }),
                  icon: P.LinkIcon,
                  leadingAccessory: { type: "icon", icon: P.LinkIcon },
                  action: () => {
                      var e;
                      return (
                          (e = ep.id),
                          void (0, u.mM)(async () => {
                              let { default: i } = await Promise.all([
                                  n.e(652393),
                                  n.e(495786),
                                  n.e(728136),
                                  n.e(635864),
                                  n.e(447864),
                                  n.e(966308),
                                  n.e(248988),
                                  n.e(705308),
                              ]).then(n.bind(n, 418519));
                              return (n) => (0, l.jsx)(i, { guildId: e, ...n });
                          })
                      );
                  },
              })
            : null,
        eT = (0, B.A)({
            guildId: ep.id,
            userId: ex.id,
            analyticsLocation: { page: eI.liQ.GUILD_CHANNEL, section: eI.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        eM = ep.features.has(eI.GuildFeatures.HUB),
        e_ = (0, v.ai)(ep.id),
        ew = ep.id === eI.gNP,
        ek = (0, en.A)(ep.id, !0),
        eN =
            ((T = (0, k.H_)(ep)),
            (eA = (0, s.bG)([w.A], () => !M().isEmpty(w.A.getThreadsForGuild(ep.id)))),
            T && eA
                ? (0, l.jsx)(I.Dr, {
                      id: "active-threads",
                      label: U.intl.string(U.t.TM6err),
                      icon: _.ChatIcon,
                      leadingAccessory: { type: "icon", icon: _.ChatIcon },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e(374962),
                                  n.e(592e3),
                                  n.e(524434),
                                  n.e(849162),
                                  n.e(927517),
                                  n.e(126437),
                                  n.e(481647),
                                  n.e(749248),
                                  n.e(704434),
                                  n.e(900361),
                                  n.e(139970),
                                  n.e(508371),
                                  n.e(179049),
                                  n.e(412743),
                                  n.e(294857),
                                  n.e(713567),
                                  n.e(444567),
                                  n.e(695170),
                                  n.e(25572),
                                  n.e(895851),
                                  n.e(470215),
                              ]).then(n.bind(n, 400954));
                              return (i) => (0, l.jsx)(e, { guildId: ep.id, ...i });
                          });
                      },
                  })
                : null),
        eH = (0, l.jsx)(I.Dr, {
            id: "application-directory",
            label: U.intl.string(U.t.AKcFUj),
            icon: N.AppsIcon,
            leadingAccessory: { type: "icon", icon: N.AppsIcon },
            action: function () {
                (0, H.transitionToGlobalDiscovery)({
                    tab: F.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: O.sW.GUILD_HEADER_POPOUT }, guildId: ep.id },
                });
            },
        }),
        eO = (0, R.A)(ep, !0),
        eF = (function (e) {
            let { guildFriendsEnabled: i } = J.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(I.Dr, {
                      id: "friends",
                      label: U.intl.string(U.t.kYxEcH),
                      icon: W.FriendsIcon,
                      leadingAccessory: { type: "icon", icon: W.FriendsIcon },
                      action: function () {
                          (0, u.mM)(async () => {
                              let { default: i } = await Promise.all([n.e(673130), n.e(542048)]).then(
                                  n.bind(n, 151203),
                              );
                              return (n) => (0, l.jsx)(i, { guild: e, ...n });
                          });
                      },
                  })
                : null;
        })(ep),
        eB = (0, E.A)(),
        eX = ((i = ep.id), (a = "GuildHeaderPopout"), (0, et.DD)(i ?? void 0, a), null != (0, el.Kb)(i, a)),
        eW = (0, s.bG)([eo.A], () => eo.A.resolveGuildThemeSourcePreference(ep.id), [ep.id]),
        eJ = t.useCallback(() => {
            let e = eW === d.tI.GUILD ? d.tI.PERSONAL : d.tI.GUILD;
            (0, ea.XW)(ep.id, e);
        }, [ep.id, eW]),
        eR = (0, X.A)(ep, { showIcons: !0 }),
        eY = (0, $.Rg)(ep) && (0, $.q0)(ep),
        eQ = t.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await n.e(553485).then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: ep });
            });
        }, [ep]);
    return eE || eP
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eh,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: eb,
              "aria-label": U.intl.string(U.t.HpQykc),
              children: [
                  (0, l.jsx)(I.Dr, {
                      id: "leave-guild",
                      label: U.intl.string(U.t.J2TBi3),
                      icon: y.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                      action: () => {
                          q.A.leaveGuild(ep.id, !0);
                      },
                  }),
                  (0, l.jsx)(I.rX, { children: eR }),
              ],
          })
        : e_
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eh,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: eb,
                "aria-label": U.intl.string(U.t.HpQykc),
                children: eB,
            })
          : eM
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eh,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: eb,
                  "aria-label": U.intl.string(U.t.HpQykc),
                  children: [
                      (0, l.jsxs)(I.rX, {
                          children: [
                              ej
                                  ? (0, l.jsx)(I.Dr, {
                                        id: "settings",
                                        label: U.intl.string(U.t["154/bL"]),
                                        icon: A.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                        action: () => {
                                            q.A.open(ep.id, (0, Z.x)());
                                        },
                                    })
                                  : null,
                              eL,
                              (0, l.jsx)(I.Dr, {
                                  id: "privacy",
                                  label: U.intl.string(U.t.BayiAo),
                                  icon: p.ShieldIcon,
                                  leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                  action: () =>
                                      (0, u.mM)(async () => {
                                          let { default: e } = await Promise.all([
                                              n.e(684986),
                                              n.e(759174),
                                              n.e(705871),
                                              n.e(340346),
                                              n.e(523638),
                                              n.e(943534),
                                              n.e(767699),
                                              n.e(855979),
                                          ]).then(n.bind(n, 632038));
                                          return (i) => (0, l.jsx)(e, { ...i, guild: ep });
                                      }),
                              }),
                              eT,
                          ],
                      }),
                      ev
                          ? null
                          : (0, l.jsx)(I.rX, {
                                children: (0, l.jsx)(I.Dr, {
                                    id: "leave",
                                    label: U.intl.string(U.t.Dv8gFT),
                                    icon: y.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                    color: "danger",
                                    action: eQ,
                                }),
                            }),
                  ],
              })
            : ew
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eh,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: eb,
                    "aria-label": U.intl.string(U.t.HpQykc),
                    children: [
                        (0, l.jsxs)(I.rX, {
                            children: [
                                (0, l.jsx)(I.Dr, {
                                    id: "premium-subscribe",
                                    label: U.intl.string(U.t.VJEVbu),
                                    icon: b.BoostGemIcon,
                                    leadingAccessory: { type: "icon", icon: b.BoostGemIcon },
                                    action: () => {
                                        (0, K.K4)({
                                            guildId: ep.id,
                                            location: { section: eI.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eX
                                    ? (0, l.jsx)(I.sL, {
                                          id: "use-server-theme",
                                          label: U.intl.string(U.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: c.PaintPaletteIcon },
                                          checked: eW === d.tI.GUILD,
                                          action: eJ,
                                      })
                                    : null,
                                eY &&
                                    (0, l.jsx)(I.Dr, {
                                        id: "guild-tag",
                                        label: U.intl.string(ey.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(ee.o9, {
                                                guildId: ep.id,
                                                guildTag: ep.profile.tag,
                                                guildBadge: ep.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(ee.o9, {
                                            guildId: ep.id,
                                            guildBadge: ep.profile.badge,
                                            guildTag: ep.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = ep.id),
                                                void (0, u.mM)(async () => {
                                                    let { default: i } = await Promise.all([
                                                        n.e(212037),
                                                        n.e(107033),
                                                        n.e(115368),
                                                        n.e(495748),
                                                        n.e(444790),
                                                        n.e(881785),
                                                    ]).then(n.bind(n, 404128));
                                                    return (n) => (0, l.jsx)(i, { guildId: e, ...n });
                                                })
                                            );
                                        },
                                    }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eL,
                                eU,
                                ej
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "settings",
                                          label: U.intl.string(U.t["154/bL"]),
                                          icon: A.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                          action: () => {
                                              q.A.open(ep.id, (0, Z.x)());
                                          },
                                      })
                                    : null,
                                em
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "insights",
                                          label: U.intl.string(U.t["0wWfUG"]),
                                          icon: h.AnalyticsIcon,
                                          leadingAccessory: { type: "icon", icon: h.AnalyticsIcon },
                                          action: () => q.A.open(ep.id, eI.BEX.ANALYTICS),
                                      })
                                    : null,
                                ef
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-channel",
                                                  label: U.intl.string(U.t["fUYU+j"]),
                                                  icon: x.CirclePlusIcon,
                                                  leadingAccessory: { type: "icon", icon: x.CirclePlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(778799),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(460773),
                                                              n.e(208018),
                                                              n.e(589916),
                                                              n.e(298107),
                                                              n.e(526778),
                                                              n.e(819193),
                                                              n.e(637038),
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: eI.rbe.GUILD_TEXT,
                                                                  guildId: ep.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-category",
                                                  label: U.intl.string(U.t["ISN+NM"]),
                                                  icon: D.FolderPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: D.FolderPlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(778799),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(460773),
                                                              n.e(208018),
                                                              n.e(589916),
                                                              n.e(298107),
                                                              n.e(526778),
                                                              n.e(819193),
                                                              n.e(637038),
                                                              n.e(507775),
                                                              n.e(524521),
                                                              n.e(358608),
                                                              n.e(640317),
                                                          ]).then(n.bind(n, 410380));
                                                          return (i) =>
                                                              (0, l.jsx)(e, {
                                                                  ...i,
                                                                  channelType: eI.rbe.GUILD_CATEGORY,
                                                                  guildId: ep.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eS,
                                eN,
                                eH,
                                eC,
                                eF,
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                ek,
                                (0, l.jsx)(I.Dr, {
                                    id: "notifications",
                                    label: U.intl.string(U.t.h850Ss),
                                    icon: j.BellIcon,
                                    leadingAccessory: { type: "icon", icon: j.BellIcon },
                                    action: () =>
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(635958),
                                                n.e(207998),
                                                n.e(534266),
                                                n.e(308555),
                                                n.e(676156),
                                                n.e(848625),
                                                n.e(66580),
                                                n.e(694529),
                                                n.e(956814),
                                                n.e(652748),
                                            ]).then(n.bind(n, 131527));
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: ep.id });
                                        }),
                                }),
                                (0, l.jsx)(I.Dr, {
                                    id: "privacy",
                                    label: U.intl.string(U.t.BayiAo),
                                    icon: p.ShieldIcon,
                                    leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                    action: () =>
                                        (0, u.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(684986),
                                                n.e(759174),
                                                n.e(705871),
                                                n.e(340346),
                                                n.e(523638),
                                                n.e(943534),
                                                n.e(767699),
                                                n.e(855979),
                                            ]).then(n.bind(n, 632038));
                                            return (i) => (0, l.jsx)(e, { ...i, guild: ep });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eT,
                                (0, l.jsx)(I.sL, {
                                    id: "hide-muted-channels",
                                    label: U.intl.string(U.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: f.EyeSlashIcon },
                                    checked: eD,
                                    action: () => m.A.toggleCollapseGuild(ep.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eO,
                                eG && ep.features.has(eI.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "report-raid",
                                          label: U.intl.string(U.t.cswId3),
                                          icon: p.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, Q.M)(ep.id),
                                      })
                                    : null,
                                ev
                                    ? null
                                    : (0, l.jsx)(I.Dr, {
                                          id: "leave",
                                          label: U.intl.string(U.t.J2TBi3),
                                          icon: y.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                          color: "danger",
                                          action: eQ,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(I.rX, { children: eR }),
                    ],
                });
});
