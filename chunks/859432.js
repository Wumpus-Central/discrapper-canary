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
    E = t(241851),
    _ = t(294978),
    M = t(513102),
    m = t(976192),
    x = t(887904),
    b = t(429824),
    Z = t(466330),
    N = t(191471),
    C = t(162157),
    v = t(623624),
    G = t(894059),
    A = t(771212),
    y = t(434404),
    D = t(41776),
    L = t(837949),
    j = t(11352),
    T = t(703656),
    P = t(271383),
    S = t(496675),
    U = t(9156),
    O = t(594174),
    w = t(709586),
    R = t(626135),
    k = t(981631),
    B = t(647086),
    F = t(388032),
    H = t(764466);
function z(e) {
    (0, d.openModal)((n) =>
        (0, i.jsx)(E.g, {
            ...n,
            guild: e
        })
    );
}
let V = l.memo(function (e) {
    let { guild: n, onClose: a, onSelect: E } = e,
        V = (0, o.e7)([O.default], () => O.default.getCurrentUser());
    r()(null != V, 'GuildHeaderPopout: user cannot be undefined'),
        l.useEffect(() => {
            R.default.track(k.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let W = (0, o.e7)([U.ZP], () => U.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: K,
            canManageChannels: Y,
            showGuildAnalytics: q
        } = (0, o.cj)(
            [S.Z],
            () => {
                let e = S.Z.can(k.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(k.oNc.COMMUNITY);
                return {
                    canAccessSettings: S.Z.canAccessGuildSettings(n),
                    canManageChannels: S.Z.can(k.Plq.MANAGE_CHANNELS, n),
                    showGuildAnalytics: (0, A.Fv)(n.id) || e
                };
            },
            [n]
        ),
        J = (0, C.N8)(n),
        X = n.isOwner(V),
        Q = (0, o.e7)([D.Z], () => D.Z.isLurking(n.id), [n.id]),
        $ = (0, o.e7)([P.ZP], () => P.ZP.isCurrentUserGuest(n.id)),
        ee = (0, G.Z)(n.id, !0),
        en = (0, f.ZP)(n),
        et = (0, Z.Z)({
            source: k.t4x.GUILD_HEADER,
            guild: n
        }),
        ei = (0, m.Z)({
            guildId: n.id,
            userId: V.id,
            analyticsLocation: {
                page: k.ZY5.GUILD_CHANNEL,
                section: k.jXE.GUILD_DROPDOWN_MENU
            },
            icon: d.PencilIcon
        }),
        el = n.hasFeature(k.oNc.HUB),
        ea = n.id === B._,
        er = (0, L.Z)(n.id),
        eo = (0, _.Z)(n),
        eu = (0, M.Z)(n),
        ed = (0, b.Z)(n, !0),
        ec = (0, x.Z)(n),
        { isFavoritesPerk: es } = (0, h.z)('GuildHeaderPopout'),
        { triggerDeadchat: eg } = I.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: eI } = g.F.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ef = j.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ep] = (0, p.cv)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eh = ef && ep === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return Q || $
        ? (0, i.jsx)(d.Menu, {
              onSelect: E,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': F.intl.string(F.t.HpQykZ),
              children: (0, i.jsx)(d.MenuItem, {
                  id: 'leave-guild',
                  label: F.intl.string(F.t.J2TBi4),
                  icon: d.DoorExitIcon,
                  action: () => {
                      y.Z.leaveGuild(n.id), !$ && (0, T.uL)(k.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : ea
          ? (0, i.jsxs)(d.Menu, {
                onSelect: E,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': F.intl.string(F.t.HpQykZ),
                children: [
                    (0, i.jsxs)(d.MenuGroup, {
                        children: [
                            es &&
                                (0, i.jsx)(d.MenuItem, {
                                    id: 'add-channel',
                                    label: F.intl.string(F.t['6uDHk5']),
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
                                label: F.intl.string(F.t['ISN+ND']),
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
                            label: F.intl.string(F.t.UwOLJC),
                            checked: W,
                            action: () => c.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : el
            ? (0, i.jsxs)(d.Menu, {
                  onSelect: E,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': F.intl.string(F.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              K
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'settings',
                                        label: F.intl.string(F.t['154/bG']),
                                        icon: d.SettingsIcon,
                                        action: () => {
                                            y.Z.open(n.id, k.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              et,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'privacy',
                                  label: F.intl.string(F.t.BayiAg),
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
                              ei
                          ]
                      }),
                      X
                          ? null
                          : (0, i.jsx)(d.MenuGroup, {
                                children: (0, i.jsx)(d.MenuItem, {
                                    id: 'leave',
                                    label: F.intl.string(F.t.Dv8gFR),
                                    icon: d.DoorExitIcon,
                                    color: 'danger',
                                    action: () => z(n)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(d.Menu, {
                  onSelect: E,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': F.intl.string(F.t.HpQykZ),
                  children: [
                      (0, i.jsx)(d.MenuGroup, {
                          children: (0, i.jsx)(d.MenuItem, {
                              id: 'premium-subscribe',
                              label: F.intl.string(F.t.VJEVbm),
                              icon: (0, d.makeIconCompat)(w.Z),
                              action: () => {
                                  (0, v.f)({
                                      guildId: n.id,
                                      location: { section: k.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              X && V.isStaff() && eg
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(n.id, k.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              X && V.isStaff() && eI
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: d.ChatCheckIcon,
                                        action: () => {
                                            (0, s.j8)(n.id, k.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              et,
                              K
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'settings',
                                        label: F.intl.string(F.t['154/bG']),
                                        icon: d.SettingsIcon,
                                        action: () => {
                                            y.Z.open(n.id, k.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              q
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'insights',
                                        label: F.intl.string(F.t['0wWfUF']),
                                        icon: d.AnalyticsIcon,
                                        action: () => y.Z.open(n.id, k.pNK.ANALYTICS)
                                    })
                                  : null,
                              Y
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(d.MenuItem, {
                                                id: 'create-channel',
                                                label: F.intl.string(F.t['fUYU+v']),
                                                icon: d.CirclePlusIcon,
                                                action: () =>
                                                    (0, d.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelType: k.d4z.GUILD_TEXT,
                                                                guildId: n.id
                                                            });
                                                    })
                                            }),
                                            (0, i.jsx)(d.MenuItem, {
                                                id: 'create-category',
                                                label: F.intl.string(F.t['ISN+ND']),
                                                icon: d.FolderPlusIcon,
                                                action: () =>
                                                    (0, d.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelType: k.d4z.GUILD_CATEGORY,
                                                                guildId: n.id
                                                            });
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              ee,
                              eo,
                              eu,
                              en,
                              ec
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              er,
                              (0, i.jsx)(d.MenuItem, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: H.newBadgeRow,
                                      children: [
                                          F.intl.string(F.t.h850Sk),
                                          eh &&
                                              (0, i.jsx)(d.TextBadge, {
                                                  className: H.newBadge,
                                                  text: F.intl.string(F.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: eh ? void 0 : d.BellIcon,
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
                                  label: F.intl.string(F.t.BayiAg),
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
                              ei,
                              (0, i.jsx)(d.MenuCheckboxItem, {
                                  id: 'hide-muted-channels',
                                  label: F.intl.string(F.t.UwOLJC),
                                  checked: W,
                                  action: () => c.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(d.MenuGroup, {
                          children: [
                              ed,
                              J && n.isCommunity()
                                  ? (0, i.jsx)(d.MenuItem, {
                                        id: 'report-raid',
                                        label: F.intl.string(F.t.cswId3),
                                        icon: d.ShieldIcon,
                                        color: 'danger',
                                        action: () => (0, N.J)(n.id)
                                    })
                                  : null,
                              X
                                  ? null
                                  : (0, i.jsx)(d.MenuItem, {
                                        id: 'leave',
                                        label: F.intl.string(F.t.J2TBi4),
                                        icon: d.DoorExitIcon,
                                        color: 'danger',
                                        action: () => z(n)
                                    })
                          ]
                      })
                  ]
              });
});
n.default = V;
