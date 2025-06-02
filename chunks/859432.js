n.d(t, { default: () => V }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(704215),
    d = n(481060),
    s = n(5036),
    u = n(553385),
    b = n(52011),
    g = n(890477),
    f = n(458034),
    p = n(706140),
    h = n(362658),
    y = n(294978),
    O = n(513102),
    j = n(976192),
    P = n(887904),
    v = n(429824),
    D = n(466330),
    I = n(191471),
    _ = n(162157),
    m = n(623624),
    S = n(894059),
    w = n(434404),
    E = n(978946),
    N = n(731722),
    x = n(172751),
    Z = n(343056),
    A = n(41776),
    G = n(837949),
    T = n(11352),
    k = n(271383),
    C = n(496675),
    U = n(9156),
    L = n(594174),
    R = n(709586),
    M = n(626135),
    B = n(981631),
    F = n(647086),
    H = n(982183),
    Q = n(388032),
    W = n(912518),
    Y = n(401174);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function z(e, t) {
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
let V = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: V } = e,
        J = (0, o.e7)([L.default], () => L.default.getCurrentUser());
    a()(null != J, 'GuildHeaderPopout: user cannot be undefined'),
        r.useEffect(() => {
            M.default.track(B.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let K = (0, o.e7)([U.ZP], () => U.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: X,
            canManageChannels: $,
            showGuildAnalytics: ee
        } = (0, o.cj)(
            [C.Z],
            () => ({
                canAccessSettings: C.Z.canAccessGuildSettings(t),
                canManageChannels: C.Z.can(B.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: C.Z.can(B.Plq.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(B.oNc.COMMUNITY)
            }),
            [t]
        ),
        et = (0, _.N8)(t),
        en = t.isOwner(J),
        ei = (0, o.e7)([A.Z], () => A.Z.isLurking(t.id), [t.id]),
        er = (0, o.e7)([k.ZP], () => k.ZP.isCurrentUserGuest(t.id)),
        el = (0, S.Z)(t.id, !0),
        ea = (0, f.ZP)(t),
        eo = (0, D.Z)({
            source: B.t4x.GUILD_HEADER,
            guild: t
        }),
        ec = (0, j.Z)({
            guildId: t.id,
            userId: J.id,
            analyticsLocation: {
                page: B.ZY5.GUILD_CHANNEL,
                section: B.jXE.GUILD_DROPDOWN_MENU
            },
            icon: d.vdY
        }),
        ed = t.hasFeature(B.oNc.HUB),
        es = t.id === F._,
        eu = t.id === H.yG,
        eb = (0, G.Z)(t.id),
        eg = (0, y.Z)(t),
        ef = (0, O.Z)(t),
        ep = (0, v.Z)(t, !0),
        eh = (0, P.Z)(t),
        { isFavoritesPerk: ey } = (0, h.z)('GuildHeaderPopout'),
        { triggerDeadchat: eO } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ej } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        eP = T.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ev] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eD = r.useCallback(() => {
            (0, d.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, z(q({}, n), { guild: t }));
            });
        }, [t]),
        eI = eP && ev === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ei || er
        ? (0, i.jsx)(d.v2r, {
              onSelect: V,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': Q.intl.string(Q.t.HpQykZ),
              children: (0, i.jsx)(d.sNh, {
                  id: 'leave-guild',
                  label: Q.intl.string(Q.t.J2TBi4),
                  icon: d.PBZ,
                  action: () => {
                      w.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : es
          ? (0, i.jsxs)(d.v2r, {
                onSelect: V,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': Q.intl.string(Q.t.HpQykZ),
                children: [
                    (0, i.jsxs)(d.kSQ, {
                        children: [
                            ey &&
                                (0, i.jsx)(d.sNh, {
                                    id: 'add-channel',
                                    label: Q.intl.string(Q.t['6uDHk5']),
                                    color: 'brand',
                                    icon: d.oFk,
                                    action: () =>
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, q({}, t));
                                        })
                                }),
                            (0, i.jsx)(d.sNh, {
                                id: 'create-category',
                                label: Q.intl.string(Q.t['ISN+ND']),
                                icon: d.f1I,
                                action: () =>
                                    (0, d.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, q({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(d.kSQ, {
                        children: (0, i.jsx)(d.S89, {
                            id: 'hide-muted-channels',
                            label: Q.intl.string(Q.t.UwOLJC),
                            checked: K,
                            action: () => s.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : ed
            ? (0, i.jsxs)(d.v2r, {
                  onSelect: V,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': Q.intl.string(Q.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(d.kSQ, {
                          children: [
                              X
                                  ? (0, i.jsx)(d.sNh, {
                                        id: 'settings',
                                        label: Q.intl.string(Q.t['154/bG']),
                                        icon: d.ewm,
                                        action: () => {
                                            w.Z.open(t.id, (0, E.r)());
                                        }
                                    })
                                  : null,
                              eo,
                              (0, i.jsx)(d.sNh, {
                                  id: 'privacy',
                                  label: Q.intl.string(Q.t.BayiAg),
                                  icon: d.b7C,
                                  action: () =>
                                      (0, d.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, z(q({}, n), { guild: t }));
                                      })
                              }),
                              ec
                          ]
                      }),
                      en
                          ? null
                          : (0, i.jsx)(d.kSQ, {
                                children: (0, i.jsx)(d.sNh, {
                                    id: 'leave',
                                    label: Q.intl.string(Q.t.Dv8gFR),
                                    icon: d.PBZ,
                                    color: 'danger',
                                    action: eD
                                })
                            })
                  ]
              })
            : eu
              ? null
              : (0, i.jsxs)(d.v2r, {
                    onSelect: V,
                    navId: 'guild-header-popout',
                    variant: 'fixed',
                    onClose: l,
                    'aria-label': Q.intl.string(Q.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(d.kSQ, {
                            children: [
                                (0, i.jsx)(d.sNh, {
                                    id: 'premium-subscribe',
                                    label: Q.intl.string(Q.t.VJEVbm),
                                    icon: (0, d.GSL)(R.Z),
                                    action: () => {
                                        (0, m.f)({
                                            guildId: t.id,
                                            location: { section: B.jXE.GUILD_HEADER_POPOUT }
                                        });
                                    }
                                }),
                                (0, N.up)(t) &&
                                    (0, N.jq)(t) &&
                                    (0, i.jsx)(d.sNh, {
                                        id: 'guild-tag',
                                        label: Q.intl.string(W.default.mf2OwM),
                                        icon: (0, i.jsx)(x.m0, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1
                                        }),
                                        action: () => (0, Z.Z)(t.id)
                                    })
                            ]
                        }),
                        (0, i.jsxs)(d.kSQ, {
                            children: [
                                en && J.isStaff() && eO
                                    ? (0, i.jsx)(d.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: d.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, B.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                en && J.isStaff() && ej
                                    ? (0, i.jsx)(d.sNh, {
                                          id: 'create-gaming-ping',
                                          label: 'Gaming Stats Ping',
                                          icon: d.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, B.uaV.GUILD_GAMING_STATS_PROMPT);
                                          }
                                      })
                                    : null,
                                eo,
                                X
                                    ? (0, i.jsx)(d.sNh, {
                                          id: 'settings',
                                          label: Q.intl.string(Q.t['154/bG']),
                                          icon: d.ewm,
                                          action: () => {
                                              w.Z.open(t.id, (0, E.r)());
                                          }
                                      })
                                    : null,
                                ee
                                    ? (0, i.jsx)(d.sNh, {
                                          id: 'insights',
                                          label: Q.intl.string(Q.t['0wWfUF']),
                                          icon: d.IeX,
                                          action: () => w.Z.open(t.id, B.pNK.ANALYTICS)
                                      })
                                    : null,
                                $
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(d.sNh, {
                                                  id: 'create-channel',
                                                  label: Q.intl.string(Q.t['fUYU+v']),
                                                  icon: d.oFk,
                                                  action: () =>
                                                      (0, d.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('63228')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  z(q({}, n), {
                                                                      channelType: B.d4z.GUILD_TEXT,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              }),
                                              (0, i.jsx)(d.sNh, {
                                                  id: 'create-category',
                                                  label: Q.intl.string(Q.t['ISN+ND']),
                                                  icon: d.f1I,
                                                  action: () =>
                                                      (0, d.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('63228')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  z(q({}, n), {
                                                                      channelType: B.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              })
                                          ]
                                      })
                                    : null,
                                el,
                                eg,
                                ef,
                                ea,
                                eh
                            ]
                        }),
                        (0, i.jsxs)(d.kSQ, {
                            children: [
                                eb,
                                (0, i.jsx)(d.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: Y.newBadgeRow,
                                        children: [
                                            Q.intl.string(Q.t.h850Sk),
                                            eI &&
                                                (0, i.jsx)(d.IGR, {
                                                    className: Y.newBadge,
                                                    text: Q.intl.string(Q.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eI ? void 0 : d.Dkj,
                                    action: () =>
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, z(q({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(d.sNh, {
                                    id: 'privacy',
                                    label: Q.intl.string(Q.t.BayiAg),
                                    icon: d.b7C,
                                    action: () =>
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, z(q({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(d.kSQ, {
                            children: [
                                ec,
                                (0, i.jsx)(d.S89, {
                                    id: 'hide-muted-channels',
                                    label: Q.intl.string(Q.t.UwOLJC),
                                    checked: K,
                                    action: () => s.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(d.kSQ, {
                            children: [
                                ep,
                                et && t.isCommunity()
                                    ? (0, i.jsx)(d.sNh, {
                                          id: 'report-raid',
                                          label: Q.intl.string(Q.t.cswId3),
                                          icon: d.b7C,
                                          color: 'danger',
                                          action: () => (0, I.J)(t.id)
                                      })
                                    : null,
                                en
                                    ? null
                                    : (0, i.jsx)(d.sNh, {
                                          id: 'leave',
                                          label: Q.intl.string(Q.t.J2TBi4),
                                          icon: d.PBZ,
                                          color: 'danger',
                                          action: eD
                                      })
                            ]
                        })
                    ]
                });
});
