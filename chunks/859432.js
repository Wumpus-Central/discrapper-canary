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
    g = n(890477),
    b = n(458034),
    f = n(362658),
    p = n(294978),
    h = n(513102),
    y = n(976192),
    j = n(887904),
    O = n(429824),
    P = n(466330),
    v = n(191471),
    x = n(162157),
    m = n(623624),
    Z = n(894059),
    D = n(434404),
    I = n(978946),
    w = n(731722),
    S = n(172751),
    N = n(343056),
    E = n(41776),
    _ = n(190263),
    G = n(837949),
    k = n(601964),
    A = n(271383),
    T = n(496675),
    C = n(9156),
    U = n(594174),
    M = n(626135),
    L = n(981631),
    F = n(647086),
    R = n(388032),
    B = n(659854),
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
function q(e, t) {
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
        V = (0, o.e7)([U.default], () => U.default.getCurrentUser());
    a()(null != V, "GuildHeaderPopout: user cannot be undefined"),
        r.useEffect(() => {
            M.default.track(L.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let W = (0, o.e7)([C.ZP], () => C.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: J,
            canManageChannels: z,
            showGuildAnalytics: X,
        } = (0, o.cj)(
            [T.Z],
            () => ({
                canAccessSettings: T.Z.canAccessGuildSettings(t),
                canManageChannels: T.Z.can(L.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: T.Z.can(L.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(L.GuildFeatures.COMMUNITY),
            }),
            [t],
        ),
        K = (0, x.N8)(t),
        $ = (0, k.eM)(t, V),
        ee = (0, o.e7)([E.Z], () => E.Z.isLurking(t.id), [t.id]),
        et = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
        en = (0, Z.Z)(t.id, !0),
        ei = (0, b.ZP)(t),
        er = (0, P.Z)({
            source: L.t4x.GUILD_HEADER,
            guild: t,
        }),
        el = (0, y.Z)({
            guildId: t.id,
            userId: V.id,
            analyticsLocation: {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: c.vdY,
        }),
        ea = t.features.has(L.GuildFeatures.HUB),
        eo = t.id === F._,
        ec = t.id === L.STv,
        ed = (0, G.Z)(t.id),
        es = (0, p.Z)(t),
        eu = (0, h.Z)(t),
        eg = (0, O.Z)(t, !0),
        eb = (0, j.Z)(t),
        { isFavoritesPerk: ef } = (0, f.z)("GuildHeaderPopout"),
        ep = (0, _.D)(t),
        { triggerDeadchat: eh } = g.Z.useExperiment(
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
                return (n) => (0, i.jsx)(e, q(Q({}, n), { guild: t }));
            });
        }, [t]);
    return ee || et
        ? (0, i.jsx)(c.v2r, {
              onSelect: Y,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: l,
              "aria-label": R.intl.string(R.t.HpQykZ),
              children: (0, i.jsx)(c.sNh, {
                  id: "leave-guild",
                  label: R.intl.string(R.t.J2TBi4),
                  icon: c.PBZ,
                  action: () => {
                      D.Z.leaveGuild(t.id, !0);
                  },
              }),
          })
        : eo
          ? (0, i.jsxs)(c.v2r, {
                onSelect: Y,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: l,
                "aria-label": R.intl.string(R.t.HpQykZ),
                children: [
                    (0, i.jsxs)(c.kSQ, {
                        children: [
                            ef &&
                                (0, i.jsx)(c.sNh, {
                                    id: "add-channel",
                                    label: R.intl.string(R.t["6uDHk5"]),
                                    color: "brand",
                                    icon: c.oFk,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e("63270").then(n.bind(n, 610617));
                                            return (t) => (0, i.jsx)(e, Q({}, t));
                                        }),
                                }),
                            (0, i.jsx)(c.sNh, {
                                id: "create-category",
                                label: R.intl.string(R.t["ISN+ND"]),
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
                            label: R.intl.string(R.t.UwOLJC),
                            checked: W,
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
                  "aria-label": R.intl.string(R.t.HpQykZ),
                  children: [
                      (0, i.jsxs)(c.kSQ, {
                          children: [
                              J
                                  ? (0, i.jsx)(c.sNh, {
                                        id: "settings",
                                        label: R.intl.string(R.t["154/bG"]),
                                        icon: ep ? c.Ncx : c.ewm,
                                        action: () => {
                                            D.Z.open(t.id, (0, I.r)());
                                        },
                                    })
                                  : null,
                              er,
                              (0, i.jsx)(c.sNh, {
                                  id: "privacy",
                                  label: R.intl.string(R.t.BayiAg),
                                  icon: c.b7C,
                                  action: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                          return (n) => (0, i.jsx)(e, q(Q({}, n), { guild: t }));
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
                                    label: R.intl.string(R.t.Dv8gFR),
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
                    "aria-label": R.intl.string(R.t.HpQykZ),
                    children: [
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                (0, i.jsx)(c.sNh, {
                                    id: "premium-subscribe",
                                    label: R.intl.string(R.t.VJEVbm),
                                    icon: c.Ucv,
                                    action: () => {
                                        (0, m.f)({
                                            guildId: t.id,
                                            location: { section: L.jXE.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                (0, w.up)(t) &&
                                    (0, w.jq)(t) &&
                                    (0, i.jsx)(c.sNh, {
                                        id: "guild-tag",
                                        label: R.intl.string(B.default.mf2OwM),
                                        icon: (0, i.jsx)(S.m0, {
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
                                $ && V.isStaff() && eh
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "create-deadchat",
                                          label: "Deadchat Ping",
                                          icon: c.eQA,
                                          action: () => {
                                              (0, s.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                $ && V.isStaff() && ey
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "create-gaming-ping",
                                          label: "Gaming Stats Ping",
                                          icon: c.eQA,
                                          action: () => {
                                              (0, s.j8)(t.id, L.uaV.GUILD_GAMING_STATS_PROMPT);
                                          },
                                      })
                                    : null,
                                er,
                                J
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "settings",
                                          label: R.intl.string(R.t["154/bG"]),
                                          icon: ep ? c.Ncx : c.ewm,
                                          action: () => {
                                              D.Z.open(t.id, (0, I.r)());
                                          },
                                      })
                                    : null,
                                X
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "insights",
                                          label: R.intl.string(R.t["0wWfUF"]),
                                          icon: c.IeX,
                                          action: () => D.Z.open(t.id, L.pNK.ANALYTICS),
                                      })
                                    : null,
                                z
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-channel",
                                                  label: R.intl.string(R.t["fUYU+v"]),
                                                  icon: c.oFk,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("29497"),
                                                              n.e("53781"),
                                                          ]).then(n.bind(n, 241865));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  q(Q({}, n), {
                                                                      channelType: L.d4z.GUILD_TEXT,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-category",
                                                  label: R.intl.string(R.t["ISN+ND"]),
                                                  icon: c.f1I,
                                                  action: () =>
                                                      (0, c.ZDy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              n.e("29497"),
                                                              n.e("53781"),
                                                          ]).then(n.bind(n, 241865));
                                                          return (n) =>
                                                              (0, i.jsx)(
                                                                  e,
                                                                  q(Q({}, n), {
                                                                      channelType: L.d4z.GUILD_CATEGORY,
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
                                eb,
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                ed,
                                (0, i.jsx)(c.sNh, {
                                    id: "notifications",
                                    label: (0, i.jsx)("div", {
                                        className: H.newBadgeRow,
                                        children: R.intl.string(R.t.h850Sk),
                                    }),
                                    icon: c.Dkj,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("15076"), n.e("38203")]).then(
                                                n.bind(n, 907941),
                                            );
                                            return (n) => (0, i.jsx)(e, q(Q({}, n), { guildId: t.id }));
                                        }),
                                }),
                                (0, i.jsx)(c.sNh, {
                                    id: "privacy",
                                    label: R.intl.string(R.t.BayiAg),
                                    icon: c.b7C,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e("59500").then(n.bind(n, 241420));
                                            return (n) => (0, i.jsx)(e, q(Q({}, n), { guild: t }));
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                el,
                                (0, i.jsx)(c.S89, {
                                    id: "hide-muted-channels",
                                    label: R.intl.string(R.t.UwOLJC),
                                    checked: W,
                                    action: () => d.Z.toggleCollapseGuild(t.id),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                eg,
                                K && t.features.has(L.GuildFeatures.COMMUNITY)
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "report-raid",
                                          label: R.intl.string(R.t.cswId3),
                                          icon: c.b7C,
                                          color: "danger",
                                          action: () => (0, v.J)(t.id),
                                      })
                                    : null,
                                $
                                    ? null
                                    : (0, i.jsx)(c.sNh, {
                                          id: "leave",
                                          label: R.intl.string(R.t.J2TBi4),
                                          icon: c.PBZ,
                                          color: "danger",
                                          action: ej,
                                      }),
                            ],
                        }),
                    ],
                });
});
