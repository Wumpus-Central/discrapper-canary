t.r(e), t(47120);
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
    T = t(271383),
    P = t(496675),
    S = t(9156),
    U = t(594174),
    O = t(709586),
    w = t(626135),
    R = t(981631),
    k = t(647086),
    B = t(388032),
    F = t(764466);
function H(n) {
    (0, d.openModal)((e) =>
        (0, i.jsx)(M.g, {
            ...e,
            guild: n
        })
    );
}
let z = l.memo(function (n) {
    let { guild: e, onClose: a, onSelect: M } = n,
        z = (0, o.e7)([U.default], () => U.default.getCurrentUser());
    r()(null != z, 'GuildHeaderPopout: user cannot be undefined'),
        l.useEffect(() => {
            w.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: e.id });
        });
    let V = (0, o.e7)([S.ZP], () => S.ZP.isGuildCollapsed(e.id), [e.id]),
        {
            canAccessSettings: W,
            canManageChannels: K,
            showGuildAnalytics: Y
        } = (0, o.cj)(
            [P.Z],
            () => ({
                canAccessSettings: P.Z.canAccessGuildSettings(e),
                canManageChannels: P.Z.can(R.Plq.MANAGE_CHANNELS, e),
                showGuildAnalytics: P.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, e) && e.hasFeature(R.oNc.COMMUNITY)
            }),
            [e]
        ),
        q = (0, G.N8)(e),
        J = e.isOwner(z),
        X = (0, o.e7)([y.Z], () => y.Z.isLurking(e.id), [e.id]),
        Q = (0, o.e7)([T.ZP], () => T.ZP.isCurrentUserGuest(e.id)),
        $ = (0, v.Z)(e.id, !0),
        nn = (0, f.ZP)(e),
        ne = (0, Z.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: e
        }),
        nt = (0, m.Z)({
            guildId: e.id,
            userId: z.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: d.PencilIcon
        }),
        ni = e.hasFeature(R.oNc.HUB),
        nl = e.id === k._,
        na = (0, D.Z)(e.id),
        nr = (0, E.Z)(e),
        no = (0, _.Z)(e),
        nu = (0, b.Z)(e, !0),
        nd = (0, x.Z)(e),
        { isFavoritesPerk: nc } = (0, h.z)('GuildHeaderPopout'),
        { triggerDeadchat: ns } = I.Z.useExperiment(
            {
                guildId: e.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ng } = g.F.useExperiment(
            {
                guildId: e.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        nI = L.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [nf] = (0, p.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        np = nI && nf === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
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
                      A.Z.leaveGuild(e.id), !Q && (0, j.uL)(R.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : nl
          ? (0, i.jsxs)(d.Menu, {
                onSelect: M,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': B.intl.string(B.t.HpQykZ),
                children: [
                    (0, i.jsxs)(d.MenuGroup, {
                        children: [
                            nc &&
                                (0, i.jsx)(d.MenuItem, {
                                    id: 'add-channel',
                                    label: B.intl.string(B.t['6uDHk5']),
                                    color: 'brand',
                                    icon: d.CirclePlusIcon,
                                    action: () =>
                                        (0, d.openModalLazy)(async () => {
                                            let { default: n } = await t.e('29608').then(t.bind(t, 178125));
                                            return (e) => (0, i.jsx)(n, { ...e });
                                        })
                                }),
                            (0, i.jsx)(d.MenuItem, {
                                id: 'create-category',
                                label: B.intl.string(B.t['ISN+ND']),
                                icon: d.FolderPlusIcon,
                                action: () =>
                                    (0, d.openModalLazy)(async () => {
                                        let { default: n } = await t.e('33356').then(t.bind(t, 477782));
                                        return (e) => (0, i.jsx)(n, { ...e });
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(d.MenuGroup, {
                        children: (0, i.jsx)(d.MenuCheckboxItem, {
                            id: 'hide-muted-channels',
                            label: B.intl.string(B.t.UwOLJC),
                            checked: V,
                            action: () => c.Z.toggleCollapseGuild(e.id)
                        })
                    })
                ]
            })
          : ni
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
                                            A.Z.open(e.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              ne,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
                                  icon: d.ShieldIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: n } = await t.e('59500').then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, i.jsx)(n, {
                                                  ...t,
                                                  guild: e
                                              });
                                      })
                              }),
                              nt
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
                                    action: () => H(e)
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
                                      guildId: e.id,
                                      location: { section: R.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              J && z.isStaff() && ns
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(e.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              J && z.isStaff() && ng
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(e.id, R.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              ne,
                              W
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: d.SettingsIcon,
                                        action: () => {
                                            A.Z.open(e.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              Y
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'insights',
                                        label: B.intl.string(B.t['0wWfUF']),
                                        icon: d.AnalyticsIcon,
                                        action: () => A.Z.open(e.id, R.pNK.ANALYTICS)
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
                                                        let { default: n } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(n, {
                                                                ...t,
                                                                channelType: R.d4z.GUILD_TEXT,
                                                                guildId: e.id
                                                            });
                                                    })
                                            }),
                                            (0, i.jsx)(d.MenuItem, {
                                                id: 'create-category',
                                                label: B.intl.string(B.t['ISN+ND']),
                                                icon: d.FolderPlusIcon,
                                                action: () =>
                                                    (0, d.openModalLazy)(async () => {
                                                        let { default: n } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(n, {
                                                                ...t,
                                                                channelType: R.d4z.GUILD_CATEGORY,
                                                                guildId: e.id
                                                            });
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              $,
                              nr,
                              no,
                              nn,
                              nd
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              na,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: F.newBadgeRow,
                                      children: [
                                          B.intl.string(B.t.h850Sk),
                                          np &&
                                              (0, i.jsx)(d.TextBadge, {
                                                  className: F.newBadge,
                                                  text: B.intl.string(B.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: np ? void 0 : d.BellIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: n } = await Promise.all([t.e('5863'), t.e('48406')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, i.jsx)(n, {
                                                  ...t,
                                                  guildId: e.id
                                              });
                                      })
                              }),
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
                                  icon: d.ShieldIcon,
                                  action: () =>
                                      (0, d.openModalLazy)(async () => {
                                          let { default: n } = await t.e('59500').then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, i.jsx)(n, {
                                                  ...t,
                                                  guild: e
                                              });
                                      })
                              })
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              nt,
                              (0, i.jsx)(d.MenuCheckboxItem, {
                                  id: 'hide-muted-channels',
                                  label: B.intl.string(B.t.UwOLJC),
                                  checked: V,
                                  action: () => c.Z.toggleCollapseGuild(e.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              nu,
                              q && e.isCommunity()
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'report-raid',
                                        label: B.intl.string(B.t.cswId3),
                                        icon: d.ShieldIcon,
                                        color: 'danger',
                                        action: () => (0, N.J)(e.id)
                                    })
                                  : null,
                              J
                                  ? null
                                  : (0, i.jsx)(d.MenuItem, {
                                        id: 'leave',
                                        label: B.intl.string(B.t.J2TBi4),
                                        icon: d.DoorExitIcon,
                                        color: 'danger',
                                        action: () => H(e)
                                    })
                          ]
                      })
                  ]
              });
});
e.default = z;
