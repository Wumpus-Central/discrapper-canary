(n.d(t, { default: () => X }), n(388685));
var i = n(255367),
    a = n(73800),
    r = n(512722),
    l = n.n(r),
    d = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(5036),
    u = n(553385),
    b = n(52011),
    g = n(890477),
    h = n(458034),
    f = n(706140),
    p = n(362658),
    j = n(294978),
    y = n(513102),
    x = n(976192),
    O = n(887904),
    m = n(429824),
    v = n(466330),
    P = n(191471),
    N = n(162157),
    S = n(623624),
    D = n(894059),
    I = n(434404),
    Z = n(978946),
    w = n(731722),
    E = n(172751),
    _ = n(343056),
    k = n(41776),
    G = n(190263),
    U = n(837949),
    T = n(11352),
    C = n(601964),
    A = n(271383),
    B = n(496675),
    L = n(9156),
    M = n(594174),
    F = n(626135),
    R = n(981631),
    H = n(647086),
    Q = n(982183),
    Y = n(388032),
    W = n(195196),
    z = n(401174);
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
function J(e, t) {
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
let X = a.memo(function (e) {
    let { guild: t, onClose: r, onSelect: X } = e,
        q = (0, d.e7)([M.default], () => M.default.getCurrentUser());
    (l()(null != q, 'GuildHeaderPopout: user cannot be undefined'),
        a.useEffect(() => {
            F.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        }));
    let K = (0, d.e7)([L.ZP], () => L.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: $,
            canManageChannels: ee,
            showGuildAnalytics: et
        } = (0, d.cj)(
            [B.Z],
            () => ({
                canAccessSettings: B.Z.canAccessGuildSettings(t),
                canManageChannels: B.Z.can(R.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: B.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(R.oNc.COMMUNITY)
            }),
            [t]
        ),
        en = (0, N.N8)(t),
        ei = (0, C.eM)(t, q),
        ea = (0, d.e7)([k.Z], () => k.Z.isLurking(t.id), [t.id]),
        er = (0, d.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        el = (0, D.Z)(t.id, !0),
        ed = (0, h.ZP)(t),
        eo = (0, v.Z)({
            source: R.t4x.GUILD_HEADER,
            guild: t
        }),
        es = (0, x.Z)({
            guildId: t.id,
            userId: q.id,
            analyticsLocation: {
                page: R.ZY5.GUILD_CHANNEL,
                section: R.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        ec = t.features.has(R.oNc.HUB),
        eu = t.id === H._,
        eb = t.id === Q.yG,
        eg = (0, U.Z)(t.id),
        eh = (0, j.Z)(t),
        ef = (0, y.Z)(t),
        ep = (0, m.Z)(t, !0),
        ej = (0, O.Z)(t),
        { isFavoritesPerk: ey } = (0, p.z)('GuildHeaderPopout'),
        ex = (0, G.Y)(t),
        { triggerDeadchat: eO } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: em } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ev = T.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eP] = (0, f.cv)([o.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eN = a.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, J(V({}, n), { guild: t }));
            });
        }, [t]),
        eS = ev && eP === o.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ea || er
        ? (0, i.jsx)(s.v2r, {
              onSelect: X,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: r,
              'aria-label': Y.intl.string(Y.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: Y.intl.string(Y.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      I.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : eu
          ? (0, i.jsxs)(s.v2r, {
                onSelect: X,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: r,
                'aria-label': Y.intl.string(Y.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            ey &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: Y.intl.string(Y.t['6uDHk5']),
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
                                label: Y.intl.string(Y.t['ISN+ND']),
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
                            label: Y.intl.string(Y.t.UwOLJC),
                            checked: K,
                            action: () => c.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : ec
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: X,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: r,
                  'aria-label': Y.intl.string(Y.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              $
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: Y.intl.string(Y.t['154/bG']),
                                        icon: ex ? s.Ncx : s.ewm,
                                        action: () => {
                                            I.Z.open(t.id, (0, Z.r)());
                                        }
                                    })
                                  : null,
                              eo,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: Y.intl.string(Y.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, J(V({}, n), { guild: t }));
                                      })
                              }),
                              es
                          ]
                      }),
                      ei
                          ? null
                          : (0, i.jsx)(s.kSQ, {
                                children: (0, i.jsx)(s.sNh, {
                                    id: 'leave',
                                    label: Y.intl.string(Y.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: eN
                                })
                            })
                  ]
              })
            : eb
              ? null
              : (0, i.jsxs)(s.v2r, {
                    onSelect: X,
                    navId: 'guild-header-popout',
                    variant: 'fixed',
                    onClose: r,
                    'aria-label': Y.intl.string(Y.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                (0, i.jsx)(s.sNh, {
                                    id: 'premium-subscribe',
                                    label: Y.intl.string(Y.t.VJEVbm),
                                    icon: s.$Eu,
                                    action: () => {
                                        (0, S.f)({
                                            guildId: t.id,
                                            location: { section: R.jXE.GUILD_HEADER_POPOUT }
                                        });
                                    }
                                }),
                                (0, w.up)(t) &&
                                    (0, w.jq)(t) &&
                                    (0, i.jsx)(s.sNh, {
                                        id: 'guild-tag',
                                        label: Y.intl.string(W.default.mf2OwM),
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
                                ei && q.isStaff() && eO
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                ei && q.isStaff() && em
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
                                $
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'settings',
                                          label: Y.intl.string(Y.t['154/bG']),
                                          icon: ex ? s.Ncx : s.ewm,
                                          action: () => {
                                              I.Z.open(t.id, (0, Z.r)());
                                          }
                                      })
                                    : null,
                                et
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'insights',
                                          label: Y.intl.string(Y.t['0wWfUF']),
                                          icon: s.IeX,
                                          action: () => I.Z.open(t.id, R.pNK.ANALYTICS)
                                      })
                                    : null,
                                ee
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-channel',
                                                  label: Y.intl.string(Y.t['fUYU+v']),
                                                  icon: s.oFk,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  J(V({}, n), {
                                                                      channelType: R.d4z.GUILD_TEXT,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              }),
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-category',
                                                  label: Y.intl.string(Y.t['ISN+ND']),
                                                  icon: s.f1I,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  J(V({}, n), {
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
                                eh,
                                ef,
                                ed,
                                ej
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                eg,
                                (0, i.jsx)(s.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: z.newBadgeRow,
                                        children: [
                                            Y.intl.string(Y.t.h850Sk),
                                            eS &&
                                                (0, i.jsx)(s.IGR, {
                                                    className: z.newBadge,
                                                    text: Y.intl.string(Y.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eS ? void 0 : s.Dkj,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, J(V({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(s.sNh, {
                                    id: 'privacy',
                                    label: Y.intl.string(Y.t.BayiAg),
                                    icon: s.b7C,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, J(V({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                es,
                                (0, i.jsx)(s.S89, {
                                    id: 'hide-muted-channels',
                                    label: Y.intl.string(Y.t.UwOLJC),
                                    checked: K,
                                    action: () => c.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                ep,
                                en && t.features.has(R.oNc.COMMUNITY)
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'report-raid',
                                          label: Y.intl.string(Y.t.cswId3),
                                          icon: s.b7C,
                                          color: 'danger',
                                          action: () => (0, P.J)(t.id)
                                      })
                                    : null,
                                ei
                                    ? null
                                    : (0, i.jsx)(s.sNh, {
                                          id: 'leave',
                                          label: Y.intl.string(Y.t.J2TBi4),
                                          icon: s.PBZ,
                                          color: 'danger',
                                          action: eN
                                      })
                            ]
                        })
                    ]
                });
});
