t.d(n, { default: () => V }), t(47120);
var i = t(200651),
    l = t(192379),
    a = t(512722),
    r = t.n(a),
    d = t(442837),
    s = t(704215),
    o = t(481060),
    u = t(5036),
    c = t(553385),
    g = t(52011),
    h = t(890477),
    f = t(458034),
    N = t(706140),
    Z = t(362658),
    _ = t(241851),
    I = t(294978),
    E = t(513102),
    b = t(976192),
    x = t(887904),
    p = t(429824),
    D = t(466330),
    v = t(191471),
    j = t(162157),
    m = t(623624),
    A = t(894059),
    G = t(434404),
    y = t(978946),
    C = t(41776),
    S = t(837949),
    T = t(11352),
    P = t(703656),
    U = t(271383),
    L = t(496675),
    M = t(9156),
    O = t(594174),
    w = t(709586),
    k = t(626135),
    R = t(981631),
    B = t(647086),
    F = t(388032),
    H = t(801665);
function Q(e) {
    (0, o.h7j)((n) =>
        (0, i.jsx)(_.g, {
            ...n,
            guild: e
        })
    );
}
let V = l.memo(function (e) {
    let { guild: n, onClose: a, onSelect: _ } = e,
        V = (0, d.e7)([O.default], () => O.default.getCurrentUser());
    r()(null != V, 'GuildHeaderPopout: user cannot be undefined'),
        l.useEffect(() => {
            k.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let Y = (0, d.e7)([M.ZP], () => M.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: W,
            canManageChannels: q,
            showGuildAnalytics: K
        } = (0, d.cj)(
            [L.Z],
            () => ({
                canAccessSettings: L.Z.canAccessGuildSettings(n),
                canManageChannels: L.Z.can(R.Plq.MANAGE_CHANNELS, n),
                showGuildAnalytics: L.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(R.oNc.COMMUNITY)
            }),
            [n]
        ),
        J = (0, j.N8)(n),
        z = n.isOwner(V),
        X = (0, d.e7)([C.Z], () => C.Z.isLurking(n.id), [n.id]),
        $ = (0, d.e7)([U.ZP], () => U.ZP.isCurrentUserGuest(n.id)),
        ee = (0, A.Z)(n.id, !0),
        en = (0, f.ZP)(n),
        et = (0, D.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: n
        }),
        ei = (0, b.Z)({
            guildId: n.id,
            userId: V.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: o.vdY
        }),
        el = n.hasFeature(R.oNc.HUB),
        ea = n.id === B._,
        er = (0, S.Z)(n.id),
        ed = (0, I.Z)(n),
        es = (0, E.Z)(n),
        eo = (0, p.Z)(n, !0),
        eu = (0, x.Z)(n),
        { isFavoritesPerk: ec } = (0, Z.z)('GuildHeaderPopout'),
        { triggerDeadchat: eg } = h.Z.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: eh } = g.F.useExperiment(
            {
                guildId: n.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ef = T.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eN] = (0, N.cv)([s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eZ = ef && eN === s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return X || $
        ? (0, i.jsx)(o.v2r, {
              onSelect: _,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': F.intl.string(F.t.HpQykZ),
              children: (0, i.jsx)(o.sNh, {
                  id: 'leave-guild',
                  label: F.intl.string(F.t.J2TBi4),
                  icon: o.PBZ,
                  action: () => {
                      G.Z.leaveGuild(n.id), $ || (0, P.uL)(R.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : ea
          ? (0, i.jsxs)(o.v2r, {
                onSelect: _,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': F.intl.string(F.t.HpQykZ),
                children: [
                    (0, i.jsxs)(o.kSQ, {
                        children: [
                            ec &&
                                (0, i.jsx)(o.sNh, {
                                    id: 'add-channel',
                                    label: F.intl.string(F.t['6uDHk5']),
                                    color: 'brand',
                                    icon: o.oFk,
                                    action: () =>
                                        (0, o.ZDy)(async () => {
                                            let { default: e } = await t.e('29608').then(t.bind(t, 178125));
                                            return (n) => (0, i.jsx)(e, { ...n });
                                        })
                                }),
                            (0, i.jsx)(o.sNh, {
                                id: 'create-category',
                                label: F.intl.string(F.t['ISN+ND']),
                                icon: o.f1I,
                                action: () =>
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await t.e('33356').then(t.bind(t, 477782));
                                        return (n) => (0, i.jsx)(e, { ...n });
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.kSQ, {
                        children: (0, i.jsx)(o.S89, {
                            id: 'hide-muted-channels',
                            label: F.intl.string(F.t.UwOLJC),
                            checked: Y,
                            action: () => u.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : el
            ? (0, i.jsxs)(o.v2r, {
                  onSelect: _,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': F.intl.string(F.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              W
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'settings',
                                        label: F.intl.string(F.t['154/bG']),
                                        icon: o.ewm,
                                        action: () => {
                                            G.Z.open(n.id, (0, y.r)(n.id));
                                        }
                                    })
                                  : null,
                              et,
                              (0, i.jsx)(o.sNh, {
                                  id: 'privacy',
                                  label: F.intl.string(F.t.BayiAg),
                                  icon: o.b7C,
                                  action: () =>
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await t.e('59500').then(t.bind(t, 241420));
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
                      z
                          ? null
                          : (0, i.jsx)(o.kSQ, {
                                children: (0, i.jsx)(o.sNh, {
                                    id: 'leave',
                                    label: F.intl.string(F.t.Dv8gFR),
                                    icon: o.PBZ,
                                    color: 'danger',
                                    action: () => Q(n)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(o.v2r, {
                  onSelect: _,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': F.intl.string(F.t.HpQykZ),
                  children: [
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(o.sNh, {
                              id: 'premium-subscribe',
                              label: F.intl.string(F.t.VJEVbm),
                              icon: (0, o.GSL)(w.Z),
                              action: () => {
                                  (0, m.f)({
                                      guildId: n.id,
                                      location: { section: R.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              z && V.isStaff() && eg
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: o.eQA,
                                        action: () => {
                                            (0, c.j8)(n.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              z && V.isStaff() && eh
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: o.eQA,
                                        action: () => {
                                            (0, c.j8)(n.id, R.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              et,
                              W
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'settings',
                                        label: F.intl.string(F.t['154/bG']),
                                        icon: o.ewm,
                                        action: () => {
                                            G.Z.open(n.id, (0, y.r)(n.id));
                                        }
                                    })
                                  : null,
                              K
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'insights',
                                        label: F.intl.string(F.t['0wWfUF']),
                                        icon: o.IeX,
                                        action: () => G.Z.open(n.id, R.pNK.ANALYTICS)
                                    })
                                  : null,
                              q
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.sNh, {
                                                id: 'create-channel',
                                                label: F.intl.string(F.t['fUYU+v']),
                                                icon: o.oFk,
                                                action: () =>
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('20110')]).then(t.bind(t, 218613));
                                                        return (t) =>
                                                            (0, i.jsx)(e, {
                                                                ...t,
                                                                channelType: R.d4z.GUILD_TEXT,
                                                                guildId: n.id
                                                            });
                                                    })
                                            }),
                                            (0, i.jsx)(o.sNh, {
                                                id: 'create-category',
                                                label: F.intl.string(F.t['ISN+ND']),
                                                icon: o.f1I,
                                                action: () =>
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('20110')]).then(t.bind(t, 218613));
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
                              ee,
                              ed,
                              es,
                              en,
                              eu
                          ]
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              er,
                              (0, i.jsx)(o.sNh, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: H.newBadgeRow,
                                      children: [
                                          F.intl.string(F.t.h850Sk),
                                          eZ &&
                                              (0, i.jsx)(o.IGR, {
                                                  className: H.newBadge,
                                                  text: F.intl.string(F.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: eZ ? void 0 : o.Dkj,
                                  action: () =>
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.all([t.e('5863'), t.e('31898')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guildId: n.id
                                              });
                                      })
                              }),
                              (0, i.jsx)(o.sNh, {
                                  id: 'privacy',
                                  label: F.intl.string(F.t.BayiAg),
                                  icon: o.b7C,
                                  action: () =>
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await t.e('59500').then(t.bind(t, 241420));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guild: n
                                              });
                                      })
                              })
                          ]
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              ei,
                              (0, i.jsx)(o.S89, {
                                  id: 'hide-muted-channels',
                                  label: F.intl.string(F.t.UwOLJC),
                                  checked: Y,
                                  action: () => u.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              eo,
                              J && n.isCommunity()
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'report-raid',
                                        label: F.intl.string(F.t.cswId3),
                                        icon: o.b7C,
                                        color: 'danger',
                                        action: () => (0, v.J)(n.id)
                                    })
                                  : null,
                              z
                                  ? null
                                  : (0, i.jsx)(o.sNh, {
                                        id: 'leave',
                                        label: F.intl.string(F.t.J2TBi4),
                                        icon: o.PBZ,
                                        color: 'danger',
                                        action: () => Q(n)
                                    })
                          ]
                      })
                  ]
              });
});
