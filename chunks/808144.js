n.d(i, { default: () => eD });
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
    D = n(234020),
    f = n(782603),
    j = n(952270),
    m = n(686449),
    G = n(793574),
    E = n(293260),
    v = n(5180),
    P = n(425912),
    S = n(173936),
    C = n(839516),
    L = n(136463),
    U = n(124077),
    T = n(899360),
    _ = n(989683),
    M = n(752222),
    w = n(792996),
    k = n(435558),
    N = n.n(k),
    H = n(534890),
    O = n(970278),
    F = n(406704),
    B = n(323384),
    X = n(837057),
    W = n(310419),
    R = n(488995),
    J = n(346247),
    Y = n(810263),
    Q = n(214947);
let V = (0, n(945810).mj)({
    name: "2026-01-friends-in-server",
    kind: "user",
    defaultConfig: { guildFriendsEnabled: !1 },
    variations: { 1: { guildFriendsEnabled: !0 } },
});
var z = n(664967),
    K = n(121210),
    q = n(531335),
    Z = n(957316),
    $ = n(974103),
    ee = n(233824),
    ei = n(359047),
    en = n(727419),
    el = n(595818),
    et = n(685073),
    ea = n(534400),
    eo = n(857071),
    ec = n(36942),
    ed = n(875317),
    es = n(383272),
    er = n(594061),
    eu = n(617617),
    eg = n(260509),
    eI = n(696451),
    ey = n(576705),
    eA = n(543465),
    ep = n(287809),
    eb = n(129230),
    eh = n(652215),
    ex = n(242868);
