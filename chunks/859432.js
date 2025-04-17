n.d(t, { default: () => Q }), n(388685);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    l = n.n(a),
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
    N = n(887904),
    _ = n(429824),
    I = n(466330),
    D = n(191471),
    P = n(162157),
    v = n(623624),
    E = n(894059),
    S = n(434404),
    x = n(978946),
    m = n(41776),
    w = n(837949),
    Z = n(11352),
    A = n(271383),
    G = n(496675),
    T = n(9156),
    k = n(594174),
    C = n(709586),
    U = n(626135),
    L = n(981631),
    W = n(647086),
    R = n(388032),
    M = n(401174);
function B(e) {
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
function F(e, t) {
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
function H(e) {
    S.Z.leaveGuild(e.id, !0);
}
let Q = r.memo(function (e) {
    let { guild: t, onClose: a, onSelect: Q } = e,
        Y = (0, o.e7)([k.default], () => k.default.getCurrentUser());
    l()(null != Y, 'GuildHeaderPopout: user cannot be undefined'),
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
        K = (0, P.N8)(t),
        X = t.isOwner(Y),
        $ = (0, o.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]),
        ee = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        et = (0, E.Z)(t.id, !0),
        en = (0, f.ZP)(t),
        ei = (0, I.Z)({
            source: L.t4x.GUILD_HEADER,
            guild: t
        }),
        er = (0, h.Z)({
            guildId: t.id,
            userId: Y.id,
            analyticsLocation: {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        ea = t.hasFeature(L.oNc.HUB),
        el = t.id === W._,
        eo = (0, w.Z)(t.id),
        ec = (0, O.Z)(t),
        es = (0, j.Z)(t),
        ed = (0, _.Z)(t, !0),
        eu = (0, N.Z)(t),
        { isFavoritesPerk: eb } = (0, y.z)('GuildHeaderPopout'),
        { triggerDeadchat: eg } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: ef } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ep = Z.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ey] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        eO = ep && ey === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return $ || ee
        ? (0, i.jsx)(s.v2r, {
              onSelect: Q,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': R.NW.string(R.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: R.NW.string(R.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      S.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : el
          ? (0, i.jsxs)(s.v2r, {
                onSelect: Q,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': R.NW.string(R.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            eb &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: R.NW.string(R.t['6uDHk5']),
                                    color: 'brand',
                                    icon: s.oFk,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, B({}, t));
                                        })
                                }),
                            (0, i.jsx)(s.sNh, {
                                id: 'create-category',
                                label: R.NW.string(R.t['ISN+ND']),
                                icon: s.f1I,
                                action: () =>
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, B({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'hide-muted-channels',
                            label: R.NW.string(R.t.UwOLJC),
                            checked: V,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : ea
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: Q,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': R.NW.string(R.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              q
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: R.NW.string(R.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, x.r)(t.id));
                                        }
                                    })
                                  : null,
                              ei,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: R.NW.string(R.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, F(B({}, n), { guild: t }));
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
                                    label: R.NW.string(R.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: () => H(t)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(s.v2r, {
                  onSelect: Q,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': R.NW.string(R.t.HpQykZ),
                  children: [
                      (0, i.jsx)(s.kSQ, {
                          children: (0, i.jsx)(s.sNh, {
                              id: 'premium-subscribe',
                              label: R.NW.string(R.t.VJEVbm),
                              icon: (0, s.GSL)(C.Z),
                              action: () => {
                                  (0, v.f)({
                                      guildId: t.id,
                                      location: { section: L.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              X && Y.isStaff() && eg
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              X && Y.isStaff() && ef
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
                                        label: R.NW.string(R.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, x.r)(t.id));
                                        }
                                    })
                                  : null,
                              z
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'insights',
                                        label: R.NW.string(R.t['0wWfUF']),
                                        icon: s.IeX,
                                        action: () => S.Z.open(t.id, L.pNK.ANALYTICS)
                                    })
                                  : null,
                              J
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-channel',
                                                label: R.NW.string(R.t['fUYU+v']),
                                                icon: s.oFk,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                F(B({}, n), {
                                                                    channelType: L.d4z.GUILD_TEXT,
                                                                    guildId: t.id
                                                                })
                                                            );
                                                    })
                                            }),
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-category',
                                                label: R.NW.string(R.t['ISN+ND']),
                                                icon: s.f1I,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                F(B({}, n), {
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
                              ec,
                              es,
                              en,
                              eu
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              eo,
                              (0, i.jsx)(s.sNh, {
                                  id: 'notifications',
                                  label: (0, i.jsxs)('div', {
                                      className: M.newBadgeRow,
                                      children: [
                                          R.NW.string(R.t.h850Sk),
                                          eO &&
                                              (0, i.jsx)(s.IGR, {
                                                  className: M.newBadge,
                                                  text: R.NW.string(R.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: eO ? void 0 : s.Dkj,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                          return (n) => (0, i.jsx)(e, F(B({}, n), { guildId: t.id }));
                                      })
                              }),
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: R.NW.string(R.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, F(B({}, n), { guild: t }));
                                      })
                              })
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              er,
                              (0, i.jsx)(s.S89, {
                                  id: 'hide-muted-channels',
                                  label: R.NW.string(R.t.UwOLJC),
                                  checked: V,
                                  action: () => d.Z.toggleCollapseGuild(t.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              ed,
                              K && t.isCommunity()
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'report-raid',
                                        label: R.NW.string(R.t.cswId3),
                                        icon: s.b7C,
                                        color: 'danger',
                                        action: () => (0, D.J)(t.id)
                                    })
                                  : null,
                              X
                                  ? null
                                  : (0, i.jsx)(s.sNh, {
                                        id: 'leave',
                                        label: R.NW.string(R.t.J2TBi4),
                                        icon: s.PBZ,
                                        color: 'danger',
                                        action: () => H(t)
                                    })
                          ]
                      })
                  ]
              });
});
