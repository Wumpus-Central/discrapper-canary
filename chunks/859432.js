n.d(t, { default: () => V }), n(47120);
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
    O = n(241851),
    j = n(294978),
    h = n(513102),
    N = n(976192),
    I = n(887904),
    _ = n(429824),
    D = n(466330),
    P = n(191471),
    v = n(162157),
    E = n(623624),
    x = n(894059),
    S = n(434404),
    m = n(978946),
    w = n(41776),
    Z = n(837949),
    A = n(11352),
    G = n(703656),
    T = n(271383),
    k = n(496675),
    C = n(9156),
    U = n(594174),
    L = n(709586),
    R = n(626135),
    W = n(981631),
    M = n(647086),
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
function Y(e) {
    (0, s.h7j)((t) => (0, i.jsx)(O.g, Q(H({}, t), { guild: e })));
}
let V = r.memo(function (e) {
    let { guild: t, onClose: a, onSelect: O } = e,
        V = (0, o.e7)([U.default], () => U.default.getCurrentUser());
    l()(null != V, 'GuildHeaderPopout: user cannot be undefined'),
        r.useEffect(() => {
            R.default.track(W.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let q = (0, o.e7)([C.ZP], () => C.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: J,
            canManageChannels: z,
            showGuildAnalytics: K
        } = (0, o.cj)(
            [k.Z],
            () => ({
                canAccessSettings: k.Z.canAccessGuildSettings(t),
                canManageChannels: k.Z.can(W.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: k.Z.can(W.Plq.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(W.oNc.COMMUNITY)
            }),
            [t]
        ),
        X = (0, v.N8)(t),
        $ = t.isOwner(V),
        ee = (0, o.e7)([w.Z], () => w.Z.isLurking(t.id), [t.id]),
        et = (0, o.e7)([T.ZP], () => T.ZP.isCurrentUserGuest(t.id)),
        en = (0, x.Z)(t.id, !0),
        ei = (0, f.ZP)(t),
        er = (0, D.Z)({
            source: W.t4x.GUILD_HEADER,
            guild: t
        }),
        ea = (0, N.Z)({
            guildId: t.id,
            userId: V.id,
            analyticsLocation: {
                page: W.ZY5.GUILD_CHANNEL,
                section: W.jXE.GUILD_DROPDOWN_MENU
            },
            icon: s.vdY
        }),
        el = t.hasFeature(W.oNc.HUB),
        eo = t.id === M._,
        ec = (0, Z.Z)(t.id),
        es = (0, j.Z)(t),
        ed = (0, h.Z)(t),
        eu = (0, _.Z)(t, !0),
        eb = (0, I.Z)(t),
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
        ey = A.Y.useExperiment({ location: 'GuildHeaderPopout' }, { autoTrackExposure: !0 }).enabled,
        [eO] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
        ej = ey && eO === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
    return ee || et
        ? (0, i.jsx)(s.v2r, {
              onSelect: O,
              navId: 'guild-header-popout',
              variant: 'fixed',
              onClose: a,
              'aria-label': B.NW.string(B.t.HpQykZ),
              children: (0, i.jsx)(s.sNh, {
                  id: 'leave-guild',
                  label: B.NW.string(B.t.J2TBi4),
                  icon: s.PBZ,
                  action: () => {
                      S.Z.leaveGuild(t.id), et || (0, G.uL)(W.Z5c.GUILD_DISCOVERY);
                  }
              })
          })
        : eo
          ? (0, i.jsxs)(s.v2r, {
                onSelect: O,
                navId: 'favorites-header-popout',
                variant: 'fixed',
                onClose: a,
                'aria-label': B.NW.string(B.t.HpQykZ),
                children: [
                    (0, i.jsxs)(s.kSQ, {
                        children: [
                            eg &&
                                (0, i.jsx)(s.sNh, {
                                    id: 'add-channel',
                                    label: B.NW.string(B.t['6uDHk5']),
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
                                label: B.NW.string(B.t['ISN+ND']),
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
                            label: B.NW.string(B.t.UwOLJC),
                            checked: q,
                            action: () => d.Z.toggleCollapseGuild(t.id)
                        })
                    })
                ]
            })
          : el
            ? (0, i.jsxs)(s.v2r, {
                  onSelect: O,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.NW.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              J
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: B.NW.string(B.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, m.r)(t.id));
                                        }
                                    })
                                  : null,
                              er,
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: B.NW.string(B.t.BayiAg),
                                  icon: s.b7C,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await n.e('59500').then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, Q(H({}, n), { guild: t }));
                                      })
                              }),
                              ea
                          ]
                      }),
                      $
                          ? null
                          : (0, i.jsx)(s.kSQ, {
                                children: (0, i.jsx)(s.sNh, {
                                    id: 'leave',
                                    label: B.NW.string(B.t.Dv8gFR),
                                    icon: s.PBZ,
                                    color: 'danger',
                                    action: () => Y(t)
                                })
                            })
                  ]
              })
            : (0, i.jsxs)(s.v2r, {
                  onSelect: O,
                  navId: 'guild-header-popout',
                  variant: 'fixed',
                  onClose: a,
                  'aria-label': B.NW.string(B.t.HpQykZ),
                  children: [
                      (0, i.jsx)(s.kSQ, {
                          children: (0, i.jsx)(s.sNh, {
                              id: 'premium-subscribe',
                              label: B.NW.string(B.t.VJEVbm),
                              icon: (0, s.GSL)(L.Z),
                              action: () => {
                                  (0, E.f)({
                                      guildId: t.id,
                                      location: { section: W.jXE.GUILD_HEADER_POPOUT }
                                  });
                              }
                          })
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              $ && V.isStaff() && ef
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-deadchat',
                                        label: 'Deadchat Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, W.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                        }
                                    })
                                  : null,
                              $ && V.isStaff() && ep
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'create-gaming-ping',
                                        label: 'Gaming Stats Ping',
                                        icon: s.eQA,
                                        action: () => {
                                            (0, u.j8)(t.id, W.uaV.GUILD_GAMING_STATS_PROMPT);
                                        }
                                    })
                                  : null,
                              er,
                              J
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'settings',
                                        label: B.NW.string(B.t['154/bG']),
                                        icon: s.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, m.r)(t.id));
                                        }
                                    })
                                  : null,
                              K
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'insights',
                                        label: B.NW.string(B.t['0wWfUF']),
                                        icon: s.IeX,
                                        action: () => S.Z.open(t.id, W.pNK.ANALYTICS)
                                    })
                                  : null,
                              z
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-channel',
                                                label: B.NW.string(B.t['fUYU+v']),
                                                icon: s.oFk,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                Q(H({}, n), {
                                                                    channelType: W.d4z.GUILD_TEXT,
                                                                    guildId: t.id
                                                                })
                                                            );
                                                    })
                                            }),
                                            (0, i.jsx)(s.sNh, {
                                                id: 'create-category',
                                                label: B.NW.string(B.t['ISN+ND']),
                                                icon: s.f1I,
                                                action: () =>
                                                    (0, s.ZDy)(async () => {
                                                        let { default: e } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                                                        return (n) =>
                                                            (0, i.jsx)(
                                                                e,
                                                                Q(H({}, n), {
                                                                    channelType: W.d4z.GUILD_CATEGORY,
                                                                    guildId: t.id
                                                                })
                                                            );
                                                    })
                                            })
                                        ]
                                    })
                                  : null,
                              en,
                              es,
                              ed,
                              ei,
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
                                          B.NW.string(B.t.h850Sk),
                                          ej &&
                                              (0, i.jsx)(s.IGR, {
                                                  className: F.newBadge,
                                                  text: B.NW.string(B.t.y2b7CA)
                                              })
                                      ]
                                  }),
                                  icon: ej ? void 0 : s.Dkj,
                                  action: () =>
                                      (0, s.ZDy)(async () => {
                                          let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
                                          return (n) => (0, i.jsx)(e, Q(H({}, n), { guildId: t.id }));
                                      })
                              }),
                              (0, i.jsx)(s.sNh, {
                                  id: 'privacy',
                                  label: B.NW.string(B.t.BayiAg),
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
                              ea,
                              (0, i.jsx)(s.S89, {
                                  id: 'hide-muted-channels',
                                  label: B.NW.string(B.t.UwOLJC),
                                  checked: q,
                                  action: () => d.Z.toggleCollapseGuild(t.id)
                              })
                          ]
                      }),
                      (0, i.jsxs)(s.kSQ, {
                          children: [
                              eu,
                              X && t.isCommunity()
                                  ? (0, i.jsx)(s.sNh, {
                                        id: 'report-raid',
                                        label: B.NW.string(B.t.cswId3),
                                        icon: s.b7C,
                                        color: 'danger',
                                        action: () => (0, P.J)(t.id)
                                    })
                                  : null,
                              $
                                  ? null
                                  : (0, i.jsx)(s.sNh, {
                                        id: 'leave',
                                        label: B.NW.string(B.t.J2TBi4),
                                        icon: s.PBZ,
                                        color: 'danger',
                                        action: () => Y(t)
                                    })
                          ]
                      })
                  ]
              });
});
