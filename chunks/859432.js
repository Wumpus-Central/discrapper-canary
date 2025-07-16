(n.d(t, { default: () => J }), n(388685));
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
    S = n(162157),
    D = n(623624),
    I = n(894059),
    Z = n(434404),
    N = n(978946),
    w = n(731722),
    E = n(172751),
    _ = n(343056),
    k = n(41776),
    G = n(837949),
    U = n(11352),
    T = n(601964),
    C = n(271383),
    A = n(496675),
    B = n(9156),
    L = n(594174),
    M = n(626135),
    F = n(981631),
    R = n(647086),
    H = n(982183),
    Q = n(388032),
    Y = n(195196),
    W = n(401174);
function z(e) {
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
function V(e, t) {
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
let J = a.memo(function (e) {
    let { guild: t, onClose: r, onSelect: J } = e,
        X = (0, d.e7)([L.default], () => L.default.getCurrentUser());
    (l()(null != X, 'GuildHeaderPopout: user cannot be undefined'),
        a.useEffect(() => {
            M.default.track(F.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        }));
    let q = (0, d.e7)([B.ZP], () => B.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: K,
            canManageChannels: $,
            showGuildAnalytics: ee
        } = (0, d.cj)(
            [A.Z],
            () => ({
                canAccessSettings: A.Z.canAccessGuildSettings(t),
                canManageChannels: A.Z.can(F.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: A.Z.can(F.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(F.oNc.COMMUNITY)
            }),
            [t]
        ),
        et = (0, S.N8)(t),
        en = (0, T.eM)(t, X),
        ei = (0, d.e7)([k.Z], () => k.Z.isLurking(t.id), [t.id]),
        ea = (0, d.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(t.id)),
        er = (0, I.Z)(t.id, !0),
        el = (0, h.ZP)(t),
        ed = (0, v.Z)({
            source: F.t4x.GUILD_HEADER,
            guild: t
        }),
        eo = (0, x.Z)({
            guildId: t.id,
            userId: X.id,
            analyticsLocation: {
                page: F.ZY5.GUILD_CHANNEL,
                section: F.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        es = t.features.has(F.oNc.HUB),
        ec = t.id === R._,
        eu = t.id === H.yG,
        eb = (0, G.Z)(t.id),
        eg = (0, j.Z)(t),
        eh = (0, y.Z)(t),
        ef = (0, m.Z)(t, !0),
        ep = (0, O.Z)(t),
        { isFavoritesPerk: ej } = (0, p.z)('GuildHeaderPopout'),
        { triggerDeadchat: ey } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ex } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        eO = U.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [em] = (0, f.cv)([o.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        ev = a.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, V(z({}, n), { guild: t }));
            });
        }, [t]),
        eP = eO && em === o.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ei || ea
        ? (0, i.jsx)(s.v2r, {
              onSelect: J,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: r,
              'aria-label': Q.intl.string(Q.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: Q.intl.string(Q.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      Z.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : ec
          ? (0, i.jsxs)(s.v2r, {
                onSelect: J,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: r,
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
                                            return (t) => (0, i.jsx)(e, z({}, t));
                                        })
                                }),
                            (0, i.jsx)(s.sNh, {
                                id: 'create-category',
                                label: Q.intl.string(Q.t['ISN+ND']),
                                icon: s.f1I,
                                action: () =>
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, z({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'hide-muted-channels',
                            label: Q.intl.string(Q.t.UwOLJC),
                            checked: q,
                            action: () => c.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : es
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: J,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: r,
                  'aria-label': Q.intl.string(Q.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              K
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: Q.intl.string(Q.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            Z.Z.open(t.id, (0, N.r)());
                                        }
                                    })
                                  : null,
                              ed,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: Q.intl.string(Q.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, V(z({}, n), { guild: t }));
                                      })
                              }),
                              eo
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
                                    action: ev
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
                    onClose: r,
                    'aria-label': Q.intl.string(Q.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                (0, i.jsx)(s.sNh, {
                                    id: 'premium-subscribe',
                                    label: Q.intl.string(Q.t.VJEVbm),
                                    icon: s.$Eu,
                                    action: () => {
                                        (0, D.f)({
                                            guildId: t.id,
                                            location: { section: F.jXE.GUILD_HEADER_POPOUT }
                                        });
                                    }
                                }),
                                (0, w.up)(t) &&
                                    (0, w.jq)(t) &&
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
                                en && X.isStaff() && ey
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, F.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                en && X.isStaff() && ex
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-gaming-ping',
                                          label: 'Gaming Stats Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, F.uaV.GUILD_GAMING_STATS_PROMPT);
                                          }
                                      })
                                    : null,
                                ed,
                                K
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'settings',
                                          label: Q.intl.string(Q.t['154/bG']),
                                          icon: s.ewm,
                                          action: () => {
                                              Z.Z.open(t.id, (0, N.r)());
                                          }
                                      })
                                    : null,
                                ee
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'insights',
                                          label: Q.intl.string(Q.t['0wWfUF']),
                                          icon: s.IeX,
                                          action: () => Z.Z.open(t.id, F.pNK.ANALYTICS)
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
                                                                  V(z({}, n), {
                                                                      channelType: F.d4z.GUILD_TEXT,
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
                                                                  V(z({}, n), {
                                                                      channelType: F.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              })
                                          ]
                                      })
                                    : null,
                                er,
                                eg,
                                eh,
                                el,
                                ep
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                eb,
                                (0, i.jsx)(s.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: W.newBadgeRow,
                                        children: [
                                            Q.intl.string(Q.t.h850Sk),
                                            eP &&
                                                (0, i.jsx)(s.IGR, {
                                                    className: W.newBadge,
                                                    text: Q.intl.string(Q.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eP ? void 0 : s.Dkj,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, V(z({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(s.sNh, {
                                    id: 'privacy',
                                    label: Q.intl.string(Q.t.BayiAg),
                                    icon: s.b7C,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, V(z({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                eo,
                                (0, i.jsx)(s.S89, {
                                    id: 'hide-muted-channels',
                                    label: Q.intl.string(Q.t.UwOLJC),
                                    checked: q,
                                    action: () => c.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                ef,
                                et && t.features.has(F.oNc.COMMUNITY)
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'report-raid',
                                          label: Q.intl.string(Q.t.cswId3),
                                          icon: s.b7C,
                                          color: 'danger',
                                          action: () => (0, P.J)(t.id)
                                      })
                                    : null,
                                en
                                    ? null
                                    : (0, i.jsx)(s.sNh, {
                                          id: 'leave',
                                          label: Q.intl.string(Q.t.J2TBi4),
                                          icon: s.PBZ,
                                          color: 'danger',
                                          action: ev
                                      })
                            ]
                        })
                    ]
                });
});
