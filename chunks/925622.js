"use strict";
n.d(t, { A: () => D, L: () => O }), n(321073);
var i = n(627968),
    s = n(64700);
n(516773);
var l = n(311907),
    r = n(562465),
    a = n(506774),
    o = n(36525),
    d = n(314116),
    c = n(990078),
    u = n(421380),
    m = n(397927),
    g = n(964486),
    x = n(47167),
    h = n(345942),
    _ = n(808728),
    A = n(498642),
    p = n(71393),
    f = n(576705),
    j = n(994500),
    N = n(287809),
    E = n(997509),
    b = n(555337),
    T = n(224394),
    C = n(814758),
    I = n(652215),
    v = n(985018),
    S = n(944620),
    y = n(597306);
let R = "dismissedCommunityFeaturesUpsell",
    O = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: s,
            } = (0, l.cf)([b.A], () => ({
                submitting: b.A.isSubmitting(),
                guild: b.A.getGuild(),
                errors: b.A.getErrors(),
            })),
            r = Object.keys(s),
            a = r.length > 0 ? r[0] : null;
        return (
            (e = "rules_channel_id" === a ? v.intl.string(v.t["7IrBYt"]) : null != a ? s[a] : void 0),
            (0, i.jsx)(o.A, {
                submitting: n,
                onReset: () => {
                    null != t && E.A.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        E.A.saveGuild(t.id, {
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
    G = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: o } = e,
            [d, c] = s.useState(!0 === a.w.get(R)),
            x = (0, l.bG)([A.A], () => A.A.getMemberCount(o.id) ?? 0),
            [_, f] = s.useState(!1);
        (0, g.Ay)(() => {
            r.Bo.get({ url: I.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(o.id), rejectWithError: !0 })
                .then((e) => {
                    f(e.body.eligible_for_admin_server);
                })
                .catch(() => f(!1));
        });
        let j = (0, l.bG)([p.A], () => p.A.getGuild("942897714956472401")),
            N = o.features.has(I.GuildFeatures.COMMUNITY) && x >= 1e3 && _ && null == j;
        if (t && n && !N) return null;
        let b = async () => {
            try {
                let e = await r.Bo.post({ url: I.Rsh.JOIN_ADMIN_SERVER(o.id), oldFormErrors: !0, rejectWithError: !0 });
                E.A.close(), (0, h.u)(e.body.id);
            } catch {}
        };
        return d && !N
            ? null
            : (0, i.jsxs)("div", {
                  className: S.Zj,
                  children: [
                      (0, i.jsxs)("div", {
                          className: S.xw,
                          children: [
                              (0, i.jsx)("img", { src: y, alt: "", width: 60, className: S.Tn }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(m.Heading, {
                                          variant: "heading-md/semibold",
                                          className: S.$P,
                                          children: v.intl.string(v.t["pR/Bge"]),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          children: v.intl.string(v.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(u.$n, {
                          "aria-label": v.intl.string(v.t.cpT0Cq),
                          look: u.$n.Looks.BLANK,
                          size: u.$n.Sizes.NONE,
                          className: S.kz,
                          onClick: () => {
                              a.w.set(R, !0), c(!0);
                          },
                          children: (0, i.jsx)(m.PGe, { size: "md", color: "currentColor" }),
                      }),
                      (0, i.jsxs)("div", {
                          className: S.dt,
                          children: [
                              N &&
                                  (0, i.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: S.Oy,
                                      children: (0, i.jsx)(m.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: v.intl.string(v.t.iF1Asi),
                                          onClick: b,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.Oy,
                                        children: (0, i.jsx)(m.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: v.intl.string(v.t["S/Dfid"]),
                                            onClick: () => {
                                                E.A.setSection(I.BEX.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, i.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.Oy,
                                        children: (0, i.jsx)(m.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: v.intl.string(v.t["0kmJdw"]),
                                            onClick: () => {
                                                E.A.setSection(I.BEX.ACCESS, I.nd0.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, i.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: S.Oy,
                                  children: (0, i.jsx)(m.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: v.intl.string(v.t.BQIYTb),
                                      onClick: () => {
                                          E.A.setSection(I.BEX.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    L = () => {
        let e = (0, l.bG)([b.A], () => b.A.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, l.cf)([f.A], () => ({
                canManageGuild: f.A.can(I.xBc.MANAGE_GUILD, e),
                isGuildAdmin: f.A.can(I.xBc.ADMINISTRATOR, e),
            })),
            r = (0, l.bG)([_.Ay], () => (null != e ? _.Ay.getChannels(e.id) : null)),
            o = s.useMemo(C.fr, []),
            u = !0 !== a.w.get(R);
        if (null == e) return null;
        let g = [];
        null != r &&
            r[_.I6].forEach((e) => {
                let { channel: t } = e;
                t.type === I.rbe.GUILD_TEXT &&
                    g.push({ id: t.id, value: t.id, label: (0, x.m1)(t, N.default, j.A, !0) });
            });
        let h = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(I.GuildFeatures.COMMUNITY),
                    t.delete(I.GuildFeatures.DISCOVERABLE),
                    t.delete(I.GuildFeatures.PREVIEW_ENABLED),
                    E.A.updateGuild({ features: t, rulesChannelId: null, publicUpdatesChannelId: null });
            },
            A = (e) => {
                E.A.updateGuild({ description: e });
            };
        return (0, i.jsxs)(m.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(m.Heading, { variant: "heading-lg/semibold", children: v.intl.string(v.t.nRtNqn) }),
                u
                    ? (0, i.jsx)(G, {
                          discoveryEnabled: e.features.has(I.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(I.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, i.jsx)(m.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: v.intl.string(v.t["otcXP/"]),
                    description: v.intl.string(v.t.BtwmYB),
                    value: e.rulesChannelId ?? void 0,
                    options: g,
                    onSelectionChange: (e) => {
                        E.A.updateGuild({ rulesChannelId: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: v.intl.string(v.t.vAyDGU),
                    description: v.intl.string(v.t.ZFeonu),
                    value: e.publicUpdatesChannelId ?? void 0,
                    options: g,
                    onSelectionChange: (e) => {
                        E.A.updateGuild({ publicUpdatesChannelId: e });
                    },
                    disabled: !n,
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: v.intl.string(v.t.sMkYE8),
                    description: v.intl.string(v.t.htioQo),
                    value: e.safetyAlertsChannelId ?? void 0,
                    options: g,
                    onSelectionChange: (e) => {
                        E.A.updateGuild({ safetyAlertsChannelId: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: v.intl.string(v.t.pO60fy),
                    description: v.intl.string(v.t.aIR73T),
                    value: e.preferredLocale,
                    options: o,
                    onSelectionChange: (e) => {
                        E.A.updateGuild({ preferredLocale: e });
                    },
                    disabled: !t,
                }),
                (0, i.jsx)(m.cGx, {}),
                (() => {
                    if (null != e)
                        return (0, i.jsx)(m.fs1, {
                            label: v.intl.string(v.t["RSfm+i"]),
                            description: v.intl.string(v.t["/B6PRw"]),
                            value: e.description ?? "",
                            placeholder: v.intl.string(v.t.Nvfowl),
                            onChange: A,
                            maxLength: 300,
                            disabled: !t,
                        });
                })(),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.D0$, {
                    label: v.intl.string(v.t.c1BmbC),
                    description: v.intl.string(v.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, i.jsx)(c.m, {
                        text: n ? null : v.intl.string(v.t["pjG+T3"]),
                        "aria-label": n ? void 0 : v.intl.string(v.t["pjG+T3"]),
                        children: (0, i.jsx)(m.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: v.intl.string(v.t.c1BmbC),
                            onClick: () => {
                                e.features.has(I.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(I.GuildFeatures.PARTNERED)
                                    ? (0, d.A)({
                                          title: v.intl.string(v.t.iBnVHc),
                                          subtitle: v.intl.string(v.t["P+Sh8V"]),
                                          confirmText: v.intl.string(v.t["cY+Oob"]),
                                          cancelText: v.intl.string(v.t.oEAioF),
                                          onConfirm: h,
                                      })
                                    : e.features.has(I.GuildFeatures.DISCOVERABLE)
                                      ? (0, d.A)({
                                            title: v.intl.string(v.t.iBnVHc),
                                            subtitle: v.intl.string(v.t["eMx/uZ"]),
                                            confirmText: v.intl.string(v.t["cY+Oob"]),
                                            cancelText: v.intl.string(v.t.oEAioF),
                                            onConfirm: h,
                                        })
                                      : e.features.has(I.GuildFeatures.PARTNERED)
                                        ? (0, d.A)({
                                              title: v.intl.string(v.t.iBnVHc),
                                              subtitle: v.intl.string(v.t.l1wLeX),
                                              confirmText: v.intl.string(v.t["cY+Oob"]),
                                              cancelText: v.intl.string(v.t.oEAioF),
                                              onConfirm: h,
                                          })
                                        : h();
                            },
                            disabled: !n,
                        }),
                    }),
                }),
            ],
        });
    },
    D = () => {
        let e = (0, l.bG)([b.A], () => b.A.getGuild());
        return null == e
            ? null
            : e.features.has(I.GuildFeatures.COMMUNITY)
              ? (0, i.jsx)(L, {})
              : (0, i.jsx)(T.A, { guild: e });
    };
