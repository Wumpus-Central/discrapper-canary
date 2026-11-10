n.d(i, { default: () => eh });
var l = n(477900),
    t = n(582128),
    a = n(284009),
    o = n.n(a),
    c = n(650809),
    d = n(855986),
    s = n(873298),
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
    f = n(234020),
    D = n(782603),
    j = n(952270),
    m = n(686449),
    G = n(293260),
    v = n(5180),
    E = n(425912),
    P = n(173936),
    S = n(839516),
    C = n(136463),
    L = n(124077),
    U = n(899360),
    T = n(989683),
    M = n(752222),
    _ = n(792996),
    w = n(435558),
    k = n.n(w),
    N = n(534890),
    H = n(970278),
    O = n(406704),
    F = n(323384),
    B = n(837057),
    X = n(310419),
    W = n(488995),
    J = n(346247),
    R = n(810263),
    Y = n(214947);
let Q = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var V = n(664967),
    z = n(531335),
    K = n(957316),
    q = n(974103),
    Z = n(233824),
    $ = n(359047),
    ee = n(727419),
    ei = n(595818),
    en = n(685073),
    el = n(534400),
    et = n(857071),
    ea = n(36942),
    eo = n(875317),
    ec = n(383272),
    ed = n(594061),
    es = n(617617),
    er = n(260509),
    eu = n(696451),
    eg = n(576705),
    eI = n(543465),
    ey = n(287809),
    eA = n(129230),
    ep = n(652215),
    eb = n(242868);