let eD = t.memo(function (e) {
    var i, a;
    let k,
        eD,
        { guild: ef, onClose: ej, onSelect: em } = e,
        eG = (0, d.bG)([ep.default], () => ep.default.getCurrentUser());
    (o()(null != eG, "GuildHeaderPopout: user cannot be undefined"),
        t.useEffect(() => {
            eb.default.track(eh.HAw.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: ef.id });
        }));
    let eE = (0, d.bG)([eA.Ay], () => eA.Ay.isGuildCollapsed(ef.id), [ef.id]),
        {
            canAccessSettings: ev,
            canManageChannels: eP,
            showGuildAnalytics: eS,
        } = (0, d.cf)(
            [ey.A],
            () => ({
                canAccessSettings: ey.A.canAccessGuildSettings(ef),
                canManageChannels: ey.A.can(eh.xBc.MANAGE_CHANNELS, ef),
                showGuildAnalytics:
                    ey.A.can(eh.xBc.VIEW_GUILD_ANALYTICS, ef) && ef.features.has(eh.GuildFeatures.COMMUNITY),
            }),
            [ef],
        ),
        eC = (0, $.ic)(ef),
        eL = (0, eg.bM)(ef, eG),
        eU = (0, d.bG)([eo.A], () => eo.A.isLurking(ef.id), [ef.id]),
        eT = (0, d.bG)([eI.Ay], () => eI.Ay.isCurrentUserGuest(ef.id)),
        e_ = (0, ei.A)(ef.id, !0),
        eM = (0, E.Ay)(ef),
        ew = (0, q.A)({ source: eh.PE1.GUILD_HEADER, guild: ef }),
        ek = (function (e) {
            let i = (0, _.Ay)(e, "guild_header_popout"),
                { data: t } = (0, L.c)(i ? e.id : null);
            if (!i) return null;
            let a = null != t && (0, C.A)(t);
            return (0, l.jsx)(I.Dr, {
                id: "invite-to-linked-game-organization",
                label: w.intl.formatToPlainString(M.default.EnTIIr, { noun: (0, U.A)({ displayNoun: null }) }),
                subtext: a ? (0, T.zA)(t) : void 0,
                disabled: a,
                icon: S.LinkIcon,
                leadingAccessory: { type: "icon", icon: S.LinkIcon },
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
        })(ef),
        eN = (0, J.A)({
            guildId: ef.id,
            userId: eG.id,
            analyticsLocation: { page: eh.liQ.GUILD_CHANNEL, section: eh.JJy.GUILD_DROPDOWN_MENU },
            icon: r.PencilIcon,
        }),
        eH = ef.features.has(eh.GuildFeatures.HUB),
        eO = (0, v.ai)(ef.id),
        eF = ef.id === eh.gNP,
        eB = (0, ec.A)(ef.id, !0),
        eX =
            ((k = (0, F.H_)(ef)),
            (eD = (0, d.bG)([O.A], () => !N().isEmpty(O.A.getThreadsForGuild(ef.id)))),
            k && eD
                ? (0, l.jsx)(I.Dr, {
                      id: "active-threads",
                      label: w.intl.string(w.t.TM6err),
                      icon: H.ChatIcon,
                      leadingAccessory: { type: "icon", icon: H.ChatIcon },
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
                              return (i) => (0, l.jsx)(e, { guildId: ef.id, ...i });
                          });
                      },
                  })
                : null),
        eW = (0, l.jsx)(I.Dr, {
            id: "application-directory",
            label: w.intl.string(w.t.AKcFUj),
            icon: B.AppsIcon,
            leadingAccessory: { type: "icon", icon: B.AppsIcon },
            action: function () {
                (0, X.transitionToGlobalDiscovery)({
                    tab: R.GlobalDiscoveryTab.APPS,
                    newSessionState: { entrypoint: { name: W.sW.GUILD_HEADER_POPOUT }, guildId: ef.id },
                });
            },
        }),
        eR = (0, z.A)(ef, !0),
        eJ = (0, K.E)(ef, G.A.GUILD_HEADER, !0),
        eY = (function (e) {
            let { guildFriendsEnabled: i } = V.useConfig({ location: "useFriendsItem" });
            return i
                ? (0, l.jsx)(I.Dr, {
                      id: "friends",
                      label: w.intl.string(w.t.kYxEcH),
                      icon: Q.FriendsIcon,
                      leadingAccessory: { type: "icon", icon: Q.FriendsIcon },
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
        })(ef),
        eQ = (0, P.A)(),
        eV = ((i = ef.id), (a = "GuildHeaderPopout"), (0, es.DD)(i ?? void 0, a), null != (0, ed.Kb)(i, a)),
        ez = (0, d.bG)([eu.A], () => eu.A.resolveGuildThemeSourcePreference(ef.id), [ef.id]),
        eK = t.useCallback(() => {
            let e = ez === s.tI.GUILD ? s.tI.PERSONAL : s.tI.GUILD;
            (0, er.XW)(ef.id, e);
        }, [ef.id, ez]),
        eq = (0, Y.A)(ef, { showIcons: !0 }),
        eZ = (0, et.Rg)(ef) && (0, et.q0)(ef),
        e$ = t.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await n.e(553485).then(n.bind(n, 20508));
                return (i) => (0, l.jsx)(e, { ...i, guild: ef });
            });
        }, [ef]);
    return eU || eT
        ? (0, l.jsxs)(g.W, {
              "data-menu-migrated-auto": !0,
              onSelect: em,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: ej,
              "aria-label": w.intl.string(w.t.HpQykc),
              children: [
                  (0, l.jsx)(I.Dr, {
                      id: "leave-guild",
                      label: w.intl.string(w.t.J2TBi3),
                      icon: y.DoorExitIcon,
                      leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                      action: () => {
                          en.A.leaveGuild(ef.id, !0);
                      },
                  }),
                  (0, l.jsx)(I.rX, { children: eq }),
              ],
          })
        : eO
          ? (0, l.jsx)(g.W, {
                "data-menu-migrated-auto": !0,
                onSelect: em,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: ej,
                "aria-label": w.intl.string(w.t.HpQykc),
                children: eQ,
            })
          : eH
            ? (0, l.jsxs)(g.W, {
                  "data-menu-migrated": !0,
                  onSelect: em,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: ej,
                  "aria-label": w.intl.string(w.t.HpQykc),
                  children: [
                      (0, l.jsxs)(I.rX, {
                          children: [
                              ev
                                  ? (0, l.jsx)(I.Dr, {
                                        id: "settings",
                                        label: w.intl.string(w.t["154/bL"]),
                                        icon: A.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                        action: () => {
                                            en.A.open(ef.id, (0, el.x)());
                                        },
                                    })
                                  : null,
                              ew,
                              (0, l.jsx)(I.Dr, {
                                  id: "privacy",
                                  label: w.intl.string(w.t.BayiAo),
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
                                          return (i) => (0, l.jsx)(e, { ...i, guild: ef });
                                      }),
                              }),
                              eN,
                          ],
                      }),
                      eL
                          ? null
                          : (0, l.jsx)(I.rX, {
                                children: (0, l.jsx)(I.Dr, {
                                    id: "leave",
                                    label: w.intl.string(w.t.Dv8gFT),
                                    icon: y.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                    color: "danger",
                                    action: e$,
                                }),
                            }),
                  ],
              })
            : eF
              ? null
              : (0, l.jsxs)(g.W, {
                    "data-menu-needs-review": !0,
                    onSelect: em,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: ej,
                    "aria-label": w.intl.string(w.t.HpQykc),
                    children: [
                        (0, l.jsxs)(I.rX, {
                            children: [
                                (0, l.jsx)(I.Dr, {
                                    id: "premium-subscribe",
                                    label: w.intl.string(w.t.VJEVbu),
                                    icon: b.BoostGemIcon,
                                    leadingAccessory: { type: "icon", icon: b.BoostGemIcon },
                                    action: () => {
                                        (0, ee.K4)({
                                            guildId: ef.id,
                                            location: { section: eh.JJy.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                eV
                                    ? (0, l.jsx)(I.sL, {
                                          id: "use-server-theme",
                                          label: w.intl.string(w.t.CFzDOG),
                                          leadingAccessory: { type: "icon", icon: c.PaintPaletteIcon },
                                          checked: ez === s.tI.GUILD,
                                          action: eK,
                                      })
                                    : null,
                                eZ &&
                                    (0, l.jsx)(I.Dr, {
                                        id: "guild-tag",
                                        label: w.intl.string(ex.default.mf2OwH),
                                        leadingAccessory: {
                                            type: "guildTag",
                                            element: (0, l.jsx)(ea.o9, {
                                                guildId: ef.id,
                                                guildTag: ef.profile.tag,
                                                guildBadge: ef.profile.badge ?? void 0,
                                                inline: !1,
                                            }),
                                        },
                                        icon: (0, l.jsx)(ea.o9, {
                                            guildId: ef.id,
                                            guildBadge: ef.profile.badge,
                                            guildTag: ef.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => {
                                            var e;
                                            return (
                                                (e = ef.id),
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
                                ew,
                                ek,
                                ev
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "settings",
                                          label: w.intl.string(w.t["154/bL"]),
                                          icon: A.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: A.SettingsIcon },
                                          action: () => {
                                              en.A.open(ef.id, (0, el.x)());
                                          },
                                      })
                                    : null,
                                eS
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "insights",
                                          label: w.intl.string(w.t["0wWfUG"]),
                                          icon: h.AnalyticsIcon,
                                          leadingAccessory: { type: "icon", icon: h.AnalyticsIcon },
                                          action: () => en.A.open(ef.id, eh.BEX.ANALYTICS),
                                      })
                                    : null,
                                eP
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-channel",
                                                  label: w.intl.string(w.t["fUYU+j"]),
                                                  icon: x.CirclePlusIcon,
                                                  leadingAccessory: { type: "icon", icon: x.CirclePlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(521332),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(589916),
                                                              n.e(460773),
                                                              n.e(208018),
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
                                                                  channelType: eh.rbe.GUILD_TEXT,
                                                                  guildId: ef.id,
                                                              });
                                                      }),
                                              }),
                                              (0, l.jsx)(I.Dr, {
                                                  id: "create-category",
                                                  label: w.intl.string(w.t["ISN+NM"]),
                                                  icon: D.FolderPlusIcon,
                                                  leadingAccessory: { type: "icon", icon: D.FolderPlusIcon },
                                                  action: () =>
                                                      (0, u.mM)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e(377476),
                                                              n.e(597622),
                                                              n.e(746309),
                                                              n.e(521332),
                                                              n.e(844780),
                                                              n.e(470068),
                                                              n.e(203589),
                                                              n.e(692513),
                                                              n.e(589916),
                                                              n.e(460773),
                                                              n.e(208018),
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
                                                                  channelType: eh.rbe.GUILD_CATEGORY,
                                                                  guildId: ef.id,
                                                              });
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                e_,
                                eX,
                                eW,
                                eM,
                                eY,
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eB,
                                (0, l.jsx)(I.Dr, {
                                    id: "notifications",
                                    label: w.intl.string(w.t.h850Ss),
                                    icon: f.BellIcon,
                                    leadingAccessory: { type: "icon", icon: f.BellIcon },
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
                                            return (i) => (0, l.jsx)(e, { ...i, guildId: ef.id });
                                        }),
                                }),
                                (0, l.jsx)(I.Dr, {
                                    id: "privacy",
                                    label: w.intl.string(w.t.BayiAo),
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
                                            return (i) => (0, l.jsx)(e, { ...i, guild: ef });
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eN,
                                (0, l.jsx)(I.sL, {
                                    id: "hide-muted-channels",
                                    label: w.intl.string(w.t.UwOLJO),
                                    leadingAccessory: { type: "icon", icon: j.EyeSlashIcon },
                                    checked: eE,
                                    action: () => m.A.toggleCollapseGuild(ef.id),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(I.rX, {
                            children: [
                                eR,
                                eC && ef.features.has(eh.GuildFeatures.COMMUNITY)
                                    ? (0, l.jsx)(I.Dr, {
                                          id: "report-raid",
                                          label: w.intl.string(w.t.cswId3),
                                          icon: p.ShieldIcon,
                                          leadingAccessory: { type: "icon", icon: p.ShieldIcon },
                                          color: "danger",
                                          action: () => (0, Z.M)(ef.id),
                                      })
                                    : null,
                                eJ,
                                eL
                                    ? null
                                    : (0, l.jsx)(I.Dr, {
                                          id: "leave",
                                          label: w.intl.string(w.t.J2TBi3),
                                          icon: y.DoorExitIcon,
                                          leadingAccessory: { type: "icon", icon: y.DoorExitIcon },
                                          color: "danger",
                                          action: e$,
                                      }),
                            ],
                        }),
                        (0, l.jsx)(I.rX, { children: eq }),
                    ],
                });
});
