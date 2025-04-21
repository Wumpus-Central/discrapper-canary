n.d(t, { default: () => Q }), n(388685);
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
let Q = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: Q } = e,
        Y = (0, o.e7)([k.default], () => k.default.getCurrentUser());
    a()(null != Y, 'GuildHeaderPopout: user cannot be undefined'),
        r.useEffect(() => {
            U.default.track(L.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let W = (0, o.e7)([T.ZP], () => T.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: V,
            canManageChannels: q,
            showGuildAnalytics: J
        } = (0, o.cj)(
            [G.Z],
            () => ({
                canAccessSettings: G.Z.canAccessGuildSettings(t),
                canManageChannels: G.Z.can(L.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: G.Z.can(L.Plq.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(L.oNc.COMMUNITY)
            }),
            [t]
        ),
        z = (0, v.N8)(t),
        K = t.isOwner(Y),
        X = (0, o.e7)([w.Z], () => w.Z.isLurking(t.id), [t.id]),
        $ = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        ee = (0, E.Z)(t.id, !0),
        et = (0, f.ZP)(t),
        en = (0, I.Z)({
            source: L.t4x.GUILD_HEADER,
            guild: t
        }),
        ei = (0, h.Z)({
            guildId: t.id,
            userId: Y.id,
            analyticsLocation: {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        er = t.hasFeature(L.oNc.HUB),
        el = t.id === R._,
        ea = (0, m.Z)(t.id),
        eo = (0, O.Z)(t),
        ec = (0, j.Z)(t),
        es = (0, D.Z)(t, !0),
        ed = (0, _.Z)(t),
        { isFavoritesPerk: eu } = (0, y.z)('GuildHeaderPopout'),
        { triggerDeadchat: eb } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        { triggerGamingStats: eg } = b.F.useExperiment(
            {
                guildId: t.id,
                location: 'guild header'
            },
            { autoTrackExposure: !1 }
        ),
        ef = Z.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [ep] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        ey = r.useCallback(() => {
            (0, s.ZDy)(async () => {
                let { default: e } = await n.e('53961').then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, H(F({}, n), { guild: t }));
            });
        }, [t]),
        eO = ef && ep === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return X || $
        ? (0, i.jsx)(s.v2r, {
              onSelect: Q,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: l,
              'aria-label': M.intl.string(M.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: M.intl.string(M.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      x.Z.leaveGuild(t.id, !0);
                  }
              })
          })
        : el
          ? (0, i.jsxs)(s.v2r, {
                onSelect: Q,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: l,
                'aria-label': M.intl.string(M.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            eu &&
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
                            checked: W,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : er
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: Q,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: l,
                  'aria-label': M.intl.string(M.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              V
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: M.intl.string(M.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            x.Z.open(t.id, (0, S.r)(t.id));
                                        }
                                    })
                                  : null,
                              en,
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
                              ei
                          ]
                      }),
                      K
                          ? null
                          : (0, i.jsx)(s.kSQ, {
                                children: (0, i.jsx)(s.sNh, {
                                    id: 'leave',
                                    label: M.intl.string(M.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: ey
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(s.v2r, {
                  onSelect: Q,
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
                              K && Y.isStaff() && eb
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              K && Y.isStaff() && eg
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, L.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              en,
                              V
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: M.intl.string(M.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            x.Z.open(t.id, (0, S.r)(t.id));
                                        }
                                    })
                                  : null,
                              J
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'insights',
                                        label: M.intl.string(M.t['0wWfUF']),
                                        icon: s.IeX,
                                        action: () => x.Z.open(t.id, L.pNK.ANALYTICS)
                                    })
                                  : null,
                              q
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
                              ee,
                              eo,
                              ec,
                              et,
                              ed
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              ea,
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
                              ei,
                              (0, i.jsx)(s.S89, {
                                  id: 'hide-muted-channels',
                                  label: M.intl.string(M.t.UwOLJC),
                                  checked: W,
                                  action: () => d.Z.toggleCollapseGuild(t.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              es,
                              z && t.isCommunity()
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'report-raid',
                                        label: M.intl.string(M.t.cswId3),
                                        icon: s.b7C,
                                        color: 'danger',
                                        action: () => (0, P.J)(t.id)
                                    })
                                  : null,
                              K
                                  ? null
                                  : (0, i.jsx)(s.sNh, {
                                        id: 'leave',
                                        label: M.intl.string(M.t.J2TBi4),
                                        icon: s.PBZ,
                                        color: 'danger',
                                        action: ey
                                    })
                          ]
                      })
                  ]
              });
});
