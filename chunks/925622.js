n.d(t, { A: () => H, L: () => P }), n(321073);
var i = n(627968),
    l = n(64700);
n(516773);
var s = n(311907),
    r = n(562465),
    a = n(506774),
    o = n(36525),
    d = n(314116),
    c = n(990078),
    u = n(862482),
    m = n(534514),
    g = n(834730),
    h = n(789645),
    x = n(821609),
    _ = n(260598),
    p = n(783878),
    A = n(452027),
    E = n(331322),
    f = n(404778),
    j = n(964486),
    N = n(47167),
    I = n(345942),
    C = n(808728),
    b = n(498642),
    v = n(71393),
    S = n(576705),
    T = n(994500),
    y = n(287809),
    R = n(997509),
    L = n(555337),
    D = n(224394),
    O = n(814758),
    G = n(652215),
    M = n(985018),
    k = n(687277),
    U = n(597306);
let w = "dismissedCommunityFeaturesUpsell",
    P = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: l,
            } = (0, s.cf)([L.A], () => ({
                submitting: L.A.isSubmitting(),
                guild: L.A.getGuild(),
                errors: L.A.getErrors(),
            })),
            r = Object.keys(l),
            a = r.length > 0 ? r[0] : null;
        return (
            (e = "rules_channel_id" === a ? M.intl.string(M.t["7IrBYt"]) : null != a ? l[a] : void 0),
            (0, i.jsx)(o.A, {
                submitting: n,
                onReset: () => {
                    null != t && R.A.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        R.A.saveGuild(t.id, {
                            rulesChannelId: t.rulesChannelId,
                            preferredLocale: t.preferredLocale,
                            safetyAlertsChannelId: t.safetyAlertsChannelId,
                            publicUpdatesChannelId: t.publicUpdatesChannelId,
                            description: t.description,
                            features: t.features,
                        });
                },
                errorMessage: e,
            })
        );
    },
    B = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: o } = e,
            [d, c] = l.useState(!0 === a.w.get(w)),
            _ = (0, s.bG)([b.A], () => b.A.getMemberCount(o.id) ?? 0),
            [p, A] = l.useState(!1);
        (0, j.Ay)(() => {
            r.Bo.get({ url: G.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(o.id), rejectWithError: !0 })
                .then((e) => {
                    A(e.body.eligible_for_admin_server);
                })
                .catch(() => A(!1));
        });
        let E = (0, s.bG)([v.A], () => v.A.getGuild("942897714956472401")),
            f = o.features.has(G.GuildFeatures.COMMUNITY) && _ >= 1e3 && p && null == E;
        if (t && n && !f) return null;
        let N = async () => {
            try {
                let e = await r.Bo.post({ url: G.Rsh.JOIN_ADMIN_SERVER(o.id), oldFormErrors: !0, rejectWithError: !0 });
                R.A.close(), (0, I.u)(e.body.id);
            } catch {}
        };
        return d && !f
            ? null
            : (0, i.jsxs)("div", {
                  className: k.Zj,
                  children: [
                      (0, i.jsxs)("div", {
                          className: k.xw,
                          children: [
                              (0, i.jsx)("img", { src: U, alt: "", width: 60, className: k.Tn }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(m.D, {
                                          variant: "heading-md/semibold",
                                          className: k.$P,
                                          children: M.intl.string(M.t["pR/Bge"]),
                                      }),
                                      (0, i.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          children: M.intl.string(M.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(u.$n, {
                          "aria-label": M.intl.string(M.t.cpT0Cq),
                          look: u.$n.Looks.BLANK,
                          size: u.$n.Sizes.NONE,
                          className: k.kz,
                          onClick: () => {
                              a.w.set(w, !0), c(!0);
                          },
                          children: (0, i.jsx)(h.P, { size: "md", color: "currentColor" }),
                      }),
                      (0, i.jsxs)("div", {
                          className: k.dt,
                          children: [
                              f &&
                                  (0, i.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: k.Oy,
                                      children: (0, i.jsx)(x.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: M.intl.string(M.t.iF1Asi),
                                          onClick: N,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: k.Oy,
                                        children: (0, i.jsx)(x.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: M.intl.string(M.t["S/Dfid"]),
                                            onClick: () => {
                                                R.A.setSection(G.BEX.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: k.Oy,
                                        children: (0, i.jsx)(x.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: M.intl.string(M.t["0kmJdw"]),
                                            onClick: () => {
                                                R.A.setSection(G.BEX.ACCESS, G.nd0.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: k.Oy,
                                  children: (0, i.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: M.intl.string(M.t.BQIYTb),
                                      onClick: () => {
                                          R.A.setSection(G.BEX.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    F = () => {
        let e = (0, s.bG)([L.A], () => L.A.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, s.cf)([S.A], () => ({
                canManageGuild: S.A.can(G.xBc.MANAGE_GUILD, e),
                isGuildAdmin: S.A.can(G.xBc.ADMINISTRATOR, e),
            })),
            r = (0, s.bG)([C.Ay], () => (null != e ? C.Ay.getChannels(e.id) : null)),
            a = l.useMemo(O.fr, []);
        if (null == e) return null;
        let o = [];
        null != r &&
            r[C.I6].forEach((e) => {
                let { channel: t } = e;
                t.type === G.rbe.GUILD_TEXT &&
                    o.push({ id: t.id, value: t.id, label: (0, N.m1)(t, y.default, T.A, !0) });
            });
        let u = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(G.GuildFeatures.COMMUNITY),
                    t.delete(G.GuildFeatures.DISCOVERABLE),
                    t.delete(G.GuildFeatures.PREVIEW_ENABLED),
                    R.A.updateGuild({ features: t, rulesChannelId: null, publicUpdatesChannelId: null });
            },
            g = (e) => {
                R.A.updateGuild({ description: e });
            };
        return (0, i.jsxs)(E.B, {
            gap: 24,
            children: [
                (0, i.jsx)(m.D, { variant: "heading-lg/semibold", children: M.intl.string(M.t.nRtNqn) }),
                (0, i.jsx)(B, {
                    discoveryEnabled: e.features.has(G.GuildFeatures.DISCOVERABLE),
                    onboardingEnabled: e.features.has(G.GuildFeatures.GUILD_ONBOARDING),
                    guild: e,
                }),
                (0, i.jsx)(p.Z, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: M.intl.string(M.t["otcXP/"]),
                    description: M.intl.string(M.t.BtwmYB),
                    value: e.rulesChannelId ?? void 0,
                    options: o,
                    onSelectionChange: (e) => {
                        R.A.updateGuild({ rulesChannelId: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(f.c, {}),
                (0, i.jsx)(p.Z, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: M.intl.string(M.t.vAyDGU),
                    description: M.intl.string(M.t.ZFeonu),
                    value: e.publicUpdatesChannelId ?? void 0,
                    options: o,
                    onSelectionChange: (e) => {
                        R.A.updateGuild({ publicUpdatesChannelId: e });
                    },
                    disabled: !n,
                }),
                (0, i.jsx)(f.c, {}),
                (0, i.jsx)(p.Z, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: M.intl.string(M.t.sMkYE8),
                    description: M.intl.string(M.t.htioQo),
                    value: e.safetyAlertsChannelId ?? void 0,
                    options: o,
                    onSelectionChange: (e) => {
                        R.A.updateGuild({ safetyAlertsChannelId: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(f.c, {}),
                (0, i.jsx)(p.Z, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: M.intl.string(M.t.pO60fy),
                    description: M.intl.string(M.t.aIR73T),
                    value: e.preferredLocale,
                    options: a,
                    onSelectionChange: (e) => {
                        R.A.updateGuild({ preferredLocale: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(f.c, {}),
                (() => {
                    if (null != e)
                        return (0, i.jsx)(_.f, {
                            label: M.intl.string(M.t["RSfm+i"]),
                            description: M.intl.string(M.t["/B6PRw"]),
                            value: e.description ?? "",
                            placeholder: M.intl.string(M.t.Nvfowl),
                            onChange: g,
                            maxLength: 300,
                            disabled: !t,
                        });
                })(),
                (0, i.jsx)(f.c, {}),
                (0, i.jsx)(A.D, {
                    label: M.intl.string(M.t.c1BmbC),
                    description: M.intl.string(M.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, i.jsx)(c.m, {
                        text: n ? null : M.intl.string(M.t["pjG+T3"]),
                        "aria-label": n ? void 0 : M.intl.string(M.t["pjG+T3"]),
                        children: (0, i.jsx)(x.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: M.intl.string(M.t.c1BmbC),
                            onClick: () => {
                                e.features.has(G.GuildFeatures.DISCOVERABLE)
                                    ? (0, d.A)({
                                          title: M.intl.string(M.t.iBnVHc),
                                          subtitle: M.intl.string(M.t["eMx/uZ"]),
                                          confirmText: M.intl.string(M.t["cY+Oob"]),
                                          cancelText: M.intl.string(M.t.oEAioF),
                                          onConfirm: u,
                                      })
                                    : u();
                            },
                            disabled: !n,
                        }),
                    }),
                }),
            ],
        });
    },
    H = () => {
        let e = (0, s.bG)([L.A], () => L.A.getGuild());
        return null == e
            ? null
            : e.features.has(G.GuildFeatures.COMMUNITY)
              ? (0, i.jsx)(F, {})
              : (0, i.jsx)(D.A, { guild: e });
    };