let eh = t.memo(function (e) {
    var i, a;
    let w,
        eh,
        { guild: ex, onClose: ef, onSelect: eD } = e,
        ej = (0, d.bG)([ey.default], () => ey.default.getCurrentUser());
    (o()(null != ej, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            eA.default.track(ep.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: ex.id });
        }));
    let em = (0, d.bG)([eI.Ay], () => eI.Ay.isGuildCollapsed(ex.id), [ex.id]),
        {
            canAccessSettings: eG,
            canManageChannels: ev,
            showGuildAnalytics: eE,
        } = (0, d.cf)(
            [eg.A],
            () => ({
                canAccessSettings: eg.A.canAccessGuildSettings(ex),
                canManageChannels: eg.A.can(ep.xBc.MANAGE_CHANNELS, ex),
                showGuildAnalytics:
                    eg.A.can(ep.xBc.VIEW_GUILD_ANALYTICS, ex) && ex.features.has(ep.GuildFeatures.COMMUNITY),
            }),
            [ex],
        ),
        eP = (0, q.ic)(ex),
        eS = (0, er.bM)(ex, ej),
        eC = (0, d.bG)([et.A], () => et.A.isLurking(ex.id), [ex.id]),
        eL = (0, d.bG)([eu.Ay], () => eu.Ay.isCurrentUserGuest(ex.id)),
        eU = (0, $.A)(ex.id, !0),
        eT = (0, G.Ay)(ex),
        eM = (0, z.A)({ source: ep.PE1.GUILD_HEADER, guild: ex }),
        e_ = (function (e) {
            let i = (0, T.Ay)(e, "guild_header_popout"),
                { data: t } = (0, C.c)(i ? e.id : null);
            if (!i) return null;
            let a = null != t && (0, S.A)(t);
            return (0, l.jsx)(I.Dr, {
                id: "invite-to-linked-game-organization",
                label: _.intl.formatToPlainString(M.default.EnTIIr, { noun: (0, L.A)({ displayNoun: null }) }),
                subtext: a ? (0, U.zA)(t) : void 0,
                disabled: a,
                icon: P.LinkIcon,
                leadingAccessory: { type: "icon", icon: P.LinkIcon },
                action: () => {
                    var i;
                    return (
                        (i = e.id),
                        void (0, u.mM)(async () => {
                            let { default: e } = await Promise.all([
                                n.e(652393),
                                n.e(495786),
                                n.e(728136),
                                n.e(635864),
                                n.e(447864),
                                n.e(248988),
                                n.e(705308),
                            ]).then(n.bind(n, 418519));
                            return (n) => (0, l.jsx)(e, { guildId: i, ...n });
                        })
                    );
                },
            });
        })(ex),
        ew = (0, J.A)({
            guildId: ex.id,
            userId: ej.id,
            analyticsLocation: { page: ep.liQ.GUILD_CHANNEL, section: ep.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        ek = ex.features.has(ep.GuildFeatures.HUB),
        eN = (0, v.ai)(ex.id),
        eH = ex.id === ep.gNP,
        eO = (0, ea.A)(ex.id, !0),
        eF =
            ((w = (0, O.H_)(ex)),
            (eh = (0, d.bG)([H.A], () => !k().isEmpty(H.A.getThreadsForGuild(ex.id)))),
            w && eh
                ? (0, l.jsx)(I.Dr, {
                      id: "active-threads",
                      label: _.intl.string(_.t.TM6err),
                      icon: N.ChatIcon,
                      leadingAccessory: { type: "icon", icon: N.ChatIcon },
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
                              return (i) => (0, l.jsx)(e, { guildId: ex.id, ...i });
                          });
                      },
                  })
                : null),
        eB = (0, l.jsx)(I.Dr, {
            id: "application-directory",
            label: _.intl.string(_.t.AKcFUj),
            icon: F.AppsIcon,
            leadingAccessory: { type: "icon", icon: F.AppsIcon },
            action: function () {
                (0, B.transitionToGlobalDiscovery)({
                    tab: W.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: X.sW.GUILD_HEADER_POPOUT }, guildId: ex.id },
                });
            },
        }),
        eX = (0, V.A)(ex, !0),
        eW = (function (e) {
            let { guildFriendsEnabled: i } = Q.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(I.Dr, {
                      id: "friends",
                      label: _.intl.string(_.t.kYxEcH),
                      icon: Y.FriendsIcon,
                      leadingAccessory: { type: "icon", icon: Y.FriendsIcon },
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
        })(ex),
        eJ = (0, E.A)(),
        eR = ((i = ex.id), (a = "GuildHeaderPopout"), (0, ec.DD)(i ?? void 0, a), null != (0, eo.Kb)(i, a)),
        eY = (0, d.bG)([es.A], () => es.A.resolveGuildThemeSourcePreference(ex.id), [ex.id]),
        eQ = t.useCallback(() => {
            let e = eY === s.tI.GUILD ? s.tI.PERSONAL : s.tI.GUILD;
            (0, ed.XW)(ex.id, e);
        }, [ex.id, eY]),
        eV = (0, R.A)(ex, { showIcons: !0 }),
        ez = (0, en.Rg)(ex) && (0, en.q0)(ex),
        eK = t.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await n.e(553485).then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: ex });
            });
        }, [ex]);
    return eC || eL
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: eD,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ef,
              "aria-label": _.intl.string(_.t.HpQykc),
              children: [
                  (0, l.jsx)(I.Dr, {
                      id: "leave-guild",
                      label: _.intl.string(_.t.J2TBi3),
                      icon: y.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                      action: () => {
                          ee.A.leaveGuild(ex.id, !0);
                      },
                  }),
                  (0, l.jsx)(I.rX, { children: eV }),
              ],
          })
        : eN
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: eD,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ef,
                "aria-label": _.intl.string(_.t.HpQykc),
                children: eJ,
            })
          : ek
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: eD,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ef,
                  "aria-label": _.intl.string(_.t.HpQykc),
                  children: [
                      (0, l.jsxs)(I.rX, {
                          children: [
                              eG
                                  ? (0, l.jsx)(I.Dr, {
                                        id: "settings",
                                        label: _.intl.string(_.t["154/bL"]),
                                        icon: A.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                        action: () => {
                                            ee.A.open(ex.id, (0, ei.x)());
                                        },
                                    })
                                  : null,
                              eM,
                              (0, l.jsx)(I.Dr, {
                                  id: "privacy",
                                  label: _.intl.string(_.t.BayiAo),
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
                                          return (i) => (0, l.jsx)(e, { ...i, guild: ex });
                                      }),
                              }),
                              ew,
                          ],
                      }),
                      eS
                          ? null
                          : (0, l.jsx)(I.rX, {
                                children: (0, l.jsx)(I.Dr, {
                                    id: "leave",
                                    label: _.intl.string(_.t.Dv8gFT),
                                    icon: y.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                    color: "danger",
                                    action: eK,
                                }),
                            }),
                  ],
              })
            : eH
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: eD,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ef,
                    "aria-label": _.intl.string(_.t.HpQykc),
                    children: [
                        (0, l.jsxs)(I.rX, {
                            children: [
                                (0, l.jsx)(I.Dr, {
                                    id: "premium-subscribe",
                                    label: _.intl.string(_.t.VJEVbu),
                                    icon: b.BoostGemIcon,
                                    leadingAccessory: { type: "icon", icon: b.BoostGemIcon },
                                    action: () => {
                                        (0, Z.K4)({
                                            guildId: ex.id,
                                            location: { section: ep.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eR
                                    ? (0, l.jsx)(I.sL, {
                                          id: "use-server-theme",
                                          label: _.intl.string(_.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: c.PaintPaletteIcon },
                                          checked: eY === s.tI.GUILD,
                                          action: eQ,
                                      })
                                    : null,
                                ez &&
                                    (0, l.jsx)(I.Dr, {
                                        id: "guild-tag",
                                        label: _.intl.string(eb.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(el.o9, {
                                                guildId: ex.id,
                                                guildTag: ex.profile.tag,
                                                guildBadge: ex.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(el.o9, {
                                            guildId: ex.id,
                                            guildBadge: ex.profile.badge,
                                            guildTag: ex.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = ex.id),
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
                                eM,
                                e_,
                                eG
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "settings",
                                          label: _.intl.string(_.t["154/bL"]),
                                          icon: A.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                          action: () => {
                                              ee.A.open(ex.id, (0, ei.x)());
                                          },
                                      })
                                    : null,
                                eE
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "insights",
                                          label: _.intl.string(_.t["0wWfUG"]),
                                          icon: h.AnalyticsIcon,
                                          leadingAccessory: { type: "icon", icon: h.AnalyticsIcon },
                                          action: () => ee.A.open(ex.id, ep.BEX.ANALYTICS),
                                      })
                                    : null,
                                ev
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-channel",
                                                  label: _.intl.string(_.t["fUYU+j"]),
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
                                                                  channelType: ep.rbe.GUILD_TEXT,
                                                                  guildId: ex.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-category",
                                                  label: _.intl.string(_.t["ISN+NM"]),
                                                  icon: f.FolderPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: f.FolderPlusIcon },
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
                                                                  channelType: ep.rbe.GUILD_CATEGORY,
                                                                  guildId: ex.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                eU,
                                eF,
                                eB,
                                eT,
                                eW,
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eO,
                                (0, l.jsx)(I.Dr, {
                                    id: "notifications",
                                    label: _.intl.string(_.t.h850Ss),
                                    icon: D.BellIcon,
                                    leadingAccessory: { type: "icon", icon: D.BellIcon },
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
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: ex.id });
                                        }),
                                }),
                                (0, l.jsx)(I.Dr, {
                                    id: "privacy",
                                    label: _.intl.string(_.t.BayiAo),
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
                                            return (i) => (0, l.jsx)(e, { ...i, guild: ex });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                ew,
                                (0, l.jsx)(I.sL, {
                                    id: "hide-muted-channels",
                                    label: _.intl.string(_.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: j.EyeSlashIcon },
                                    checked: em,
                                    action: () => m.A.toggleCollapseGuild(ex.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eX,
                                eP && ex.features.has(ep.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "report-raid",
                                          label: _.intl.string(_.t.cswId3),
                                          icon: p.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, K.M)(ex.id),
                                      })
                                    : null,
                                eS
                                    ? null
                                    : (0, l.jsx)(I.Dr, {
                                          id: "leave",
                                          label: _.intl.string(_.t.J2TBi3),
                                          icon: y.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                          color: "danger",
                                          action: eK,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(I.rX, { children: eV }),
                    ],
                });
});
