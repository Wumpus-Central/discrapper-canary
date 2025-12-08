n.d(t, { default: () => J });
var i = n(54381),
    r = n(473749),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    s = n(5036),
    d = n(553385),
    u = n(52011),
    g = n(890477),
    b = n(458034),
    f = n(362658),
    p = n(294978),
    h = n(513102),
    j = n(976192),
    y = n(887904),
    O = n(429824),
    P = n(466330),
    I = n(191471),
    v = n(162157),
    x = n(623624),
    m = n(894059),
    S = n(434404),
    N = n(978946),
    D = n(731722),
    w = n(172751),
    Z = n(343056),
    _ = n(41776),
    E = n(837949),
    G = n(194201),
    k = n(601964),
    T = n(271383),
    A = n(496675),
    C = n(9156),
    M = n(594174),
    U = n(626135),
    L = n(981631),
    R = n(647086),
    F = n(388032),
    B = n(713328),
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
function Y(e, t) {
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
let J = r.memo(function (e) {
    let { guild: t, onClose: a, onSelect: J } = e,
        V = (0, o.e7)([M.default], () => M.default.getCurrentUser());
    l()(null != V, "GuildHeaderPopout: user cannot be undefined"),
        r.useEffect(() => {
            U.default.track(L.rMx.GUILD_DROPDOWN_MENU_VIEWED, { guild_id: t.id });
        });
    let W = (0, o.e7)([C.ZP], () => C.ZP.isGuildCollapsed(t.id), [t.id]),
        {
            canAccessSettings: z,
            canManageChannels: X,
            showGuildAnalytics: q,
        } = (0, o.cj)(
            [A.Z],
            () => ({
                canAccessSettings: A.Z.canAccessGuildSettings(t),
                canManageChannels: A.Z.can(L.Plq.MANAGE_CHANNELS, t),
                showGuildAnalytics: A.Z.can(L.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(L.GuildFeatures.COMMUNITY),
            }),
            [t],
        ),
        K = (0, v.N8)(t),
        $ = (0, k.eM)(t, V),
        ee = (0, o.e7)([_.Z], () => _.Z.isLurking(t.id), [t.id]),
        et = (0, o.e7)([T.ZP], () => T.ZP.isCurrentUserGuest(t.id)),
        en = (0, m.Z)(t.id, !0),
        ei = (0, b.ZP)(t),
        er = (0, P.Z)({
            source: L.t4x.GUILD_HEADER,
            guild: t,
        }),
        ea = (0, j.Z)({
            guildId: t.id,
            userId: V.id,
            analyticsLocation: {
                page: L.ZY5.GUILD_CHANNEL,
                section: L.jXE.GUILD_DROPDOWN_MENU,
            },
            icon: c.vdY,
        }),
        el = t.features.has(L.GuildFeatures.HUB),
        eo = t.id === R._,
        ec = t.id === L.STv,
        es = (0, E.Z)(t.id),
        ed = (0, p.Z)(t),
        eu = (0, h.Z)(t),
        eg = (0, O.Z)(t, !0),
        eb = (0, y.Z)(t),
        { isFavoritesPerk: ef } = (0, f.z)("GuildHeaderPopout"),
        ep = (0, G.Z)(t),
        { triggerDeadchat: eh } = g.Z.useExperiment(
            {
                guildId: t.id,
                location: "guild header",
            },
            { autoTrackExposure: !1 },
        ),
        { triggerGamingStats: ej } = u.F.useExperiment(
            {
                guildId: t.id,
                location: "guild header",
            },
            { autoTrackExposure: !1 },
        ),
        ey = r.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("53961").then(n.bind(n, 402979));
                return (n) => (0, i.jsx)(e, Y(Q({}, n), { guild: t }));
            });
        }, [t]);
    return ee || et
        ? (0, i.jsx)(c.v2r, {
              onSelect: J,
              navId: "guild-header-popout",
              variant: "fixed",
              onClose: a,
              "aria-label": F.intl.string(F.t.HpQykc),
              children: (0, i.jsx)(c.sNh, {
                  id: "leave-guild",
                  label: F.intl.string(F.t.J2TBi3),
                  icon: c.PBZ,
                  action: () => {
                      S.Z.leaveGuild(t.id, !0);
                  },
              }),
          })
        : eo
          ? (0, i.jsxs)(c.v2r, {
                onSelect: J,
                navId: "favorites-header-popout",
                variant: "fixed",
                onClose: a,
                "aria-label": F.intl.string(F.t.HpQykc),
                children: [
                    (0, i.jsxs)(c.kSQ, {
                        children: [
                            ef &&
                                (0, i.jsx)(c.sNh, {
                                    id: "add-channel",
                                    label: F.intl.string(F.t["6uDHk6"]),
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
                                label: F.intl.string(F.t["ISN+NM"]),
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
                            label: F.intl.string(F.t.UwOLJO),
                            checked: W,
                            action: () => s.Z.toggleCollapseGuild(t.id),
                        }),
                    }),
                ],
            })
          : el
            ? (0, i.jsxs)(c.v2r, {
                  onSelect: J,
                  navId: "guild-header-popout",
                  variant: "fixed",
                  onClose: a,
                  "aria-label": F.intl.string(F.t.HpQykc),
                  children: [
                      (0, i.jsxs)(c.kSQ, {
                          children: [
                              z
                                  ? (0, i.jsx)(c.sNh, {
                                        id: "settings",
                                        label: F.intl.string(F.t["154/bL"]),
                                        icon: ep ? c.Ncx : c.ewm,
                                        action: () => {
                                            S.Z.open(t.id, (0, N.r)());
                                        },
                                    })
                                  : null,
                              er,
                              (0, i.jsx)(c.sNh, {
                                  id: "privacy",
                                  label: F.intl.string(F.t.BayiAo),
                                  icon: c.b7C,
                                  action: () =>
                                      (0, c.ZDy)(async () => {
                                          let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                          return (n) => (0, i.jsx)(e, Y(Q({}, n), { guild: t }));
                                      }),
                              }),
                              ea,
                          ],
                      }),
                      $
                          ? null
                          : (0, i.jsx)(c.kSQ, {
                                children: (0, i.jsx)(c.sNh, {
                                    id: "leave",
                                    label: F.intl.string(F.t.Dv8gFT),
                                    icon: c.PBZ,
                                    color: "danger",
                                    action: ey,
                                }),
                            }),
                  ],
              })
            : ec
              ? null
              : (0, i.jsxs)(c.v2r, {
                    onSelect: J,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: a,
                    "aria-label": F.intl.string(F.t.HpQykc),
                    children: [
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                (0, i.jsx)(c.sNh, {
                                    id: "premium-subscribe",
                                    label: F.intl.string(F.t.VJEVbu),
                                    icon: c.Ucv,
                                    action: () => {
                                        (0, x.f)({
                                            guildId: t.id,
                                            location: { section: L.jXE.GUILD_HEADER_POPOUT },
                                        });
                                    },
                                }),
                                (0, D.up)(t) &&
                                    (0, D.jq)(t) &&
                                    (0, i.jsx)(c.sNh, {
                                        id: "guild-tag",
                                        label: F.intl.string(B.default.mf2OwH),
                                        icon: (0, i.jsx)(w.m0, {
                                            guildId: t.id,
                                            guildBadge: t.profile.badge,
                                            guildTag: t.profile.tag,
                                            inline: !1,
                                        }),
                                        action: () => (0, Z.Z)(t.id),
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
                                              (0, d.j8)(t.id, L.uaV.GUILD_DEADCHAT_REVIVE_PROMPT);
                                          },
                                      })
                                    : null,
                                $ && V.isStaff() && ej
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "create-gaming-ping",
                                          label: "Gaming Stats Ping",
                                          icon: c.eQA,
                                          action: () => {
                                              (0, d.j8)(t.id, L.uaV.GUILD_GAMING_STATS_PROMPT);
                                          },
                                      })
                                    : null,
                                er,
                                z
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "settings",
                                          label: F.intl.string(F.t["154/bL"]),
                                          icon: ep ? c.Ncx : c.ewm,
                                          action: () => {
                                              S.Z.open(t.id, (0, N.r)());
                                          },
                                      })
                                    : null,
                                q
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "insights",
                                          label: F.intl.string(F.t["0wWfUG"]),
                                          icon: c.IeX,
                                          action: () => S.Z.open(t.id, L.pNK.ANALYTICS),
                                      })
                                    : null,
                                X
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-channel",
                                                  label: F.intl.string(F.t["fUYU+j"]),
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
                                                                  Y(Q({}, n), {
                                                                      channelType: L.d4z.GUILD_TEXT,
                                                                      guildId: t.id,
                                                                  }),
                                                              );
                                                      }),
                                              }),
                                              (0, i.jsx)(c.sNh, {
                                                  id: "create-category",
                                                  label: F.intl.string(F.t["ISN+NM"]),
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
                                                                  Y(Q({}, n), {
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
                                ed,
                                eu,
                                ei,
                                eb,
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                es,
                                (0, i.jsx)(c.sNh, {
                                    id: "notifications",
                                    label: (0, i.jsx)("div", {
                                        className: H.newBadgeRow,
                                        children: F.intl.string(F.t.h850Ss),
                                    }),
                                    icon: c.Dkj,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("15076"), n.e("8551")]).then(
                                                n.bind(n, 907941),
                                            );
                                            return (n) => (0, i.jsx)(e, Y(Q({}, n), { guildId: t.id }));
                                        }),
                                }),
                                (0, i.jsx)(c.sNh, {
                                    id: "privacy",
                                    label: F.intl.string(F.t.BayiAo),
                                    icon: c.b7C,
                                    action: () =>
                                        (0, c.ZDy)(async () => {
                                            let { default: e } = await n.e("86722").then(n.bind(n, 264333));
                                            return (n) => (0, i.jsx)(e, Y(Q({}, n), { guild: t }));
                                        }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                ea,
                                (0, i.jsx)(c.S89, {
                                    id: "hide-muted-channels",
                                    label: F.intl.string(F.t.UwOLJO),
                                    checked: W,
                                    action: () => s.Z.toggleCollapseGuild(t.id),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(c.kSQ, {
                            children: [
                                eg,
                                K && t.features.has(L.GuildFeatures.COMMUNITY)
                                    ? (0, i.jsx)(c.sNh, {
                                          id: "report-raid",
                                          label: F.intl.string(F.t.cswId3),
                                          icon: c.b7C,
                                          color: "danger",
                                          action: () => (0, I.J)(t.id),
                                      })
                                    : null,
                                $
                                    ? null
                                    : (0, i.jsx)(c.sNh, {
                                          id: "leave",
                                          label: F.intl.string(F.t.J2TBi3),
                                          icon: c.PBZ,
                                          color: "danger",
                                          action: ey,
                                      }),
                            ],
                        }),
                    ],
                });
});
