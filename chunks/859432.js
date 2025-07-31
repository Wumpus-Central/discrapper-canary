(n.d(t, { default: () => J }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(704215),
    s = n(481060),
    d = n(5036),
    u = n(553385),
    g = n(52011),
    b = n(890477),
    f = n(458034),
    p = n(706140),
    y = n(362658),
    j = n(294978),
    h = n(513102),
    O = n(976192),
    x = n(887904),
    v = n(429824),
    P = n(466330),
    m = n(191471),
    Z = n(162157),
    w = n(623624),
    D = n(894059),
    I = n(434404),
    N = n(978946),
    S = n(731722),
    E = n(172751),
    _ = n(343056),
    G = n(41776),
    k = n(190263),
    A = n(837949),
    T = n(11352),
    U = n(601964),
    C = n(271383),
    M = n(496675),
    B = n(9156),
    L = n(594174),
    F = n(626135),
    R = n(981631),
    H = n(647086),
    Q = n(388032),
    Y = n(195196),
    q = n(401174);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: J } = e,
        z = (0, o.e7)([L.default], () => L.default.getCurrentUser());
    (a()(null != z, 'GuildHeaderPopout: user cannot be undefined'),
        r.useEffect(() => {
            F.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        }));
    let X = (0, o.e7)([B.ZP], () => B.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: K,
            canManageChannels: $,
            showGuildAnalytics: ee
        } = (0, o.cj)(
            [M.Z],
            () => ({
                canAccessSettings: M.Z.canAccessGuildSettings(t),
                canManageChannels: M.Z.can(R.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: M.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(R.oNc.COMMUNITY)
            }),
            [t]
        ),
        et = (0, Z.N8)(t),
        en = (0, U.eM)(t, z),
        ei = (0, o.e7)([G.Z], () => G.Z.isLurking(t.id), [t.id]),
        er = (0, o.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(t.id)),
        el = (0, D.Z)(t.id, !0),
        ea = (0, f.ZP)(t),
        eo = (0, P.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: t
        }),
        ec = (0, O.Z)({
            guildId: t.id,
            userId: z.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        es = t.features.has(R.oNc.HUB),
        ed = t.id === H._,
        eu = t.id === R.STv,
        eg = (0, A.Z)(t.id),
        eb = (0, j.Z)(t),
        ef = (0, h.Z)(t),
        ep = (0, v.Z)(t, !0),
        ey = (0, x.Z)(t),
        { isFavoritesPerk: ej } = (0, y.z)('GuildHeaderPopout'),
        eh = (0, k.o)(t),
        { triggerDeadchat: eO } = b.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ex } = g.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ev = T.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eP] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        em = r.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, W(V({}, n), { guild: t }));
            });
        }, [t]),
        eZ = ev && eP === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ei || er
        ? (0, i.jsx)(s.v2r, {
              onSelect: J,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': Q.intl.string(Q.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: Q.intl.string(Q.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      I.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : ed
          ? (0, i.jsxs)(s.v2r, {
                onSelect: J,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': Q.intl.string(Q.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            ej &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: Q.intl.string(Q.t['6uDHk5']),
                                    color: 'brand',
                                    icon: s.oFk,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, V({}, t));
                                        })
                                }),
                            (0, i.jsx)(s.sNh, {
                                id: 'create-category',
                                label: Q.intl.string(Q.t['ISN+ND']),
                                icon: s.f1I,
                                action: () =>
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, V({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'hide-muted-channels',
                            label: Q.intl.string(Q.t.UwOLJC),
                            checked: X,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : es
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: J,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': Q.intl.string(Q.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              K
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: Q.intl.string(Q.t['154/bG']),
                                        icon: eh ? s.Ncx : s.ewm,
                                        action: () => {
                                            I.Z.open(t.id, (0, N.r)());
                                        }
                                    })
                                  : null,
                              eo,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: Q.intl.string(Q.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, W(V({}, n), { guild: t }));
                                      })
                              }),
                              ec
                          ]
                      }),
                      en
                          ? null
                          : (0, i.jsx)(s.kSQ, {
                                children: (0, i.jsx)(s.sNh, {
                                    id: 'leave',
                                    label: Q.intl.string(Q.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: em
                                })
                            })
                  ]
              })
            : eu
              ? null
              : (0, i.jsxs)(s.v2r, {
                    onSelect: J,
                    navId: 'guild-header-popout',
                    variant: 'fixed',
                    onClose: l,
                    'aria-label': Q.intl.string(Q.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                (0, i.jsx)(s.sNh, {
                                    id: 'premium-subscribe',
                                    label: Q.intl.string(Q.t.VJEVbm),
                                    icon: s.$Eu,
                                    action: () => {
                                        (0, w.f)({
                                            guildId: t.id,
                                            location: { section: R.jXE.GUILD_HEADER_POPOUT }
                                        });
                                    }
                                }),
                                (0, S.up)(t) &&
                                    (0, S.jq)(t) &&
                                    (0, i.jsx)(s.sNh, {
                                        id: 'guild-tag',
                                        label: Q.intl.string(Y.default.mf2OwM),
                                        icon: (0, i.jsx)(E.m0, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1
                                        }),
                                        action: () => (0, _.Z)(t.id)
                                    })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                en && z.isStaff() && eO
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                en && z.isStaff() && ex
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-gaming-ping',
                                          label: 'Gaming Stats Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, R.uaV.GUILD_GAMING_STATS_PROMPT);
                                          }
                                      })
                                    : null,
                                eo,
                                K
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'settings',
                                          label: Q.intl.string(Q.t['154/bG']),
                                          icon: eh ? s.Ncx : s.ewm,
                                          action: () => {
                                              I.Z.open(t.id, (0, N.r)());
                                          }
                                      })
                                    : null,
                                ee
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'insights',
                                          label: Q.intl.string(Q.t['0wWfUF']),
                                          icon: s.IeX,
                                          action: () => I.Z.open(t.id, R.pNK.ANALYTICS)
                                      })
                                    : null,
                                $
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-channel',
                                                  label: Q.intl.string(Q.t['fUYU+v']),
                                                  icon: s.oFk,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  W(V({}, n), {
                                                                      channelType: R.d4z.GUILD_TEXT,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              }),
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-category',
                                                  label: Q.intl.string(Q.t['ISN+ND']),
                                                  icon: s.f1I,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  W(V({}, n), {
                                                                      channelType: R.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              })
                                          ]
                                      })
                                    : null,
                                el,
                                eb,
                                ef,
                                ea,
                                ey
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                eg,
                                (0, i.jsx)(s.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: q.newBadgeRow,
                                        children: [
                                            Q.intl.string(Q.t.h850Sk),
                                            eZ &&
                                                (0, i.jsx)(s.IGR, {
                                                    className: q.newBadge,
                                                    text: Q.intl.string(Q.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eZ ? void 0 : s.Dkj,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, W(V({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(s.sNh, {
                                    id: 'privacy',
                                    label: Q.intl.string(Q.t.BayiAg),
                                    icon: s.b7C,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, W(V({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                ec,
                                (0, i.jsx)(s.S89, {
                                    id: 'hide-muted-channels',
                                    label: Q.intl.string(Q.t.UwOLJC),
                                    checked: X,
                                    action: () => d.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                ep,
                                et && t.features.has(R.oNc.COMMUNITY)
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'report-raid',
                                          label: Q.intl.string(Q.t.cswId3),
                                          icon: s.b7C,
                                          color: 'danger',
                                          action: () => (0, m.J)(t.id)
                                      })
                                    : null,
                                en
                                    ? null
                                    : (0, i.jsx)(s.sNh, {
                                          id: 'leave',
                                          label: Q.intl.string(Q.t.J2TBi4),
                                          icon: s.PBZ,
                                          color: 'danger',
                                          action: em
                                      })
                            ]
                        })
                    ]
                });
});
