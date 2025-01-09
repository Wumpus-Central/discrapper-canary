t.r(n), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    o = t(442837),
    u = t(704215),
    d = t(481060),
    c = t(5036),
    s = t(553385),
    g = t(52011),
    I = t(890477),
    f = t(458034),
    p = t(706140),
    h = t(362658),
    M = t(241851),
    E = t(294978),
    _ = t(513102),
    m = t(976192),
    x = t(887904),
    b = t(429824),
    Z = t(466330),
    N = t(191471),
    G = t(162157),
    C = t(623624),
    v = t(894059),
    A = t(434404),
    y = t(41776),
    D = t(837949),
    L = t(11352),
    j = t(703656),
    P = t(271383),
    T = t(496675),
    S = t(9156),
    U = t(594174),
    O = t(709586),
    w = t(626135),
    R = t(981631),
    k = t(647086),
    B = t(388032),
    F = t(764466);
function H(e) {
    (0, d.openModal)((n) =>
        (0, i.jsx)(M.g, {
            ...n,
            guild: e
        })
    );
}
let z = l.memo(function (e) {
    let { guild: n, onClose: a, onSelect: M } = e,
        z = (0, o.e7)([U.default], () => U.default.getCurrentUser());
    r()(null != z, 'GuildHeaderPopout: user cannot be undefined'),
        l.useEffect(() => {
            w.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let V = (0, o.e7)([S.ZP], () => S.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: W,
            canManageChannels: K,
            showGuildAnalytics: Y
        } = (0, o.cj)(
            [T.Z],
            () => ({
                canAccessSettings: T.Z.canAccessGuildSettings(n),
                canManageChannels: T.Z.can(R.Plq.MANAGE_CHANNELS, n),
                showGuildAnalytics: T.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(R.oNc.COMMUNITY)
            }),
            [n]
        ),
        q = (0, G.N8)(n),
        J = n.isOwner(z),
        X = (0, o.e7)([y.Z], () => y.Z.isLurking(n.id), [n.id]),
        Q = (0, o.e7)([P.ZP], () => P.ZP.isCurrentUserGuest(n.id)),
        $ = (0, v.Z)(n.id, !0),
        ee = (0, f.ZP)(n),
        en = (0, Z.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: n
        }),
        et = (0, m.Z)({
            guildId: n.id,
            userId: z.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: d.PencilIcon
        }),
        ei = n.hasFeature(R.oNc.HUB),
        el = n.id === k._,
        ea = (0, D.Z)(n.id),
        er = (0, E.Z)(n),
        eo = (0, _.Z)(n),
        eu = (0, b.Z)(n, !0),
        ed = (0, x.Z)(n),
        { isFavoritesPerk: ec } = (0, h.z)('GuildHeaderPopout'),
        { triggerDeadchat: es } = I.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: eg } = g.F.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        eI = L.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ef] = (0, p.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        ep = eI && ef === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return X || Q
        ? (0, i.jsx)(d.Menu, {
              onSelect: M,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': B.intl.string(B.t.HpQykZ),
              children: (0, i.jsx)(d.MenuItem, {
                  id: 'leave-guild',
                  label: B.intl.string(B.t.J2TBi4),
                  icon: d.DoorExitIcon,
                  action: () => {
                      A.Z.leaveGuild(n.id), !Q && (0, j.uL)(R.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : el
          ? (0, i.jsxs)(d.Menu, {
                onSelect: M,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': B.intl.string(B.t.HpQykZ),
                children: [
                    (0, i.jsxs)(d.MenuGroup, {
                        children: [
                            ec &&
                                (0, i.jsx)(d.MenuItem, {
                                    id: 'add-channel',
                                    label: B.intl.string(B.t['6uDHk5']),
                                    color: 'brand',
                                    icon: d.CirclePlusIcon,
                                    action: () =>
                                        (0, d.openModalLazy)(async () => {
                                            let { default: e } = await t.e('29608').then(t.bind(t, 178125));
                                            return (n) => (0, i.jsx)(e, { ...n });
                                        })
                                }),
                            (0, i.jsx)(d.MenuItem, {
                                id: 'create-category',
                                label: B.intl.string(B.t['ISN+ND']),
                                icon: d.FolderPlusIcon,
                                action: () =>
                                    (0, d.openModalLazy)(async () => {
                                        let { default: e } = await t.e('33356').then(t.bind(t, 477782));
                                        return (n) => (0, i.jsx)(e, { ...n });
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuCheckboxItem, {
                            id: 'hide-muted-channels',
                            label: B.intl.string(B.t.UwOLJC),
                            checked: V,
                            action: () => c.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : ei
            ? (0, i.jsxs)(d.Menu, {
                  onSelect: M,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.intl.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              W
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: d.SettingsIcon,
                                        action: () => {
                                            A.Z.open(n.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              en,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
                                  icon: d.ShieldIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('23217'), t.e('33053'), t.e('8016'), t.e('15669'), t.e('76540'), t.e('17938'), t.e('22646'), t.e('3940'), t.e('48923'), t.e('30419'), t.e('8821'), t.e('18824'), t.e('38175'), t.e('52547')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              }),
                              et
                          ]
                      }),
                      J
                          ? null
                          : (0, i.jsx)(d.MenuGroup, {
                                children: (0, i.jsx)(d.MenuItem, {
                                    id: 'leave',
                                    label: B.intl.string(B.t.Dv8gFR),
                                    icon: d.DoorExitIcon,
                                    color: 'danger',
                                    action: () => H(n)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(d.Menu, {
                  onSelect: M,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.intl.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsx)(d.MenuGroup, {
                          children: (0, i.jsx)(d.MenuItem, {
                              id: 'premium-subscribe',
                              label: B.intl.string(B.t.VJEVbm),
                              icon: (0, d.makeIconCompat)(O.Z),
                              action: () => {
                                  (0, C.f)({
                                      guildId: n.id,
                                      location: { section: R.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              J && z.isStaff() && es
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(n.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              J && z.isStaff() && eg
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(n.id, R.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              en,
                              W
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: d.SettingsIcon,
                                        action: () => {
                                            A.Z.open(n.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              Y
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'insights',
                                        label: B.intl.string(B.t['0wWfUF']),
                                        icon: d.AnalyticsIcon,
                                        action: () => A.Z.open(n.id, R.pNK.ANALYTICS)
                                    })
                                  : null,
                              K
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(d.MenuItem, {
                                                id: 'create-channel',
                                                label: B.intl.string(B.t['fUYU+v']),
                                                icon: d.CirclePlusIcon,
                                                action: () =>
                                                    (0, d.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelType: R.d4z.GUILD_TEXT,
                                                                guildId: n.id
                                                            });
                                                    })
                                            }),
                                            (0, i.jsx)(d.MenuItem, {
                                                id: 'create-category',
                                                label: B.intl.string(B.t['ISN+ND']),
                                                icon: d.FolderPlusIcon,
                                                action: () =>
                                                    (0, d.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelType: R.d4z.GUILD_CATEGORY,
                                                                guildId: n.id
                                                            });
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              $,
                              er,
                              eo,
                              ee,
                              ed
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              ea,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: F.newBadgeRow,
                                      children: [
                                          B.intl.string(B.t.h850Sk),
                                          ep &&
                                              (0, i.jsx)(d.TextBadge, {
                                                  className: F.newBadge,
                                                  text: B.intl.string(B.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: ep ? void 0 : d.BellIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('5863'), t.e('97984')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guildId: n.id
                                              });
                                      })
                              }),
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
                                  icon: d.ShieldIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: e } = await Promise.all([t.e('23217'), t.e('33053'), t.e('8016'), t.e('15669'), t.e('76540'), t.e('17938'), t.e('22646'), t.e('3940'), t.e('48923'), t.e('30419'), t.e('8821'), t.e('18824'), t.e('38175'), t.e('52547')]).then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              })
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              et,
                              (0, i.jsx)(d.MenuCheckboxItem, {
                                  id: 'hide-muted-channels',
                                  label: B.intl.string(B.t.UwOLJC),
                                  checked: V,
                                  action: () => c.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              eu,
                              q && n.isCommunity()
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'report-raid',
                                        label: B.intl.string(B.t.cswId3),
                                        icon: d.ShieldIcon,
                                        color: 'danger',
                                        action: () => (0, N.J)(n.id)
                                    })
                                  : null,
                              J
                                  ? null
                                  : (0, i.jsx)(d.MenuItem, {
                                        id: 'leave',
                                        label: B.intl.string(B.t.J2TBi4),
                                        icon: d.DoorExitIcon,
                                        color: 'danger',
                                        action: () => H(n)
                                    })
                          ]
                      })
                  ]
              });
});
n.default = z;
