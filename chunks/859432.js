n.d(t, { default: () => Y }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(704215),
    s = n(481060),
    d = n(5036),
    u = n(553385),
    b = n(52011),
    g = n(890477),
    f = n(458034),
    p = n(706140),
    y = n(362658),
    O = n(294978),
    j = n(513102),
    h = n(976192),
    _ = n(887904),
    D = n(429824),
    I = n(466330),
    P = n(191471),
    v = n(162157),
    N = n(623624),
    E = n(894059),
    x = n(434404),
    S = n(978946),
    w = n(41776),
    m = n(837949),
    Z = n(11352),
    A = n(271383),
    G = n(496675),
    T = n(9156),
    k = n(594174),
    C = n(709586),
    U = n(626135),
    L = n(981631),
    R = n(647086),
    M = n(982183),
    B = n(388032),
    F = n(401174);
function H(e) {
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
function Q(e, t) {
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
let Y = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: Y } = e,
        W = (0, o.e7)([k.default], () => k.default.getCurrentUser());
    a()(null != W, 'GuildHeaderPopout: user cannot be undefined'),
        r.useEffect(() => {
            U.default.track(L.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let V = (0, o.e7)([T.ZP], () => T.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: q,
            canManageChannels: J,
            showGuildAnalytics: z
        } = (0, o.cj)(
            [G.Z],
            () => ({
                canAccessSettings: G.Z.canAccessGuildSettings(t),
                canManageChannels: G.Z.can(L.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: G.Z.can(L.Plq.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(L.oNc.COMMUNITY)
            }),
            [t]
        ),
        K = (0, v.N8)(t),
        X = t.isOwner(W),
        $ = (0, o.e7)([w.Z], () => w.Z.isLurking(t.id), [t.id]),
        ee = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        et = (0, E.Z)(t.id, !0),
        en = (0, f.ZP)(t),
        ei = (0, I.Z)({
            source: L.t4x.GUILD_HEADER,
            guild: t
        }),
        er = (0, h.Z)({
            guildId: t.id,
            userId: W.id,
            analyticsLocation: {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        el = t.hasFeature(L.oNc.HUB),
        ea = t.id === R._,
        eo = t.id === M.yG,
        ec = (0, m.Z)(t.id),
        es = (0, O.Z)(t),
        ed = (0, j.Z)(t),
        eu = (0, D.Z)(t, !0),
        eb = (0, _.Z)(t),
        { isFavoritesPerk: eg } = (0, y.z)('GuildHeaderPopout'),
        { triggerDeadchat: ef } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ep } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ey = Z.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eO] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        ej = r.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, Q(H({}, n), { guild: t }));
            });
        }, [t]),
        eh = ey && eO === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return $ || ee
        ? (0, i.jsx)(s.v2r, {
              onSelect: Y,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': B.intl.string(B.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: B.intl.string(B.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      x.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : ea
          ? (0, i.jsxs)(s.v2r, {
                onSelect: Y,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': B.intl.string(B.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            eg &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: B.intl.string(B.t['6uDHk5']),
                                    color: 'brand',
                                    icon: s.oFk,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, H({}, t));
                                        })
                                }),
                            (0, i.jsx)(s.sNh, {
                                id: 'create-category',
                                label: B.intl.string(B.t['ISN+ND']),
                                icon: s.f1I,
                                action: () =>
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, H({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'hide-muted-channels',
                            label: B.intl.string(B.t.UwOLJC),
                            checked: V,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : el
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: Y,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': B.intl.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              q
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: B.intl.string(B.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            x.Z.open(t.id, (0, S.r)());
                                        }
                                    })
                                  : null,
                              ei,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: B.intl.string(B.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, Q(H({}, n), { guild: t }));
                                      })
                              }),
                              er
                          ]
                      }),
                      X
                          ? null
                          : (0, i.jsx)(s.kSQ, {
                                children: (0, i.jsx)(s.sNh, {
                                    id: 'leave',
                                    label: B.intl.string(B.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: ej
                                })
                            })
                  ]
              })
            : eo
              ? null
              : (0, i.jsxs)(s.v2r, {
                    onSelect: Y,
                    navId: 'guild-header-popout',
                    variant: 'fixed',
                    onClose: l,
                    'aria-label': B.intl.string(B.t.HpQykZ),
                    children: [
                        (0, i.jsx)(s.kSQ, {
                            children: (0, i.jsx)(s.sNh, {
                                id: 'premium-subscribe',
                                label: B.intl.string(B.t.VJEVbm),
                                icon: (0, s.GSL)(C.Z),
                                action: () => {
                                    (0, N.f)({
                                        guildId: t.id,
                                        location: { section: L.jXE.GUILD_HEADER_POPOUT }
                                    });
                                }
                            })
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                X && W.isStaff() && ef
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-deadchat',
                                          label: 'Deadchat Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          }
                                      })
                                    : null,
                                X && W.isStaff() && ep
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'create-gaming-ping',
                                          label: 'Gaming Stats Ping',
                                          icon: s.eQA,
                                          action: () => {
                                              (0, u.j8)(t.id, L.uaV.GUILD_GAMING_STATS_PROMPT);
                                          }
                                      })
                                    : null,
                                ei,
                                q
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'settings',
                                          label: B.intl.string(B.t['154/bG']),
                                          icon: s.ewm,
                                          action: () => {
                                              x.Z.open(t.id, (0, S.r)());
                                          }
                                      })
                                    : null,
                                z
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'insights',
                                          label: B.intl.string(B.t['0wWfUF']),
                                          icon: s.IeX,
                                          action: () => x.Z.open(t.id, L.pNK.ANALYTICS)
                                      })
                                    : null,
                                J
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-channel',
                                                  label: B.intl.string(B.t['fUYU+v']),
                                                  icon: s.oFk,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('63228')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  Q(H({}, n), {
                                                                      channelType: L.d4z.GUILD_TEXT,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              }),
                                              (0, i.jsx)(s.sNh, {
                                                  id: 'create-category',
                                                  label: B.intl.string(B.t['ISN+ND']),
                                                  icon: s.f1I,
                                                  action: () =>
                                                      (0, s.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([n.e('45094'), n.e('63228')]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  Q(H({}, n), {
                                                                      channelType: L.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id
                                                                  })
                                                              );
                                                      })
                                              })
                                          ]
                                      })
                                    : null,
                                et,
                                es,
                                ed,
                                en,
                                eb
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                ec,
                                (0, i.jsx)(s.sNh, {
                                    id: 'notifications',
                                    label: (0, i.jsxs)('div', {
                                        className: F.newBadgeRow,
                                        children: [
                                            B.intl.string(B.t.h850Sk),
                                            eh &&
                                                (0, i.jsx)(s.IGR, {
                                                    className: F.newBadge,
                                                    text: B.intl.string(B.t.y2b7CA)
                                                })
                                        ]
                                    }),
                                    icon: eh ? void 0 : s.Dkj,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                            return (n) => (0, i.jsx)(e, Q(H({}, n), { guildId: t.id }));
                                        })
                                }),
                                (0, i.jsx)(s.sNh, {
                                    id: 'privacy',
                                    label: B.intl.string(B.t.BayiAg),
                                    icon: s.b7C,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, Q(H({}, n), { guild: t }));
                                        })
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                er,
                                (0, i.jsx)(s.S89, {
                                    id: 'hide-muted-channels',
                                    label: B.intl.string(B.t.UwOLJC),
                                    checked: V,
                                    action: () => d.Z.toggleCollapseGuild(t.id)
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.kSQ, {
                            children: [
                                eu,
                                K && t.isCommunity()
                                    ? (0, i.jsx)(s.sNh, {
                                          id: 'report-raid',
                                          label: B.intl.string(B.t.cswId3),
                                          icon: s.b7C,
                                          color: 'danger',
                                          action: () => (0, P.J)(t.id)
                                      })
                                    : null,
                                X
                                    ? null
                                    : (0, i.jsx)(s.sNh, {
                                          id: 'leave',
                                          label: B.intl.string(B.t.J2TBi4),
                                          icon: s.PBZ,
                                          color: 'danger',
                                          action: ej
                                      })
                            ]
                        })
                    ]
                });
});
