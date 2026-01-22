n.d(t, {
    A: () => D,
    L: () => P,
}),
    n(228524),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700);
n(516773);
var l = n(311907),
    s = n(562465),
    a = n(506774),
    c = n(36525),
    o = n(314116),
    d = n(990078),
    u = n(421380),
    f = n(397927),
    g = n(964486),
    b = n(47167),
    m = n(345942),
    p = n(808728),
    x = n(498642),
    h = n(71393),
    j = n(576705),
    O = n(994500),
    y = n(287809),
    v = n(997509),
    A = n(555337),
    E = n(224394),
    N = n(814758),
    _ = n(652215),
    S = n(985018),
    T = n(944620),
    I = n(597306);
let C = "dismissedCommunityFeaturesUpsell",
    P = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, l.cf)([A.A], () => ({
                submitting: A.A.isSubmitting(),
                guild: A.A.getGuild(),
                errors: A.A.getErrors(),
            })),
            s = Object.keys(i),
            a = s.length > 0 ? s[0] : null;
        return (
            (e = "rules_channel_id" === a ? S.intl.string(S.t["7IrBYt"]) : null != a ? i[a] : void 0),
            (0, r.jsx)(c.A, {
                submitting: n,
                onReset: () => {
                    null != t && v.A.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        v.A.saveGuild(t.id, {
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
    w = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: c } = e,
            [o, d] = i.useState(!0 === a.w.get(C)),
            b = (0, l.bG)([x.A], () => {
                var e;
                return null != (e = x.A.getMemberCount(c.id)) ? e : 0;
            }),
            [p, j] = i.useState(!1);
        (0, g.Ay)(() => {
            s.Bo.get({
                url: _.Rsh.GUILD_ADMIN_SERVER_ELIGIBILITY(c.id),
                rejectWithError: !0,
            })
                .then((e) => {
                    j(e.body.eligible_for_admin_server);
                })
                .catch(() => j(!1));
        });
        let O = (0, l.bG)([h.A], () => h.A.getGuild("942897714956472401")),
            y = c.features.has(_.GuildFeatures.COMMUNITY) && b >= 1e3 && p && null == O;
        if (t && n && !y) return null;
        let A = async () => {
            try {
                let e = await s.Bo.post({
                    url: _.Rsh.JOIN_ADMIN_SERVER(c.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                v.A.close(), (0, m.u)(e.body.id);
            } catch (e) {}
        };
        return o && !y
            ? null
            : (0, r.jsxs)("div", {
                  className: T.Zj,
                  children: [
                      (0, r.jsxs)("div", {
                          className: T.xw,
                          children: [
                              (0, r.jsx)("img", {
                                  src: I,
                                  alt: "",
                                  width: 60,
                                  className: T.Tn,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(f.Heading, {
                                          variant: "heading-md/semibold",
                                          className: T.$P,
                                          children: S.intl.string(S.t["pR/Bge"]),
                                      }),
                                      (0, r.jsx)(f.Text, {
                                          variant: "text-sm/normal",
                                          children: S.intl.string(S.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(u.$n, {
                          "aria-label": S.intl.string(S.t.cpT0Cq),
                          look: u.$n.Looks.BLANK,
                          size: u.$n.Sizes.NONE,
                          className: T.kz,
                          onClick: () => {
                              a.w.set(C, !0), d(!0);
                          },
                          children: (0, r.jsx)(f.PGe, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: T.dt,
                          children: [
                              y &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: T.Oy,
                                      children: (0, r.jsx)(f.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: S.intl.string(S.t.iF1Asi),
                                          onClick: A,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.Oy,
                                        children: (0, r.jsx)(f.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: S.intl.string(S.t["S/Dfid"]),
                                            onClick: () => {
                                                v.A.setSection(_.BEX.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.Oy,
                                        children: (0, r.jsx)(f.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: S.intl.string(S.t["0kmJdw"]),
                                            onClick: () => {
                                                v.A.setSection(_.BEX.ACCESS, _.nd0.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: T.Oy,
                                  children: (0, r.jsx)(f.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(S.t.BQIYTb),
                                      onClick: () => {
                                          v.A.setSection(_.BEX.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    R = () => {
        var e, t, n;
        let s = (0, l.bG)([A.A], () => A.A.getGuild()),
            { canManageGuild: c, isGuildAdmin: u } = (0, l.cf)([j.A], () => ({
                canManageGuild: j.A.can(_.xBc.MANAGE_GUILD, s),
                isGuildAdmin: j.A.can(_.xBc.ADMINISTRATOR, s),
            })),
            g = (0, l.bG)([p.Ay], () => (null != s ? p.Ay.getChannels(s.id) : null)),
            m = i.useMemo(N.fr, []),
            x = !0 !== a.w.get(C);
        if (null == s) return null;
        let h = [];
        null != g &&
            g[p.I6].forEach((e) => {
                let { channel: t } = e;
                t.type === _.rbe.GUILD_TEXT &&
                    h.push({
                        id: t.id,
                        value: t.id,
                        label: (0, b.m1)(t, y.default, O.A, !0),
                    });
            });
        let E = () => {
                if (null == s) return;
                let e = new Set(s.features);
                e.delete(_.GuildFeatures.COMMUNITY),
                    e.delete(_.GuildFeatures.DISCOVERABLE),
                    e.delete(_.GuildFeatures.PREVIEW_ENABLED),
                    v.A.updateGuild({
                        features: e,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            T = (e) => {
                v.A.updateGuild({
                    description: e,
                });
            };
        return (0, r.jsxs)(f.BJc, {
            gap: 24,
            children: [
                (0, r.jsx)(f.Heading, {
                    variant: "heading-lg/semibold",
                    children: S.intl.string(S.t.nRtNqn),
                }),
                x
                    ? (0, r.jsx)(w, {
                          discoveryEnabled: s.features.has(_.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: s.features.has(_.GuildFeatures.GUILD_ONBOARDING),
                          guild: s,
                      })
                    : null,
                (0, r.jsx)(f.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t["otcXP/"]),
                    description: S.intl.string(S.t.BtwmYB),
                    value: null != (e = s.rulesChannelId) ? e : void 0,
                    options: h,
                    onSelectionChange: (e) => {
                        v.A.updateGuild({
                            rulesChannelId: e,
                        });
                    },
                    disabled: !c,
                }),
                (0, r.jsx)(f.cGx, {}),
                (0, r.jsx)(f.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.vAyDGU),
                    description: S.intl.string(S.t.ZFeonu),
                    value: null != (t = s.publicUpdatesChannelId) ? t : void 0,
                    options: h,
                    onSelectionChange: (e) => {
                        v.A.updateGuild({
                            publicUpdatesChannelId: e,
                        });
                    },
                    disabled: !u,
                }),
                (0, r.jsx)(f.cGx, {}),
                (0, r.jsx)(f.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.sMkYE8),
                    description: S.intl.string(S.t.htioQo),
                    value: null != (n = s.safetyAlertsChannelId) ? n : void 0,
                    options: h,
                    onSelectionChange: (e) => {
                        v.A.updateGuild({
                            safetyAlertsChannelId: e,
                        });
                    },
                    disabled: !c,
                }),
                (0, r.jsx)(f.cGx, {}),
                (0, r.jsx)(f.ZiE, {
                    selectionMode: "single",
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.pO60fy),
                    description: S.intl.string(S.t.aIR73T),
                    value: s.preferredLocale,
                    options: m,
                    onSelectionChange: (e) => {
                        v.A.updateGuild({
                            preferredLocale: e,
                        });
                    },
                    disabled: !c,
                }),
                (0, r.jsx)(f.cGx, {}),
                (() => {
                    var e;
                    if (null != s)
                        return (0, r.jsx)(f.fs1, {
                            label: S.intl.string(S.t["RSfm+i"]),
                            description: S.intl.string(S.t["/B6PRw"]),
                            value: null != (e = s.description) ? e : "",
                            placeholder: S.intl.string(S.t.Nvfowl),
                            onChange: T,
                            maxLength: 300,
                            disabled: !c,
                        });
                })(),
                (0, r.jsx)(f.cGx, {}),
                (0, r.jsx)(f.D0$, {
                    label: S.intl.string(S.t.c1BmbC),
                    description: S.intl.string(S.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, r.jsx)(d.m, {
                        text: u ? null : S.intl.string(S.t["pjG+T3"]),
                        "aria-label": u ? void 0 : S.intl.string(S.t["pjG+T3"]),
                        children: (0, r.jsx)(f.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: S.intl.string(S.t.c1BmbC),
                            onClick: () => {
                                s.features.has(_.GuildFeatures.DISCOVERABLE) &&
                                s.features.has(_.GuildFeatures.PARTNERED)
                                    ? (0, o.A)({
                                          title: S.intl.string(S.t.iBnVHc),
                                          subtitle: S.intl.string(S.t["P+Sh8V"]),
                                          confirmText: S.intl.string(S.t["cY+Oob"]),
                                          cancelText: S.intl.string(S.t.oEAioF),
                                          onConfirm: E,
                                      })
                                    : s.features.has(_.GuildFeatures.DISCOVERABLE)
                                      ? (0, o.A)({
                                            title: S.intl.string(S.t.iBnVHc),
                                            subtitle: S.intl.string(S.t["eMx/uZ"]),
                                            confirmText: S.intl.string(S.t["cY+Oob"]),
                                            cancelText: S.intl.string(S.t.oEAioF),
                                            onConfirm: E,
                                        })
                                      : s.features.has(_.GuildFeatures.PARTNERED)
                                        ? (0, o.A)({
                                              title: S.intl.string(S.t.iBnVHc),
                                              subtitle: S.intl.string(S.t.l1wLeX),
                                              confirmText: S.intl.string(S.t["cY+Oob"]),
                                              cancelText: S.intl.string(S.t.oEAioF),
                                              onConfirm: E,
                                          })
                                        : E();
                            },
                            disabled: !u,
                        }),
                    }),
                }),
            ],
        });
    },
    D = () => {
        let e = (0, l.bG)([A.A], () => A.A.getGuild());
        return null == e
            ? null
            : e.features.has(_.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(R, {})
              : (0, r.jsx)(E.A, {
                    guild: e,
                });
    };
