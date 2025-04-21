n.d(t, { default: () => Y }), n(388685);
var i = n(200651),
    r = n(192379),
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
    I = n(429824),
    D = n(466330),
    P = n(191471),
    v = n(162157),
    N = n(623624),
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
    R = n(647086),
    M = n(388032),
    B = n(401174);
function F(e) {
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
function H(e, t) {
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
function Q(e) {
    S.Z.leaveGuild(e.id, !0);
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
        $ = (0, o.e7)([m.Z], () => m.Z.isLurking(t.id), [t.id]),
        ee = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        et = (0, E.Z)(t.id, !0),
        en = (0, f.ZP)(t),
        ei = (0, D.Z)({
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
        eo = (0, w.Z)(t.id),
        ec = (0, O.Z)(t),
        es = (0, j.Z)(t),
        ed = (0, I.Z)(t, !0),
        eu = (0, _.Z)(t),
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
              onSelect: Y,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': M.intl.string(M.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: M.intl.string(M.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      S.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : ea
          ? (0, i.jsxs)(s.v2r, {
                onSelect: Y,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': M.intl.string(M.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            eb &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: M.intl.string(M.t['6uDHk5']),
                                    color: 'brand',
                                    icon: s.oFk,
                                    action: () =>
                                        (0, s.ZDy)(async () => {
                                            let { default: e } = await n.e('29608').then(n.bind(n, 178125));
                                            return (t) => (0, i.jsx)(e, F({}, t));
                                        })
                                }),
                            (0, i.jsx)(s.sNh, {
                                id: 'create-category',
                                label: M.intl.string(M.t['ISN+ND']),
                                icon: s.f1I,
                                action: () =>
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await n.e('33356').then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, F({}, t));
                                    })
                            })
                        ]
                    }),
                    (0, i.jsx)(s.kSQ, {
                        children: (0, i.jsx)(s.S89, {
                            id: 'hide-muted-channels',
                            label: M.intl.string(M.t.UwOLJC),
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
                  'aria-label': M.intl.string(M.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              q
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: M.intl.string(M.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, x.r)(t.id));
                                        }
                                    })
                                  : null,
                              ei,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: M.intl.string(M.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, H(F({}, n), { guild: t }));
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
                                    label: M.intl.string(M.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: () => Q(t)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(s.v2r, {
                  onSelect: Y,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': M.intl.string(M.t.HpQykZ),
                  children: [
                      (0, i.jsx)(s.kSQ, {
                          children: (0, i.jsx)(s.sNh, {
                              id: 'premium-subscribe',
                              label: M.intl.string(M.t.VJEVbm),
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
                              X && W.isStaff() && eg
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              X && W.isStaff() && ef
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
                                        label: M.intl.string(M.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, x.r)(t.id));
                                        }
                                    })
                                  : null,
                              z
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'insights',
                                        label: M.intl.string(M.t['0wWfUF']),
                                        icon: s.IeX,
                                        action: () => S.Z.open(t.id, L.pNK.ANALYTICS)
                                    })
                                  : null,
                              J
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-channel',
                                                label: M.intl.string(M.t['fUYU+v']),
                                                icon: s.oFk,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                H(F({}, n), {
                                                                    channelType: L.d4z.GUILD_TEXT,
                                                                    guildId: t.id
                                                                })
                                                            );
                                                    })
                                            }),
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-category',
                                                label: M.intl.string(M.t['ISN+ND']),
                                                icon: s.f1I,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                H(F({}, n), {
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
                                      className: B.newBadgeRow,
                                      children: [
                                          M.intl.string(M.t.h850Sk),
                                          eO &&
                                              (0, i.jsx)(s.IGR, {
                                                  className: B.newBadge,
                                                  text: M.intl.string(M.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: eO ? void 0 : s.Dkj,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                          return (n) => (0, i.jsx)(e, H(F({}, n), { guildId: t.id }));
                                      })
                              }),
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: M.intl.string(M.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, H(F({}, n), { guild: t }));
                                      })
                              })
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              er,
                              (0, i.jsx)(s.S89, {
                                  id: 'hide-muted-channels',
                                  label: M.intl.string(M.t.UwOLJC),
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
                                        label: M.intl.string(M.t.cswId3),
                                        icon: s.b7C,
                                        color: 'danger',
                                        action: () => (0, P.J)(t.id)
                                    })
                                  : null,
                              X
                                  ? null
                                  : (0, i.jsx)(s.sNh, {
                                        id: 'leave',
                                        label: M.intl.string(M.t.J2TBi4),
                                        icon: s.PBZ,
                                        color: 'danger',
                                        action: () => Q(t)
                                    })
                          ]
                      })
                  ]
              });
});
