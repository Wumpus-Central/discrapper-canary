n.d(t, {
    X: () => R,
    Z: () => L,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(544891),
    o = n(433517),
    c = n(796027),
    d = n(668339),
    u = n(248514),
    g = n(28664),
    f = n(755721),
    m = n(481060),
    b = n(493773),
    p = n(933557),
    h = n(769654),
    x = n(984933),
    j = n(650774),
    v = n(430824),
    O = n(496675),
    C = n(699516),
    y = n(594174),
    N = n(434404),
    E = n(999382),
    I = n(906512),
    S = n(929834),
    _ = n(981631),
    T = n(388032),
    P = n(156120),
    w = n(922905);
let Z = "dismissedCommunityFeaturesUpsell",
    R = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, a.cj)([E.Z], () => ({
                submitting: E.Z.isSubmitting(),
                guild: E.Z.getGuild(),
                errors: E.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? T.intl.string(T.t["7IrBYt"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(c.Z, {
                submitting: n,
                onReset: () => {
                    null != t && N.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        N.Z.saveGuild(t.id, {
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
    D = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [c, d] = i.useState(!0 === o.K.get(Z)),
            u = (0, a.e7)([j.Z], () => {
                var e;
                return null != (e = j.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [g, p] = i.useState(!1);
        (0, b.ZP)(() => {
            s.tn
                .get({
                    url: _.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    p(e.body.eligible_for_admin_server);
                })
                .catch(() => p(!1));
        });
        let x = (0, a.e7)([v.Z], () => v.Z.getGuild("942897714956472401")),
            O = l.features.has(_.GuildFeatures.COMMUNITY) && u >= 1000 && g && null == x;
        if (t && n && !O) return null;
        let C = async () => {
            try {
                let e = await s.tn.post({
                    url: _.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                N.Z.close(), (0, h.X)(e.body.id);
            } catch (e) {}
        };
        return c && !O
            ? null
            : (0, r.jsxs)("div", {
                  className: P.upsellContainer,
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.upsellContent,
                          children: [
                              (0, r.jsx)("img", {
                                  src: w,
                                  alt: "",
                                  width: 60,
                                  className: P.upsellImage,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(m.Heading, {
                                          variant: "heading-md/semibold",
                                          className: P.upsellHeader,
                                          children: T.intl.string(T.t["pR/Bge"]),
                                      }),
                                      (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          children: T.intl.string(T.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(f.zx, {
                          "aria-label": T.intl.string(T.t.cpT0Cq),
                          look: f.zx.Looks.BLANK,
                          size: f.zx.Sizes.NONE,
                          className: P.upsellClose,
                          onClick: () => {
                              o.K.set(Z, !0), d(!0);
                          },
                          children: (0, r.jsx)(m.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: P.upsellFooter,
                          children: [
                              O &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: P.upsellButton,
                                      children: (0, r.jsx)(m.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: T.intl.string(T.t.iF1Asi),
                                          onClick: C,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: P.upsellButton,
                                        children: (0, r.jsx)(m.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: T.intl.string(T.t["S/Dfid"]),
                                            onClick: () => {
                                                N.Z.setSection(_.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: P.upsellButton,
                                        children: (0, r.jsx)(m.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: T.intl.string(T.t["0kmJdw"]),
                                            onClick: () => {
                                                N.Z.setSection(_.pNK.ACCESS, _.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: P.upsellButton,
                                  children: (0, r.jsx)(m.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(T.t.BQIYTb),
                                      onClick: () => {
                                          N.Z.setSection(_.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    A = () => {
        let e = (0, a.e7)([E.Z], () => E.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([O.Z], () => ({
                canManageGuild: O.Z.can(_.Plq.MANAGE_GUILD, e),
                isGuildAdmin: O.Z.can(_.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([x.ZP], () => (null != e ? x.ZP.getChannels(e.id) : null)),
            c = i.useMemo(S.jb, []),
            f = !0 !== o.K.get(Z);
        if (null == e) return null;
        let b = [];
        null != s &&
            s[x.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === _.d4z.GUILD_TEXT &&
                    b.push({
                        value: t.id,
                        label: (0, p.F6)(t, y.default, C.Z, !0),
                    });
            });
        let h = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(_.GuildFeatures.COMMUNITY),
                    t.delete(_.GuildFeatures.DISCOVERABLE),
                    t.delete(_.GuildFeatures.PREVIEW_ENABLED),
                    N.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            j = (e) => {
                N.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(m.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(m.Heading, {
                    variant: "heading-lg/semibold",
                    children: T.intl.string(T.t.nRtNqn),
                }),
                f
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(_.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(_.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t["otcXP/"]),
                    description: T.intl.string(T.t.BtwmYB),
                    value: e.rulesChannelId,
                    options: b,
                    onChange: (e) => {
                        N.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.vAyDGU),
                    description: T.intl.string(T.t.ZFeonu),
                    value: e.publicUpdatesChannelId,
                    options: b,
                    onChange: (e) => {
                        N.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.sMkYE8),
                    description: T.intl.string(T.t.htioQo),
                    value: e.safetyAlertsChannelId,
                    options: b,
                    onChange: (e) => {
                        N.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.pO60fy),
                    description: T.intl.string(T.t.aIR73T),
                    value: e.preferredLocale,
                    options: c,
                    onChange: (e) => {
                        N.Z.updateGuild({ preferredLocale: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsx)(m.Kx8, {
                            label: T.intl.string(T.t["RSfm+i"]),
                            description: T.intl.string(T.t["/B6PRw"]),
                            value: null != (n = e.description) ? n : "",
                            placeholder: T.intl.string(T.t.Nvfowl),
                            onChange: j,
                            maxLength: l.Us,
                            disabled: !t,
                        });
                })(),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(m.gNt, {
                    label: T.intl.string(T.t.c1BmbC),
                    description: T.intl.string(T.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, r.jsx)(g.u, {
                        text: n ? null : T.intl.string(T.t["pjG+T3"]),
                        "aria-label": n ? void 0 : T.intl.string(T.t["pjG+T3"]),
                        children: (0, r.jsx)(m.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: T.intl.string(T.t.c1BmbC),
                            onClick: () => {
                                e.features.has(_.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(_.GuildFeatures.PARTNERED)
                                    ? (0, u.Z)({
                                          title: T.intl.string(T.t.iBnVHc),
                                          subtitle: T.intl.string(T.t["P+Sh8V"]),
                                          confirmText: T.intl.string(T.t["cY+Oob"]),
                                          cancelText: T.intl.string(T.t.oEAioF),
                                          onConfirm: h,
                                      })
                                    : e.features.has(_.GuildFeatures.DISCOVERABLE)
                                      ? (0, u.Z)({
                                            title: T.intl.string(T.t.iBnVHc),
                                            subtitle: T.intl.string(T.t["eMx/uZ"]),
                                            confirmText: T.intl.string(T.t["cY+Oob"]),
                                            cancelText: T.intl.string(T.t.oEAioF),
                                            onConfirm: h,
                                        })
                                      : e.features.has(_.GuildFeatures.PARTNERED)
                                        ? (0, u.Z)({
                                              title: T.intl.string(T.t.iBnVHc),
                                              subtitle: T.intl.string(T.t.l1wLeX),
                                              confirmText: T.intl.string(T.t["cY+Oob"]),
                                              cancelText: T.intl.string(T.t.oEAioF),
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
    L = () => {
        let e = (0, a.e7)([E.Z], () => E.Z.getGuild());
        return null == e
            ? null
            : e.features.has(_.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(A, {})
              : (0, r.jsx)(I.Z, { guild: e });
    };
