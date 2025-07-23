(n.d(t, { default: () => X }), n(388685));
var i = n(255367),
    a = n(73800),
    r = n(512722),
    l = n.n(r),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    d = n(5036),
    u = n(553385),
    g = n(52011),
    b = n(890477),
    f = n(458034),
    p = n(706140),
    h = n(362658),
    j = n(294978),
    y = n(513102),
    x = n(976192),
    O = n(887904),
    m = n(429824),
    v = n(466330),
    P = n(191471),
    D = n(162157),
    I = n(623624),
    N = n(894059),
    Z = n(434404),
    w = n(978946),
    S = n(731722),
    _ = n(172751),
    E = n(343056),
    k = n(41776),
    G = n(190263),
    T = n(837949),
    U = n(11352),
    C = n(601964),
    A = n(271383),
    L = n(496675),
    M = n(9156),
    B = n(594174),
    F = n(626135),
    H = n(981631),
    R = n(647086),
    Q = n(982183),
    Y = n(388032),
    V = n(195196),
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
        q = (0, o.e7)([B.default], () => B.default.getCurrentUser());
    (l()(null != q, 'GuildHeaderPopout: user cannot be undefined'),
        a.useEffect(() => {
            F.default.track(H.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        }));
    let K = (0, o.e7)([M.ZP], () => M.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: $,
            canManageChannels: ee,
            showGuildAnalytics: et
        } = (0, o.cj)(
            [L.Z],
            () => ({
                canAccessSettings: L.Z.canAccessGuildSettings(t),
                canManageChannels: L.Z.can(H.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: L.Z.can(H.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(H.oNc.COMMUNITY)
            }),
            [t]
        ),
        en = (0, D.N8)(t),
        ei = (0, C.eM)(t, q),
        ea = (0, o.e7)([k.Z], () => k.Z.isLurking(t.id), [t.id]),
        er = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        el = (0, N.Z)(t.id, !0),
        eo = (0, f.ZP)(t),
        es = (0, v.Z)({
            source: H.t4x.GUILD_HEADER,
            guild: t
        }),
        ec = (0, x.Z)({
            guildId: t.id,
            userId: q.id,
            analyticsLocation: {
                page: H.ZY5.GUILD_CHANNEL,
                section: H.jXE.GUILD_DROPDOWN_MENU
            },
            icon: c.vdY
        }),
        ed = t.features.has(H.oNc.HUB),
        eu = t.id === R._,
        eg = t.id === Q.yG,
        eb = (0, T.Z)(t.id),
        ef = (0, j.Z)(t),
        ep = (0, y.Z)(t),
        eh = (0, m.Z)(t, !0),
        ej = (0, O.Z)(t),
        { isFavoritesPerk: ey } = (0, h.z)('GuildHeaderPopout'),
        ex = (0, G.o)(t),
        { triggerDeadchat: eO } = b.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: em } = g.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ev = U.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eP] = (0, p.cv)([s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eD = a.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, J(z({}, n), { guild: t }));
            });
        }, [t]),
        eI = ev && eP === s.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ea || er
        ? (0, i.jsx)(c.v2r, {
              onSelect: X,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: r,
              'aria-label': Y.intl.string(Y.t.HpQykZ),
              children: (0, i.jsx)(c.sNh, {
                  id: 'leave-guild',
                  label: Y.intl.string(Y.t.J2TBi4),
                  icon: c.PBZ,
                  action: () => {
                      Z.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : eu
          ? (0, i.jsxs)(c.v2r, {
                onSelect: X,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: r,
                'aria-label': Y.intl.string(Y.t.HpQykZ),
                children: [
                    (0, i.jsxs)(c.kSQ, {
                        children: [
                            ey &&
                                (0, i.jsx)(c.sNh, {
                                    id: 'add-channel',
                                    label: Y.intl.string(Y.t['6uDHk5']),
                                    color: 'brand',
                                    icon: c.oFk,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, z({}, t));
                                        })
                                }),
                            (0, i.jsx)(c.sNh, {
                                id: 'create-category',
                                label: Y.intl.string(Y.t['ISN+ND']),
                                icon: c.f1I,
                                action: () =>
                                    (0, c.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, z({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(c.kSQ, {
                        children: (0, i.jsx)(c.S89, {
                            id: 'hide-muted-channels',
                            label: Y.intl.string(Y.t.UwOLJC),
                            checked: K,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : ed
            ? (0, i.jsxs)(c.v2r, {
                  onSelect: X,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: r,
                  'aria-label': Y.intl.string(Y.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(c.kSQ, {
                          children: [
                              $
                                  ? (0, i.jsx)(c.sNh, {
                                        id: 'settings',
                                        label: Y.intl.string(Y.t['154/bG']),
                                        icon: ex ? c.Ncx : c.ewm,
                                        action: () => {
                                            Z.Z.open(t.id, (0, w.r)());
                                        }
                                    })
                                  : null,
                              es,
                              (0, i.jsx)(c.sNh, {
                                  id: 'privacy',
                                  label: Y.intl.string(Y.t.BayiAg),
                                  icon: c.b7C,
                                  action: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, J(z({}, n), { guild: t }));
                                      })
                              }),
                              ec
                          ]
                      }),
                      ei
                          ? null
                          : (0, i.jsx)(c.kSQ, {
                                children: (0, i.jsx)(c.sNh, {
                                    id: 'leave',
                                    label: Y.intl.string(Y.t.Dv8gFR),
                                    icon: c.PBZ,
                                    color: 'danger',
                                    action: eD
                                })
                            })
                  ]
              })
            : eg
              ? null
              : (0, i.jsxs)(c.v2r, {
                    onSelect: X,
                    navId: 'guild-header-popout',
                    variant: 'fixed',
                    onClose: r,
                    'aria-label': Y.intl.string(Y.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                (0, i.jsx)(c.sNh, {
                                    id: 'premium-subscribe',
                                    label: Y.intl.string(Y.t.VJEVbm),
                                    icon: c.$Eu,
                                    action: () => {
                                        (0, I.f)({
                                            guildId: t.id,
                                            location: { section: H.jXE.GUILD_HEADER_POPOUT }
                                        });
                                    }
                                }),
                                (0, S.up)(t) &&
                                    (0, S.jq)(t) &&
                                    (0, i.jsx)(c.sNh, {
                                        id: 'guild-tag',
                                        label: Y.intl.string(V.default.mf2OwM),
                                        icon: (0, i.jsx)(_.m0, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1
                                        }),
                                        action: () => (0, E.Z)(t.id)
                                    })
                            ]
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                ei && q.isStaff() && eO
                                    ? (0, i.jsx)(c.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: c.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, H.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                ei && q.isStaff() && em
                                    ? (0, i.jsx)(c.sNh, {
                                          id: 'create-gaming-ping',
                                          label: 'Gaming Stats Ping',
                                          icon: c.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, H.uaV.GUILD_GAMING_STATS_PROMPT);
                                          }
                                      })
                                    : null,
                                es,
                                $
                                    ? (0, i.jsx)(c.sNh, {
                                          id: 'settings',
                                          label: Y.intl.string(Y.t['154/bG']),
                                          icon: ex ? c.Ncx : c.ewm,
                                          action: () => {
                                              Z.Z.open(t.id, (0, w.r)());
                                          }
                                      })
                                    : null,
                                et
                                    ? (0, i.jsx)(c.sNh, {
                                          id: 'insights',
                                          label: Y.intl.string(Y.t['0wWfUF']),
                                          icon: c.IeX,
                                          action: () => Z.Z.open(t.id, H.pNK.ANALYTICS)
                                      })
                                    : null,
                                ee
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.sNh, {
                                                  id: 'create-channel',
                                                  label: Y.intl.string(Y.t['fUYU+v']),
                                                  icon: c.oFk,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  J(z({}, n), {
                                                                      channelType: H.d4z.GUILD_TEXT,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              }),
                                              (0, i.jsx)(c.sNh, {
                                                  id: 'create-category',
                                                  label: Y.intl.string(Y.t['ISN+ND']),
                                                  icon: c.f1I,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  J(z({}, n), {
                                                                      channelType: H.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              })
                                          ]
                                      })
                                    : null,
                                el,
                                ef,
                                ep,
                                eo,
                                ej
                            ]
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                eb,
                                (0, i.jsx)(c.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: W.newBadgeRow,
                                        children: [
                                            Y.intl.string(Y.t.h850Sk),
                                            eI &&
                                                (0, i.jsx)(c.IGR, {
                                                    className: W.newBadge,
                                                    text: Y.intl.string(Y.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eI ? void 0 : c.Dkj,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, J(z({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(c.sNh, {
                                    id: 'privacy',
                                    label: Y.intl.string(Y.t.BayiAg),
                                    icon: c.b7C,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, J(z({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                ec,
                                (0, i.jsx)(c.S89, {
                                    id: 'hide-muted-channels',
                                    label: Y.intl.string(Y.t.UwOLJC),
                                    checked: K,
                                    action: () => d.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                eh,
                                en && t.features.has(H.oNc.COMMUNITY)
                                    ? (0, i.jsx)(c.sNh, {
                                          id: 'report-raid',
                                          label: Y.intl.string(Y.t.cswId3),
                                          icon: c.b7C,
                                          color: 'danger',
                                          action: () => (0, P.J)(t.id)
                                      })
                                    : null,
                                ei
                                    ? null
                                    : (0, i.jsx)(c.sNh, {
                                          id: 'leave',
                                          label: Y.intl.string(Y.t.J2TBi4),
                                          icon: c.PBZ,
                                          color: 'danger',
                                          action: eD
                                      })
                            ]
                        })
                    ]
                });
});
