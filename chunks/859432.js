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
    y = t(41776),
    C = t(837949),
    S = t(11352),
    T = t(703656),
    P = t(271383),
    U = t(496675),
    L = t(9156),
    M = t(594174),
    O = t(709586),
    w = t(626135),
    R = t(981631),
    k = t(647086),
    B = t(388032),
    F = t(764466);
function H(e) {
    (0, o.h7j)((n) =>
        (0, i.jsx)(_.g, {
            ...n,
            guild: e
        })
    );
}
let V = l.memo(function (e) {
    let { guild: n, onClose: a, onSelect: _ } = e,
        V = (0, d.e7)([M.default], () => M.default.getCurrentUser());
    r()(null != V, 'GuildHeaderPopout: user cannot be undefined'),
        l.useEffect(() => {
            w.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: n.id });
        });
    let Q = (0, d.e7)([L.ZP], () => L.ZP.isGuildCollapsed(n.id), [n.id]),
        {
            canAccessSettings: W,
            canManageChannels: Y,
            showGuildAnalytics: K
        } = (0, d.cj)(
            [U.Z],
            () => ({
                canAccessSettings: U.Z.canAccessGuildSettings(n),
                canManageChannels: U.Z.can(R.Plq.MANAGE_CHANNELS, n),
                showGuildAnalytics: U.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, n) && n.hasFeature(R.oNc.COMMUNITY)
            }),
            [n]
        ),
        q = (0, j.N8)(n),
        J = n.isOwner(V),
        z = (0, d.e7)([y.Z], () => y.Z.isLurking(n.id), [n.id]),
        X = (0, d.e7)([P.ZP], () => P.ZP.isCurrentUserGuest(n.id)),
        $ = (0, A.Z)(n.id, !0),
        ee = (0, f.ZP)(n),
        en = (0, D.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: n
        }),
        et = (0, b.Z)({
            guildId: n.id,
            userId: V.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: o.vdY
        }),
        ei = n.hasFeature(R.oNc.HUB),
        el = n.id === k._,
        ea = (0, C.Z)(n.id),
        er = (0, I.Z)(n),
        ed = (0, E.Z)(n),
        es = (0, p.Z)(n, !0),
        eo = (0, x.Z)(n),
        { isFavoritesPerk: eu } = (0, Z.z)('GuildHeaderPopout'),
        { triggerDeadchat: ec } = h.Z.useExperiment(
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
        eh = S.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ef] = (0, N.cv)([s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eN = eh && ef === s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return z || X
        ? (0, i.jsx)(o.v2r, {
              onSelect: _,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': B.intl.string(B.t.HpQykZ),
              children: (0, i.jsx)(o.sNh, {
                  id: 'leave-guild',
                  label: B.intl.string(B.t.J2TBi4),
                  icon: o.PBZ,
                  action: () => {
                      G.Z.leaveGuild(n.id), X || (0, T.uL)(R.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : el
          ? (0, i.jsxs)(o.v2r, {
                onSelect: _,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': B.intl.string(B.t.HpQykZ),
                children: [
                    (0, i.jsxs)(o.kSQ, {
                        children: [
                            eu &&
                                (0, i.jsx)(o.sNh, {
                                    id: 'add-channel',
                                    label: B.intl.string(B.t['6uDHk5']),
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
                                label: B.intl.string(B.t['ISN+ND']),
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
                            label: B.intl.string(B.t.UwOLJC),
                            checked: Q,
                            action: () => u.Z.toggleCollapseGuild(n.id)
                        })
                    })
                ]
            })
          : ei
            ? (0, i.jsxs)(o.v2r, {
                  onSelect: _,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.intl.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              W
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: o.ewm,
                                        action: () => {
                                            G.Z.open(n.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              en,
                              (0, i.jsx)(o.sNh, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
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
                              et
                          ]
                      }),
                      J
                          ? null
                          : (0, i.jsx)(o.kSQ, {
                                children: (0, i.jsx)(o.sNh, {
                                    id: 'leave',
                                    label: B.intl.string(B.t.Dv8gFR),
                                    icon: o.PBZ,
                                    color: 'danger',
                                    action: () => H(n)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(o.v2r, {
                  onSelect: _,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.intl.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsx)(o.kSQ, {
                          children: (0, i.jsx)(o.sNh, {
                              id: 'premium-subscribe',
                              label: B.intl.string(B.t.VJEVbm),
                              icon: (0, o.GSL)(O.Z),
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
                              J && V.isStaff() && ec
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: o.eQA,
                                        action: () => {
                                            (0, c.j8)(n.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              J && V.isStaff() && eg
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: o.eQA,
                                        action: () => {
                                            (0, c.j8)(n.id, R.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              en,
                              W
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: o.ewm,
                                        action: () => {
                                            G.Z.open(n.id, R.pNK.OVERVIEW);
                                        }
                                    })
                                  : null,
                              K
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'insights',
                                        label: B.intl.string(B.t['0wWfUF']),
                                        icon: o.IeX,
                                        action: () => G.Z.open(n.id, R.pNK.ANALYTICS)
                                    })
                                  : null,
                              Y
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(o.sNh, {
                                                id: 'create-channel',
                                                label: B.intl.string(B.t['fUYU+v']),
                                                icon: o.oFk,
                                                action: () =>
                                                    (0, o.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([t.e('45094'), t.e('5506')]).then(t.bind(t, 218613));
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
                                                label: B.intl.string(B.t['ISN+ND']),
                                                icon: o.f1I,
                                                action: () =>
                                                    (0, o.ZDy)(async () => {
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
                              ed,
                              ee,
                              eo
                          ]
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              ea,
                              (0, i.jsx)(o.sNh, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: F.newBadgeRow,
                                      children: [
                                          B.intl.string(B.t.h850Sk),
                                          eN &&
                                              (0, i.jsx)(o.IGR, {
                                                  className: F.newBadge,
                                                  text: B.intl.string(B.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: eN ? void 0 : o.Dkj,
                                  action: () =>
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await Promise.all([t.e('5863'), t.e('48406')]).then(t.bind(t, 751212));
                                          return (t) =>
                                              (0, i.jsx)(e, {
                                                  ...t,
                                                  guildId: n.id
                                              });
                                      })
                              }),
                              (0, i.jsx)(o.sNh, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
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
                              et,
                              (0, i.jsx)(o.S89, {
                                  id: 'hide-muted-channels',
                                  label: B.intl.string(B.t.UwOLJC),
                                  checked: Q,
                                  action: () => u.Z.toggleCollapseGuild(n.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(o.kSQ, {
                          children: [
                              es,
                              q && n.isCommunity()
                                  ? (0, i.jsx)(o.sNh, {
                                        id: 'report-raid',
                                        label: B.intl.string(B.t.cswId3),
                                        icon: o.b7C,
                                        color: 'danger',
                                        action: () => (0, v.J)(n.id)
                                    })
                                  : null,
                              J
                                  ? null
                                  : (0, i.jsx)(o.sNh, {
                                        id: 'leave',
                                        label: B.intl.string(B.t.J2TBi4),
                                        icon: o.PBZ,
                                        color: 'danger',
                                        action: () => H(n)
                                    })
                          ]
                      })
                  ]
              });
});
