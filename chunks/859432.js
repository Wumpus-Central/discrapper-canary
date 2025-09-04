n.d(t, { default: () => Y });
var i = n(951288),
    r = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(5036),
    s = n(553385),
    u = n(52011),
    b = n(890477),
    g = n(458034),
    f = n(362658),
    h = n(294978),
    p = n(513102),
    y = n(976192),
    j = n(887904),
    O = n(429824),
    x = n(466330),
    v = n(191471),
    P = n(162157),
    m = n(623624),
    Z = n(894059),
    w = n(434404),
    S = n(978946),
    D = n(731722),
    E = n(172751),
    N = n(343056),
    I = n(41776),
    k = n(190263),
    _ = n(837949),
    G = n(601964),
    A = n(271383),
    C = n(496675),
    T = n(9156),
    U = n(594174),
    L = n(626135),
    B = n(981631),
    M = n(647086),
    F = n(388032),
    R = n(899926),
    H = n(617575);
function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
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
let Y = r.memo(function (e) {
    let { guild: t, onClose: l, onSelect: Y } = e,
        q = (0, o.e7)([U.default], () => U.default.getCurrentUser());
    a()(null != q, "GuildHeaderPopout: user cannot be undefined"),
        r.useEffect(() => {
            L.default.track(B.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let V = (0, o.e7)([T.ZP], () => T.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: J,
            canManageChannels: z,
            showGuildAnalytics: X,
        } = (0, o.cj)(
            [C.Z],
            () => ({
                canAccessSettings: C.Z.canAccessGuildSettings(t),
                canManageChannels: C.Z.can(B.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: C.Z.can(B.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(B.oNc.COMMUNITY),
            }),
            [t],
        ),
        K = (0, P.N8)(t),
        $ = (0, G.eM)(t, q),
        ee = (0, o.e7)([I.Z], () => I.Z.isLurking(t.id), [t.id]),
        et = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        en = (0, Z.Z)(t.id, !0),
        ei = (0, g.ZP)(t),
        er = (0, x.Z)({
            source: B.t4x.GUILD_HEADER,
            guild: t,
        }),
        el = (0, y.Z)({
            guildId: t.id,
            userId: q.id,
            analyticsLocation: {
                page: B.ZY5.GUILD_CHANNEL,
                section: B.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: c.vdY,
        }),
        ea = t.features.has(B.oNc.HUB),
        eo = t.id === M._,
        ec = t.id === B.STv,
        ed = (0, _.Z)(t.id),
        es = (0, h.Z)(t),
        eu = (0, p.Z)(t),
        eb = (0, O.Z)(t, !0),
        eg = (0, j.Z)(t),
        { isFavoritesPerk: ef } = (0, f.z)("GuildHeaderPopout"),
        eh = (0, k.o)(t),
        { triggerDeadchat: ep } = b.Z.useExperiment(
            {
                guildId: t.id,
                location: "guild header",
            },
            { autoTrackExposure: !1 },
        ),
        { triggerGamingStats: ey } = u.F.useExperiment(
            {
                guildId: t.id,
                location: "guild header",
            },
            { autoTrackExposure: !1 },
        ),
        ej = r.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("53961").then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, W(Q({}, n), { guild: t }));
            });
        }, [t]);
    return ee || et
        ? (0, i.jsx)(c.v2r, {
              onSelect: Y,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": F.intl.string(F.t.HpQykZ),
              children: (0, i.jsx)(c.sNh, {
                  id: "leave-guild",
                  label: F.intl.string(F.t.J2TBi4),
                  icon: c.PBZ,
                  action: () => {
                      w.Z.leaveGuild(t.id, !0);
                  },
              }),
          })
        : eo
          ? (0, i.jsxs)(c.v2r, {
                onSelect: Y,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": F.intl.string(F.t.HpQykZ),
                children: [
                    (0, i.jsxs)(c.kSQ, {
                        children: [
                            ef &&
                                (0, i.jsx)(c.sNh, {
                                    id: "add-channel",
                                    label: F.intl.string(F.t["6uDHk5"]),
                                    color: "brand",
                                    icon: c.oFk,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e("29608").then(n.bind(n, 610617));
                                            return (t) => (0, i.jsx)(e, Q({}, t));
                                        }),
                                }),
                            (0, i.jsx)(c.sNh, {
                                id: "create-category",
                                label: F.intl.string(F.t["ISN+ND"]),
                                icon: c.f1I,
                                action: () =>
                                    (0, c.ZDy)(async () => {
                                        let { default: e } = await n.e("33356").then(n.bind(n, 477782));
                                        return (t) => (0, i.jsx)(e, Q({}, t));
                                    }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(c.kSQ, {
                        children: (0, i.jsx)(c.S89, {
                            id: "hide-muted-channels",
                            label: F.intl.string(F.t.UwOLJC),
                            checked: V,
                            action: () => d.Z.toggleCollapseGuild(t.id),
                        }),
                    }),
                ],
            })
          : ea
            ? (0, i.jsxs)(c.v2r, {
                  onSelect: Y,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: l,
                  "aria-label": F.intl.string(F.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(c.kSQ, {
                          children: [
                              J
                                  ? (0, i.jsx)(c.sNh, {
                                        id: "settings",
                                        label: F.intl.string(F.t["154/bG"]),
                                        icon: eh ? c.Ncx : c.ewm,
                                        action: () => {
                                            w.Z.open(t.id, (0, S.r)());
                                        },
                                    })
                                  : null,
                              er,
                              (0, i.jsx)(c.sNh, {
                                  id: "privacy",
                                  label: F.intl.string(F.t.BayiAg),
                                  icon: c.b7C,
                                  action: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, W(Q({}, n), { guild: t }));
                                      }),
                              }),
                              el,
                          ],
                      }),
                      $
                          ? null
                          : (0, i.jsx)(c.kSQ, {
                                children: (0, i.jsx)(c.sNh, {
                                    id: "leave",
                                    label: F.intl.string(F.t.Dv8gFR),
                                    icon: c.PBZ,
                                    color: "danger",
                                    action: ej,
                                }),
                            }),
                  ],
              })
            : ec
              ? null
              : (0, i.jsxs)(c.v2r, {
                    onSelect: Y,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": F.intl.string(F.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                (0, i.jsx)(c.sNh, {
                                    id: "premium-subscribe",
                                    label: F.intl.string(F.t.VJEVbm),
                                    icon: c.$Eu,
                                    action: () => {
                                        (0, m.f)({
                                            guildId: t.id,
                                            location: { section: B.jXE.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                (0, D.up)(t) &&
                                    (0, D.jq)(t) &&
                                    (0, i.jsx)(c.sNh, {
                                        id: "guild-tag",
                                        label: F.intl.string(R.default.mf2OwM),
                                        icon: (0, i.jsx)(E.m0, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, N.Z)(t.id),
                                    }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                $ && q.isStaff() && ep
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: c.eQA,
                                          action: () => {
                                              (0, s.j8)(t.id, B.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                $ && q.isStaff() && ey
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "create-gaming-ping",
                                          label: "Gaming Stats Ping",
                                          icon: c.eQA,
                                          action: () => {
                                              (0, s.j8)(t.id, B.uaV.GUILD_GAMING_STATS_PROMPT);
                                          },
                                      })
                                    : null,
                                er,
                                J
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "settings",
                                          label: F.intl.string(F.t["154/bG"]),
                                          icon: eh ? c.Ncx : c.ewm,
                                          action: () => {
                                              w.Z.open(t.id, (0, S.r)());
                                          },
                                      })
                                    : null,
                                X
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "insights",
                                          label: F.intl.string(F.t["0wWfUF"]),
                                          icon: c.IeX,
                                          action: () => w.Z.open(t.id, B.pNK.ANALYTICS),
                                      })
                                    : null,
                                z
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-channel",
                                                  label: F.intl.string(F.t["fUYU+v"]),
                                                  icon: c.oFk,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("45094"),
                                                              n.e("67133"),
                                                          ]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  W(Q({}, n), {
                                                                      channelType: B.d4z.GUILD_TEXT,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-category",
                                                  label: F.intl.string(F.t["ISN+ND"]),
                                                  icon: c.f1I,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("45094"),
                                                              n.e("67133"),
                                                          ]).then(n.bind(n, 218613));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  W(Q({}, n), {
                                                                      channelType: B.d4z.GUILD_CATEGORY,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                          ],
                                      })
                                    : null,
                                en,
                                es,
                                eu,
                                ei,
                                eg,
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                ed,
                                (0, i.jsx)(c.sNh, {
                                    id: "notifications",
                                    label: (0, i.jsx)("div", {
                                        className: H.newBadgeRow,
                                        children: F.intl.string(F.t.h850Sk),
                                    }),
                                    icon: c.Dkj,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("15076"), n.e("79692")]).then(
                                                n.bind(n, 907941),
                                            );
                                            return (n) => (0, i.jsx)(e, W(Q({}, n), { guildId: t.id }));
                                        }),
                                }),
                                (0, i.jsx)(c.sNh, {
                                    id: "privacy",
                                    label: F.intl.string(F.t.BayiAg),
                                    icon: c.b7C,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, W(Q({}, n), { guild: t }));
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                el,
                                (0, i.jsx)(c.S89, {
                                    id: "hide-muted-channels",
                                    label: F.intl.string(F.t.UwOLJC),
                                    checked: V,
                                    action: () => d.Z.toggleCollapseGuild(t.id),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                eb,
                                K && t.features.has(B.oNc.COMMUNITY)
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "report-raid",
                                          label: F.intl.string(F.t.cswId3),
                                          icon: c.b7C,
                                          color: "danger",
                                          action: () => (0, v.J)(t.id),
                                      })
                                    : null,
                                $
                                    ? null
                                    : (0, i.jsx)(c.sNh, {
                                          id: "leave",
                                          label: F.intl.string(F.t.J2TBi4),
                                          icon: c.PBZ,
                                          color: "danger",
                                          action: ej,
                                      }),
                            ],
                        }),
                    ],
                });
});
